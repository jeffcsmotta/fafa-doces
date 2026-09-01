/**
 * Fafa Doces Presentes - Caxias do Sul - RS
 * Cardápio Digital & Sistema de Pedidos Direto no WhatsApp
 * Confeitaria Afetiva, Cafeteria & Cestas Presenteáveis
 * Eleito Melhor Chef Pâtissier 2024 (Sabores do Sul) - Chef Rafael Franzosi
 * Powered by Onira Labs
 */

// WhatsApp Oficial da Fafa Doces Presentes (Verificado via Linktree/Google)
const WHATSAPP_PHONE = '555432011633';
const CHAVE_PIX_OFICIAL = '5432011633'; // Chave Pix Telefone Comercial

// Taxas de Entrega por Bairro em Caxias do Sul
const DELIVERY_ZONES = [
    { neighborhood: 'Rio Branco (Bairro da Loja)', fee: 8.00, time: '30-45 min' },
    { neighborhood: 'Centro', fee: 10.00, time: '35-50 min' },
    { neighborhood: 'São Pelegrino', fee: 10.00, time: '35-50 min' },
    { neighborhood: 'Exposição / Lourdes', fee: 11.00, time: '35-50 min' },
    { neighborhood: 'Panazzolo', fee: 12.00, time: '40-55 min' },
    { neighborhood: 'Sagrada Família', fee: 12.00, time: '40-55 min' },
    { neighborhood: 'Cristo Redentor / Kayser', fee: 12.00, time: '40-55 min' },
    { neighborhood: 'Cruzeiro / Bela Vista', fee: 13.00, time: '40-55 min' },
    { neighborhood: 'Villagio Caxias / Sanvitto', fee: 14.00, time: '40-55 min' },
    { neighborhood: 'Pio X / Santa Catarina', fee: 14.00, time: '45-60 min' },
    { neighborhood: 'Universitário / Interlagos', fee: 14.00, time: '45-60 min' },
    { neighborhood: 'Ana Rech', fee: 22.00, time: '50-70 min' },
    { neighborhood: 'Forqueta', fee: 22.00, time: '50-70 min' },
    { neighborhood: 'Outro Bairro (Caxias do Sul)', fee: 15.00, time: '45-60 min' }
];

