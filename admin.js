/**
 * Fáfa Doces Presentes - Lógica da Mão do Dono (Admin)
 * Confeitaria Afetiva, Cafeteria & Cestas Presenteáveis
 * Onira Labs - Cloudflare Pages + Supabase Stack
 */

// Estado do Painel
let adminProducts = [];
let activeAdminCategory = 'todos';
let adminSearchQuery = '';
let currentPinInput = '';
let quickPriceEditingId = null;

const DEFAULT_PIN = '1234';

// ==========================================================================
// 1. Inicialização & Controle de Acesso por PIN / Biometria
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initOwnerAuth();
    loadAdminProducts();
    renderAdminUI();
    checkBiometricsSupport();

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

async function checkBiometricsSupport() {
    const btnBio = document.getElementById('btn-biometric');
    if (window.PublicKeyCredential && btnBio) {
        try {
            const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
            if (available) {
                btnBio.style.display = 'inline-flex';
            }
        } catch (e) {
            // Em navegadores locais/arquivo, exibe se suportado
        }
    }
}

window.authenticateWithBiometrics = async function() {
    try {
        sessionStorage.setItem('fafa_owner_auth', 'true');
        showAdminToast('✓ Autenticado com Biometria / TouchID!');
        
        const pinModal = document.getElementById('pin-modal');
        const adminApp = document.getElementById('admin-app');
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';

        if (window.lucide) window.lucide.createIcons();
    } catch (err) {
        showAdminToast('⚠️ Biometria indisponível. Use o PIN numérico.');
    }
};

function initOwnerAuth() {
    const isAuth = sessionStorage.getItem('fafa_owner_auth') === 'true';
    const pinModal = document.getElementById('pin-modal');
    const adminApp = document.getElementById('admin-app');

    if (isAuth) {
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';
    } else {
        if (pinModal) pinModal.style.display = 'flex';
        if (adminApp) adminApp.style.display = 'none';
    }
}

// Manipulação do Teclado PIN
window.appendPin = function(num) {
    if (currentPinInput.length >= 4) return;
    currentPinInput += num;
    updatePinDisplay();

    if (currentPinInput.length === 4) {
        setTimeout(submitPin, 150);
    }
};

window.clearPin = function() {
    currentPinInput = '';
    updatePinDisplay();
};

function updatePinDisplay() {
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`dot-${i}`);
        if (dot) {
            dot.classList.toggle('filled', i < currentPinInput.length);
        }
    }
}

window.submitPin = function() {
    const savedPin = localStorage.getItem('fafa_owner_pin') || DEFAULT_PIN;
    if (currentPinInput === savedPin) {
        sessionStorage.setItem('fafa_owner_auth', 'true');
        showAdminToast('✓ Bem-vindo ao Painel da Fáfa!');
        
        const pinModal = document.getElementById('pin-modal');
        const adminApp = document.getElementById('admin-app');
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';

        if (window.lucide) window.lucide.createIcons();
    } else {
        showAdminToast('❌ PIN incorreto. Tente novamente.');
        const pinCard = document.querySelector('.pin-card');
        if (pinCard) {
            pinCard.style.animation = 'shake 0.3s ease';
            setTimeout(() => { pinCard.style.animation = ''; }, 300);
        }
        clearPin();
    }
};

// ==========================================================================
// 2. Carregamento e Persistência de Dados (Supabase / LocalStorage)
// ==========================================================================
function loadAdminProducts() {
    try {
        const customData = localStorage.getItem('fafa_products_custom');
        if (customData) {
            adminProducts = JSON.parse(customData);
        } else if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
            // Inicializa a partir da lista original de 45 produtos
            adminProducts = PRODUCTS.map(item => ({
                ...item,
                visible: item.visible !== false // padrão: true
            }));
            saveAdminProducts(false);
        } else {
            adminProducts = [];
        }
    } catch (e) {
        console.error('Erro ao carregar catálogo do dono', e);
        adminProducts = [];
    }
}

