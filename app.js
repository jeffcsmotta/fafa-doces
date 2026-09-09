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

// Categorias Padrão Configuráveis (4 Trilhos Cinematográficos Estilo Streaming)
const DEFAULT_CATEGORIES = [
    { id: 'todos', name: 'Todos os Itens', icon: 'film' },
    { id: 'presentes', name: 'Presentes Incríveis', icon: 'gift' },
    { id: 'tortas', name: 'Pâtisserie do Chef', icon: 'cake' },
    { id: 'pronta-entrega', name: 'Pronta-Entrega & Balcão', icon: 'zap' },
    { id: 'congelados', name: 'Fafa na sua Casa', icon: 'snowflake' }
];

function getCategories() {
    try {
        const saved = localStorage.getItem('fafa_categories_custom');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Usando categorias padrão', e);
    }
    return DEFAULT_CATEGORIES;
}

function getStoreConfig() {
    try {
        const saved = localStorage.getItem('fafa_store_config');
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                mode: 'delivery',
                scarcityLabel: 'Fornada',
                conciergePhone: '5554996862169',
                ...parsed
            };
        }
    } catch (e) {}
    return { 
        mode: 'delivery',
        scarcityLabel: 'Fornada',
        conciergePhone: '5554996862169'
    };
}

function applyStoreConfig() {
    const config = getStoreConfig();
    const isCatalogOnly = config.mode === 'catalog';
    
    document.body.classList.toggle('store-catalog-only', isCatalogOnly);
    
    const catalogBadge = document.getElementById('catalog-mode-badge');
    const cartNavBtn = document.getElementById('btn-cart-nav');
    const floatingBar = document.getElementById('cart-floating-bar');
    const trashBtn = document.getElementById('btn-header-trash');
    
    if (catalogBadge) catalogBadge.style.display = isCatalogOnly ? 'inline-flex' : 'none';
    if (isCatalogOnly) {
        if (cartNavBtn) cartNavBtn.style.display = 'none';
        if (floatingBar) floatingBar.classList.remove('visible');
        if (trashBtn) trashBtn.style.display = 'none';
    } else {
        if (cartNavBtn) cartNavBtn.style.display = 'inline-flex';
    }
}

// Estado da Aplicação
let cart = [];
let selectedDeliveryType = 'pickup'; // Prioriza Retirada no Balcão!
let selectedScheduleType = 'hoje';   // 'hoje' ou 'programado'
let selectedPaymentMethod = 'pix';   // 'pix', 'cartao', 'dinheiro'
let selectedZone = DELIVERY_ZONES[0];
let activeCategory = 'todos';
let searchQuery = '';
let currentModalProduct = null;