// Catálogo Real Extraído da Fafa Doces Presentes (45 Produtos Oficiais com Fotos Reais)
const PRODUCTS = [
    {
        "id": "prod-12314145",
        "name": "Cookie Gotas Chocolate Branco",
        "category": "promocoes",
        "group": "Mais Vendidos",
        "desc": "Cookie tradicional com massa de baunilha e gotas de chocolate branco.",
        "badge": "Mais Vendido ⭐",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314145.jpg",
        "price": 8.5,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314146",
        "name": "Cookie Gotas Chocolate Preto",
        "category": "promocoes",
        "group": "Mais Vendidos",
        "desc": "Cookie tradicional com massa de baunilha e gotas de chocolate ao leite.",
        "badge": "Mais Vendido ⭐",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314146.jpg",
        "price": 8.5,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314158",
        "name": "*PROMO 15* Bolo Vulcão Chocolate 550g",
        "category": "promocoes",
        "group": "Promoção",
        "desc": "Massa fofinha feita com cacau, chocolate meio amargo e cobertura de brigadeiro gourmet.\r\nRendimento de 6 a 8 fatias.\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.\r\nPróximo da data de validade.",
        "badge": "Promoção Especial ⚡",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314158.jpg",
        "price": 35.7,
        "hasAdicionais": false
    },
    {
        "id": "prod-12820845",
        "name": "*PROMO 15* Bolo Laranja 400g (Sem lactose)",
        "category": "promocoes",
        "group": "Promoção",
        "desc": "Massa fofinha de laranja, calda cítrica de laranja.\r\nRendimento de 6 a 8 fatias.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.P",
        "badge": "Promoção Especial ⚡",
        "rating": "5.0",
        "img": "assets/produtos/prod_12820845.jpg",
        "price": 20.4,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552870",
        "name": "Kit 4 Cookies - Tradicional preto",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Cookies congelados no sabor cookie tradicional preto, para você assar e comer quando quiser na sua casa!\r\nÉ possível assar tanto Air Fryer quanto no forno, basta pré-aquecer 180 graus e assar de 10 a 13 minutos.\r\nOs cookies devem ser mantidos no congelador até o momento de colocar na assadeira, e não é necessário achatá-los. Basta dispor os cookies na assadeira com o papel manteiga que será enviado e se deliciar!",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552870.jpg",
        "price": 31.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552873",
        "name": "Kit 4 Cookies - Tradicional branco",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Cookies congelados no sabor cookie tradicional branco, para você assar e comer quando quiser na sua casa!\r\nÉ possível assar tanto Air Fryer quanto no forno, basta pré-aquecer 180 graus e assar de 10 a 13 minutos.\r\nOs cookies devem ser mantidos no congelador até o momento de colocar na assadeira, e não é necessário achatá-los. Basta dispor os cookies na assadeira com o papel manteiga que será enviado e se deliciar!",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552873.jpg",
        "price": 31.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552879",
        "name": "Kit 4 Cookies - Duplo",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Cookies congelados no sabor cookie chocolate duplo que leva gotas de chocolate ao leite, gotas de chocolate meio amargo e nozes, para você assar e comer quando quiser na sua casa!\r\nÉ possível assar tanto Air Fryer quanto no forno, basta pré-aquecer 180 graus e assar de 10 a 13 minutos.\r\nOs cookies devem ser mantidos no congelador até o momento de colocar na assadeira, e não é necessário achatá-los. Basta dispor os cookies na assadeira com o papel manteiga que será enviado e se deliciar!",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552879.jpg",
        "price": 31.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552871",
        "name": "Kit 4 Cookies - Cacau",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Cookies congelados no sabor cookie cacau com chocolate branco assar e comer quando quiser na sua casa!\r\nÉ possível assar tanto Air Fryer quanto no forno, basta pré-aquecer 180 graus e assar de 10 a 13 minutos.\r\nOs cookies devem ser mantidos no congelador até o momento de colocar na assadeira, e não é necessário achatá-los. Basta dispor os cookies na assadeira com o papel manteiga que será enviado e se deliciar!",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552871.jpg",
        "price": 31.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552893",
        "name": "Kit 9 Cookies - Tradicionais preto, branco e cacau",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Cookies congelados no sabores: 3 cookies tradicional preto, 3 cookies tradicional branco, 3 cookies cacau com chocolate branco,  para você assar e comer quando quiser na sua casa!\r\nÉ possível assar tanto Air Fryer quanto no forno, basta pré-aquecer 180 graus e assar de 10 a 13 minutos.\r\nOs cookies devem ser mantidos no congelador até o momento de colocar na assadeira, e não é necessário achatá-los. Basta dispor os cookies na assadeira com o papel manteiga que será enviado e se deliciar!",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552893.jpg",
        "price": 67.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12552897",
        "name": "Quiche Congelada",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "Nossas quiches já assadas para você ter no seu congelador são perfeitas para aquele lanche rápido a tarde ou para servir de entradinha em algum jantar!\r\nProduzidas nos sabores: Marguerita, Lorraine (queijo gruyere e bacon), Quatro queijos, Cebola Caramelizada e Alho poró\r\nConsulte sabores disponíveis",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12552897.jpg",
        "price": 16.5,
        "hasAdicionais": false
    },
    {
        "id": "prod-12746177",
        "name": "Mini Torta Cookie 150g - Nutella",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "A Torta Cookie é uma opção prática para sobremesas e momentos especiais em casa. Ficam prontas em 5 a 10 minutos, com massa macia e recheio cremoso!\r\n\r\nSabores para consultar: Cookie preto e Nutella / Cookie branco e Nutella\r\nConsulte os sabores e tamanhos disponíveis.",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12746177.jpg",
        "price": 25.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12746181",
        "name": "Mini Torta Cookie 150g - Doce de leite",
        "category": "congelados",
        "group": "Fafa na sua casa - Congelados",
        "desc": "A Torta Cookie é uma opção prática para sobremesas e momentos especiais em casa. Ficam prontas em 5 a 10 minutos, com massa macia e recheio cremoso!\r\n\r\nSabores para consultar: Cookie preto e Doce de Leite / Cookie branco e Doce de Leite\r\nConsulte os sabores e tamanhos disponíveis.",
        "badge": "Fafa na Sua Casa ❄️",
        "rating": "5.0",
        "img": "assets/produtos/prod_12746181.jpg",
        "price": 19.9,
        "hasAdicionais": false
    },
    {
        "id": "prod-12809350",
        "name": "Bolo Red Velvet Baby 350g",
        "category": "tortas",
        "group": "Bolos Pequenos",
        "desc": "Massa fofinha de red velvet com toque cítrico e cobertura de cream cheese\r\nRendimento de 4 a 6 fatias.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12809350.jpg",
        "price": 28,
        "hasAdicionais": true
    },
    {
        "id": "prod-12809357",
        "name": "Bolo Vulcão Red Velvet 550g",
        "category": "tortas",
        "group": "Bolos Médios",
        "desc": "Massa fofinha de red velvet com toque cítrico e cobertura de cream cheese\r\nRendimento de 6 a 8 fatias.\r\nNão acompanha sacola de presente.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12809357.jpg",
        "price": 42,
        "hasAdicionais": true
    },
    {
        "id": "prod-12809367",
        "name": "Bolo Cenoura Piscina 750g",
        "category": "tortas",
        "group": "Bolos Grandes",
        "desc": "Massa fofinha de cenoura com brigadeiro chocolate meio amargo gourmet\r\nRendimento de 12 a 15 fatias.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12809367.jpg",
        "price": 56,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314176",
        "name": "Bolo Chocolate Piscina 750g",
        "category": "tortas",
        "group": "Bolos Grandes",
        "desc": "Massa fofinha feita com cacau, chocolate meio amargo e cobertura de brigadeiro gourmet.\r\nRendimento de 12 a 15 fatias.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314176.jpg",
        "price": 56,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314178",
        "name": "Bolo Laranja 750g (Sem Lactose)",
        "category": "tortas",
        "group": "Bolos Grandes",
        "desc": "Massa fofinha de laranja, calda cítrica de laranja.\r\nRendimento de 12 a 15 fatias.\r\n\r\nValidade 5 dias a partir da data de fabricação, data de fabricação pode variar.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314178.jpg",
        "price": 48,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314180",
        "name": "Cookie Gotas Chocolate Preto",
        "category": "cookies",
        "group": "Cookies Tradicionais",
        "desc": "Cookie tradicional com massa de baunilha e gotas de chocolate ao leite.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314180.jpg",
        "price": 8.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314181",
        "name": "Cookie Gotas Chocolate Branco",
        "category": "cookies",
        "group": "Cookies Tradicionais",
        "desc": "Cookie tradicional com massa de baunilha e gotas de chocolate branco.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314181.jpg",
        "price": 8.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314182",
        "name": "Cookie Oreo Gotas Chocolate Branco",
        "category": "cookies",
        "group": "Cookies Tradicionais",
        "desc": "Cookie tradicional com massa de baunilha, biscoito Oreo e gotas de chocolate branco.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314182.jpg",
        "price": 8.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314183",
        "name": "Cookie Cacau Gotas Chocolate Branco",
        "category": "cookies",
        "group": "Cookies Tradicionais",
        "desc": "Cookie tradicional com massa cacau e gotas de chocolate branco.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314183.jpg",
        "price": 8.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12315536",
        "name": "Entremet Banoffee",
        "category": "tortas",
        "group": "Doces de Vitrine",
        "desc": "Cremoso de banana, ganache doce de leite com canela, ganache de baunilha e chocolate branco com crocante",
        "badge": "Pâtisserie Fina 🏆",
        "rating": "5.0",
        "img": "assets/produtos/prod_12315536.jpg",
        "price": 23.9,
        "hasAdicionais": true
    },
    {
        "id": "prod-12315537",
        "name": "Entremet Será que é um Cookie?",
        "category": "tortas",
        "group": "Doces de Vitrine",
        "desc": "Cookie red velvet, creme de cream cheese, geléia de frutas vermelhas, chantily cream cheese e chocolate branco",
        "badge": "Pâtisserie Fina 🏆",
        "rating": "5.0",
        "img": "assets/produtos/prod_12315537.jpg",
        "price": 23.9,
        "hasAdicionais": true
    },
    {
        "id": "prod-12315540",
        "name": "Entremet Doce de Leite, Nozes e Café",
        "category": "tortas",
        "group": "Doces de Vitrine",
        "desc": "Mousse de doce de leite, brownie com nozes, crocante de chocolate meio amargo com nozes e ganache de doce de leite com café",
        "badge": "Pâtisserie Fina 🏆",
        "rating": "5.0",
        "img": "assets/produtos/prod_12315540.jpg",
        "price": 22.9,
        "hasAdicionais": true
    },
    {
        "id": "prod-12315547",
        "name": "Mil Folhas Baunilha",
        "category": "tortas",
        "group": "Doces de Vitrine",
        "desc": "Massa folhada crocante 100% artesanal, recheio de mousseline de baunilha.\r\n***A partir das 13:30",
        "badge": "Pâtisserie Fina 🏆",
        "rating": "5.0",
        "img": "assets/produtos/prod_12315547.jpg",
        "price": 18.9,
        "hasAdicionais": true
    },
    {
        "id": "prod-12315548",
        "name": "Mil Folhas Baunilha e Doce de Leite",
        "category": "tortas",
        "group": "Doces de Vitrine",
        "desc": "Massa folhada crocante 100% artesanal, recheio de mousseline de baunilha e doce de leite.\r\n***A partir das 13:30",
        "badge": "Pâtisserie Fina 🏆",
        "rating": "5.0",
        "img": "assets/produtos/prod_12315548.jpg",
        "price": 18.9,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314195",
        "name": "Brownie tradicional",
        "category": "cookies",
        "group": "Viciantes",
        "desc": "Brownie tradicional de chocolate meio amargo.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314195.jpg",
        "price": 10,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314196",
        "name": "Brownie Nutella",
        "category": "cookies",
        "group": "Viciantes",
        "desc": "Brownie coberto de Nutella e avelãs.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314196.jpg",
        "price": 11.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12832989",
        "name": "Crocante Cookies Chocolate Meio Amargo e Chocolate Branco",
        "category": "cookies",
        "group": "Viciantes",
        "desc": "Pedaços de cookies super crocantes banhados em chocolate nobre meio amargo e chocolate branco.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12832989.jpg",
        "price": 22,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314200",
        "name": "Sacola de presente",
        "category": "presentes",
        "group": "Presentes",
        "desc": "Sacola presente Fafa - Só é necessário adicionar para itens que não estão na categoria presentes (Bolos, cookies avulsos)",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314200.jpg",
        "price": 5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314201",
        "name": "Mensagem",
        "category": "presentes",
        "group": "Presentes",
        "desc": "Adicione O Texto Da Mensagem Nas Observações Do Pedido",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314201.jpg",
        "price": 1.5,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314203",
        "name": "Box Bolo Embalagem Presente",
        "category": "presentes",
        "group": "Presentes",
        "desc": "Box bolo na embalgem de presente, bolo pequeno 350g.\r\nJá acompanha sacola de presente",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314203.jpg",
        "price": 42,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314205",
        "name": "Box 4 Cookies",
        "category": "presentes",
        "group": "Presentes",
        "desc": "4 Cookies sabor do Dia, cookies tradicionais.\r\nJá acompanha sacola de presente",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314205.jpg",
        "price": 38,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314206",
        "name": "Box 6 Cookies",
        "category": "presentes",
        "group": "Presentes",
        "desc": "6 Cookies sabor do Dia, sabores tradicionais.\r\nJá acompanha sacola de presente",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314206.jpg",
        "price": 54,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314210",
        "name": "Mini Experiencia Fafa",
        "category": "presentes",
        "group": "Presentes",
        "desc": "1 Mini bolo 120g.\r\n3 Cookies sabor do Dia.\r\n1 Brownie sabor do Dia.",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314210.jpg",
        "price": 64,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314211",
        "name": "Experiência Fafa",
        "category": "presentes",
        "group": "Presentes",
        "desc": "1 Bolo do Dia 350g. \r\n7 Cookies sabor do Dia.",
        "badge": "Presente Afetivo 🎁",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314211.jpg",
        "price": 99,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314212",
        "name": "Quiche Marguerita",
        "category": "salgados",
        "group": "Salgados",
        "desc": "Tomate cereja, manjericão, queijo mussarela e queijo parmesão.\r\nEsse item vai aquecido.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314212.jpg",
        "price": 18,
        "hasAdicionais": true
    },
    {
        "id": "prod-12823757",
        "name": "Quiche Frango",
        "category": "salgados",
        "group": "Salgados",
        "desc": "Recheio a base de ovos, creme de leite fresco, queijo parmesão, cream cheese e frango desfiado\r\nEsse item vai aquecido.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12823757.jpg",
        "price": 18,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314214",
        "name": "Quiche Alho Poró",
        "category": "salgados",
        "group": "Salgados",
        "desc": "Queijo Parmessão e Queijo Mussarela com Alho Poró.\r\nEsse item vai aquecido.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314214.jpg",
        "price": 18,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314216",
        "name": "Quiche Lorraine",
        "category": "salgados",
        "group": "Salgados",
        "desc": "Bacon e queijo gruyere.\r\nEsse item vai aquecido.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314216.jpg",
        "price": 18,
        "hasAdicionais": true
    },
    {
        "id": "prod-12314219",
        "name": "Drip Coffee - Coffee ++",
        "category": "bebidas",
        "group": "Bebidas",
        "desc": "O Drip Coffee é uma café pronto super prático que basa esquentar água e passar seu café na própria xícara.\n\nCoffee++ é um café que possui pontuação acima de 84 pontos e é considerado intensidade 8. O Clássico tem a delicadeza do chocolate ao leite e notas sensoriais de doce de leite e frutas secas.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314219.jpg",
        "price": 8,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314220",
        "name": "Suco Laranja Natural - Essere",
        "category": "bebidas",
        "group": "Bebidas",
        "desc": "Suco Laranja Natural - Essere preparado artesanalmente com ingredientes nobres.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314220.jpg",
        "price": 14,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314221",
        "name": "Suco Uva Natural - Essere",
        "category": "bebidas",
        "group": "Bebidas",
        "desc": "Suco Uva Natural - Essere preparado artesanalmente com ingredientes nobres.",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314221.jpg",
        "price": 14,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314222",
        "name": "Coca-Cola Original",
        "category": "bebidas",
        "group": "Bebidas",
        "desc": "Lata",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314222.jpg",
        "price": 8,
        "hasAdicionais": false
    },
    {
        "id": "prod-12314223",
        "name": "Refrigerante Coca Cola Lata Zero",
        "category": "bebidas",
        "group": "Bebidas",
        "desc": "Lata",
        "badge": "",
        "rating": "5.0",
        "img": "assets/produtos/prod_12314223.jpg",
        "price": 8,
        "hasAdicionais": false
    }
];

