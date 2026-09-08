/**
 * ONIRA.FLY — High-Conversion Digital Channels for Gastronomy
 * Interactive Engine: Case Switcher, Device Toggle & Margin ROI Simulator v3.0
 */

// Casos Reais Anonymizados com diferenciais de interface (Design, Vitrine, Carrinho) e capturas HD
const SHOWCASE_CASES = {
    bebidas: {
        title: "Adega, Cervejas Especiais & Destilados",
        niche: "BEBIDAS & ADEGA EXPRESS",
        domain: "adegabebidasexpress.com.br",
        desc: "Operação de adega e conveniência rápida com foco em reposição de bebidas geladas, packs e destilados nobres. Elimina taxas de aplicativos em compras rotineiras de finais de semana e confraternizações.",
        orders: "+340",
        savings: "R$ 4.650",
        speed: "22s",
        ticket: "R$ 92,00",
        calcOrders: "+340 pedidos",
        calcTicket: "R$ 92,00",
        calcRevenue: "R$ 31.280",
        calcSavings: "R$ 4.650",
        calcRationale: "<strong>Por que 22s de atendimento?</strong> O cliente seleciona o pack ou garrafa em 1 toque na vitrine limpa e envia para o WhatsApp. Sem telas de login ou cadastros lentos.",
        screenshotMobile: "assets/screenshots/montecristo_mobile.jpg",
        pillars: [
            {
                icon: "layout-grid",
                title: "Design Escuro & Foco no Rótulo",
                desc: "Layout limpo que valoriza garrafas e bebidas nobres com foto nítida, volume (mL/L), temperatura e preço imediato."
            },
            {
                icon: "layers",
                title: "Filtros Rápidos & Compra por Pack",
                desc: "Navegação por categorias essenciais (Vinhos, Cervejas, Destilados, Mixers) com alternância rápida entre garrafa avulsa e caixa com desconto."
            },
            {
                icon: "shopping-cart",
                title: "Adição Direta sem Modais Lentos",
                desc: "O cliente adiciona múltiplos itens direto na vitrine em 1 clique. O fechamento envia endereço e pedido mastigado no WhatsApp."
            }
        ]
    },
    delicatessen: {
        title: "Delicatessen, Tortas & Pâtisserie Fina",
        niche: "DELICATESSEN & PÂTISSERIE ARTESANAL",
        domain: "delicatessenedocesnobres.com.br",
        desc: "Ateliê de confeitaria fina, doces artesanais e presentes gourmets. Combina pronta-entrega diária com encomendas antecipadas, preservando a margem integral em produtos de alto valor.",
        orders: "+280",
        savings: "R$ 4.980",
        speed: "32s",
        ticket: "R$ 88,00",
        calcOrders: "+280 pedidos",
        calcTicket: "R$ 88,00",
        calcRevenue: "R$ 24.640",
        calcSavings: "R$ 4.980",
        calcRationale: "<strong>Por que 32s de atendimento?</strong> Vitrine com fotos grandes que despertam desejo imediato. A escolha de caixas de presente e doces finos flui sem atrito até a comanda pronta no WhatsApp.",
        screenshotMobile: "assets/screenshots/fafa_mobile.jpg",
        pillars: [
            {
                icon: "sparkles",
                title: "Design Editorial & Apelo Visual Alto",
                desc: "Tipografia refinada e fotografia de alta resolução que destacam acabamentos artesanais, camadas e recheios, aguçando o desejo imediato."
            },
            {
                icon: "gift",
                title: "Seleção de Caixas & Porcionamento",
                desc: "Interface intuitiva para escolher fatia avulsa, torta inteira ou montar caixas personalizadas de doces finos para presente sem confusão."
            },
            {
                icon: "calendar-clock",
                title: "Carrinho com Agendamento & Dedicatória",
                desc: "Campos dedicados no fechamento para agendar data e horário de retirada/entrega, além de campo para mensagem de cartão de presente."
            }
        ]
    },
    hamburgueria: {
        title: "Hamburgueria, Smash & Lanches Artesanais",
        niche: "HAMBURGUERIA ARTESANAL & SMASH",
        domain: "hamburgueriaburgershop.com.br",
        desc: "Operação de alto giro para noites e finais de semana. A comanda entra mastigada com ponto da carne, queijo e adicionais, eliminando 10 minutos de digitação por cliente no balcão.",
        orders: "+460",
        savings: "R$ 6.420",
        speed: "26s",
        ticket: "R$ 65,00",
        calcOrders: "+460 pedidos",
        calcTicket: "R$ 65,00",
        calcRevenue: "R$ 29.900",
        calcSavings: "R$ 6.420",
        calcRationale: "<strong>Por que 26s de atendimento?</strong> Montagem sequencial com ponto da carne, queijo e adicionais. Em noites de pico, 460 pedidos entram mastigados sem erro de chapa.",
        screenshotMobile: "assets/screenshots/baitakao_mobile.jpg",
        pillars: [
            {
                icon: "flame",
                title: "Layout Compacto & Foco no Produto",
                desc: "Zero banners pesados que empurram o conteúdo para baixo. O cliente já visualiza os hambúrgueres mais pedidos nos primeiros segundos."
            },
            {
                icon: "layers",
                title: "Customização Sequencial sem Confusão",
                desc: "Seleção direta de ponto da carne, molho especial e adicionais (bacon em dobro, queijo extra) com atualização de preço em tempo real."
            },
            {
                icon: "trending-up",
                title: "Upsell Inteligente de Batata & Bebida",
                desc: "Sugestão de porção crocante e refrigerante antes de finalizar, elevando o ticket médio de cada lanche sem sobrecarregar a tela."
            }
        ]
    },
    pizzaria: {
        title: "Forneria, Pizzas Artesanais & Calzones",
        niche: "FORNERIA & PIZZAS NO FORNO A LENHA",
        domain: "forneriapizzasartesanais.com.br",
        desc: "Padrão veloz e direto inspirado na fluidez de hamburguerias: sem banners gigantes ocupando a tela. O cliente escolhe tamanho, divide sabores e adiciona borda no próprio card.",
        orders: "+390",
        savings: "R$ 5.850",
        speed: "30s",
        ticket: "R$ 78,00",
        calcOrders: "+390 pedidos",
        calcTicket: "R$ 78,00",
        calcRevenue: "R$ 30.420",
        calcSavings: "R$ 5.850",
        calcRationale: "<strong>Por que 30s de atendimento?</strong> Meio a meio e bordas selecionados em poucos toques. A comanda chega com os 2 sabores e adicionais prontos para a esteira do forno.",
        screenshotMobile: "assets/screenshots/pizzaria_mobile.jpg",
        pillars: [
            {
                icon: "zap",
                title: "Abertura Direta no Cardápio (Sem Hero Gigante)",
                desc: "Elimina vídeos e banners institucionais pesados: o cliente já cai visualizando as pizzas, carrossel de categorias e botões rápidos."
            },
            {
                icon: "pie-chart",
                title: "Divisão Meio a Meio & Bordas no Card",
                desc: "Seletor fluido de tamanho (M, G, GG), divisão de até 2 sabores sem recarregar e escolha de borda recheada (Catupiry, Cheddar, Vulcão)."
            },
            {
                icon: "receipt",
                title: "Comanda Pronta para a Esteira do Forno",
                desc: "Ao despachar para o WhatsApp, a mensagem chega com a divisão exata dos sabores, borda e adicionais formatados para impressão direta."
            }
        ]
    },
    pastelaria: {
        title: "Pastelaria Artesanal & Crocâncias",
        niche: "PASTELARIA ARTESANAL & TRADIÇÃO",
        domain: "pastelariatradicaocaseira.com.br",
        desc: "Operação tradicional de pastéis doces e salgados com alta recorrência. O cliente escolhe recheios tradicionais ou especiais, tamanho ou combos de mini pastéis sem atrito de cadastro.",
        orders: "+360",
        savings: "R$ 4.750",
        speed: "22s",
        ticket: "R$ 52,00",
        calcOrders: "+360 pedidos",
        calcTicket: "R$ 52,00",
        calcRevenue: "R$ 18.720",
        calcSavings: "R$ 4.750",
        calcRationale: "<strong>Por que 22s de atendimento?</strong> Pills de tamanho e porção no próprio card. O cliente fecha o pedido em 2 toques com endereço pré-salvo no WhatsApp.",
        screenshotMobile: "assets/screenshots/claem_mobile.jpg",
        pillars: [
            {
                icon: "badge-check",
                title: "Identidade Confiável & Tags de Destaque",
                desc: "Visual acolhedor com tags claras (Mais Vendido, Clássico da Casa), foto nítida da crocância da massa e busca rápida por sabor."
            },
            {
                icon: "tag",
                title: "Pills de Tamanho & Porção (P, G, 10un)",
                desc: "Botões de tamanho e quantidade no próprio card, facilitando pedidos individuais de lanche ou caixas com 10 unidades para a família."
            },
            {
                icon: "send",
                title: "Fechamento Instantâneo para WhatsApp",
                desc: "Menos cliques e zero atrito: o pedido entra no WhatsApp com dados de entrega e forma de pagamento já organizados para o balcão."
            }
        ]
    }
};