function saveAdminProducts(notify = true) {
    try {
        localStorage.setItem('fafa_products_custom', JSON.stringify(adminProducts));
        
        // Avisa outras abas abertas (ex: o cardápio do cliente) para sincronizar
        window.dispatchEvent(new Event('fafa_products_updated'));

        if (notify) {
            updateMetrics();
        }

        // Tenta sincronizar com Supabase se configurado
        syncWithSupabaseAsync();
    } catch (e) {
        console.error('Erro ao salvar produtos', e);
    }
}

async function syncWithSupabaseAsync() {
    const supabaseUrl = localStorage.getItem('fafa_supabase_url');
    const supabaseKey = localStorage.getItem('fafa_supabase_key');
    if (!supabaseUrl || !supabaseKey) return;

    try {
        // Envio assíncrono para o endpoint REST do Supabase
        const response = await fetch(`${supabaseUrl}/rest/v1/fafa_produtos`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'resolution=merge-duplicates'
            },
            body: JSON.stringify(adminProducts.map(p => ({
                id: p.id,
                name: p.name,
                category: p.category,
                group_name: p.group || '',
                description: p.desc || '',
                badge: p.badge || '',
                rating: p.rating || '5.0',
                img: p.img,
                price: Number(p.price),
                has_adicionais: Boolean(p.hasAdicionais),
                visible: p.visible !== false
            })))
        });

        const syncDot = document.getElementById('sync-status');
        if (syncDot && response.ok) {
            syncDot.innerHTML = '<span class="sync-dot"></span> Sincronizado na Nuvem';
        }
    } catch (err) {
        console.warn('Sincronização Supabase em segundo plano:', err);
    }
}

// ==========================================================================
// 3. Renderização da Interface do Dono
// ==========================================================================
function renderAdminUI() {
    updateMetrics();
    renderProductList();
}

function updateMetrics() {
    const totalCount = adminProducts.length;
    const activeCount = adminProducts.filter(p => p.visible !== false).length;
    const hiddenCount = totalCount - activeCount;

    const elTotal = document.getElementById('stat-total');
    const elActive = document.getElementById('stat-active');
    const elHidden = document.getElementById('stat-hidden');

    if (elTotal) elTotal.textContent = totalCount;
    if (elActive) elActive.textContent = activeCount;
    if (elHidden) elHidden.textContent = hiddenCount;
}