// Opcionais e Mimos Especiais
const ADDON_OPTIONS = [
    { id: 'ad-cartao', name: '💌 Mensagem Dedicatória Escrita à Mão', price: 1.50 },
    { id: 'ad-sacola', name: '🛍️ Sacola de Presente Especial da Fafa', price: 5.00 },
    { id: 'ad-aquecer', name: '🔥 Enviar Quentinho para Consumo Imediato', price: 0.00 }
];

// Estado da Aplicação
let cart = [];
let selectedDeliveryType = 'delivery'; // 'delivery' ou 'pickup'
let selectedPaymentMethod = 'pix'; // 'pix', 'cartao', 'dinheiro'
let selectedZone = DELIVERY_ZONES[0];
let activeCategory = 'todos';
let searchQuery = '';
let currentModalProduct = null;

// Conceitos e Atmosferas Afetivas de Cada Categoria
const CATEGORY_CONCEPTS = {
    'todos': {
        title: 'Cardápio Completo',
        desc: 'Cardápio artesanal completo da Fafa Doces Presentes. Escolha seus favoritos para entrega rápida ou retirada no balcão.'
    },
    'presentes': {
        title: '🎁 Doces Presentes & Boxes',
        desc: 'Caixas exclusivas e mimos montados com elegância para presentear quem você ama, prontas para encantar.'
    },
    'tortas': {
        title: '🎂 Pâtisserie do Chef & Vitrine',
        desc: 'Criações autorais e entremets premiados do Chef Rafael Franzosi, preparados com técnica clássica francesa e ingredientes nobres.'
    },
    'cookies': {
        title: '🍪 Cookies & Viciantes',
        desc: 'Massa artesanal de baunilha com pedaços generosos de chocolate nobre, assados diariamente com casquinha crocante e centro macio.'
    },
    'promocoes': {
        title: '⚡ Receitas Relâmpago & Promoções',
        desc: 'Sabores sazonais, receitas relâmpago e combinações especiais da semana para aproveitar agora.'
    },
    'congelados': {
        title: '❄️ Fafa na sua Casa (Congelados)',
        desc: 'Nossas massas de cookies e quiches artesanais congeladas para você assar no forno ou Air Fryer e sentir o aroma de confeitaria em casa.'
    },
    'salgados': {
        title: '🥐 Quiches & Salgados Folhados',
        desc: 'Massas folhadas e quiches de fermentação lenta com queijos selecionados, ideais para o café da tarde ou lanches especiais.'
    },
    'bebidas': {
        title: '☕ Cafés & Bebidas Especiais',
        desc: 'Bebidas quentes e refrescantes preparadas para harmonizar perfeitamente com nossos doces.'
    }
};