let currentCaseKey = 'bebidas';

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeroTicker();
    initCaseTabs();
    initRoiSimulator();
    initMomentCards();
    initSmoothScroll();
    renderCase('bebidas');
    if (window.lucide) {
        lucide.createIcons();
    }
});

/**
 * 1. Inicializa as abas de nicho do Showroom
 */
function initCaseTabs() {
    const tabButtons = document.querySelectorAll('.case-tab');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const caseKey = btn.getAttribute('data-case');
            if (caseKey && SHOWCASE_CASES[caseKey]) {
                tabButtons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                renderCase(caseKey);
            }
        });
    });
}

/**
 * Renderiza o case selecionado nos mockups e cards
 */
function renderCase(caseKey) {
    const data = SHOWCASE_CASES[caseKey];
    if (!data) return;

    currentCaseKey = caseKey;

    // Atualiza Textos e Badges
    const badgeEl = document.getElementById('case-niche-badge');
    const domainTagEl = document.getElementById('case-domain-tag');
    const titleEl = document.getElementById('case-intel-title');
    const descEl = document.getElementById('case-intel-desc');
    const speedEl = document.getElementById('metric-speed');

    const phoneUrlEl = document.getElementById('phone-case-url');
    const deskUrlEl = document.getElementById('desktop-case-url');

    if (badgeEl) badgeEl.textContent = data.niche;
    if (domainTagEl) domainTagEl.textContent = data.domain;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (speedEl) speedEl.textContent = data.speed;

    if (phoneUrlEl) phoneUrlEl.textContent = data.domain;
    if (deskUrlEl) deskUrlEl.textContent = `https://${data.domain}`;

    // Atualiza Pilares de Experiência e Diferenciais de Interface (Design, Vitrine, Carrinho)
    const pillarsContainer = document.getElementById('case-pillars-container');
    if (pillarsContainer && Array.isArray(data.pillars)) {
        pillarsContainer.innerHTML = data.pillars.map(p => `
            <div class="pillar-item">
                <div class="pillar-icon"><i data-lucide="${p.icon}"></i></div>
                <div class="pillar-content">
                    <strong>${p.title}</strong>
                    <p>${p.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Atualiza Imagens dos Screenshots
    const imgMobile = document.getElementById('img-case-mobile');

    if (imgMobile) {
        imgMobile.src = data.screenshotMobile;
        const phoneViewport = document.getElementById('phone-case-scroll-viewport');
        if (phoneViewport) phoneViewport.scrollTop = 0;
    }

    if (window.lucide) lucide.createIcons();
}

/**
 * 2. Visualização exclusiva Mobile-First
 */
window.setShowcaseDevice = function (mode) {
    // Modo Mobile exclusivo conforme diretriz de produto
};

/**
 * 3. Simulador de Impacto Financeiro (Faturamento Total Delivery × % Migrado)
 */
function initRoiSimulator() {
    const revenueRange = document.getElementById('sim-revenue-range');
    const migrationRange = document.getElementById('sim-migration-range');

    const revenueDisplay = document.getElementById('sim-revenue-display');
    const migrationDisplay = document.getElementById('sim-migration-display');

    const monthlyCalcEl = document.getElementById('result-monthly-calc');
    const annualCalcEl = document.getElementById('result-annual-calc');
    const scenarioNameEl = document.getElementById('sim-scenario-name');
    const ctaBtn = document.getElementById('sim-cta-whatsapp-btn');
    const momentCards = document.querySelectorAll('.compact-moment-card');

    function calculate() {
        if (!revenueRange || !migrationRange) return;

        const revenue = parseFloat(revenueRange.value) || 50000;
        const migrationPercent = parseFloat(migrationRange.value) || 30;

        // Fórmula no Front-End:
        // Economia Mensal = Faturamento * (% Migrado) * 0.23
        // Economia Anual = Economia Mensal * 12
        const monthlySavings = revenue * (migrationPercent / 100) * 0.23;
        const annualSavings = monthlySavings * 12;

        if (revenueDisplay) {
            revenueDisplay.textContent = formatCurrency(revenue);
        }

        if (migrationDisplay) {
            migrationDisplay.textContent = `${migrationPercent}%`;
        }

        if (monthlyCalcEl) {
            monthlyCalcEl.textContent = formatCurrency(Math.round(monthlySavings));
        }

        if (annualCalcEl) {
            annualCalcEl.textContent = formatCurrency(Math.round(annualSavings));
        }

        // Atualiza o indicador de cenário sincronizado
        if (scenarioNameEl) {
            if (revenue <= 25000) {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Pequena Operação (~R$ 20k)</strong>';
            } else if (revenue >= 75000) {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Operação Consolidada (~R$ 100k)</strong>';
            } else {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Operação Média (~R$ 50k)</strong>';
            }
        }

        // Sincroniza o destaque visual dos cards da esquerda quando a régua é movida
        if (momentCards.length === 3) {
            let targetIdx = 1;
            if (revenue <= 25000) targetIdx = 0;
            else if (revenue >= 75000) targetIdx = 2;
            else targetIdx = 1;

            momentCards.forEach((c, idx) => {
                const isActive = (idx === targetIdx);
                c.classList.toggle('compact-moment-active', isActive);
                c.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });
        }

        // Atualiza a mensagem personalizada do WhatsApp no botão do simulador
        if (ctaBtn) {
            const formattedRev = formatCurrency(revenue);
            const formattedSav = formatCurrency(Math.round(monthlySavings));
            const msg = encodeURIComponent(`Olá Jefferson! Simulei o canal próprio da Fafá Doces no Onira.fly com faturamento de ${formattedRev} e ${migrationPercent}% no canal próprio. Quero garantir os ${formattedSav}/mês de margem limpa no meu caixa!`);
            ctaBtn.href = `https://wa.me/5554996862169?text=${msg}`;
        }
    }

    if (revenueRange) revenueRange.addEventListener('input', calculate);
    if (migrationRange) migrationRange.addEventListener('input', calculate);

    calculate();
}

