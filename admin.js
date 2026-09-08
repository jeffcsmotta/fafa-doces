/**
 * Fafa Doces Presentes - Lógica da Mão do Dono (Admin & Operador)
 * Confeitaria Afetiva, Cafeteria & Cestas Presenteáveis
 * Onira Labs - Engenharia de Negócios Digitais
 */

// Estado do Painel
let adminProducts = [];
let activeAdminCategory = 'todos';
let adminSearchQuery = '';
let currentPinInput = '';
let quickPriceEditingId = null;
let deletingProductId = null;
let currentUserRole = 'admin'; // 'admin' ou 'operator'

const DEFAULT_ADMIN_PIN = '1234';
const DEFAULT_OPERATOR_PIN = '0000';

const DEFAULT_ADMIN_CATEGORIES = [
    { id: 'presentes', name: 'Presentes Incríveis', icon: 'gift' },
    { id: 'tortas', name: 'Pâtisserie do Chef', icon: 'cake' },
    { id: 'pronta-entrega', name: 'Pronta-Entrega & Balcão', icon: 'zap' },
    { id: 'congelados', name: 'Fafa na sua Casa', icon: 'snowflake' },
    { id: 'cookies', name: 'Cookies & Viciantes', icon: 'circle-dot' },
    { id: 'salgados', name: 'Quiches & Salgados', icon: 'croissant' },
    { id: 'bebidas', name: 'Cafés & Bebidas', icon: 'coffee' }
];


// ==========================================================================
// 1. Inicialização & Controle de Acesso por PIN / Biometria
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initOwnerAuth();
    loadAdminCategories();
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
            // Suporte local
        }
    }
}

window.authenticateWithBiometrics = async function() {
    try {
        currentUserRole = 'admin';
        sessionStorage.setItem('fafa_owner_auth', 'true');
        sessionStorage.setItem('fafa_user_role', 'admin');
        showAdminToast('✓ Autenticado como Administrador via Biometria!');
        openAdminApp();
    } catch (err) {
        showAdminToast('⚠️ Biometria indisponível. Digite o PIN numérico.');
    }
};

function initOwnerAuth() {
    const isAuth = sessionStorage.getItem('fafa_owner_auth') === 'true';
    currentUserRole = sessionStorage.getItem('fafa_user_role') || 'admin';
    const pinModal = document.getElementById('pin-modal');
    const adminApp = document.getElementById('admin-app');

    if (isAuth) {
        if (pinModal) pinModal.style.display = 'none';
        if (adminApp) adminApp.style.display = 'block';
        updateRoleUI();
    } else {
        if (pinModal) pinModal.style.display = 'flex';
        if (adminApp) adminApp.style.display = 'none';
        clearPin();
    }
}

function openAdminApp() {
    const pinModal = document.getElementById('pin-modal');
    const adminApp = document.getElementById('admin-app');
    if (pinModal) pinModal.style.display = 'none';
    if (adminApp) adminApp.style.display = 'block';

    updateRoleUI();
    renderAdminUI();

    if (window.lucide) window.lucide.createIcons();
}

function updateRoleUI() {
    const roleText = document.getElementById('current-user-role-text');
    const roleBadge = document.getElementById('current-user-role-badge');
    const isAdmin = currentUserRole === 'admin';

    if (roleText) {
        roleText.textContent = isAdmin ? 'Administrador' : 'Operador (Balcão)';
    }
    if (roleBadge) {
        roleBadge.className = isAdmin ? 'owner-pill role-admin' : 'owner-pill role-operator';
    }

    // Elementos exclusivos de administrador
    document.querySelectorAll('.admin-only-feature').forEach(el => {
        el.style.display = isAdmin ? '' : 'none';
    });
}