// Classe Cromática da Badge de Acordo com a Categoria
function getBadgeClass(badgeText) {
    if (!badgeText) return '';
    if (badgeText.includes('Doces Presentes') || badgeText.includes('Presente') || badgeText.includes('Ideal')) return 'badge-doces-presentes';
    if (badgeText.includes('Pâtisserie') || badgeText.includes('Patisserie') || badgeText.includes('Chef')) return 'badge-patisserie-chef';
    if (badgeText.includes('Fafa na sua Casa') || badgeText.includes('Congelados')) return 'badge-fafa-casa';
    if (badgeText.includes('Receita Relâmpago') || badgeText.includes('Promoção')) return 'badge-relampago';
    if (badgeText.includes('Mais Vendido')) return 'badge-mais-vendido';
    return '';
}

// Normalização & Migração de Badges para a Nova Taxonomia
function sanitizeProductList(list) {
    if (!Array.isArray(list)) return PRODUCTS;
    return list.map(p => {
        let name = (p.name || '').replace(/Fafá/g, 'Fafa');
        let desc = (p.desc || '').replace(/Fafá/g, 'Fafa');
        let group = (p.group || '').replace(/Fafá/g, 'Fafa');
        let badge = p.badge || '';

        // Migração e padronização inteligente de selos
        if (p.category === 'congelados' || badge.includes('Congelados') || badge.includes('na sua Casa') || badge.includes('na Sua Casa') || badge.includes('Fafá')) {
            badge = 'Fafa na sua Casa ❄️';
        } else if (p.category === 'presentes' || badge.includes('Presente') || badge.includes('Ideal') || badge.includes('Doces Presentes')) {
            badge = 'Doces Presentes 🎁';
        } else if (p.category === 'tortas' || badge.includes('Pâtisserie') || badge.includes('Patisserie') || badge.includes('Chef')) {
            badge = 'Pâtisserie do Chef 👑';
        } else if (p.category === 'promocoes' || name.startsWith('*PROMO') || badge.includes('Promoção') || badge.includes('Relâmpago')) {
            badge = 'Receita Relâmpago ⚡';
        } else if (badge.includes('Mais Vendido') || p.id === 'prod-12314145' || p.id === 'prod-12314146') {
            badge = 'Mais Vendido ⭐';
        }

        return {
            ...p,
            name,
            desc,
            group,
            badge
        };
    });
}