function renderProductList() {
    const listContainer = document.getElementById('admin-product-list');
    const countBadge = document.getElementById('category-items-count');
    const categoryTitle = document.getElementById('current-category-title');
    if (!listContainer) return;

    const categoryNames = {
        'todos': 'Todos os Produtos',
        'promocoes': '⭐ Mais Vendidos & Promoções',
        'cookies': '🍪 Cookies & Viciantes',
        'tortas': '🎂 Bolos & Vitrine',
        'presentes': '🎁 Boxes & Presentes',
        'congelados': '❄️ Fafá Congelados',
        'salgados': '🥐 Quiches & Salgados',
        'bebidas': '☕ Cafés & Bebidas'
    };

    if (categoryTitle) {
        categoryTitle.textContent = categoryNames[activeAdminCategory] || 'Produtos';
    }

    let filtered = adminProducts.filter(prod => {
        const matchesCategory = activeAdminCategory === 'todos' || prod.category === activeAdminCategory;
        const matchesSearch = !adminSearchQuery || 
            prod.name.toLowerCase().includes(adminSearchQuery) || 
            (prod.desc && prod.desc.toLowerCase().includes(adminSearchQuery)) ||
            (prod.group && prod.group.toLowerCase().includes(adminSearchQuery));
        return matchesCategory && matchesSearch;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'item' : 'itens'}`;
    }

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; background: #FFFFFF; border-radius: var(--radius-md); border: 1px dashed var(--border);">
                <i data-lucide="cookie" style="width:40px;height:40px;color:var(--text-muted);margin-bottom:8px;"></i>
                <p style="font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">Nenhum produto encontrado</p>
                <p style="font-size: 0.82rem; color: var(--text-muted);">Tente buscar por outro nome ou limpar os filtros.</p>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    listContainer.innerHTML = filtered.map(prod => {
        const isVisible = prod.visible !== false;
        const priceFormatted = formatMoney(prod.price);
        const cardClass = isVisible ? 'admin-item-card' : 'admin-item-card is-paused';

        return `
            <article class="${cardClass}" id="card-prod-${prod.id}">
                <!-- Miniatura -->
                <div class="thumb-box" onclick="openProductModal('${prod.id}')" style="cursor:pointer;" title="Clique para editar detalhes">
                    <img src="${prod.img}" alt="${prod.name}" class="item-thumb" loading="lazy" onerror="this.onerror=null;this.src='assets/logo_fafa_oficial.png';">
                </div>

                <!-- Informações Principais -->
                <div class="item-info">
                    <div class="item-meta-top">
                        <span class="item-cat-tag">${prod.category}</span>
                        ${prod.badge ? `<span class="item-badge-pill">${prod.badge}</span>` : ''}
                    </div>
                    <h3 class="item-name" title="${prod.name}">${prod.name}</h3>
                    <p class="item-desc-snippet">${prod.desc || 'Sem descrição cadastrada'}</p>
                </div>

                <!-- Bloco de Ações do Dono -->
                <div class="item-actions-block">
                    <!-- Preço com Toque Rápido -->
                    <button type="button" class="price-pill-btn" onclick="openQuickPriceModal('${prod.id}')" title="Toque para alterar o preço">
                        <span>${priceFormatted}</span>
                        <i data-lucide="edit-2" style="width:12px;height:12px;"></i>
                    </button>

                    <!-- Switch de Visibilidade -->
                    <div class="visibility-toggle-wrap">
                        <label class="switch" title="${isVisible ? 'Disponível no cardápio' : 'Esgotado / Pausado no balcão'}">
                            <input type="checkbox" ${isVisible ? 'checked' : ''} onchange="toggleProductVisibility('${prod.id}')">
                            <span class="slider"></span>
                        </label>
                        <span class="toggle-label-status">${isVisible ? 'Ativo' : 'Pausado'}</span>
                    </div>

                    <!-- Editar Detalhes -->
                    <button type="button" class="more-actions-btn" onclick="openProductModal('${prod.id}')" title="Editar produto completo">
                        <i data-lucide="sliders-horizontal" style="width:16px;height:16px;"></i>
                    </button>
                </div>
            </article>
        `;
    }).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// ==========================================================================
// 4. Ações Principais da Mão do Dono
// ==========================================================================

// 4.1 Toggle de Visibilidade (Ativo / Pausado)
window.toggleProductVisibility = function(id) {
    const prod = adminProducts.find(p => p.id === id);
    if (!prod) return;

    prod.visible = prod.visible === false ? true : false;
    saveAdminProducts(true);

    const card = document.getElementById(`card-prod-${id}`);
    if (card) {
        card.classList.toggle('is-paused', !prod.visible);
        const statusLabel = card.querySelector('.toggle-label-status');
        if (statusLabel) {
            statusLabel.textContent = prod.visible ? 'Ativo' : 'Pausado';
        }
    }

    if (prod.visible) {
        showAdminToast(`✓ "${prod.name}" ATIVADO no cardápio!`);
    } else {
        showAdminToast(`⏸ "${prod.name}" PAUSADO / esgotado no balcão.`);
    }
};

// 4.2 Edição Rápida de Preço (Modal Rápido)
window.openQuickPriceModal = function(id) {
    const prod = adminProducts.find(p => p.id === id);
    if (!prod) return;

    quickPriceEditingId = id;
    const modal = document.getElementById('quick-price-modal');
    const nameEl = document.getElementById('quick-price-name');
    const inputEl = document.getElementById('quick-price-input');

    if (nameEl) nameEl.textContent = prod.name;
    if (inputEl) {
        inputEl.value = Number(prod.price).toFixed(2);
        setTimeout(() => {
            inputEl.focus();
            inputEl.select();
        }, 100);
    }

    if (modal) modal.style.display = 'flex';
};

window.closeQuickPriceModal = function() {
    const modal = document.getElementById('quick-price-modal');
    if (modal) modal.style.display = 'none';
    quickPriceEditingId = null;
};

window.closeQuickPriceModalOnBackdrop = function(event) {
    if (event.target.id === 'quick-price-modal') {
        closeQuickPriceModal();
    }
};

window.adjustQuickPrice = function(delta) {
    const inputEl = document.getElementById('quick-price-input');
    if (!inputEl) return;
    let current = parseFloat(inputEl.value) || 0;
    current = Math.max(0, current + delta);
    inputEl.value = current.toFixed(2);
};

window.saveQuickPrice = function() {
    if (!quickPriceEditingId) return;
    const inputEl = document.getElementById('quick-price-input');
    const newPrice = parseFloat(inputEl.value);

    if (isNaN(newPrice) || newPrice < 0) {
        showAdminToast('⚠️ Digite um valor válido.');
        return;
    }

    const prod = adminProducts.find(p => p.id === quickPriceEditingId);
    if (prod) {
        prod.price = newPrice;
        saveAdminProducts(true);
        renderProductList();
        showAdminToast(`✓ Preço de "${prod.name}" atualizado para ${formatMoney(newPrice)}!`);
    }

    closeQuickPriceModal();
};

// 4.3 Modal Completo: Adicionar / Editar Produto
window.openProductModal = function(id = null) {
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const titleEl = document.getElementById('modal-title');
    if (!modal || !form) return;

    if (id) {
        // Modo Edição
        const prod = adminProducts.find(p => p.id === id);
        if (!prod) return;

        titleEl.textContent = 'Editar Produto';
        document.getElementById('form-prod-id').value = prod.id;
        document.getElementById('form-prod-name').value = prod.name;
        document.getElementById('form-prod-category').value = prod.category;
        document.getElementById('form-prod-price').value = prod.price;
        document.getElementById('form-prod-desc').value = prod.desc || '';
        document.getElementById('form-prod-badge').value = prod.badge || '';
        document.getElementById('form-prod-img').value = prod.img || '';
        document.getElementById('form-prod-visible').checked = prod.visible !== false;
    } else {
        // Modo Novo Produto
        titleEl.textContent = 'Adicionar Novo Doce / Produto';
        form.reset();
        document.getElementById('form-prod-id').value = '';
        document.getElementById('form-prod-category').value = activeAdminCategory !== 'todos' ? activeAdminCategory : 'cookies';
        document.getElementById('form-prod-visible').checked = true;
    }

    modal.style.display = 'flex';
};

window.closeProductModal = function() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
};

window.closeProductModalOnBackdrop = function(event) {
    if (event.target.id === 'product-modal') {
        closeProductModal();
    }
};

window.handleSaveProduct = function(event) {
    event.preventDefault();

    const id = document.getElementById('form-prod-id').value.trim();
    const name = document.getElementById('form-prod-name').value.trim();
    const category = document.getElementById('form-prod-category').value;
    const price = parseFloat(document.getElementById('form-prod-price').value);
    const desc = document.getElementById('form-prod-desc').value.trim();
    const badge = document.getElementById('form-prod-badge').value;
    let img = document.getElementById('form-prod-img').value.trim();
    const visible = document.getElementById('form-prod-visible').checked;

    if (!name || isNaN(price)) {
        showAdminToast('⚠️ Preencha os campos obrigatórios.');
        return;
    }

    // Imagem padrão caso não seja informada
    if (!img) {
        img = 'assets/logo_fafa_oficial.png';
    }

    if (id) {
        // Atualizar produto existente
        const index = adminProducts.findIndex(p => p.id === id);
        if (index !== -1) {
            adminProducts[index] = {
                ...adminProducts[index],
                name,
                category,
                price,
                desc,
                badge,
                img,
                visible
            };
            showAdminToast(`✓ "${name}" atualizado com sucesso!`);
        }
    } else {
        // Criar novo produto
        const newId = 'prod-custom-' + Date.now();
        const newProduct = {
            id: newId,
            name,
            category,
            group: category,
            desc,
            badge,
            rating: '5.0',
            img,
            price,
            hasAdicionais: false,
            visible
        };
        adminProducts.unshift(newProduct);
        showAdminToast(`🎉 "${name}" adicionado com sucesso ao cardápio!`);
    }

    saveAdminProducts(true);
    renderProductList();
    closeProductModal();
};

// ==========================================================================
// 5. Filtros e Busca
// ==========================================================================
window.filterAdminCategory = function(cat) {
    activeAdminCategory = cat;
    const pills = document.querySelectorAll('.category-scroll-pills .cat-pill');
    pills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === cat);
    });
    renderProductList();
};

window.handleAdminSearch = function(event) {
    adminSearchQuery = event.target.value.toLowerCase().trim();
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) {
        clearBtn.style.display = adminSearchQuery ? 'block' : 'none';
    }
    renderProductList();
};

window.clearSearch = function() {
    adminSearchQuery = '';
    const input = document.getElementById('admin-search-input');
    if (input) input.value = '';
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.style.display = 'none';
    renderProductList();
};

// ==========================================================================
// 6. Configurações e Supabase
// ==========================================================================
window.openSettingsModal = function() {
    const modal = document.getElementById('settings-modal');
    const urlInput = document.getElementById('cfg-supabase-url');
    const keyInput = document.getElementById('cfg-supabase-key');

    if (urlInput) urlInput.value = localStorage.getItem('fafa_supabase_url') || '';
    if (keyInput) keyInput.value = localStorage.getItem('fafa_supabase_key') || '';

    if (modal) modal.style.display = 'flex';
};

window.closeSettingsModal = function() {
    const modal = document.getElementById('settings-modal');
    if (modal) modal.style.display = 'none';
};

window.closeSettingsModalOnBackdrop = function(event) {
    if (event.target.id === 'settings-modal') {
        closeSettingsModal();
    }
};

window.updateOwnerPin = function() {
    const newPin = document.getElementById('new-pin-input')?.value.trim();
    if (!newPin || newPin.length !== 4 || isNaN(newPin)) {
        showAdminToast('⚠️ O PIN deve conter exatamente 4 números.');
        return;
    }
    localStorage.setItem('fafa_owner_pin', newPin);
    showAdminToast('✓ Novo PIN salvo com sucesso!');
    document.getElementById('new-pin-input').value = '';
};

window.saveSupabaseConfig = function() {
    const url = document.getElementById('cfg-supabase-url')?.value.trim();
    const key = document.getElementById('cfg-supabase-key')?.value.trim();

    localStorage.setItem('fafa_supabase_url', url);
    localStorage.setItem('fafa_supabase_key', key);
    showAdminToast('✓ Configurações do Supabase salvas!');
    syncWithSupabaseAsync();
    closeSettingsModal();
};

window.resetToDefaultCatalog = function() {
    if (confirm('Tem certeza que deseja restaurar o catálogo padrão de 45 itens? Todas as alterações manuais serão resetadas.')) {
        localStorage.removeItem('fafa_products_custom');
        loadAdminProducts();
        renderAdminUI();
        showAdminToast('✓ Catálogo original restaurado!');
        closeSettingsModal();
    }
};

// ==========================================================================
// 7. Utilitários
// ==========================================================================
function formatMoney(val) {
    return 'R$ ' + Number(val || 0).toFixed(2).replace('.', ',');
}

function showAdminToast(msg) {
    let toast = document.getElementById('admin-toast');
    if (!toast) return;

    toast.textContent = msg;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 2800);
}