window.logoutAdmin = function() {
    sessionStorage.removeItem('fafa_owner_auth');
    sessionStorage.removeItem('fafa_user_role');
    initOwnerAuth();
    showAdminToast('Sessão encerrada com sucesso.');
};

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
    if (currentPinInput === DEFAULT_ADMIN_PIN) {
        currentUserRole = 'admin';
        sessionStorage.setItem('fafa_owner_auth', 'true');
        sessionStorage.setItem('fafa_user_role', 'admin');
        showAdminToast('✓ Bem-vindo, Administrador!');
        openAdminApp();
    } else if (currentPinInput === DEFAULT_OPERATOR_PIN) {
        currentUserRole = 'operator';
        sessionStorage.setItem('fafa_owner_auth', 'true');
        sessionStorage.setItem('fafa_user_role', 'operator');
        showAdminToast('✓ Bem-vindo, Operador do Balcão!');
        openAdminApp();
    } else {
        showAdminToast('❌ PIN incorreto. (Admin: 1234 / Operador: 0000)');
        const pinCard = document.querySelector('.pin-card');
        if (pinCard) {
            pinCard.style.animation = 'shake 0.3s ease';
            setTimeout(() => { pinCard.style.animation = ''; }, 300);
        }
        clearPin();
    }
};

// ==========================================================================
// 2. Categorias Configuráveis Dinâmicas
// ==========================================================================
let adminCategories = [];

function loadAdminCategories() {
    try {
        const custom = localStorage.getItem('fafa_categories_custom');
        if (custom) {
            const parsed = JSON.parse(custom);
            if (Array.isArray(parsed) && parsed.length > 0) {
                adminCategories = parsed.filter(c => c.id !== 'todos' && c.id !== 'destaques');
                return;
            }
        }
    } catch (e) {
        console.warn('Usando categorias padrão', e);
    }
    adminCategories = [...DEFAULT_ADMIN_CATEGORIES];
}

function saveAdminCategories(notify = true) {
    try {
        // Monta lista completa com 'todos' e 'destaques' para o cardápio público
        const fullList = [
            { id: 'todos', name: 'Todos os Itens', icon: 'cookie' },
            { id: 'destaques', name: '⭐ Destaques da Casa', icon: 'sparkles' },
            ...adminCategories
        ];
        localStorage.setItem('fafa_categories_custom', JSON.stringify(fullList));
        window.dispatchEvent(new Event('fafa_categories_updated'));

        if (notify) {
            renderAdminCategoryPills();
            populateCategorySelect();
            renderProductList();
        }
    } catch (e) {
        console.error('Erro ao salvar categorias', e);
    }
}

function renderAdminCategoryPills() {
    const container = document.getElementById('admin-category-pills');
    if (!container) return;

    const hiddenCount = adminProducts.filter(p => p.visible === false).length;

    let html = `
        <button class="cat-pill ${activeAdminCategory === 'todos' ? 'active' : ''}" data-category="todos" onclick="filterAdminCategory('todos')">
            <i data-lucide="grid" style="width:14px;height:14px;"></i>
            <span>Todos os Itens</span>
        </button>
        <button class="cat-pill pill-paused ${activeAdminCategory === 'pausados' ? 'active' : ''}" id="pill-filter-paused" data-category="pausados" onclick="filterAdminCategory('pausados')" style="${hiddenCount > 0 ? 'display:inline-flex;' : 'display:none;'}">
            <i data-lucide="eye-off" style="width:14px;height:14px;"></i>
            <span>Pausados (<span id="paused-count-pill">${hiddenCount}</span>)</span>
        </button>
        <button class="cat-pill ${activeAdminCategory === 'destaques' ? 'active' : ''}" data-category="destaques" onclick="filterAdminCategory('destaques')">
            <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
            <span>⭐ Destaques</span>
        </button>
    `;

    adminCategories.forEach(cat => {
        const isActive = activeAdminCategory === cat.id;
        html += `
            <button class="cat-pill ${isActive ? 'active' : ''}" data-category="${cat.id}" onclick="filterAdminCategory('${cat.id}')">
                <i data-lucide="${cat.icon || 'cookie'}" style="width:14px;height:14px;"></i>
                <span>${cat.name}</span>
            </button>
        `;
    });

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
}

function populateCategorySelect(selectedId = null) {
    const select = document.getElementById('form-prod-category');
    if (!select) return;

    select.innerHTML = adminCategories.map(cat => `
        <option value="${cat.id}" ${selectedId === cat.id ? 'selected' : ''}>${cat.name}</option>
    `).join('');
}

window.openCategoriesModal = function() {
    if (currentUserRole !== 'admin') {
        showAdminToast('⚠️ Apenas o Administrador pode gerenciar categorias.');
        return;
    }
    const modal = document.getElementById('categories-modal');
    if (!modal) return;

    renderCategoryManagerList();
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
};