// Obter Lista de Produtos Atualizada (Sincronizada com Painel do Dono)
function getLiveProducts() {
    try {
        const custom = localStorage.getItem('fafa_products_custom');
        if (custom) {
            const parsed = JSON.parse(custom);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return sanitizeProductList(parsed);
            }
        }
    } catch (e) {
        console.warn('Usando catálogo padrão embutido', e);
    }
    return sanitizeProductList(PRODUCTS);
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCategories();
    renderProducts();
    updateCartUI();
    initStoreStatus();
    initProposalFloatingWidget();

    // Sincronização em Tempo Real quando o Dono altera preços ou visibilidade
    window.addEventListener('fafa_products_updated', () => {
        renderProducts();
    });
    window.addEventListener('storage', (e) => {
        if (e.key === 'fafa_products_custom') {
            renderProducts();
        }
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Checagem de Horário de Funcionamento em Tempo Real
function initStoreStatus() {
    const statusTextEl = document.getElementById('store-status-text');
    const statusDotEl = document.querySelector('.status-dot');
    if (!statusTextEl) return;

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
    const currentTime = hour * 60 + min;

    let isOpen = false;
    let scheduleText = 'Fechado • Abre às 10:00';

    if (day === 1) {
        if (currentTime >= 13 * 60 + 30 && currentTime <= 18 * 60 + 30) {
            isOpen = true;
            scheduleText = 'Aberto Agora • até 18:30';
        } else {
            scheduleText = 'Fechado • Segunda das 13:30 às 18:30';
        }
    } else if (day >= 2 && day <= 5) {
        const morningOpen = 10 * 60;
        const morningClose = 12 * 60;
        const afternoonOpen = 13 * 60 + 30;
        const afternoonClose = 18 * 60 + 30;

        if ((currentTime >= morningOpen && currentTime <= morningClose) || (currentTime >= afternoonOpen && currentTime <= afternoonClose)) {
            isOpen = true;
            scheduleText = 'Aberto Agora • até 18:30';
        } else {
            scheduleText = 'Fechado • Ter a Sex: 10h-12h e 13h30-18h30';
        }
    } else if (day === 6) {
        const morningOpen = 9 * 60;
        const morningClose = 12 * 60;
        const afternoonOpen = 13 * 60 + 30;
        const afternoonClose = 17 * 60;

        if ((currentTime >= morningOpen && currentTime <= morningClose) || (currentTime >= afternoonOpen && currentTime <= afternoonClose)) {
            isOpen = true;
            scheduleText = 'Aberto Agora • até 17:00';
        } else {
            scheduleText = 'Fechado • Sábados: 09h-12h e 13h30-17h';
        }
    } else {
        scheduleText = 'Fechado aos Domingos • Abre Seg 13:30';
    }

    statusTextEl.textContent = scheduleText;
    if (statusDotEl) {
        statusDotEl.style.backgroundColor = isOpen ? '#10B981' : '#F59E0B';
    }
}

// Renderizar Categorias de Produtos
function renderCategories() {
    const categoryButtons = document.querySelectorAll('.cat-pill, .nav-category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category || 'todos';
            renderProducts();
        });
    });
}

// Manipulador de Seleção de Categoria Global
window.filterCategory = function(cat) {
    activeCategory = cat;
    const categoryButtons = document.querySelectorAll('.cat-pill, .nav-category-btn');
    categoryButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === cat);
    });
    renderProducts();
};

// Manipulador da Barra de Busca
window.handleSearch = function(event) {
    searchQuery = event.target.value.toLowerCase().trim();
    renderProducts();
};