function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0
    }).format(val);
}

function formatNumber(val) {
    return new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 0
    }).format(val);
}

/**
 * 4. Navegação Suave
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==========================================================================
   HERO TICKER AUTOMÁTICO — ALTERNA MODELOS SUAVEMENTE
   ========================================================================== */

function initHeroTicker() {
    const urlEl = document.getElementById('hero-browser-url');
    const badgeEl = document.getElementById('hero-ticker-badge');
    const imgEl = document.getElementById('hero-phone-case-img');
    const viewportEl = document.getElementById('hero-phone-scroll-viewport');

    const casesList = [
        { key: 'bebidas', domain: 'adegabebidasexpress.com.br', badge: '🍷 Bebidas • ⚡ 0.38s', img: 'assets/screenshots/montecristo_mobile.jpg' },
        { key: 'delicatessen', domain: 'delicatessenedocesnobres.com.br', badge: '🥐 Delicatessen • ⚡ 0.36s', img: 'assets/screenshots/fafa_mobile.jpg' },
        { key: 'hamburgueria', domain: 'hamburgueriaburgershop.com.br', badge: '🍔 Burger • ⚡ 0.35s', img: 'assets/screenshots/baitakao_mobile.jpg' },
        { key: 'pizzaria', domain: 'forneriapizzasartesanais.com.br', badge: '🍕 Forneria & Pizzas • ⚡ 0.39s', img: 'assets/screenshots/pizzaria_mobile.jpg' },
        { key: 'pastelaria', domain: 'pastelariatradicaocaseira.com.br', badge: '🥟 Pastelarias • ⚡ 0.37s', img: 'assets/screenshots/claem_mobile.jpg' }
    ];

    let currentIdx = 0;
    if (!imgEl) return;

    setInterval(() => {
        currentIdx = (currentIdx + 1) % casesList.length;
        const item = casesList[currentIdx];

        imgEl.style.opacity = '0.35';
        imgEl.style.transition = 'opacity 0.35s ease';

        setTimeout(() => {
            imgEl.src = item.img;
            imgEl.alt = `Canal Próprio - ${item.badge}`;
            if (urlEl) urlEl.textContent = item.domain;
            if (badgeEl) badgeEl.textContent = item.badge;
            if (viewportEl) viewportEl.scrollTop = 0;
            imgEl.style.opacity = '1';
        }, 350);
    }, 3200);
}