window.closeCategoriesModal = function() {
    const modal = document.getElementById('categories-modal');
    if (modal) modal.style.display = 'none';
};

window.closeCategoriesModalOnBackdrop = function(e) {
    if (e.target.id === 'categories-modal') {
        closeCategoriesModal();
    }
};

function renderCategoryManagerList() {
    const list = document.getElementById('categories-admin-list');
    if (!list) return;

    list.innerHTML = adminCategories.map(cat => {
        const prodsCount = adminProducts.filter(p => p.category === cat.id).length;
        return `
            <div class="cat-manage-item" style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:#FDFBF9;border:1px solid var(--border);border-radius:var(--radius-sm);margin-bottom:8px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <i data-lucide="${cat.icon || 'cookie'}" style="width:16px;height:16px;color:var(--primary);"></i>
                    <strong style="font-size:0.9rem;color:var(--text-dark);">${cat.name}</strong>
                    <span style="font-size:0.75rem;color:var(--text-muted);background:#EFE4DE;padding:2px 8px;border-radius:10px;">${prodsCount} doces</span>
                </div>
                <div style="display:flex;gap:6px;">
                    <button type="button" class="btn-sug" onclick="window.handleRenameCategory('${cat.id}')" title="Renomear Categoria">
                        <i data-lucide="edit-2" style="width:13px;height:13px;"></i>
                    </button>
                    <button type="button" class="btn-sug" onclick="window.handleDeleteCategory('${cat.id}')" title="Excluir Categoria" style="color:var(--accent-coral);">
                        <i data-lucide="trash-2" style="width:13px;height:13px;"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
}

window.handleCreateCategory = function() {
    const nameInput = document.getElementById('new-cat-name');
    const iconSelect = document.getElementById('new-cat-icon');
    const name = nameInput ? nameInput.value.trim() : '';
    const icon = iconSelect ? iconSelect.value : 'cookie';

    if (!name) {
        showAdminToast('⚠️ Digite um nome para a categoria.');
        return;
    }

    const id = name.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-');

    if (adminCategories.some(c => c.id === id)) {
        showAdminToast('⚠️ Já existe uma categoria similar com este nome.');
        return;
    }

    adminCategories.push({ id, name, icon });
    saveAdminCategories(true);
    if (nameInput) nameInput.value = '';
    renderCategoryManagerList();
    showAdminToast(`✓ Categoria "${name}" adicionada com sucesso!`);
};

window.handleRenameCategory = function(catId) {
    const cat = adminCategories.find(c => c.id === catId);
    if (!cat) return;

    const newName = prompt(`Novo nome para "${cat.name}":`, cat.name);
    if (newName && newName.trim() && newName.trim() !== cat.name) {
        cat.name = newName.trim();
        saveAdminCategories(true);
        renderCategoryManagerList();
        showAdminToast(`✓ Categoria renomeada para "${cat.name}".`);
    }
};

window.handleDeleteCategory = function(catId) {
    const cat = adminCategories.find(c => c.id === catId);
    if (!cat) return;

    const prodsCount = adminProducts.filter(p => p.category === catId).length;
    if (prodsCount > 0) {
        if (!confirm(`A categoria "${cat.name}" possui ${prodsCount} produto(s) vinculado(s). Se você excluir, esses itens continuarão no cardápio na seção geral. Deseja continuar?`)) {
            return;
        }
    } else {
        if (!confirm(`Excluir a categoria "${cat.name}"?`)) return;
    }

    adminCategories = adminCategories.filter(c => c.id !== catId);
    saveAdminCategories(true);
    renderCategoryManagerList();
    showAdminToast(`✓ Categoria "${cat.name}" removida.`);
};

// ==========================================================================
// 3. Configurações da Loja (Delivery vs Somente Catálogo Digital)
// ==========================================================================
window.openStoreConfigModal = function() {
    if (currentUserRole !== 'admin') {
        showAdminToast('⚠️ Apenas o Administrador pode alterar configurações da loja.');
        return;
    }
    const modal = document.getElementById('store-config-modal');
    if (!modal) return;

    const config = getStoreConfig();
    const optDelivery = document.getElementById('mode-opt-delivery');
    const optCatalog = document.getElementById('mode-opt-catalog');
    const scarcityInput = document.getElementById('store-scarcity-label');
    const conciergePhoneInput = document.getElementById('store-concierge-phone');

    if (config.mode === 'catalog') {
        if (optCatalog) optCatalog.checked = true;
    } else {
        if (optDelivery) optDelivery.checked = true;
    }

    if (scarcityInput) {
        scarcityInput.value = config.scarcityLabel || 'Fornada';
    }
    if (conciergePhoneInput) {
        conciergePhoneInput.value = config.conciergePhone || '5554996862169';
    }

    window.updateStoreModeUI();
    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
};

window.closeStoreConfigModal = function() {
    const modal = document.getElementById('store-config-modal');
    if (modal) modal.style.display = 'none';
};

window.closeStoreConfigModalOnBackdrop = function(e) {
    if (e.target.id === 'store-config-modal') {
        closeStoreConfigModal();
    }
};

window.updateStoreModeUI = function() {
    const isCatalog = document.getElementById('mode-opt-catalog')?.checked;
    const cardDel = document.getElementById('mode-card-delivery');
    const cardCat = document.getElementById('mode-card-catalog');

    if (cardDel) {
        cardDel.style.borderColor = !isCatalog ? 'var(--emerald)' : 'var(--border)';
        cardDel.style.background = !isCatalog ? '#F0FDF4' : '#FFFFFF';
    }
    if (cardCat) {
        cardCat.style.borderColor = isCatalog ? 'var(--amber)' : 'var(--border)';
        cardCat.style.background = isCatalog ? '#FFFBEB' : '#FFFFFF';
    }
};

window.saveStoreConfig = function() {
    const isCatalog = document.getElementById('mode-opt-catalog')?.checked;
    const mode = isCatalog ? 'catalog' : 'delivery';
    const scarcityLabel = (document.getElementById('store-scarcity-label')?.value || '').trim() || 'Fornada';
    const conciergePhone = (document.getElementById('store-concierge-phone')?.value || '').replace(/\D/g, '').trim() || '5554996862169';

    const newConfig = { mode, scarcityLabel, conciergePhone };
    localStorage.setItem('fafa_store_config', JSON.stringify(newConfig));
    window.dispatchEvent(new Event('fafa_store_config_updated'));

    closeStoreConfigModal();
    showAdminToast(`✓ Configurações salvas (Rótulo de escassez: "${scarcityLabel}").`);
    renderProductList();
};

// ==========================================================================
// 4. Carregamento e Persistência de Produtos
// ==========================================================================
function loadAdminProducts() {
    try {
        const customData = localStorage.getItem('fafa_products_custom');
        if (customData) {
            const raw = JSON.parse(customData);
            adminProducts = raw.map(p => {
                let name = (p.name || '').replace(/Fafá/g, 'Fafa');
                let desc = (p.desc || '').replace(/Fafá/g, 'Fafa');
                let group = (p.group || '').replace(/Fafá/g, 'Fafa');
                let badge = p.badge || '';
                let isFeatured = p.isFeatured === true || p.destaque === true;

                if (p.category === 'congelados' || badge.includes('Congelados') || badge.includes('na sua Casa') || badge.includes('na Sua Casa') || badge.includes('Fafá')) {
                    badge = 'Fafa na sua Casa ❄️';
                } else if (p.category === 'presentes' || badge.includes('Presente') || badge.includes('Ideal') || badge.includes('Doces Presentes')) {
                    badge = 'Doces Presentes 🎁';
                } else if (p.category === 'tortas' || badge.includes('Pâtisserie') || badge.includes('Patisserie') || badge.includes('Chef')) {
                    badge = 'Pâtisserie do Chef 👑';
                } else if (badge.includes('Mais Vendido') || p.id === 'prod-12314145' || p.id === 'prod-12314146') {
                    badge = 'Mais Vendido ⭐';
                }

                return {
                    ...p,
                    name,
                    desc,
                    group,
                    badge,
                    isFeatured,
                    visible: p.visible !== false
                };
            });
        } else if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
            adminProducts = PRODUCTS.map(item => ({
                ...item,
                isFeatured: item.badge && item.badge.includes('Mais Vendido') ? true : false,
                visible: item.visible !== false
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
        window.dispatchEvent(new Event('fafa_products_updated'));

        if (notify) {
            updateMetrics();
        }
    } catch (e) {
        console.error('Erro ao salvar produtos', e);
    }
}

// ==========================================================================
// 5. Renderização da Interface do Painel
// ==========================================================================
function renderAdminUI() {
    renderAdminCategoryPills();
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

    const pausedPill = document.getElementById('pill-filter-paused');
    const pausedCountSpan = document.getElementById('paused-count-pill');
    if (pausedCountSpan) pausedCountSpan.textContent = hiddenCount;

    if (pausedPill) {
        if (hiddenCount > 0) {
            pausedPill.style.display = 'inline-flex';
        } else {
            pausedPill.style.display = 'none';
            if (activeAdminCategory === 'pausados') {
                activeAdminCategory = 'todos';
                renderAdminCategoryPills();
            }
        }
    }
}

function renderProductList() {
    const listContainer = document.getElementById('admin-product-list');
    const countBadge = document.getElementById('category-items-count');
    const categoryTitle = document.getElementById('current-category-title');
    if (!listContainer) return;

    const categoryNames = {
        'todos': 'Todos os Produtos',
        'pausados': '⏸️ Itens Pausados & Esgotados',
        'destaques': '⭐ Produtos em Destaque'
    };
    adminCategories.forEach(c => {
        categoryNames[c.id] = c.name;
    });

    if (categoryTitle) {
        categoryTitle.textContent = categoryNames[activeAdminCategory] || 'Produtos';
    }

    let filtered = adminProducts.filter(prod => {
        let matchesCategory = false;
        if (activeAdminCategory === 'todos') {
            matchesCategory = true;
        } else if (activeAdminCategory === 'pausados') {
            matchesCategory = prod.visible === false;
        } else if (activeAdminCategory === 'destaques') {
            matchesCategory = prod.isFeatured === true || prod.destaque === true;
        } else {
            matchesCategory = prod.category === activeAdminCategory;
        }

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
                <p style="font-weight: 700; color: var(--text-dark); margin-bottom: 4px;">Nenhum produto encontrado nesta visualização</p>
                <p style="font-size: 0.82rem; color: var(--text-muted);">Tente buscar por outro nome ou selecionar outra categoria.</p>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    const isAdmin = currentUserRole === 'admin';
    const storeCfg = getStoreConfig();

    listContainer.innerHTML = filtered.map(prod => {
        const isVisible = prod.visible !== false;
        const priceFormatted = formatMoney(prod.price);
        const cardClass = isVisible ? 'admin-item-card' : 'admin-item-card is-paused';
        const isFeatured = prod.isFeatured === true || prod.destaque === true;
        const itemScarcity = prod.scarcityLabel || storeCfg.scarcityLabel || 'Fornada';

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
                        ${isFeatured ? `<span class="item-badge-pill" style="background:#FEF3C7;color:#D97706;border:1px solid #FCD34D;">⭐ Destaque</span>` : ''}
                        ${prod.badge && !isFeatured ? `<span class="item-badge-pill">${prod.badge}</span>` : ''}
                    </div>
                    <h3 class="item-name" title="${prod.name}">${prod.name}</h3>
                    <p class="item-desc-snippet">${prod.desc || 'Sem descrição cadastrada'}</p>
                </div>

                <!-- Bloco de Ações do Dono/Operador -->
                <div class="item-actions-block">
                    <!-- Controle Rápido de Fornada (Escassez) -->
                    <div class="batch-stock-control" title="Estoque de ${itemScarcity} (escassez artesanal)">
                        <span class="stock-label"><i data-lucide="flame" style="width:12px;height:12px;color:var(--accent-coral);"></i> ${itemScarcity}:</span>
                        <button type="button" class="btn-stock-adjust" onclick="window.adjustBatchStock('${prod.id}', -1)" title="Diminuir 1">-</button>
                        <span class="stock-value-badge ${prod.stock === 0 ? 'stock-zero' : (prod.stock !== null && prod.stock !== undefined ? 'has-stock' : 'unlimited')}">
                            ${prod.stock !== null && prod.stock !== undefined ? prod.stock : '∞'}
                        </span>
                        <button type="button" class="btn-stock-adjust" onclick="window.adjustBatchStock('${prod.id}', 1)" title="Aumentar 1">+</button>
                        ${prod.stock !== 0 && prod.stock !== null && prod.stock !== undefined ? `
                            <button type="button" class="btn-stock-zero" onclick="window.setZeroBatchStock('${prod.id}')" title="Esgotar ${itemScarcity.toLowerCase()}">0</button>
                        ` : ''}
                    </div>

                    <!-- Preço com Toque Rápido -->
                    <button type="button" class="price-pill-btn" onclick="openQuickPriceModal('${prod.id}')" title="Toque para alterar o preço">
                        <span>${priceFormatted}</span>
                        <i data-lucide="edit-2" style="width:12px;height:12px;"></i>
                    </button>

                    <!-- Switch de Visibilidade (Balcão) -->
                    <div class="visibility-toggle-wrap">
                        <label class="switch" title="${isVisible ? 'Disponível no cardápio' : 'Esgotado / Pausado no balcão'}">
                            <input type="checkbox" ${isVisible ? 'checked' : ''} onchange="toggleProductVisibility('${prod.id}')">
                            <span class="slider"></span>
                        </label>
                        <span class="toggle-label-status">${isVisible ? 'Ativo' : 'Pausado'}</span>
                    </div>

                    <!-- Editar Detalhes (Admin ou Operador com restrição) -->
                    <button type="button" class="more-actions-btn" onclick="openProductModal('${prod.id}')" title="Editar detalhes">
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
// 6. Ações Operacionais (Visibilidade & Preço Rápido)
// ==========================================================================
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

    if (activeAdminCategory === 'pausados') {
        renderProductList();
    }

    if (prod.visible) {
        showAdminToast(`✓ "${prod.name}" ATIVADO no cardápio!`);
    } else {
        showAdminToast(`⏸ "${prod.name}" PAUSADO / esgotado no balcão.`);
    }
};

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

// ==========================================================================
// 7. Modal Completo: Upload de Foto, Destaque e Exclusão Segura
// ==========================================================================
window.updateFeaturedLabel = function() {
    const chk = document.getElementById('form-prod-featured');
    const lbl = document.getElementById('featured-status-label');
    if (lbl && chk) {
        lbl.textContent = chk.checked ? 'Sim ⭐' : 'Não';
    }
};

window.toggleUnlimitedStock = function(isUnlimited) {
    const stockInput = document.getElementById('form-prod-stock');
    if (stockInput) {
        stockInput.disabled = isUnlimited;
        if (isUnlimited) stockInput.value = '';
    }
};

window.adjustBatchStock = function(id, delta) {
    const index = adminProducts.findIndex(p => p.id === id);
    if (index === -1) return;
    const current = (adminProducts[index].stock !== null && adminProducts[index].stock !== undefined) ? adminProducts[index].stock : 5;
    const next = Math.max(0, current + delta);
    adminProducts[index].stock = next;
    saveAdminProducts(true);
    renderProductList();
    showAdminToast(`🔥 Fornada de "${adminProducts[index].name}": ${next} unid.`);
};

window.setZeroBatchStock = function(id) {
    const index = adminProducts.findIndex(p => p.id === id);
    if (index === -1) return;
    adminProducts[index].stock = 0;
    saveAdminProducts(true);
    renderProductList();
    showAdminToast(`🔒 Fornada de "${adminProducts[index].name}" marcada como ESGOTADA!`);
};

window.handleImageFileUpload = function(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        document.getElementById('form-prod-img').value = dataUrl;
        const previewImg = document.getElementById('form-prod-preview-img');
        if (previewImg) previewImg.src = dataUrl;
        showAdminToast('✓ Imagem carregada com sucesso!');
    };
    reader.readAsDataURL(file);
};

window.handleImageUrlInput = function(event) {
    const url = (event.target.value || '').trim();
    const previewImg = document.getElementById('form-prod-preview-img');
    if (previewImg) {
        previewImg.src = url || 'assets/logo_fafa_oficial.png';
    }
};

window.clearProductPhoto = function() {
    document.getElementById('form-prod-img').value = '';
    const fileInput = document.getElementById('form-prod-file');
    if (fileInput) fileInput.value = '';
    const previewImg = document.getElementById('form-prod-preview-img');
    if (previewImg) previewImg.src = 'assets/logo_fafa_oficial.png';
};

window.openProductModal = function(id = null) {
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const titleEl = document.getElementById('modal-form-title');
    const deleteBtn = document.getElementById('btn-modal-delete-prod');
    const isAdmin = currentUserRole === 'admin';

    if (!modal || !form) return;

    if (!id && !isAdmin) {
        showAdminToast('⚠️ Apenas o Administrador pode cadastrar novos produtos.');
        return;
    }

    populateCategorySelect();

    if (id) {
        // Modo Edição
        const prod = adminProducts.find(p => p.id === id);
        if (!prod) return;

        if (titleEl) titleEl.textContent = 'Editar Detalhes do Produto';
        document.getElementById('form-prod-id').value = prod.id || '';
        document.getElementById('form-prod-name').value = prod.name || '';
        document.getElementById('form-prod-category').value = prod.category || (adminCategories[0]?.id || 'cookies');
        document.getElementById('form-prod-price').value = prod.price || '';
        document.getElementById('form-prod-desc').value = prod.desc || '';
        document.getElementById('form-prod-badge').value = prod.badge || '';
        document.getElementById('form-prod-img').value = prod.img || '';
        document.getElementById('form-prod-visible').checked = prod.visible !== false;

        const hasAdicionaisChk = document.getElementById('form-prod-has-adicionais');
        if (hasAdicionaisChk) {
            hasAdicionaisChk.checked = prod.hasAdicionais !== false;
        }

        const isFeatured = prod.isFeatured === true || prod.destaque === true;
        const featuredCheckbox = document.getElementById('form-prod-featured');
        if (featuredCheckbox) featuredCheckbox.checked = isFeatured;
        window.updateFeaturedLabel();

        const previewImg = document.getElementById('form-prod-preview-img');
        if (previewImg) previewImg.src = prod.img || 'assets/logo_fafa_oficial.png';

        // Carrega estoque da fornada e rótulo customizado
        const stockInput = document.getElementById('form-prod-stock');
        const unlimitedChk = document.getElementById('form-prod-unlimited-stock');
        const scarcityLabelInput = document.getElementById('form-prod-scarcity-label');
        const hasStock = prod.stock !== undefined && prod.stock !== null;
        if (stockInput) {
            stockInput.value = hasStock ? prod.stock : '';
            stockInput.disabled = !hasStock;
        }
        if (unlimitedChk) unlimitedChk.checked = !hasStock;
        if (scarcityLabelInput) scarcityLabelInput.value = prod.scarcityLabel || '';

        // Botão de excluir só aparece se for Admin
        if (deleteBtn) {
            deleteBtn.style.display = isAdmin ? 'inline-flex' : 'none';
        }
    } else {
        // Modo Novo Produto (Admin)
        if (titleEl) titleEl.textContent = 'Cadastrar Novo Doce / Presente';
        form.reset();
        document.getElementById('form-prod-id').value = '';
        document.getElementById('form-prod-category').value = activeAdminCategory !== 'todos' && activeAdminCategory !== 'pausados' && activeAdminCategory !== 'destaques' ? activeAdminCategory : (adminCategories[0]?.id || 'cookies');
        document.getElementById('form-prod-visible').checked = true;
        document.getElementById('form-prod-featured').checked = false;

        const hasAdicionaisChk = document.getElementById('form-prod-has-adicionais');
        if (hasAdicionaisChk) hasAdicionaisChk.checked = true;

        const stockInput = document.getElementById('form-prod-stock');
        const unlimitedChk = document.getElementById('form-prod-unlimited-stock');
        const scarcityLabelInput = document.getElementById('form-prod-scarcity-label');
        if (stockInput) { stockInput.value = '5'; stockInput.disabled = false; }
        if (unlimitedChk) unlimitedChk.checked = false;
        if (scarcityLabelInput) scarcityLabelInput.value = '';

        window.updateFeaturedLabel();
        window.clearProductPhoto();

        if (deleteBtn) deleteBtn.style.display = 'none';
    }

    modal.style.display = 'flex';
    if (window.lucide) window.lucide.createIcons();
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

window.handleProductFormSubmit = function(event) {
    event.preventDefault();

    const id = (document.getElementById('form-prod-id').value || '').trim();
    const name = (document.getElementById('form-prod-name').value || '').trim();
    const category = document.getElementById('form-prod-category').value;
    const price = parseFloat(document.getElementById('form-prod-price').value);
    const desc = (document.getElementById('form-prod-desc').value || '').trim();
    const badge = (document.getElementById('form-prod-badge').value || '').trim();
    let img = (document.getElementById('form-prod-img').value || '').trim();
    const isFeatured = document.getElementById('form-prod-featured').checked;
    const visible = document.getElementById('form-prod-visible').checked;
    const hasAdicionais = document.getElementById('form-prod-has-adicionais')?.checked !== false;

    if (!name || isNaN(price)) {
        showAdminToast('⚠️ Preencha o nome e o preço de venda.');
        return;
    }

    if (!img) {
        img = 'assets/logo_fafa_oficial.png';
    }

    const isUnlimitedStock = document.getElementById('form-prod-unlimited-stock')?.checked;
    const rawStockVal = document.getElementById('form-prod-stock')?.value;
    const stock = isUnlimitedStock || rawStockVal === '' ? null : Math.max(0, parseInt(rawStockVal, 10) || 0);
    const scarcityLabel = (document.getElementById('form-prod-scarcity-label')?.value || '').trim();

    if (id) {
        const index = adminProducts.findIndex(p => p.id === id);
        if (index !== -1) {
            adminProducts[index] = {
                ...adminProducts[index],
                name,
                category,
                price,
                desc,
                badge,
                isFeatured,
                img,
                stock,
                scarcityLabel: scarcityLabel || undefined,
                hasAdicionais,
                visible
            };
            showAdminToast(`✓ "${name}" atualizado com sucesso!`);
        }
    } else {
        const newId = 'prod-custom-' + Date.now();
        const newProduct = {
            id: newId,
            name,
            category,
            group: category,
            desc,
            badge,
            isFeatured,
            rating: '5.0',
            img,
            price,
            stock,
            scarcityLabel: scarcityLabel || undefined,
            hasAdicionais,
            visible
        };
        adminProducts.unshift(newProduct);
        showAdminToast(`🎉 "${name}" adicionado com sucesso ao cardápio!`);
    }

    saveAdminProducts(true);
    renderProductList();
    closeProductModal();
};

// Exclusão Segura de Produtos (Apenas Admin)
window.handleDeleteProductFromModal = function() {
    if (currentUserRole !== 'admin') {
        showAdminToast('⚠️ Apenas o Administrador possui permissão para excluir produtos.');
        return;
    }

    const prodId = document.getElementById('form-prod-id')?.value;
    const prod = adminProducts.find(p => p.id === prodId);
    if (!prod) return;

    deletingProductId = prodId;
    const confirmNameEl = document.getElementById('delete-confirm-prod-name');
    if (confirmNameEl) confirmNameEl.textContent = `"${prod.name}"`;

    const confirmModal = document.getElementById('delete-confirm-modal');
    if (confirmModal) confirmModal.style.display = 'flex';
};

window.closeDeleteConfirmModal = function() {
    const confirmModal = document.getElementById('delete-confirm-modal');
    if (confirmModal) confirmModal.style.display = 'none';
    deletingProductId = null;
};

window.executeDeleteProduct = function() {
    if (!deletingProductId) return;

    const prodIndex = adminProducts.findIndex(p => p.id === deletingProductId);
    if (prodIndex !== -1) {
        const deletedName = adminProducts[prodIndex].name;
        adminProducts.splice(prodIndex, 1);
        saveAdminProducts(true);
        renderProductList();
        showAdminToast(`🗑️ "${deletedName}" foi excluído.`);
    }

    window.closeDeleteConfirmModal();
    window.closeProductModal();
};

// ==========================================================================
// 8. Filtros e Busca
// ==========================================================================
window.filterAdminCategory = function(cat) {
    activeAdminCategory = cat;
    const pills = document.querySelectorAll('#admin-category-pills .cat-pill');
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
// 9. Utilitários
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