// Renderizar Lista de Produtos no Grid e Atualizar Banner de Atmosfera
function renderProducts() {
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogGrid) return;

    const allProducts = getLiveProducts();

    let filtered = allProducts.filter(prod => {
        // Se o produto foi ocultado / pausado pelo dono, não exibe no cardápio público
        if (prod.visible === false) return false;

        const matchesCategory = activeCategory === 'todos' || prod.category === activeCategory;
        const matchesSearch = !searchQuery || 
            prod.name.toLowerCase().includes(searchQuery) || 
            (prod.desc && prod.desc.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
    });

    // Atualiza o Banner de Conceito da Categoria Ativa
    const conceptInfo = CATEGORY_CONCEPTS[activeCategory] || CATEGORY_CONCEPTS['todos'];
    const titleEl = document.getElementById('current-category-name');
    const descEl = document.getElementById('category-concept-desc');
    const countEl = document.getElementById('products-count-badge');

    if (titleEl) titleEl.innerHTML = searchQuery ? `Busca: "${searchQuery}"` : conceptInfo.title;
    if (descEl) descEl.textContent = searchQuery ? `Mostrando produtos que correspondem ao termo "${searchQuery}".` : conceptInfo.desc;
    if (countEl) countEl.textContent = `${filtered.length} ${filtered.length === 1 ? 'opção' : 'opções artesanais'}`;

    if (filtered.length === 0) {
        catalogGrid.innerHTML = `
            <div class="empty-catalog-msg">
                <i data-lucide="cookie" style="width:48px;height:48px;color:var(--text-muted);"></i>
                <p>Nenhum item encontrado para essa busca.</p>
                <button class="btn-clean-filter" onclick="resetFilters()">Ver todos os doces</button>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
        return;
    }

    catalogGrid.innerHTML = filtered.map(prod => {
        const priceFormatted = formatCurrency(prod.price);
        const badgeClass = getBadgeClass(prod.badge);

        return `
            <article class="menu-card" data-id="${prod.id}">
                <div class="card-img-box" onclick="window.openProductModal('${prod.id}')">
                    <img src="${prod.img}" alt="${prod.name}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80';">
                    ${prod.badge ? `<span class="card-badge ${badgeClass}">${prod.badge}</span>` : ''}
                    <div class="card-rating">
                        <i data-lucide="star" style="width:12px;height:12px;fill:#F59E0B;stroke:none;"></i> ${prod.rating || '5.0'}
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-title-row" onclick="window.openProductModal('${prod.id}')">
                        <h3 class="card-title">${prod.name}</h3>
                    </div>
                    <p class="card-desc" onclick="window.openProductModal('${prod.id}')">${prod.desc || ''}</p>
                    <div class="card-bottom">
                        <div class="card-price-block" onclick="window.openProductModal('${prod.id}')">
                            <span class="price-label">Valor:</span>
                            <span class="price-value">${priceFormatted}</span>
                        </div>
                        <button type="button" class="btn-add-item" onclick="window.openProductModal('${prod.id}')" aria-label="Adicionar ${prod.name}">
                            <i data-lucide="plus" style="width:16px;height:16px;"></i>
                            <span>Pedir</span>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Resetar filtros de busca
window.resetFilters = function() {
    activeCategory = 'todos';
    searchQuery = '';
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.value = '';
    const categoryButtons = document.querySelectorAll('.cat-pill, .nav-category-btn');
    categoryButtons.forEach(b => {
        b.classList.toggle('active', b.dataset.category === 'todos');
    });
    renderProducts();
};

// Modal de Detalhes do Produto
window.openProductModal = function(productId) {
    const allProducts = getLiveProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    currentModalProduct = product;
    const modalEl = document.getElementById('product-modal');
    if (!modalEl) return;

    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-desc').textContent = product.desc;
    document.getElementById('modal-badge').textContent = product.badge || 'Confeitaria Artesanal';

    // Renderizar Tamanhos/Opções
    const sizesContainer = document.getElementById('modal-sizes-list');
    if (sizesContainer) {
        sizesContainer.innerHTML = `
            <label class="size-option-label selected">
                <input type="radio" name="modal-size" value="Porção / Item Padrão" data-price="${product.price}" checked onchange="updateModalTotal()">
                <span class="size-name">Porção / Item Padrão</span>
                <span class="size-price">${formatCurrency(product.price)}</span>
            </label>
        `;
    }

    // Renderizar Opcionais/Adicionais
    const addonsContainer = document.getElementById('modal-addons-list');
    if (addonsContainer) {
        if (product.hasAdicionais) {
            addonsContainer.innerHTML = ADDON_OPTIONS.map(ad => `
                <label class="addon-option-label">
                    <input type="checkbox" class="addon-checkbox" value="${ad.name}" data-price="${ad.price}" onchange="updateModalTotal()">
                    <span class="addon-name">${ad.name}</span>
                    <span class="addon-price">${ad.price > 0 ? '+ ' + formatCurrency(ad.price) : 'Grátis'}</span>
                </label>
            `).join('');
        } else {
            addonsContainer.innerHTML = `<p class="text-muted-sm" style="color:var(--text-muted);font-size:0.8rem;">Item pronto para envio.</p>`;
        }
    }

    // Observações
    const obsInput = document.getElementById('modal-obs');
    if (obsInput) obsInput.value = '';

    // Quantidade
    document.getElementById('modal-qty').textContent = '1';

    updateModalTotal();
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
};

window.closeProductModal = function() {
    const modalEl = document.getElementById('product-modal');
    if (modalEl) {
        modalEl.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.changeModalQty = function(delta) {
    const qtyEl = document.getElementById('modal-qty');
    if (!qtyEl) return;
    let qty = parseInt(qtyEl.textContent) || 1;
    qty = Math.max(1, qty + delta);
    qtyEl.textContent = qty;
    updateModalTotal();
};

function updateModalTotal() {
    const qty = parseInt(document.getElementById('modal-qty')?.textContent) || 1;
    const basePrice = currentModalProduct?.price || 0;

    let addonsTotal = 0;
    const checkedAddons = document.querySelectorAll('.addon-checkbox:checked');
    checkedAddons.forEach(cb => {
        addonsTotal += parseFloat(cb.dataset.price) || 0;
    });

    const total = (basePrice + addonsTotal) * qty;
    const totalBtn = document.getElementById('modal-add-btn');
    if (totalBtn) {
        totalBtn.innerHTML = `<span>Adicionar ao Pedido</span> <strong class="modal-price-pill">${formatCurrency(total)}</strong>`;
    }
}

// Confirmar e Adicionar Item ao Carrinho
window.confirmAddModalToCart = function() {
    if (!currentModalProduct) return;

    const qty = parseInt(document.getElementById('modal-qty')?.textContent) || 1;
    const basePrice = currentModalProduct.price;

    const addons = [];
    let addonsPrice = 0;
    document.querySelectorAll('.addon-checkbox:checked').forEach(cb => {
        addons.push(cb.value);
        addonsPrice += parseFloat(cb.dataset.price) || 0;
    });

    const observations = document.getElementById('modal-obs')?.value.trim() || '';

    const cartItem = {
        cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        productId: currentModalProduct.id,
        name: currentModalProduct.name,
        sizeName: 'Padrão',
        unitPrice: basePrice + addonsPrice,
        qty: qty,
        addons: addons,
        observations: observations,
        img: currentModalProduct.img
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartUI();
    closeProductModal();

    showToast(`✓ ${qty}x ${currentModalProduct.name} adicionado!`);
};

// Adição Rápida de Upsell (1 Toque)
window.addQuickUpsell = function(productId) {
    const allProducts = getLiveProducts();
    const product = allProducts.find(p => p.id === productId || p.id === 'prod-' + productId);
    if (!product) return;

    const cartItem = {
        cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        productId: product.id,
        name: product.name,
        sizeName: 'Padrão',
        unitPrice: product.price,
        qty: 1,
        addons: [],
        observations: '⚡ Adicionado via Sugestão Especial',
        img: product.img
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartUI();
    showToast(`✓ 1x ${product.name} adicionado ao pedido!`);
};

// Gerenciamento do Carrinho
window.openCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Limpeza de Carrinho com Modal Customizado
window.clearCart = function() {
    if (cart.length === 0) return;
    const modal = document.getElementById('confirm-clear-modal');
    if (modal) {
        modal.classList.add('active');
        if (window.lucide) window.lucide.createIcons();
    } else {
        cart = [];
        saveCartToStorage();
        updateCartUI();
        showToast('Carrinho limpo.');
    }
};

window.closeClearModal = function(e) {
    if (e && e.target && e.target.closest('.confirm-modal-card') && !e.target.closest('.btn-confirm-cancel')) {
        return;
    }
    const modal = document.getElementById('confirm-clear-modal');
    if (modal) {
        modal.classList.remove('active');
    }
};

window.executeClearCart = function() {
    cart = [];
    saveCartToStorage();
    updateCartUI();
    window.closeClearModal();
    showToast('✓ Pedido limpo com sucesso.');
};

window.changeCartItemQty = function(cartId, delta) {
    const itemIndex = cart.findIndex(it => it.cartId === cartId);
    if (itemIndex === -1) return;

    cart[itemIndex].qty += delta;
    if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
    }
    saveCartToStorage();
    updateCartUI();
};

window.removeCartItem = function(cartId) {
    cart = cart.filter(it => it.cartId !== cartId);
    saveCartToStorage();
    updateCartUI();
    showToast('Item removido.');
};

// Alteração de Tipo de Entrega
window.setDeliveryType = function(type) {
    selectedDeliveryType = type;
    document.querySelectorAll('.delivery-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });

    const deliveryForm = document.getElementById('delivery-address-form');
    if (deliveryForm) {
        deliveryForm.style.display = type === 'delivery' ? 'block' : 'none';
    }

    updateCartUI();
};

// Seleção de Bairro para Taxa de Entrega
window.handleZoneChange = function(selectEl) {
    const zoneIndex = parseInt(selectEl.value);
    selectedZone = DELIVERY_ZONES[zoneIndex] || DELIVERY_ZONES[0];
    updateCartUI();
};

// Seleção de Forma de Pagamento
window.setPaymentMethod = function(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.pay-method-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.method === method);
    });

    const trocoBox = document.getElementById('troco-input-box');
    if (trocoBox) {
        trocoBox.style.display = method === 'dinheiro' ? 'block' : 'none';
    }
};

// Atualização Visual do Carrinho
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items-list');
    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalHeader = document.getElementById('cart-total-header');
    const headerTrash = document.getElementById('btn-header-trash');
    const floatingBar = document.getElementById('cart-floating-bar');
    const floatingCount = document.getElementById('floating-cart-count');
    const floatingTotal = document.getElementById('floating-cart-total');

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const deliveryFee = selectedDeliveryType === 'delivery' ? (selectedZone ? selectedZone.fee : 0) : 0;
    const finalTotal = subtotal + deliveryFee;

    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (cartTotalHeader) cartTotalHeader.textContent = formatCurrency(subtotal);

    if (headerTrash) {
        headerTrash.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    }

    if (floatingBar) {
        if (totalItems > 0) {
            floatingBar.classList.add('visible');
            if (floatingCount) floatingCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
            if (floatingTotal) floatingTotal.textContent = formatCurrency(finalTotal);
        } else {
            floatingBar.classList.remove('visible');
        }
    }

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty-state">
                    <i data-lucide="shopping-bag" style="width:48px;height:48px;color:rgba(255,255,255,0.25);"></i>
                    <p class="empty-title">Seu pedido está vazio</p>
                    <p class="empty-sub">Escolha os melhores doces artesanais e presentes para começar!</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item-card" data-cart-id="${item.cartId}">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name"><strong>${item.qty}x</strong> ${item.name}</h4>
                        <div class="cart-item-details">
                            ${item.sizeName ? `<span class="detail-pill">${item.sizeName}</span>` : ''}
                            ${item.addons && item.addons.length > 0 ? item.addons.map(ad => `<div class="addon-line">+ ${ad}</div>`).join('') : ''}
                            ${item.observations ? `<div class="obs-line"><em>Obs: ${item.observations}</em></div>` : ''}
                        </div>
                        <div class="cart-item-price-row">
                            <span class="cart-item-price">${formatCurrency(item.unitPrice * item.qty)}</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.cartId}', -1)" aria-label="Diminuir">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.cartId}', 1)" aria-label="Aumentar">+</button>
                        <button type="button" class="trash-btn" onclick="removeCartItem('${item.cartId}')" aria-label="Remover item">
                            <i data-lucide="trash-2" style="width:15px;height:15px;"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    const subtotalEl = document.getElementById('cart-subtotal-val');
    const feeEl = document.getElementById('cart-fee-val');
    const totalEl = document.getElementById('cart-total-val');
    const feeRow = document.getElementById('cart-fee-row');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (feeRow) {
        feeRow.style.display = selectedDeliveryType === 'delivery' ? 'flex' : 'none';
        if (feeEl) feeEl.textContent = formatCurrency(deliveryFee);
    }
    if (totalEl) totalEl.textContent = formatCurrency(finalTotal);

    if (window.lucide) window.lucide.createIcons();
}