/* ==========================================================================
   CARDS DE ESTÁGIO DA OPERAÇÃO (SELEÇÃO INTERATIVA + SINCRONIA COM O SIMULADOR)
   ========================================================================== */
function initMomentCards() {
    const momentCards = document.querySelectorAll('.compact-moment-card');
    const revenueRange = document.getElementById('sim-revenue-range');
    const migrationRange = document.getElementById('sim-migration-range');

    if (!momentCards.length) return;

    momentCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        card.addEventListener('click', () => {
            momentCards.forEach(c => c.classList.remove('compact-moment-active'));
            card.classList.add('compact-moment-active');

            if (revenueRange && migrationRange) {
                if (index === 0) {
                    // Pequena Operação: ~20k, 25%
                    revenueRange.value = 20000;
                    migrationRange.value = 25;
                } else if (index === 1) {
                    // Operação Média: ~50k, 35%
                    revenueRange.value = 50000;
                    migrationRange.value = 35;
                } else if (index === 2) {
                    // Operação Consolidada: ~100k, 50%
                    revenueRange.value = 100000;
                    migrationRange.value = 50;
                }

                // Dispara o evento de input para atualizar o simulador visualmente
                revenueRange.dispatchEvent(new Event('input'));
                migrationRange.dispatchEvent(new Event('input'));
            }
        });

        // Suporte a teclado
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}