// Conceitos e Atmosferas Afetivas de Cada Categoria
const CATEGORY_CONCEPTS = {
    'todos': {
        title: 'Seleção Completa da Confeitaria',
        desc: 'Navegue pelos 4 trilhos exclusivos da nossa vitrine: presentes afetivos, pâtisserie do chef, pronta-entrega para hoje e congelados para assar em casa.'
    },
    'presentes': {
        title: '🎁 Presentes Incríveis & Boxes Comemorativas',
        desc: 'Fale diretamente com nossa equipe, vamos escolher a composição ideal para sua ocasião. Caixas, mimos e cestas montadas com afeto.'
    },
    'tortas': {
        title: '👑 Pâtisserie do Chef Rafael Franzosi',
        desc: 'Criações autorais e doces finos premiados pelo Prêmio Sabores do Sul. Tortas nobres, cheesecakes de frutas vermelhas e pistache e entremets.'
    },
    'pronta-entrega': {
        title: '⚡ Pronta-Entrega & Balcão (Para Hoje)',
        desc: 'O que podemos entregar no dia (preferência balcão, ou entrega programada). Cookies assados hoje, quiches artesanais, salgados e cafés.'
    },
    'congelados': {
        title: '❄️ Fafa na sua Casa • Congelados Artesanais',
        desc: 'Congelados artesanais entregues conforme programação. Kits de cookies para assar na sua Air Fryer e quiches inteiros para ter sempre à mão.'
    },
    'cookies': {
        title: '🍪 Cookies & Viciantes',
        desc: 'Massa artesanal com gotas de chocolate nobre, assados diariamente com casquinha crocante e centro macio.'
    },
    'salgados': {
        title: '🥐 Quiches & Salgados Folhados',
        desc: 'Massas folhadas e quiches de fermentação lenta com queijos selecionados para lanches especiais.'
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

// Normalização & Migração de Badges e Estoque da Fornada
function sanitizeProductList(list) {
    if (!Array.isArray(list)) return PRODUCTS;
    return list.map(p => {
        // Normaliza acento legado ("Fafá" de versões anteriores) para o padrão sem acento
        let name = (p.name || '').replace(/Fafá/g, 'Fafa');
        let desc = (p.desc || '').replace(/Fafá/g, 'Fafa');
        let group = (p.group || '').replace(/Fafá/g, 'Fafa');
        let badge = p.badge || '';
        let stock = p.stock;

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

        // Atribui estoque da fornada se não existir previamente
        if (stock === undefined) {
            if (p.id === 'prod-12314145') stock = 6;
            else if (p.id === 'prod-12314146') stock = 4;
            else if (p.id === 'prod-12314158') stock = 2;
            else if (p.id === 'prod-12820845') stock = 3;
            else if (p.id === 'prod-12552870') stock = 8;
            else if (p.id === 'prod-12552873') stock = 5;
            else if (p.id === 'prod-12552876') stock = 3;
            else if (p.id === 'prod-12552879') stock = 4;
            else if (p.id === 'prod-12314150') stock = 5;
            else if (p.id === 'prod-12314151') stock = 3;
            else if (p.id === 'prod-12314152') stock = 2;
            else if (p.id === 'prod-12314153') stock = 3;
            else if (p.id === 'prod-12314154') stock = 1;
            else if (p.id === 'prod-12314165') stock = 4;
            else if (p.id === 'prod-12314166') stock = 3;
            else if (p.id === 'prod-12314170') stock = 2;
            else if (p.id === 'prod-12314171') stock = 3;
            else if (p.id === 'prod-12314172') stock = 4;
            else if (p.category === 'cookies') stock = 5;
            else if (p.category === 'tortas') stock = 3;
            else if (p.category === 'salgados') stock = 4;
            else if (p.category === 'presentes') stock = 3;
            else if (p.category === 'congelados') stock = 6;
            else stock = null;
        }

        let hasAdicionais = p.hasAdicionais;
        if (hasAdicionais === undefined) {
            hasAdicionais = (p.category !== 'bebidas');
        }

        return {
            ...p,
            name,
            desc,
            group,
            badge,
            stock,
            hasAdicionais
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
    applyStoreConfig();
    renderCategories();
    renderProducts();
    updateCartUI();
    initStoreStatus();
    initProposalFloatingWidget();
    initPedidoDeepLink();

    // Sincronização em Tempo Real quando o Dono altera preços, visibilidade, categorias ou configurações
    window.addEventListener('fafa_products_updated', () => {
        renderProducts();
    });
    window.addEventListener('fafa_categories_updated', () => {
        renderCategories();
        renderProducts();
    });
    window.addEventListener('fafa_store_config_updated', () => {
        applyStoreConfig();
        renderProducts();
    });
    window.addEventListener('storage', (e) => {
        if (e.key === 'fafa_products_custom') {
            renderProducts();
        } else if (e.key === 'fafa_categories_custom') {
            renderCategories();
            renderProducts();
        } else if (e.key === 'fafa_store_config') {
            applyStoreConfig();
            renderProducts();
        }
    });

    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// Deep-link da proposta: index.html#pedido abre o carrinho lateral sozinho
function initPedidoDeepLink() {
    const openIfPedido = () => {
        if (window.location.hash === '#pedido' && typeof window.openCart === 'function') {
            window.openCart();
        }
    };
    // Pequeno atraso garante drawer e itens renderizados antes de abrir
    setTimeout(openIfPedido, 350);
    window.addEventListener('hashchange', openIfPedido);
}

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

// Renderizar Categorias de Produtos Dinâmicas
function renderCategories() {
    const container = document.getElementById('category-pills-container');
    if (!container) return;
    
    const categories = getCategories();
    
    container.innerHTML = categories.map(cat => {
        const isActive = activeCategory === cat.id;
        const iconName = cat.icon || 'cookie';
        return `
            <button type="button" class="cat-pill ${isActive ? 'active' : ''}" data-category="${cat.id}" onclick="window.filterCategory('${cat.id}')">
                <i data-lucide="${iconName}" style="width:16px;height:16px;"></i>
                <span>${cat.name}</span>
            </button>
        `;
    }).join('');
    
    if (window.lucide) window.lucide.createIcons();
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

// Ordenação Curada de Presentes Incríveis (Fotos de Alto Impacto Primeiro: Experiência Fafa, Mini Experiência, Box Cookies)
function sortPresentes(items) {
    return [...items].sort((a, b) => {
        const nameA = (a.name || '').toLowerCase();
        const nameB = (b.name || '').toLowerCase();

        const isMiniA = nameA.includes('mini');
        const isMiniB = nameB.includes('mini');

        let rankA = 999;
        let rankB = 999;

        if (nameA.includes('experi') && !isMiniA) rankA = 1;
        else if (nameA.includes('experi') && isMiniA) rankA = 2;
        else if (nameA.includes('box') || nameA.includes('cookie')) rankA = 3;

        if (nameB.includes('experi') && !isMiniB) rankB = 1;
        else if (nameB.includes('experi') && isMiniB) rankB = 2;
        else if (nameB.includes('box') || nameB.includes('cookie')) rankB = 3;

        if (rankA !== rankB) {
            return rankA - rankB;
        }
        return (a.name || '').localeCompare(b.name || '');
    });
}

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
    const storeConfig = getStoreConfig();
    const isCatalogOnly = storeConfig.mode === 'catalog';

    let filtered = allProducts.filter(prod => {
        // Se o produto foi ocultado / pausado pelo dono, não exibe no cardápio público
        if (prod.visible === false) return false;

        let matchesCategory = false;
        if (activeCategory === 'todos') {
            matchesCategory = true;
        } else if (activeCategory === 'destaques') {
            matchesCategory = prod.isFeatured === true || prod.destaque === true || (prod.badge && prod.badge.includes('Mais Vendido'));
        } else if (activeCategory === 'pronta-entrega') {
            matchesCategory = prod.category === 'cookies' || prod.category === 'salgados' || prod.category === 'bebidas' || prod.category === 'promocoes' || prod.category === 'pronta-entrega';
        } else {
            matchesCategory = prod.category === activeCategory;
        }

        const matchesSearch = !searchQuery || 
            prod.name.toLowerCase().includes(searchQuery) || 
            (prod.desc && prod.desc.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
    });

    // Se categoria ativa for 'presentes', ordena os cards com foco no apelo visual das fotos
    if (activeCategory === 'presentes') {
        filtered = sortPresentes(filtered);
    }

    // Atualiza o Banner de Conceito da Categoria Ativa
    const conceptInfo = CATEGORY_CONCEPTS[activeCategory] || {
        title: 'Cardápio Completo',
        desc: 'Cardápio artesanal da Fafa Doces Presentes para entrega rápida ou retirada no balcão.'
    };
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

    const renderCard = (prod) => {
        const priceFormatted = formatCurrency(prod.price);
        const isFeatured = prod.isFeatured === true || prod.destaque === true;
        const badgeLabel = prod.badge || (isFeatured ? '⭐ Destaque da Casa' : '');
        const badgeClass = getBadgeClass(badgeLabel);
        const isSoldOut = prod.stock === 0;
        const isPatisserie = prod.category === 'tortas' || (prod.badge && prod.badge.includes('Pâtisserie')) || (prod.group && prod.group.toLowerCase().includes('tortas'));
        const isGiftItem = prod.category === 'presentes' || (prod.group && prod.group.toLowerCase().includes('presente'));

        // Escassez restrita exclusivamente à Pâtisserie do Chef (sem termo "fornada", unidades puras)
        let scarcityHtml = '';
        if (isPatisserie && prod.stock !== undefined && prod.stock !== null) {
            if (prod.stock > 3) {
                scarcityHtml = `
                    <div class="card-scarcity-badge">
                        <span class="scarcity-pulse"></span>
                        <span>Restam ${prod.stock} un.</span>
                    </div>
                `;
            } else if (prod.stock > 0) {
                scarcityHtml = `
                    <div class="card-scarcity-badge urgent">
                        <i data-lucide="flame" style="width:10px;height:10px;"></i>
                        <span>Últimas ${prod.stock} un.!</span>
                    </div>
                `;
            } else {
                scarcityHtml = `
                    <div class="card-scarcity-badge soldout">
                        <i data-lucide="lock" style="width:10px;height:10px;"></i>
                        <span>Esgotado hoje</span>
                    </div>
                `;
            }
        }
        
        let actionBtn = '';
        if (isCatalogOnly) {
            actionBtn = `
                <button type="button" class="btn-add-item btn-catalog-view" onclick="window.openProductModal('${prod.id}')" aria-label="Ver detalhes de ${prod.name}">
                    <i data-lucide="eye" style="width:16px;height:16px;"></i>
                    <span>Ver Detalhes</span>
                </button>
            `;
        } else if (isSoldOut) {
            actionBtn = `
                <button type="button" class="btn-add-item btn-item-soldout" onclick="window.openProductModal('${prod.id}')" aria-label="${prod.name} esgotado">
                    <i data-lucide="lock" style="width:14px;height:14px;"></i>
                    <span>Esgotado Hoje</span>
                </button>
            `;
        } else if (isGiftItem) {
            // Presentes Incríveis & Boxes: CTA diferenciado que remete a encomenda afetiva consultiva
            actionBtn = `
                <button type="button" class="btn-add-item btn-item-personalizar" onclick="window.openProductModal('${prod.id}')" aria-label="Personalizar ${prod.name}">
                    <i data-lucide="sparkles" style="width:14px;height:14px;"></i>
                    <span>Personalizar</span>
                </button>
            `;
        } else {
            actionBtn = `
                <button type="button" class="btn-add-item" onclick="window.openProductModal('${prod.id}')" aria-label="Adicionar ${prod.name}">
                    <i data-lucide="plus" style="width:16px;height:16px;"></i>
                    <span>Pedir</span>
                </button>
            `;
        }

        return `
            <article class="menu-card ${isFeatured ? 'card-featured' : ''} ${isSoldOut ? 'card-soldout' : ''}" data-id="${prod.id}">
                <div class="card-img-box" onclick="window.openProductModal('${prod.id}')">
                    <img src="${prod.img}" alt="${prod.name}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80';">
                    ${badgeLabel ? `<span class="card-badge ${badgeClass}">${badgeLabel}</span>` : ''}
                    ${scarcityHtml}
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
                        ${actionBtn}
                    </div>
                </div>
            </article>
        `;
    };

    function renderStreamingRail(railId, categoryKey, title, subtitle, iconName, prodsList) {
        if (!prodsList || prodsList.length === 0) return '';
        return `
            <section class="streaming-rail-section" id="rail-section-${railId}">
                <div class="streaming-rail-header">
                    <div class="rail-header-text">
                        <div class="rail-title-row">
                            <i data-lucide="${iconName}" class="rail-icon"></i>
                            <h2 class="rail-title">${title}</h2>
                            <span class="rail-count-tag">${prodsList.length} ${prodsList.length === 1 ? 'opção' : 'opções'}</span>
                        </div>
                        <p class="rail-subtitle">${subtitle}</p>
                    </div>
                    <div class="rail-nav-controls">
                        <button type="button" class="btn-rail-view-grid" onclick="window.filterCategory('${categoryKey}')" title="Ver todos os itens de ${title} em grade">
                            <span>Ver em Grade</span>
                            <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
                        </button>
                        <button type="button" class="btn-rail-nav prev" onclick="window.scrollRail('${railId}', -320)" aria-label="Voltar itens de ${title}">
                            <i data-lucide="chevron-left" style="width:18px;height:18px;"></i>
                        </button>
                        <button type="button" class="btn-rail-nav next" onclick="window.scrollRail('${railId}', 320)" aria-label="Avançar itens de ${title}">
                            <i data-lucide="chevron-right" style="width:18px;height:18px;"></i>
                        </button>
                    </div>
                </div>

                <div class="streaming-rail-track" id="rail-${railId}">
                    ${prodsList.map(renderCard).join('')}
                </div>
            </section>
        `;
    }

    const backWrap = document.getElementById('back-to-rails-wrap');

    // SE "TODOS OS ITENS" e SEM BUSCA: Renderiza os 4 Trilhos Cinematográficos Estilo Streaming (Netflix / Prime)
    if (activeCategory === 'todos' && !searchQuery) {
        if (backWrap) backWrap.style.display = 'none';
        catalogGrid.className = 'streaming-rails-container';

        let railsHtml = '';

        // Trilho 1: Presentes Incríveis (Fotos de Alto Impacto em Destaque)
        let presentesProds = filtered.filter(p => p.category === 'presentes' || (p.group && p.group.toLowerCase().includes('presente')));
        presentesProds = sortPresentes(presentesProds);
        railsHtml += renderStreamingRail(
            'presentes',
            'presentes',
            'Presentes Incríveis & Boxes Comemorativas',
            'Fale diretamente com nossa equipe, vamos escolher a composição ideal para sua ocasião.',
            'gift',
            presentesProds
        );

        // Trilho 2: Pâtisserie do Chef
        const patisserieProds = filtered.filter(p => p.category === 'tortas' || (p.badge && p.badge.includes('Pâtisserie')) || (p.group && p.group.toLowerCase().includes('tortas')));
        railsHtml += renderStreamingRail(
            'patisserie',
            'tortas',
            'Pâtisserie do Chef Rafael Franzosi',
            'Criações autorais e doces finos premiados pelo Prêmio Revista Sabores do Sul.',
            'cake',
            patisserieProds
        );

        // Trilho 3: Pronta-Entrega & Balcão
        const prontaEntregaProds = filtered.filter(p => 
            p.category === 'cookies' || p.category === 'salgados' || p.category === 'bebidas' || p.category === 'promocoes' || p.category === 'pronta-entrega'
        );
        railsHtml += renderStreamingRail(
            'pronta-entrega',
            'pronta-entrega',
            'Pronta-Entrega & Balcão (Para Hoje)',
            'O que podemos entregar no dia (preferência balcão, ou entrega programada). Cookies assados hoje, quiches, salgados e cafés.',
            'zap',
            prontaEntregaProds
        );

        // Trilho 4: Fafa na sua Casa • Congelados
        const congeladosProds = filtered.filter(p => p.category === 'congelados' || (p.group && p.group.toLowerCase().includes('congelados')));
        railsHtml += renderStreamingRail(
            'congelados',
            'congelados',
            'Fafa na sua Casa • Congelados',
            'Congelados artesanais entregues conforme programação, para assar na sua Air Fryer quando quiser.',
            'snowflake',
            congeladosProds
        );

        catalogGrid.innerHTML = railsHtml;
        if (window.lucide) window.lucide.createIcons();
        initDesktopRailScroll();
        return;
    }

    // Se busca ativa ou categoria individual selecionada: Modo Grade Completa (Grid)
    if (backWrap) backWrap.style.display = 'block';
    catalogGrid.className = 'catalog-grid';
    catalogGrid.innerHTML = filtered.map(renderCard).join('');

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Catálogo Curado de Adicionais Especiais & Mimos de Presente da Fafa Doces
const FAFA_SPECIAL_ADDONS = [
    { id: 'addon-gift-box', name: 'Embalagem de Presente Especial + Laço de Cetim & Tag', price: 8.00, icon: 'gift' },
    { id: 'addon-card-handwritten', name: 'Cartão Artesanal com Dedicatória Manuscrita', price: 5.00, icon: 'mail' },
    { id: 'addon-special-candle', name: 'Vela de Aniversário Especial Comemorativa', price: 6.00, icon: 'flame' },
    { id: 'addon-extra-topping', name: 'Pote Extra de Nutella Pura ou Calda de Frutas Vermelhas (60g)', price: 6.00, icon: 'heart' }
];

window.toggleAddonSelection = function(chk) {
    const label = document.getElementById(`label-${chk.value}`);
    if (label) {
        label.classList.toggle('selected', chk.checked);
    }
    updateModalTotal();
};

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

    const storeConfig = getStoreConfig();
    const isCatalogOnly = storeConfig.mode === 'catalog';

    document.getElementById('modal-img').src = product.img;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-desc').textContent = product.desc;
    document.getElementById('modal-badge').textContent = product.badge || (product.isFeatured ? '⭐ Destaque' : 'Confeitaria Artesanal');

    // Informação de Disponibilidade / Exclusividade no Modal
    const scarcityNoticeEl = document.getElementById('modal-scarcity-notice');
    const isSoldOut = product.stock === 0;
    const isPatisserie = product.category === 'tortas' || (product.badge && product.badge.includes('Pâtisserie')) || (product.group && product.group.toLowerCase().includes('tortas'));
    const isGiftItem = product.category === 'presentes' || (product.group && product.group.toLowerCase().includes('presente'));

    if (scarcityNoticeEl) {
        if (isGiftItem) {
            scarcityNoticeEl.innerHTML = `
                <div class="modal-gift-exclusive-box">
                    <i data-lucide="gift" style="width:18px;height:18px;color:var(--accent-coral);flex-shrink:0;"></i>
                    <div class="gift-exclusive-text">
                        <strong>Presente Artesanal Sob Medida</strong>
                        <p>Produção sob encomenda afetiva com atendimento consultivo direto do Chef Rafael Franzosi para agendamento de data e dedicatória exclusiva.</p>
                    </div>
                </div>
            `;
            scarcityNoticeEl.style.display = 'block';
        } else if (isPatisserie && product.stock !== undefined && product.stock !== null) {
            if (product.stock > 3) {
                scarcityNoticeEl.innerHTML = `
                    <div class="modal-scarcity-box">
                        <span class="scarcity-pulse"></span>
                        <span>Produção de hoje: Restam <strong>${product.stock} unidades</strong> disponíveis.</span>
                    </div>
                `;
                scarcityNoticeEl.style.display = 'block';
            } else if (product.stock > 0) {
                scarcityNoticeEl.innerHTML = `
                    <div class="modal-scarcity-box urgent">
                        <i data-lucide="flame" style="width:14px;height:14px;"></i>
                        <span>Últimas <strong>${product.stock} unidades</strong> disponíveis para hoje!</span>
                    </div>
                `;
                scarcityNoticeEl.style.display = 'block';
            } else {
                scarcityNoticeEl.innerHTML = `
                    <div class="modal-scarcity-box soldout">
                        <i data-lucide="lock" style="width:14px;height:14px;"></i>
                        <span>🔒 <strong>Esgotado por hoje.</strong> Fale com nosso time no WhatsApp para encomendar com antecedência!</span>
                    </div>
                `;
                scarcityNoticeEl.style.display = 'block';
            }
        } else {
            scarcityNoticeEl.style.display = 'none';
        }
    }

    // Renderizar Opção Padrão
    const sizesContainer = document.getElementById('modal-sizes-list');
    if (sizesContainer) {
        sizesContainer.innerHTML = `
            <label class="size-option-label selected">
                <input type="radio" name="modal-size" value="Porção Padrão" data-price="${product.price}" checked onchange="updateModalTotal()">
                <span class="size-name">Porção / Unidade Artesanal</span>
                <span class="size-price">${formatCurrency(product.price)}</span>
            </label>
        `;
    }

    // Renderizar Adicionais Especiais & Mimos de Presente
    const addonsSection = document.getElementById('modal-addons-section');
    const addonsList = document.getElementById('modal-addons-list');
    if (addonsSection && addonsList) {
        if (product.hasAdicionais !== false) {
            addonsList.innerHTML = FAFA_SPECIAL_ADDONS.map(addon => `
                <label class="addon-option-item" id="label-${addon.id}">
                    <div class="addon-left-info">
                        <div class="addon-icon-box">
                            <i data-lucide="${addon.icon}" style="width:15px;height:15px;"></i>
                        </div>
                        <span class="addon-name-txt">${addon.name}</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span class="addon-price-tag">+ ${formatCurrency(addon.price)}</span>
                        <input type="checkbox" class="addon-chk-custom modal-addon-chk" value="${addon.id}" data-name="${addon.name}" data-price="${addon.price}" onchange="window.toggleAddonSelection(this)">
                    </div>
                </label>
            `).join('');
            addonsSection.style.display = 'block';
        } else {
            addonsList.innerHTML = '';
            addonsSection.style.display = 'none';
        }
    }

    // Observações / Dedicatória
    const obsInput = document.getElementById('modal-obs');
    if (obsInput) obsInput.value = '';

    // Quantidade
    document.getElementById('modal-qty').textContent = '1';

    updateModalTotal();

    const addBtn = document.getElementById('modal-add-btn');
    if (addBtn) {
        if (isCatalogOnly) {
            addBtn.className = 'btn-confirm-add';
            addBtn.innerHTML = `
                <i data-lucide="message-circle" style="width:17px;height:17px;"></i>
                <span>Consultar no WhatsApp</span>
            `;
            addBtn.onclick = () => window.consultProductOnWhatsApp(product.id);
        } else if (isSoldOut) {
            addBtn.className = 'btn-confirm-add btn-item-soldout';
            addBtn.innerHTML = `
                <i data-lucide="message-circle" style="width:17px;height:17px;"></i>
                <span>Encomendar no WhatsApp</span>
            `;
            addBtn.onclick = () => window.consultProductOnWhatsApp(product.id);
        } else if (isGiftItem) {
            // Presentes Incríveis não vão para o carrinho comum: atendimento consultivo no WhatsApp
            addBtn.className = 'btn-confirm-add btn-modal-gift-wa';
            addBtn.innerHTML = `
                <i data-lucide="message-circle" style="width:18px;height:18px;"></i>
                <span>Personalizar com Concierge no WhatsApp</span>
            `;
            addBtn.onclick = () => window.orderGiftOnWhatsApp(product.id);
        } else {
            addBtn.className = 'btn-confirm-add';
            addBtn.innerHTML = `
                <span>Adicionar ao Pedido</span> 
                <strong class="modal-price-pill">${formatCurrency(product.price)}</strong>
            `;
            addBtn.onclick = window.confirmAddModalToCart;
        }
    }

    const qtyBox = modalEl.querySelector('.qty-control-box');
    if (qtyBox) {
        qtyBox.style.display = isGiftItem ? 'none' : 'inline-flex';
    }

    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) window.lucide.createIcons();
};

window.closeProductModal = function() {
    const modalEl = document.getElementById('product-modal');
    if (modalEl) {
        modalEl.classList.remove('active');
        document.body.style.overflow = '';
        const qtyBox = modalEl.querySelector('.qty-control-box');
        if (qtyBox) qtyBox.style.display = 'inline-flex';
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
    let addonsSum = 0;
    document.querySelectorAll('.modal-addon-chk:checked').forEach(chk => {
        addonsSum += parseFloat(chk.dataset.price) || 0;
    });
    const unitWithAddons = basePrice + addonsSum;
    const total = unitWithAddons * qty;

    const storeConfig = getStoreConfig();
    const isCatalogOnly = storeConfig.mode === 'catalog';
    const isGiftItem = currentModalProduct && (currentModalProduct.category === 'presentes' || (currentModalProduct.group && currentModalProduct.group.toLowerCase().includes('presente')));
    const totalBtn = document.getElementById('modal-add-btn');

    if (totalBtn) {
        if (isCatalogOnly) {
            totalBtn.className = 'btn-confirm-add';
            totalBtn.innerHTML = `
                <i data-lucide="message-circle" style="width:17px;height:17px;"></i>
                <span>Consultar no WhatsApp</span>
            `;
            totalBtn.onclick = () => window.consultProductOnWhatsApp(currentModalProduct.id);
        } else if (isGiftItem) {
            totalBtn.className = 'btn-confirm-add btn-modal-gift-wa';
            totalBtn.innerHTML = `
                <i data-lucide="sparkles" style="width:17px;height:17px;"></i>
                <span>Personalizar no WhatsApp • ${formatCurrency(total)}</span>
            `;
            totalBtn.onclick = () => window.orderGiftOnWhatsApp(currentModalProduct.id);
        } else {
            totalBtn.className = 'btn-confirm-add';
            totalBtn.innerHTML = `<span>Adicionar ao Pedido</span> <strong class="modal-price-pill">${formatCurrency(total)}</strong>`;
            totalBtn.onclick = window.confirmAddModalToCart;
        }
    }
}

// Atendimento Consultivo Direto com o Concierge para Presentes e Cestas Especiais
window.orderGiftOnWhatsApp = function(productId) {
    const allProducts = getLiveProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const qty = parseInt(document.getElementById('modal-qty')?.textContent) || 1;
    const obs = (document.getElementById('modal-obs')?.value || '').trim();

    // Coleta mimos e adicionais especiais marcados
    const selectedAddons = [];
    document.querySelectorAll('.modal-addon-chk:checked').forEach(chk => {
        selectedAddons.push({
            name: chk.dataset.name,
            price: parseFloat(chk.dataset.price) || 0
        });
    });
    const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = product.price + addonsTotal;
    const total = unitPrice * qty;

    let msg = `Olá Chef Rafael Franzosi e equipe Fafa! 👋✨\n\nGostaria de encomendar e personalizar este presente do catálogo:\n\n`;
    msg += `🎁 *${product.name}*\n`;
    msg += `💰 *Valor Estimado:* ${formatCurrency(total)} (${qty > 1 ? qty + 'x ' + formatCurrency(unitPrice) : formatCurrency(unitPrice)})\n`;

    if (selectedAddons.length > 0) {
        msg += `\n✨ *Mimos & Adicionais Selecionados:*\n`;
        selectedAddons.forEach(a => {
            msg += ` • ${a.name} (+${formatCurrency(a.price)})\n`;
        });
    }

    if (obs) {
        msg += `\n💌 *Dedicatória para o Cartão / Ocasião:*\n"${obs}"\n`;
    }

    msg += `\n🗓️ Gostaria de agendar a data de entrega/retirada e tirar dúvidas sobre a personalização!`;

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    closeProductModal();
};

// Consulta Direta no WhatsApp no Modo Catálogo
window.consultProductOnWhatsApp = function(productId) {
    const allProducts = getLiveProducts();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const qty = parseInt(document.getElementById('modal-qty')?.textContent) || 1;
    const obs = (document.getElementById('modal-obs')?.value || '').trim();

    let msg = `Olá! Gostaria de consultar a disponibilidade do item *${product.name}* (${formatCurrency(product.price)}) que vi no catálogo digital da Fafa Doces Presentes.`;
    if (qty > 1) {
        msg += `\n*Quantidade desejada:* ${qty} unidades`;
    }
    if (obs) {
        msg += `\n*Observação / Ocasião:* ${obs}`;
    }

    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    closeProductModal();
};

// Confirmar e Adicionar Item ao Carrinho (Com Validação de Estoque da Fornada e Mimos Selecionados)
window.confirmAddModalToCart = function() {
    if (!currentModalProduct) return;

    let qty = parseInt(document.getElementById('modal-qty')?.textContent) || 1;
    const basePrice = currentModalProduct.price;
    const observations = document.getElementById('modal-obs')?.value.trim() || '';

    // Validação de Escassez da Fornada
    if (currentModalProduct.stock !== undefined && currentModalProduct.stock !== null) {
        if (currentModalProduct.stock === 0) {
            showToast('🔒 Fornada esgotada por hoje! Fale conosco no WhatsApp para reservar a próxima.');
            return;
        }
        const existingInCart = cart
            .filter(item => item.productId === currentModalProduct.id)
            .reduce((sum, item) => sum + item.qty, 0);

        if (existingInCart + qty > currentModalProduct.stock) {
            const available = Math.max(0, currentModalProduct.stock - existingInCart);
            if (available === 0) {
                showToast(`⚠️ Você já adicionou o limite máximo desta fornada (${currentModalProduct.stock} unid.)!`);
                return;
            } else {
                showToast(`⚠️ Restam apenas ${available} unidades desta fornada de hoje. Quantidade ajustada.`);
                qty = available;
            }
        }
    }

    // Coleta os adicionais especiais marcados
    const selectedAddons = [];
    document.querySelectorAll('.modal-addon-chk:checked').forEach(chk => {
        selectedAddons.push({
            id: chk.value,
            name: chk.dataset.name,
            price: parseFloat(chk.dataset.price) || 0
        });
    });
    const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);

    const cartItem = {
        cartId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        productId: currentModalProduct.id,
        name: currentModalProduct.name,
        sizeName: 'Padrão',
        unitPrice: basePrice + addonsTotal,
        basePrice: basePrice,
        qty: qty,
        addons: selectedAddons,
        observations: observations,
        img: currentModalProduct.img
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCartUI();
    closeProductModal();

    showToast(`✓ ${qty}x ${currentModalProduct.name} adicionado!`);
};

// Navegação Horizontal Suave dos Trilhos Cinematográficos
window.scrollRail = function(railId, offset) {
    const track = document.getElementById('rail-' + railId);
    if (track) {
        const scrollAmount = offset || (window.innerWidth > 768 ? 480 : 300);
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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
        document.body.classList.add('cart-drawer-open');
        document.body.style.overflow = 'hidden';
    }
};

window.closeCart = function() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('cart-drawer-open');
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

// Alteração de Tipo de Entrega (Balcão Recomendado vs Tele-Entrega Própria)
window.setDeliveryType = function(type) {
    selectedDeliveryType = type;
    document.querySelectorAll('.delivery-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });

    const deliveryForm = document.getElementById('delivery-address-form');
    const pickupHint = document.getElementById('pickup-notice-hint');
    if (deliveryForm) {
        deliveryForm.style.display = type === 'delivery' ? 'block' : 'none';
    }
    if (pickupHint) {
        pickupHint.style.display = type === 'pickup' ? 'block' : 'none';
    }

    updateCartUI();
};

// Alteração de Previsão / Prazo: Pronta Entrega vs Encomenda Programada
window.setScheduleType = function(type) {
    selectedScheduleType = type;
    document.querySelectorAll('.schedule-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.schedule === type);
    });

    const scheduleForm = document.getElementById('schedule-fields-form');
    if (scheduleForm) {
        scheduleForm.style.display = type === 'programado' ? 'block' : 'none';
        if (type === 'programado') {
            const dateInput = document.getElementById('order-schedule-date');
            if (dateInput && !dateInput.value) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                dateInput.value = tomorrow.toISOString().split('T')[0];
                dateInput.min = new Date().toISOString().split('T')[0];
            }
        }
    }
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
    const storeConfig = getStoreConfig();
    if (storeConfig.mode === 'catalog') {
        applyStoreConfig();
        return;
    }

    const cartItemsContainer = document.getElementById('cart-items-list');
    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalHeader = document.getElementById('cart-total-nav');
    const headerTrash = document.getElementById('btn-header-trash');
    const floatingBar = document.getElementById('cart-floating-bar');
    const floatingCount = document.getElementById('floating-cart-count');
    const floatingTotal = document.getElementById('floating-cart-total');

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const deliveryFee = selectedDeliveryType === 'delivery' ? 8.00 : 0;
    const finalTotal = subtotal + deliveryFee;

    const cartNavBtn = document.getElementById('btn-cart-nav');
    if (cartNavBtn) {
        if (totalItems > 0) {
            cartNavBtn.classList.add('has-items');
            cartNavBtn.classList.remove('cart-empty');
            if (cartCountBadge) {
                cartCountBadge.style.display = 'inline-block';
                cartCountBadge.textContent = totalItems;
            }
            if (cartTotalHeader) {
                cartTotalHeader.style.display = 'inline-block';
                cartTotalHeader.textContent = formatCurrency(subtotal);
            }
        } else {
            cartNavBtn.classList.remove('has-items');
            cartNavBtn.classList.add('cart-empty');
            if (cartCountBadge) cartCountBadge.style.display = 'none';
            if (cartTotalHeader) cartTotalHeader.style.display = 'none';
        }
    }

    if (headerTrash) {
        headerTrash.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    }

    if (totalItems > 0) {
        document.body.classList.add('has-cart-items');
        if (floatingBar) {
            floatingBar.classList.add('visible');
            if (floatingCount) floatingCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
            if (floatingTotal) floatingTotal.textContent = formatCurrency(finalTotal);
        }
    } else {
        document.body.classList.remove('has-cart-items');
        if (floatingBar) {
            floatingBar.classList.remove('visible');
        }
    }

    // Regra do Concierge Afetivo: Oculta automaticamente quando o 1º item entra no carrinho
    const conciergeWidget = document.getElementById('concierge-widget');
    if (conciergeWidget) {
        conciergeWidget.classList.toggle('widget-cart-hidden', totalItems > 0);
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
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-details">
                            ${item.sizeName && item.sizeName !== 'Padrão' ? `<span class="detail-pill">${item.sizeName}</span>` : ''}
                            ${item.addons && item.addons.length > 0 ? `
                                <div class="cart-item-addons">
                                    ${item.addons.map(a => `<span class="cart-addon-pill"><i data-lucide="gift" style="width:11px;height:11px;color:var(--accent-coral);"></i> ${a.name} (<strong>+ ${formatCurrency(a.price)}</strong>)</span>`).join('')}
                                </div>
                            ` : ''}
                            ${item.observations ? `<div class="obs-line"><em>Obs: ${item.observations}</em></div>` : ''}
                        </div>
                        <div class="cart-item-price-row">
                            <span class="cart-item-price">${formatCurrency(item.unitPrice * item.qty)}</span>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="cart-qty-pill">
                            <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.cartId}', -1)" aria-label="Diminuir">−</button>
                            <span class="qty-val">${item.qty}</span>
                            <button type="button" class="qty-btn" onclick="changeCartItemQty('${item.cartId}', 1)" aria-label="Aumentar">+</button>
                        </div>
                        <button type="button" class="trash-btn" onclick="removeCartItem('${item.cartId}')" aria-label="Remover item">
                            <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
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

// Finalização e Envio do Pedido via WhatsApp (Comanda Operacional Concierge & Balcão Onira.fly)
window.submitOrderToWhatsApp = function() {
    if (cart.length === 0) {
        showToast('⚠️ Por favor, adicione pelo menos um item ao seu pedido antes de finalizar.');
        return;
    }

    const clientNameInput = document.getElementById('client-name');
    const clientName = clientNameInput ? clientNameInput.value.trim() : '';

    let addressDetails = '';
    if (selectedDeliveryType === 'delivery') {
        const street = (document.getElementById('client-street')?.value || '').trim();
        const number = (document.getElementById('client-number')?.value || '').trim();
        const bairro = (document.getElementById('client-bairro')?.value || '').trim();
        const complement = (document.getElementById('client-complement')?.value || '').trim();

        if (street || number) {
            addressDetails = `${street}${number ? ', nº ' + number : ''}${bairro ? ' - ' + bairro : ''}${complement ? ' (' + complement + ')' : ''} - Caxias do Sul`;
        } else {
            addressDetails = `Endereço a combinar no WhatsApp (Caxias do Sul)`;
        }
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
    const deliveryFee = selectedDeliveryType === 'delivery' ? 8.00 : 0;
    const totalFinal = subtotal + deliveryFee;

    let paymentText = '';
    if (selectedPaymentMethod === 'pix') {
        paymentText = 'Pagamento em Pix — combinamos a chave por aqui';
    } else if (selectedPaymentMethod === 'cartao') {
        paymentText = 'Pagamento no cartão — favor levar a maquininha';
    } else if (selectedPaymentMethod === 'dinheiro') {
        const trocoVal = (document.getElementById('troco-val')?.value || '').trim();
        paymentText = trocoVal ? `Pagamento em dinheiro — troco para R$ ${trocoVal}` : 'Pagamento em dinheiro (sem troco)';
    }

    let msg = `_pedido via site by Onira.fly_\n\n`;
    
    if (selectedDeliveryType === 'delivery') {
        msg += `🚚 *Solicitação de Tele-Entrega Própria*\n`;
    } else {
        msg += `🏬 *Solicitação de Retirada no Balcão*\n_Rua Tronca, 2951 - Sala 1 (Rio Branco)_\n`;
    }

    // Previsão e Agendamento
    if (selectedScheduleType === 'programado') {
        const scheduleDate = document.getElementById('order-schedule-date')?.value;
        const schedulePeriod = document.getElementById('order-schedule-period')?.value || 'Tarde';
        let dateFormatted = scheduleDate ? scheduleDate.split('-').reverse().join('/') : 'A combinar';
        msg += `📅 *Previsão:* Encomenda Programada para *${dateFormatted}* (Turno: ${schedulePeriod})\n\n`;
    } else {
        msg += `⚡ *Previsão:* Pronta Entrega (Hoje)\n\n`;
    }

    // Dedicatória para presente
    const giftCardText = (document.getElementById('order-gift-card')?.value || '').trim();
    if (giftCardText) {
        msg += `💌 *Dedicatória para o Cartão de Presente:*\n"${giftCardText}"\n\n`;
    }

    msg += `*ITENS DO PEDIDO:*\n`;
    cart.forEach(item => {
        msg += `*${item.qty}x* ${item.name}${item.sizeName && item.sizeName !== 'Padrão' ? ' · ' + item.sizeName : ''}\n`;
        if (item.addons && item.addons.length > 0) {
            item.addons.forEach(a => {
                msg += `  └ Mimo: ${a.name} (+ ${formatCurrency(a.price)})\n`;
            });
        }
        if (item.observations) {
            msg += `  └ _Obs: ${item.observations}_\n`;
        }
        msg += `*${formatCurrency(item.unitPrice * item.qty)}*\n\n`;
    });

    msg += `*Subtotal:* ${formatCurrency(subtotal)}\n`;
    if (selectedDeliveryType === 'delivery') {
        msg += `*Entrega:* ${formatCurrency(deliveryFee)} (Caxias do Sul)\n`;
    }
    msg += `*Total Geral:* ${formatCurrency(totalFinal)}\n\n`;

    if (clientName) {
        msg += `*Cliente:* ${clientName}\n`;
    }
    if (selectedDeliveryType === 'delivery') {
        msg += `*Endereço:* ${addressDetails}\n`;
    }
    msg += `*Pagamento:* ${paymentText}\n\n`;
    msg += `_Enviado pelo site oficial da Fafa Doces Presentes • Onira.fly_`;

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank');
};

// Sincronização e Comportamento Inteligente de Rolagem dos Botões Flutuantes Mobile
function initProposalFloatingWidget() {
    const ctaWidget = document.getElementById('onira-floating-cta');
    const cartBar = document.getElementById('cart-floating-bar');
    const conciergeWidget = document.getElementById('concierge-widget');

    if (sessionStorage.getItem('fafa_concierge_dismissed') === 'true') {
        if (conciergeWidget) conciergeWidget.classList.add('widget-dismissed');
        document.body.classList.add('concierge-dismissed');
    }

    if (!ctaWidget && !cartBar && !conciergeWidget) return;

    let lastScrollY = window.scrollY;
    let scrollTimeout = null;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        // Leve efeito de opacidade em movimento ativo
        if (ctaWidget) ctaWidget.classList.add('scrolling-active');
        if (cartBar) cartBar.classList.add('scrolling-active');
        if (conciergeWidget) conciergeWidget.classList.add('scrolling-active');

        // Rolando para baixo: recolhe suavemente para dar visibilidade total aos doces
        if (scrollDelta > 10 && currentScrollY > 100) {
            if (ctaWidget) ctaWidget.classList.add('scroll-hidden');
            if (cartBar) cartBar.classList.add('scroll-hidden');
            if (conciergeWidget) conciergeWidget.classList.add('scroll-hidden');
        } 
        // Rolando para cima ou perto do topo: reexibe ambos em bloco
        else if (scrollDelta < -6 || currentScrollY <= 80) {
            if (ctaWidget) ctaWidget.classList.remove('scroll-hidden');
            if (cartBar) cartBar.classList.remove('scroll-hidden');
            if (conciergeWidget) conciergeWidget.classList.remove('scroll-hidden');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (ctaWidget) ctaWidget.classList.remove('scrolling-active');
            if (cartBar) cartBar.classList.remove('scrolling-active');
            if (conciergeWidget) conciergeWidget.classList.remove('scrolling-active');
        }, 220);

        lastScrollY = currentScrollY;
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

// ==========================================================================
// Concierge Afetivo & Presentes Especiais (Chef Rafael Franzosi)
// ==========================================================================
window.dismissConciergeWidget = function(event) {
    if (event) event.stopPropagation();
    const widget = document.getElementById('concierge-widget');
    if (widget) {
        widget.classList.add('widget-dismissed');
        document.body.classList.add('concierge-dismissed');
        sessionStorage.setItem('fafa_concierge_dismissed', 'true');
    }
};

window.openConciergeWhatsApp = function() {
    const storeConfig = getStoreConfig();
    const phone = storeConfig.conciergePhone || storeConfig.phone || WHATSAPP_PHONE || '555432011633';

    const msg = `Olá, equipe da Fafa Doces e Chef Rafael! 👋✨\n\nEstou no cardápio digital oficial e tenho uma ocasião especial. Gostaria da ajuda do time para escolher a composição perfeita:\n\n✨ *Ocasião Especial:* [Ex: Aniversário, Bodas, Maternidade, Presente Corporativo, Agradecimento Especial]\n📅 *Data que preciso:* \n👥 *Quantidade de pessoas ou caixas:* \n💡 *Preferências ou detalhes:* \n\nPoderiam me orientar com as melhores opções para esta data?`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, '_blank');
};

// Ativação de Movimento Fluido com Mouse Drag & Wheel nos Trilhos de Streaming no Desktop
function initDesktopRailScroll() {
    const tracks = document.querySelectorAll('.streaming-rail-track');
    tracks.forEach(track => {
        if (track.dataset.dragInitialized) return;
        track.dataset.dragInitialized = 'true';

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;
        let hasDragged = false;

        track.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDown = true;
            hasDragged = false;
            track.classList.add('is-dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                track.classList.remove('is-dragging');
            }
        });

        track.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                track.classList.remove('is-dragging');
            }
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.8;
            if (Math.abs(walk) > 6) {
                hasDragged = true;
            }
            track.scrollLeft = scrollLeft - walk;
        });

        // Previne clique involuntário nos cards ao soltar o arrasto do mouse
        track.addEventListener('click', (e) => {
            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
                hasDragged = false;
            }
        }, true);

        // Rodinha no desktop: move o trilho só havendo caminho na direção;
        // na ponta, o evento passa direto e a página segue rolando (sem armadilha)
        if (!window.matchMedia('(pointer: coarse)').matches) {
            track.addEventListener('wheel', (e) => {
                if (e.ctrlKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
                const maxLeft = track.scrollWidth - track.clientWidth;
                if (maxLeft <= 0) return;
                const goingForward = e.deltaY > 0;
                const hasRoom = goingForward
                    ? track.scrollLeft < maxLeft - 1
                    : track.scrollLeft > 1;
                if (!hasRoom) return;
                e.preventDefault();
                track.scrollLeft += e.deltaY;
            }, { passive: false });
        }

        // Setas apagam na ponta correspondente para sinalizar o fim do trilho
        const railSection = track.closest('.streaming-rail-section');
        const prevBtn = railSection ? railSection.querySelector('.btn-rail-nav.prev') : null;
        const nextBtn = railSection ? railSection.querySelector('.btn-rail-nav.next') : null;
        const updateRailArrows = () => {
            if (!prevBtn && !nextBtn) return;
            const maxLeft = track.scrollWidth - track.clientWidth;
            if (prevBtn) prevBtn.classList.toggle('rail-end', track.scrollLeft <= 1);
            if (nextBtn) nextBtn.classList.toggle('rail-end', track.scrollLeft >= maxLeft - 1);
        };
        track.addEventListener('scroll', updateRailArrows, { passive: true });
        updateRailArrows();
    });
}