// Finalização e Envio do Pedido via WhatsApp (Comanda Operacional Onira.fly)
window.submitOrderToWhatsApp = function() {
    if (cart.length === 0) {
        alert('Por favor, adicione pelo menos um item ao seu pedido antes de finalizar.');
        return;
    }

    const clientNameInput = document.getElementById('client-name');
    const clientName = clientNameInput ? clientNameInput.value.trim() : '';

    if (!clientName) {
        alert('Por favor, informe seu nome para a comanda do pedido.');
        if (clientNameInput) clientNameInput.focus();
        return;
    }

    let addressDetails = '';
    if (selectedDeliveryType === 'delivery') {
        const street = document.getElementById('client-street')?.value.trim() || '';
        const number = document.getElementById('client-number')?.value.trim() || '';
        const complement = document.getElementById('client-complement')?.value.trim() || '';
        const neighborhood = selectedZone ? selectedZone.neighborhood : 'Caxias do Sul';

        if (!street || !number) {
            alert('Por favor, preencha o endereço completo (rua e número) para a entrega.');
            return;
        }

        addressDetails = `${street}, nº ${number}${complement ? ' (' + complement + ')' : ''} - ${neighborhood}`;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    const deliveryFee = selectedDeliveryType === 'delivery' ? (selectedZone ? selectedZone.fee : 0) : 0;
    const totalFinal = subtotal + deliveryFee;

    let paymentText = '';
    if (selectedPaymentMethod === 'pix') {
        paymentText = 'Pagamento em Pix — combinamos a chave por aqui';
    } else if (selectedPaymentMethod === 'cartao') {
        paymentText = 'Pagamento no cartão — favor levar a maquininha';
    } else if (selectedPaymentMethod === 'dinheiro') {
        const trocoVal = document.getElementById('troco-val')?.value.trim();
        paymentText = trocoVal ? `Pagamento em dinheiro — troco para R$ ${trocoVal}` : 'Pagamento em dinheiro (sem troco)';
    }

    let msg = `_pedido via site by Onira.fly_\n\n`;
    
    if (selectedDeliveryType === 'delivery') {
        msg += `Solicitação de Tele-Entrega\n\n`;
    } else {
        msg += `Solicitação de Retirada no balcão\n\n`;
    }

    cart.forEach(item => {
        msg += `*${item.qty}x* ${item.name}${item.sizeName && item.sizeName !== 'Padrão' ? ' · ' + item.sizeName : ''}\n`;
        if (item.addons && item.addons.length > 0) {
            item.addons.forEach(ad => {
                msg += `+ ${ad}\n`;
            });
        }
        if (item.observations) {
            msg += `_Obs: ${item.observations}_\n`;
        }
        msg += `*${formatCurrency(item.unitPrice * item.qty)}*\n\n`;
    });

    msg += `*Itens: ${formatCurrency(subtotal)}*\n`;
    if (selectedDeliveryType === 'delivery') {
        msg += `Entrega: ${formatCurrency(deliveryFee)} (${selectedZone ? selectedZone.neighborhood : 'Caxias do Sul'})\n`;
    }
    msg += `*Total: ${formatCurrency(totalFinal)}*\n\n`;

    msg += `*${clientName}*\n`;
    if (selectedDeliveryType === 'delivery') {
        msg += `${addressDetails}\n`;
    }
    msg += `${paymentText}\n\n`;
    msg += `_Enviado pelo site oficial da Fafa Doces Presentes • Onira.fly (Engenharia de Negócios Digitais)_`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
};

// Floating Proposal Widget (.onira-cta)
function initProposalFloatingWidget() {
    const ctaWidget = document.getElementById('onira-floating-cta');
    if (!ctaWidget) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        ctaWidget.classList.add('scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            ctaWidget.classList.remove('scrolling');
        }, 300);
    }, { passive: true });
}

window.toggleProposalWidget = function(event) {
    if (event) event.stopPropagation();
    const ctaWidget = document.getElementById('onira-floating-cta');
    if (ctaWidget) {
        ctaWidget.classList.toggle('collapsed');
    }
};

function formatCurrency(val) {
    return 'R$ ' + Number(val || 0).toFixed(2).replace('.', ',');
}

function saveCartToStorage() {
    try {
        localStorage.setItem('fafa_cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Erro ao salvar carrinho no localStorage', e);
    }
}

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem('fafa_cart');
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        cart = [];
    }
}

function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'toast-box';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');

    setTimeout(() => {
        toast.classList.remove('visible');
    }, 2800);
}
