const foodGroups = [
  {
    id: "desayuno",
    category: "Desayuno",
    shortLabel: "Desayuno",
    items: [
      {
        id: "desayuno-tradicional",
        title: "Desayuno tradicional",
        price: "6,50 €",
        description: "Café o té/infusión + zumo + tostada a elegir: aceite, mermelada, tomate, mantequilla o bollería.",
        note: "Hasta las 12:00h",
        image: "assets/comidas/desayuno/desayuno-tradicional.webp"
      },
      {
        id: "desayuno-supreme",
        title: "Desayuno Suprem",
        price: "9,00 €",
        description: "Café o té/infusión + zumo + tostada a elegir: tostada jamón con tomate, salmón y aguacate, o atún con tomate.",
        note: "Hasta las 12:00h",
        image: "assets/comidas/desayuno/28_05_26_TAVOLAWEB-161.jpg"
      }
    ]
  },
  {
    id: "picar",
    category: "Aperitivo y picar",
    shortLabel: "Picar",
    items: [
      {
        id: "frutos-secos",
        title: "Frutos secos",
        price: "2,00 €",
        description: "Aperitivo clásico para acompañar la bebida.",
        image: "assets/comidas/genericas/tarta.webp"
      },
      {
        id: "papas",
        title: "Papas",
        price: "2,50 €",
        description: "Patatas chips crujientes.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "aceitunas",
        title: "Aceitunas",
        price: "3,00 €",
        description: "Aceitunas servidas como aperitivo.",
        image: "assets/comidas/genericas/ensalada.webp"
      },
      {
        id: "barqueta-mini-fuets",
        title: "Barqueta de mini fuets",
        price: "7,00 €",
        description: "Mini fuets servidos en barqueta.",
        image: "assets/comidas/genericas/bruschetta.webp"
      },
      {
        id: "papas-mejillones",
        title: "Papas con mejillones",
        price: "9,00 €",
        description: "Papas acompañadas de mejillones.",
        image: "assets/comidas/genericas/salmon.webp"
      },
      {
        id: "papas-boquerones",
        title: "Papas con boquerones",
        price: "9,00 €",
        description: "Papas acompañadas de boquerones.",
        image: "assets/comidas/genericas/salmon.webp"
      },
      {
        id: "papas-limon-berberechos",
        title: "Papas fresquitas con limón y berberechos",
        price: "12,00 €",
        description: "Papas con toque fresco de limón y berberechos.",
        image: "assets/comidas/genericas/salmon.webp"
      }
    ]
  },
  {
    id: "tapas",
    category: "Tapas",
    shortLabel: "Tapas",
    items: [
      {
        id: "pulpo-pimenton",
        title: "Pulpo al pimentón con patatas a lo pobre",
        price: "12,00 €",
        description: "Pulpo al pimentón acompañado de patatas a lo pobre.",
        image: "assets/comidas/tapas/pulpo-patatas-pobre.webp"
      },
      {
        id: "ensaladilla-rusa",
        title: "Ensaladilla rusa",
        price: "9,00 €",
        description: "Ensaladilla rusa clásica.",
        image: "assets/comidas/tapas/28_05_26_TAVOLAWEB-94.jpg"
      },
      {
        id: "ajo-arriero",
        title: "Ajo arriero",
        price: "8,00 €",
        description: "Tapa tradicional de ajo arriero.",
        image: "assets/comidas/tapas/ajo-arriero.webp"
      },
      {
        id: "nachos-verano",
        title: "Nachos de verano",
        price: "10,00 €",
        description: "Crema agria, guacamole y salsa mexicana.",
        image: "assets/comidas/tapas/nachos-verano.webp"
      },
      {
        id: "nachos-tartar-salmon",
        title: "Nachos con tartar de salmón",
        price: "12,00 €",
        description: "Tartar de salmón, alga wakame y salsa Tavola.",
        image: "assets/comidas/tapas/nachos-tartar-salmon.webp"
      },
      {
        id: "tabla-jamon-iberico-duroc",
        title: "Tabla jamón ibérico duroc",
        price: "13,00 €",
        description: "Tabla de jamón ibérico duroc.",
        image: "assets/comidas/tapas/tabla-jamon-iberico-duroc.webp"
      },
      {
        id: "tabla-quesos-valencianos",
        title: "Tabla quesos valencianos",
        price: "12,00 €",
        description: "Selección de quesos valencianos.",
        image: "assets/comidas/tapas/tabla-quesos.webp"
      },
      {
        id: "tortilla-jamon",
        title: "Mini Tortilla con jamón",
        price: "10,00 €",
        description: "Mini tortilla acompañada de jamón.",
        image: "assets/comidas/tapas/tortilla-jamon.webp"
      },
      {
        id: "mejillones-vapor-limon",
        title: "Mejillones al vapor con limón",
        price: "12,00 €",
        description: "Mejillones al vapor con un toque de limón.",
        image: "assets/comidas/genericas/salmon.webp"
      },
      {
        id: "servicio-pan",
        title: "Servicio de pan",
        price: "2,00 €",
        description: "Pan para acompañar.",
        image: "assets/comidas/genericas/bruschetta.webp",
        hasDetail: false
      },
      {
        id: "servicio-picos-pan-adicional",
        title: "Servicio de picos y pan adicional",
        price: "2,00 €",
        description: "Picos y pan extra.",
        image: "assets/comidas/genericas/bruschetta.webp",
        hasDetail: false
      },
      {
        id: "salsas-adicionales",
        title: "Salsas adicionales",
        price: "2,00 €",
        description: "Salsas extra a elección del cliente.",
        image: "assets/comidas/genericas/ensalada.webp",
        hasDetail: false
      }
    ]
  },
  {
    id: "bocadillos",
    category: "Bocadillos",
    shortLabel: "Bocatas",
    items: [
      {
        id: "bocadillo-escalivada",
        title: "Bocadillo escalivada",
        price: "11,00 €",
        description: "Bocadillo de escalivada.",
        note: "Acompañados con papas.",
        image: "assets/comidas/genericas/bruschetta.webp"
      },
      {
        id: "magro-tomate",
        title: "Magro con tomate",
        price: "11,00 €",
        description: "Bocadillo de magro con tomate.",
        note: "Acompañados con papas.",
        image: "assets/comidas/bocadillos/28_05_26_TAVOLAWEB-84.jpg"
      },
      {
        id: "lomo-ajos-tiernos",
        title: "Lomo con ajos tiernos",
        price: "11,00 €",
        description: "Bocadillo de lomo con ajos tiernos.",
        note: "Acompañados con papas.",
        image: "assets/comidas/genericas/bruschetta.webp"
      },
      {
        id: "bocadillo-atun-tomate",
        title: "Bocadillo de atún con tomate",
        price: "9,00 €",
        description: "Bocadillo de atún con tomate.",
        note: "Acompañados con papas.",
        image: "assets/comidas/bocadillos/bocadillo-atun-tomate.webp"
      }
    ]
  },
  {
    id: "pizzas",
    category: "Pizzas al horno de piedra",
    shortLabel: "Pizzas",
    items: [
      {
        id: "margarita",
        title: "Margarita",
        price: "14,00 €",
        description: "Pizza clásica con tomate, mozzarella y albahaca.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "tartufata",
        title: "Tartufata",
        price: "14,00 €",
        description: "Jamón, queso y trufa.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "jamon-queso",
        title: "Jamón y queso",
        price: "14,00 €",
        description: "Pizza de jamón y queso.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "cuatro-quesos",
        title: "4 quesos",
        price: "14,00 €",
        description: "Pizza con mezcla de cuatro quesos.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "peperoni",
        title: "Peperoni",
        price: "14,00 €",
        description: "Pizza con peperoni.",
        image: "assets/comidas/pizzas/28_05_26_TAVOLAWEB-218.jpg"
      },
      {
        id: "canibal",
        title: "Canibal",
        price: "14,00 €",
        description: "Bacon, peperoni y jamón york.",
        image: "assets/comidas/genericas/pasta.webp"
      }
    ]
  },
  {
    id: "platos",
    category: "Platos preparados",
    shortLabel: "Platos",
    items: [
      {
        id: "ensalada-quinoa",
        title: "Ensalada de quinoa",
        price: "10,00 €",
        description: "Ración de ensalada de quinoa.",
        image: "assets/comidas/platos-preparados/ensalada-quinoa-1.webp"
      },
      {
        id: "costillas-barbacoa",
        title: "Costillas a la barbacoa",
        price: "12,00 €",
        description: "Ración de costillas con salsa barbacoa.",
        image: "assets/comidas/genericas/risotto.webp"
      },
      {
        id: "salmon-teriyaki",
        title: "Salmón Teriyaki",
        price: "10,00 €",
        description: "Ración de salmón con salsa teriyaki servido con arroz.",
        image: "assets/comidas/platos-preparados/salmonteriyakiconarroz.webp"
      },
      {
        id: "pollo-curry",
        title: "Pollo al Curry con arroz",
        price: "10,00 €",
        description: "Ración de pollo al curry servido con arroz.",
        image: "assets/comidas/genericas/risotto.webp"
      },
      {
        id: "macarrones-bolonesa",
        title: "Macarrones Boloñesa",
        price: "10,00 €",
        description: "Ración de macarrones con salsa boloñesa.",
        image: "assets/comidas/genericas/pasta.webp"
      },
      {
        id: "paella-valenciana",
        title: "Paella Valenciana",
        price: "10,00 €",
        description: "Ración de paella valenciana tradicional.",
        image: "assets/comidas/platos-preparados/paella.webp"
      }
    ]
  }
];

const beverageGroups = [
  {
    id: "refrescos",
    category: "Refrescos",
    shortLabel: "Refrescos",
    items: [
      { id: "agua", title: "Agua", price: "2,50 €", description: "Agua mineral.", image: "assets/bebidas/refrescos/agua.webp" },
      { id: "agua-gas", title: "Agua con gas", price: "3,00 €", description: "Agua con gas.", image: "assets/bebidas/refrescos/aguacongaslata.webp" },
      { id: "pepsi", title: "Pepsi", price: "3,00 €", description: "Refresco Pepsi.", image: "assets/bebidas/refrescos/pepsilata.webp" },
      { id: "pepsi-zero", title: "Pepsi Zero", price: "3,00 €", description: "Refresco Pepsi Zero.", image: "assets/bebidas/refrescos/pepsizerolata.webp" },
      { id: "schweppes-naranja", title: "Schweppes Naranja", price: "3,00 €", description: "Refresco de naranja.", image: "assets/bebidas/refrescos/shweppesnaranjalata.webp" },
      { id: "schweppes-limon", title: "Schweppes Limón", price: "3,00 €", description: "Refresco de limón.", image: "assets/bebidas/refrescos/shweppeslimonlata.webp" },
      { id: "sevenup", title: "SevenUp", price: "3,00 €", description: "Refresco SevenUp.", image: "assets/bebidas/refrescos/sevenuplata.webp" },
      { id: "tonica-schweppes", title: "Tónica Schweppes", price: "3,00 €", description: "Tónica Schweppes.", image: "assets/bebidas/refrescos/tonicashweppeslata.webp" },
      { id: "aquarade-limon", title: "Aquarade Limón", price: "3,50 €", description: "Bebida isotónica de limón.", image: "assets/bebidas/refrescos/aquaradelimonlata.webp" },
      { id: "aquarade-naranja", title: "Aquarade Naranja", price: "3,50 €", description: "Bebida isotónica de naranja.", image: "assets/bebidas/refrescos/aquaradenaranjalata.webp" },
      { id: "lipton-limon", title: "Lipton Limón", price: "3,50 €", description: "Té frío de limón.", image: "assets/bebidas/refrescos/liptonlimonlata.webp" },
      { id: "redbull", title: "Redbull", price: "3,50 €", description: "Bebida energética.", image: "assets/bebidas/refrescos/redbull.webp" },
      { id: "zumos", title: "Zumos", price: "2,50 €", description: "Zumos variados.", image: "assets/bebidas/refrescos/zumoslata.webp" }
    ]
  },
  {
    id: "cafes",
    category: "Cafés",
    shortLabel: "Cafés",
    items: [
      { id: "cafe-solo", title: "Café solo", price: "2,00 €", description: "Café solo.", image: "assets/bebidas/cafes/cafe-solo.webp" },
      { id: "cortado", title: "Cortado", price: "2,30 €", description: "Café cortado.", image: "assets/bebidas/cafes/cortado.webp" },
      { id: "bombon", title: "Bombón", price: "2,40 €", description: "Café bombón.", image: "assets/bebidas/cafes/bombon.webp" },
      { id: "cafe-con-leche", title: "Café con leche", price: "2,60 €", description: "Café con leche.", image: "assets/bebidas/cafes/cafe-con-leche.webp" },
      { id: "americano", title: "Americano", price: "2,30 €", description: "Café americano.", image: "assets/bebidas/cafes/americano.webp" },
      { id: "infusiones-tes", title: "Infusiones o tés", price: "2,10 €", description: "Infusiones o tés variados.", image: "assets/bebidas/cafes/infusiones-tes.webp" },
      { id: "carajillo", title: "Carajillo", price: "2,50 €", description: "Carajillo.", image: "assets/bebidas/cafes/carajillo.webp" }
    ]
  },
  {
    id: "cerveza",
    category: "Cerveza",
    shortLabel: "Cerveza",
    items: [
      { id: "aguila-dorada", title: "Águila dorada", price: "3,50 €", description: "Cerveza Águila dorada.", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "radler", title: "Radler", price: "3,50 €", description: "Cerveza Radler.", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "cerveza-00", title: "Cerveza 0,0", price: "3,50 €", description: "Cerveza sin alcohol.", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "cerveza-sin-gluten", title: "Cerveza sin gluten", price: "4,00 €", description: "Cerveza sin gluten.", image: "assets/bebidas/cerveza/cervezacarton.webp" },
      { id: "amstel-oro-lata", title: "Amstel oro lata", price: "3,50 €", description: "Amstel Oro en lata.", image: "assets/bebidas/cerveza/amstel-oro-lata.webp" }
    ]
  },
  {
    id: "vermouth-copas",
    category: "Vermouth y copas",
    shortLabel: "Vermouth",
    items: [
      { id: "vermouth", title: "Vermouth", price: "5,00 €", description: "Rojo o blanco.", image: "assets/bebidas/vermouth-copas/vermutyzaguirre.webp" },
      { id: "combinados", title: "Combinados", price: "9,00 €", description: "Masters, Larios 12, Barceló, Brugal, Jony Walker, Moscovscaya, Dyc, Deseen y similares.", image: "assets/bebidas/vermouth-copas/combinados.webp" },
      { id: "premium-desde", title: "Copas premium", price: "Desde 11,00 €", description: "Roku, Bulldog, Martin Miller's, 1888, Zacapa, Black Label, Macallan 12 y similares.", image: "assets/bebidas/vermouth-copas/copas-premium.webp" },
      { id: "chupitos", title: "Chupitos", price: "3,50 €", description: "Chupitos.", image: "assets/bebidas/vermouth-copas/chupitos.webp" },
      { id: "chupitos-premium", title: "Chupitos premium", price: "6,00 €", description: "Chupitos premium.", image: "assets/bebidas/vermouth-copas/chupitos-premium.webp" },
      { id: "licores", title: "Licores", price: "6,00 €", description: "Baileys, licor de hierbas y similares.", image: "assets/bebidas/vermouth-copas/licores.webp" }
    ]
  },
  {
    id: "vinos-blancos",
    category: "Vinos blancos",
    shortLabel: "Blancos",
    items: [
      { id: "ceremonia-sauvignon-blanc", title: "Ceremonia Sauvignon Blanc", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas/vinos/ceremonia-sauvignon-blanc.webp" },
      { id: "ramon-bilbao-verdejo", title: "Ramón Bilbao Verdejo", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino blanco Ramón Bilbao Verdejo.", image: "assets/bebidas/vinos/ramon-bilbao-verdejo.webp" },
      { id: "paco-lola-albarino", title: "Paco & Lola N12", price: "Copa 4,80 € | Botella 22,00 €", description: "Albariño Paco & Lola.", image: "assets/bebidas/vinos/pl.webp" }
    ]
  },
  {
    id: "vinos-tintos",
    category: "Vinos tintos",
    shortLabel: "Tintos",
    items: [
      { id: "ceremonia-cabernet-sauvignon", title: "Ceremonia Cabernet Sauvignon", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas/vinos/ceremonia-cabernet-sauvignon.webp" },
      { id: "ramon-bilbao-crianza-rioja", title: "Ramón Bilbao Crianza Rioja", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino tinto Ramón Bilbao Crianza Rioja.", image: "assets/bebidas/vinos/ramon-bilbao-crianza-rioja.webp" },
      { id: "ceramic-monastrell-vicente-gandia", title: "Ceramic Monastrell Vicente Gandía", price: "Copa 4,80 € | Botella 22,00 €", description: "Vino tinto Monastrell Vicente Gandía.", image: "assets/bebidas/vinos/ceramic-monastrell-vicente-gandia.webp" }
    ]
  },
  {
    id: "vinos-rosados",
    category: "Vinos rosados",
    shortLabel: "Rosados",
    items: [
      { id: "ceremonia-bobal-rose", title: "Ceremonia Bobal Rosé", price: "Copa 4,00 € | Botella 20,00 €", description: "Bodega Vicente Gandía.", image: "assets/bebidas/vinos/ceremonia-bobal-rose.webp" }
    ]
  },
  {
    id: "cavas-espumosos",
    category: "Cavas y espumosos",
    shortLabel: "Cavas",
    items: [
      { id: "cava-patacona-brut", title: "Cava Patacona Brut", price: "Copa 5,00 € | Botella 30,00 €", description: "Cava Patacona Brut.", image: "assets/bebidas/cavas-espumosos/cavapataconabrut.webp" },
      { id: "cava-lola", title: "Cava Lola", price: "Botella 40,00 €", description: "Bodega Paco & Lola.", image: "assets/bebidas/cavas-espumosos/cavalola.webp" },
      { id: "moet-chandon", title: "Moet & Chandon", price: "Botella 110,00 €", description: "Champagne Moet & Chandon.", image: "assets/bebidas/cavas-espumosos/moet-chandon.webp" },
      { id: "moet-chandon-rose", title: "Moet & Chandon Rosé", price: "Botella 130,00 €", description: "Champagne Moet & Chandon Rosé.", image: "assets/bebidas/cavas-espumosos/moet-chandon-rose.webp" },
      { id: "moet-chandon-ice", title: "Moet & Chandon Ice", price: "Botella 150,00 €", description: "Champagne Moet & Chandon Ice.", image: "assets/bebidas/cavas-espumosos/moet-chandon-ice.webp" }
    ]
  }
];

const granizadosSmoothiesGroups = [
  {
    id: "granizados-smoothies-frappes",
    category: "Smoothies y Frappés",
    shortLabel: "Smoothies",
    items: [
      {
        id: "smoothie-pina-coco",
        title: "Smoothie Piña & Coco",
        price: "7,00 €",
        description: "Smoothie tropical de piña y coco.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/smoothie-pina-coco.webp"
      },
      {
        id: "smoothie-melon",
        title: "Smoothie Melón",
        price: "7,00 €",
        description: "Smoothie suave y refrescante de melón.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/smoothie-melon.webp"
      },
      {
        id: "smoothie-maracuya-mango",
        title: "Smoothie Maracuyá & Mango",
        price: "7,00 €",
        description: "Smoothie exótico de maracuyá y mango.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/smoothie-maracuya-mango.webp"
      },
      {
        id: "smoothie-mango",
        title: "Smoothie Mango",
        price: "7,00 €",
        description: "Smoothie cremoso de mango.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/smoothie-mango.webp"
      },
      {
        id: "frappe-chocolate",
        title: "Frappé Chocolate",
        price: "7,00 €",
        description: "Frappé cremoso de chocolate.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/frappe-chocolate.webp"
      },
      {
        id: "frappe-vainilla",
        title: "Frappé Vainilla",
        price: "7,00 €",
        description: "Frappé suave de vainilla.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/frappe-vainilla.webp"
      },
      {
        id: "frappe-yogurt",
        title: "Frappé Yogurt",
        price: "7,00 €",
        description: "Frappé fresco de yogurt.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/frappe-yogurt.webp"
      },
      {
        id: "frappe-cafe",
        title: "Frappé Café",
        price: "7,00 €",
        description: "Frappé intenso de café.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/frappe-cafe.webp"
      },
      {
        id: "frappe-cafe-bayleis",
        title: "Frappé Café Bayleis",
        price: "9,00 €",
        description: "Frappé de café con toque de Bayleis.",
        note: "Suplemento 3 € con alcohol.",
        image: "assets/granizados-smoothies/frappe-cafe-bayleis.webp"
      }
    ]
  }
];

const cocktailGroups = [
  {
    id: "cocteles-clasicos",
    category: "Cócteles",
    shortLabel: "Cócteles",
    items: [
      {
        id: "mojito-normal",
        title: "Mojito",
        price: "9,00 €",
        description: "El cóctel cubano más clásico. Ron blanco, lima, hierbabuena, azúcar y soda.",
        image: "assets/cocteles/mojito-normal.webp"
      },
      {
        id: "mojito-sabores",
        title: "Mojito Sabores",
        price: "9,00 €",
        description: "La versión afrutada y refrescante del mojito. Ron blanco, fruta a elegir, lima, hierbabuena y soda.",
        image: "assets/cocteles/mojito-sabores.webp"
      },
      {
        id: "daikiri-frozen",
        title: "Daiquiri",
        price: "9,00 €",
        description: "Un cóctel fresco, cítrico y equilibrado. Ron blanco, zumo de lima y azúcar.",
        image: "assets/cocteles/daikiri-frozen.webp"
      },
      {
        id: "daiquiri-sabores",
        title: "Daiquiri Sabores",
        price: "9,00 €",
        description: "La versión afrutada del daiquiri clásico. Ron blanco, fruta a elegir, lima y azúcar.",
        image: "assets/cocteles/daikirisabores.webp"
      },
      {
        id: "pina-colada",
        title: "Piña Colada",
        price: "9,00 €",
        description: "El cóctel tropical más cremoso. Ron, crema de coco y zumo de piña.",
        image: "assets/cocteles/pina-colada.webp"
      },
      {
        id: "caipirinha",
        title: "Caipirinha",
        price: "9,00 €",
        description: "El clásico brasileño intenso y cítrico. Cachaça, lima, azúcar y hielo picado.",
        image: "assets/cocteles/caipirinha.webp"
      },
      {
        id: "caipiroska",
        title: "Caipiroska",
        price: "9,00 €",
        description: "La versión con vodka de la caipirinha. Vodka, lima, azúcar y hielo picado.",
        image: "assets/cocteles/caipiroska.webp"
      },
      {
        id: "aperol-spritz",
        title: "Aperol Spritz",
        price: "7,00 €",
        description: "El spritz original italiano. Prosecco, Aperol, soda y una rodaja de naranja.",
        image: "assets/cocteles/aperolspritz.webp"
      },
      {
        id: "crodino-sin-alcohol",
        title: "Crodino sin alcohol",
        price: "7,00 €",
        description: "El spritz italiano sin alcohol. Crodino, soda, hielo y una rodaja de naranja.",
        image: "assets/cocteles/crodinosinalcohol.webp"
      },
      {
        id: "sarti-spritz",
        title: "Sarti Spritz",
        price: "9,00 €",
        description: "El spritz afrutado y refrescante. Prosecco, Sarti, soda y una rodaja de lima.",
        image: "assets/cocteles/sartispritz.webp"
      },
      {
        id: "mondoro-hugo-spritz",
        title: "Mondoro Hugo Spritz",
        price: "9,00 €",
        description: "Un spritz floral y aromático. Prosecco, Mondoro, soda y hojas de menta.",
        image: "assets/cocteles/mondorohugospritz.webp"
      }
    ]
  }
];

const sangriaGroups = [
  {
    id: "sangrias-carta",
    category: "Sangrías",
    shortLabel: "Sangrías",
    items: [
      {
        id: "tinto-verano-vaso",
        title: "Tinto verano vaso",
        price: "5,00 €",
        description: "Tinto de verano servido en vaso.",
        image: "assets/sangrias/tinto-verano-vaso.webp"
      },
      {
        id: "tinto-verano-jarra",
        title: "Tinto verano jarra",
        price: "20,00 €",
        description: "Tinto de verano servido en jarra.",
        image: "assets/sangrias/tinto-verano-jarra.webp"
      },
      {
        id: "sangria-vino-blanco",
        title: "Sangría vino blanco",
        price: "30,00 €",
        description: "Sangría preparada con vino blanco.",
        image: "assets/sangrias/sangria-vino-blanco.webp"
      },
      {
        id: "sangria-vino-tinto",
        title: "Sangría vino tinto",
        price: "30,00 €",
        description: "Sangría preparada con vino tinto.",
        image: "assets/sangrias/sangria-vino-tinto.webp"
      },
      {
        id: "sangria-cava",
        title: "Sangría de cava",
        price: "35,00 €",
        description: "Sangría preparada con cava.",
        image: "assets/sangrias/sangria-cava.webp"
      },
      {
        id: "agua-valencia",
        title: "Agua de Valencia",
        price: "35,00 €",
        description: "Cóctel valenciano fresco y cítrico.",
        image: "assets/sangrias/agua-valencia.webp"
      }
    ]
  }
];

const productImageOverrides = {
  "desayuno-tradicional": "assets/comidas/desayuno/desayunotradicional.webp",
  "desayuno-supreme": "assets/comidas/desayuno/28_05_26_TAVOLAWEB-161.jpg",
  "frutos-secos": "assets/comidas/aperitivo-picar/frutossecos.webp",
  papas: "assets/comidas/aperitivo-picar/papas.webp",
  aceitunas: "assets/comidas/aperitivo-picar/aceitunas.webp",
  "barqueta-mini-fuets": "assets/comidas/aperitivo-picar/barquetademinifuets.webp",
  "papas-mejillones": "assets/comidas/aperitivo-picar/papasconmejillones.webp",
  "papas-boquerones": "assets/comidas/aperitivo-picar/papasconboquerones.webp",
  "papas-limon-berberechos": "assets/comidas/aperitivo-picar/papasfresquitasconlimonyberberechos.webp",
  "pulpo-pimenton": "assets/comidas/tapas/pulpo-patatas-pobre.webp",
  "ensaladilla-rusa": "assets/comidas/tapas/28_05_26_TAVOLAWEB-94.jpg",
  "ajo-arriero": "assets/comidas/tapas/ajoarriero.webp",
  "nachos-verano": "assets/comidas/tapas/nachosdeverano.webp",
  "nachos-tartar-salmon": "assets/comidas/tapas/nachoscontartardesalmon.webp",
  "tabla-jamon-iberico-duroc": "assets/comidas/tapas/tablajamonibericoduroc.webp",
  "tabla-quesos-valencianos": "assets/comidas/tapas/tablaquesosvalencianos.webp",
  "tortilla-jamon": "assets/comidas/tapas/minitortillaconjamon.webp",
  "mejillones-vapor-limon": "assets/comidas/tapas/mejillonesalvaporconlimon.webp",
  "bocadillo-escalivada": "assets/comidas/bocadillos/bocadilloescalivada.webp",
  "magro-tomate": "assets/comidas/bocadillos/28_05_26_TAVOLAWEB-84.jpg",
  "lomo-ajos-tiernos": "assets/comidas/bocadillos/lomoconajostiernos.webp",
  "bocadillo-atun-tomate": "assets/comidas/bocadillos/bocadillo-atun-tomate.webp",
  margarita: "assets/comidas/pizzas/margarita.webp",
  tartufata: "assets/comidas/pizzas/tartufata.webp",
  "jamon-queso": "assets/comidas/pizzas/jamonyqueso.webp",
  "cuatro-quesos": "assets/comidas/pizzas/4quesos.webp",
  peperoni: "assets/comidas/pizzas/28_05_26_TAVOLAWEB-218.jpg",
  canibal: "assets/comidas/pizzas/canibal.webp",
  "ensalada-quinoa": "assets/comidas/platos-preparados/ensalada-quinoa-1.webp",
  "costillas-barbacoa": "assets/comidas/platos-preparados/costillasalabarbacoa.webp",
  "salmon-teriyaki": "assets/comidas/platos-preparados/salmonteriyakiconarroz.webp",
  "pollo-curry": "assets/comidas/platos-preparados/polloalcurryconarroz.webp",
  "macarrones-bolonesa": "assets/comidas/platos-preparados/macarronesbolonesa.webp",
  "paella-valenciana": "assets/comidas/platos-preparados/paella.webp"
};

function applyProductImageOverrides(groups) {
  groups.forEach((group) => {
    group.items.forEach((item) => {
      if (productImageOverrides[item.id]) {
        item.image = productImageOverrides[item.id];
      }
    });
  });
}

[
  foodGroups,
  beverageGroups,
  granizadosSmoothiesGroups,
  cocktailGroups,
  sangriaGroups
].forEach(applyProductImageOverrides);

const hamacaTariffs = [
  {
    id: "todo-dia",
    icon: "full-day",
    name: "Todo el día",
    schedule: "10:00h a 20:00h",
    price: "45€"
  },
  {
    id: "mananas",
    icon: "morning",
    name: "Turno mañanas",
    schedule: "10:00h a 15:00h",
    price: "25€"
  },
  {
    id: "tardes",
    icon: "afternoon",
    name: "Turno tardes",
    schedule: "15:00h a 20:00h",
    price: "25€"
  }
];

const hamacaRules = [
  "Máximo 3 personas por sombrilla.",
  "Obligatorio 2 sombrillas cuando son 4 personas.",
  "La empresa se reserva el derecho de admisión a niños hasta 14 años.",
  "No se permite acceder a la zona de hamacas con bebida ni comida del exterior que no sea adquirida en El Tavola Chiringo.",
  "Se desalojará la sombrilla y las hamacas 15 minutos antes de terminar el turno de la mañana con el fin de limpiar y acondicionar para el siguiente cliente.",
  "No se permite acceder con perros a la zona de hamacas.",
  "Cualquier conducta inapropiada que moleste al resto de clientes será expulsada de la zona del beach club."
];

const hamacaBenefits = [
  "Puedes pedir directamente desde el código QR de tu sombrilla.",
  "Puedes pedir directamente a nuestro personal de la zona de hamacas."
];

const hamacaLanguageCopy = {
  es: {
    tariffs: {
      mananas: "Turno mañanas",
      tardes: "Turno tardes",
      "todo-dia": "Todo el día"
    },
    rules: hamacaRules,
    benefits: hamacaBenefits
  },
  en: {
    tariffs: {
      mananas: "Morning session",
      tardes: "Afternoon session",
      "todo-dia": "Full day"
    },
    rules: [
      "Maximum 3 people per umbrella.",
      "2 umbrellas are required for 4 people.",
      "The company reserves the right of admission for children up to 14 years old.",
      "Access to the sunbed area with outside food or drinks not purchased at El Tavola Chiringo is not allowed.",
      "The umbrella and sunbeds must be vacated 15 minutes before the morning session ends so the area can be cleaned and prepared for the next guest.",
      "Dogs are not allowed in the sunbed area.",
      "Any inappropriate behaviour that disturbs other guests will result in removal from the beach club area."
    ],
    benefits: [
      "You can order directly from the QR code on your umbrella.",
      "You can order directly from our staff in the sunbed area."
    ]
  },
  de: {
    tariffs: {
      mananas: "Vormittag",
      tardes: "Nachmittag",
      "todo-dia": "Ganzer Tag"
    },
    rules: [
      "Maximal 3 Personen pro Sonnenschirm.",
      "Bei 4 Personen sind 2 Sonnenschirme verpflichtend.",
      "Das Unternehmen behält sich das Recht vor, Kindern bis 14 Jahre den Zutritt zu verweigern.",
      "Der Zugang zum Liegebereich mit Speisen oder Getränken von außerhalb, die nicht im El Tavola Chiringo gekauft wurden, ist nicht erlaubt.",
      "Sonnenschirm und Liegen müssen 15 Minuten vor Ende des Vormittagsturnus geräumt werden, damit der Bereich gereinigt und für den nächsten Gast vorbereitet werden kann.",
      "Hunde sind im Liegebereich nicht erlaubt.",
      "Jedes unangemessene Verhalten, das andere Gäste stört, führt zum Ausschluss aus dem Beach-Club-Bereich."
    ],
    benefits: [
      "Du kannst direkt über den QR-Code an deinem Sonnenschirm bestellen.",
      "Du kannst direkt bei unserem Personal im Liegebereich bestellen."
    ]
  }
};

const allergenData = {
  "desayuno-tradicional": {
    title: "Desayuno tradicional",
    entries: [
      {
        name: "Tostada aceite/tomate",
        contains: ["Gluten"],
        traces: []
      },
      {
        name: "Tostada mantequilla",
        contains: ["Gluten", "Lácteos"],
        traces: []
      },
      {
        name: "Bollería",
        contains: ["Gluten", "Lácteos", "Huevo"],
        traces: ["Frutos secos"]
      }
    ]
  },
  "desayuno-supreme": {
    title: "Desayuno Suprem",
    entries: [
      {
        name: "Tostada salmón",
        contains: ["Gluten", "Pescado"],
        traces: []
      }
    ]
  },
  "frutos-secos": {
    contains: ["Frutos secos"],
    traces: []
  },
  aceitunas: {
    contains: [],
    traces: ["Sulfitos"]
  },
  "barqueta-mini-fuets": {
    title: "Mini fuets",
    contains: [],
    traces: ["Lácteos", "Sulfitos"]
  },
  "papas-mejillones": {
    title: "Papas + mejillones",
    contains: ["Moluscos"],
    traces: ["Sulfitos"]
  },
  "pulpo-pimenton": {
    title: "Pulpo al pimentón con patatas a lo pobre",
    contains: ["Moluscos"],
    traces: ["Gluten", "Sulfitos"]
  },
  "nachos-verano": {
    contains: ["Lácteos"],
    traces: ["Gluten"]
  },
  "nachos-tartar-salmon": {
    title: "Nachos con tartar",
    contains: ["Huevo", "Pescado", "Soja"],
    traces: ["Gluten"]
  },
  "tabla-quesos-valencianos": {
    title: "Quesos",
    contains: ["Lácteos"],
    traces: []
  },
  "tortilla-jamon": {
    contains: ["Huevo"],
    traces: ["Sulfitos"]
  },
  "servicio-pan": {
    title: "Pan",
    contains: ["Gluten"],
    traces: []
  },
  "servicio-picos-pan-adicional": {
    title: "Pan y picos",
    contains: ["Gluten"],
    traces: []
  },
  "bocadillo-escalivada": {
    contains: ["Gluten"],
    traces: []
  },
  "magro-tomate": {
    contains: ["Gluten"],
    traces: []
  },
  "lomo-ajos-tiernos": {
    contains: ["Gluten"],
    traces: []
  },
  "bocadillo-atun-tomate": {
    contains: ["Gluten", "Pescado"],
    traces: []
  },
  margarita: {
    title: "Pizza margarita",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  tartufata: {
    title: "Pizza tartufata",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  "jamon-queso": {
    title: "Pizza jamón y queso",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  "cuatro-quesos": {
    title: "Pizza 4 quesos",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  peperoni: {
    title: "Pizza peperoni",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  canibal: {
    title: "Pizza canibal",
    contains: ["Gluten", "Lácteos"],
    traces: []
  },
  "ensalada-quinoa": {
    contains: ["Lácteos"],
    traces: []
  },
  "salmon-teriyaki": {
    contains: ["Pescado", "Soja"],
    traces: ["Gluten"]
  },
  "pollo-curry": {
    contains: [],
    traces: ["Lácteos"]
  },
  "macarrones-bolonesa": {
    contains: ["Gluten"],
    traces: []
  }
};

const menuSections = [
  {
    id: "bebidas",
    category: "Bebidas",
    shortLabel: "Bebidas",
    groups: beverageGroups
  },
  {
    id: "cocteles",
    category: "Cócteles y Spritz",
    shortLabel: "Cócteles y Spritz",
    groups: cocktailGroups
  },
  {
    id: "granizados-smoothies",
    category: "Smoothies y Frappés",
    shortLabel: "Smoothies y Frappés",
    groups: granizadosSmoothiesGroups
  },
  {
    id: "sangrias",
    category: "Sangrías",
    shortLabel: "Sangrías",
    groups: sangriaGroups
  },
  {
    id: "comidas",
    category: "Comida",
    shortLabel: "Comida",
    groups: foodGroups
  },
  {
    id: "tarifas-hamacas",
    category: "Zona Beach Club",
    shortLabel: "Zona Beach Club",
    groups: []
  }
];

const translations = {
  es: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Idioma",
      topTabsLabel: "Categorías de la carta",
      bottomTabsLabel: "Cambiar sección de la carta",
      menuLayoutLabel: "Carta interactiva",
      menuListLabel: "Productos de la categoría seleccionada",
      imageFrameLabel: "Ampliar imagen del plato",
      lightboxLabel: "Imagen ampliada",
      closeLightboxLabel: "Cerrar imagen ampliada",
      viewSection: "Ver sección",
      sectionEyebrow: "Sección",
      productSingular: "producto",
      productPlural: "productos",
      pending: "Pendiente",
      pendingTitle: "Sección pendiente",
      pendingCopy: "Todavía no hay productos cargados en {section}.",
      dishSelected: "Plato seleccionado",
      tariffPlural: "tarifas",
      scheduleLabel: "Horario",
      includesTitle: "Incluye 2 bebidas",
      drinksList: "Cerveza, tinto verano, café, refresco, vino o vermut",
      reserveLabel: "Reservar",
      rulesTitle: "Normas Beach Club",
      infoTitle: "Información adicional",
      selectTurnLabel: "Selecciona turno",
      priceLabel: "Precio por sombrilla y hamacas"
    },
    sections: {
      bebidas: { category: "Bebidas", shortLabel: "Bebidas" },
      cocteles: { category: "Cócteles y Spritz", shortLabel: "Cócteles y Spritz" },
      "granizados-smoothies": { category: "Smoothies y Frappés", shortLabel: "Smoothies y Frappés" },
      sangrias: { category: "Sangrías", shortLabel: "Sangrías" },
      comidas: { category: "Comida", shortLabel: "Comida" },
      "tarifas-hamacas": { category: "Zona Beach Club", shortLabel: "Zona Beach Club" }
    },
    groups: {
      desayuno: { category: "Desayuno", shortLabel: "Desayuno" },
      picar: { category: "Aperitivo y picar", shortLabel: "Picar" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Bocadillos", shortLabel: "Bocatas" },
      pizzas: { category: "Pizzas al horno de piedra", shortLabel: "Pizzas" },
      platos: { category: "Platos preparados", shortLabel: "Platos" },
      refrescos: { category: "Refrescos", shortLabel: "Refrescos" },
      cafes: { category: "Cafés", shortLabel: "Cafés" },
      cerveza: { category: "Cerveza", shortLabel: "Cerveza" },
      "vermouth-copas": { category: "Vermouth y copas", shortLabel: "Vermouth" },
      "vinos-blancos": { category: "Vinos blancos", shortLabel: "Blancos" },
      "vinos-tintos": { category: "Vinos tintos", shortLabel: "Tintos" },
      "vinos-rosados": { category: "Vinos rosados", shortLabel: "Rosados" },
      "cavas-espumosos": { category: "Cavas y espumosos", shortLabel: "Cavas" },
      "granizados-smoothies-frappes": { category: "Smoothies y Frappés", shortLabel: "Smoothies" },
      "cocteles-clasicos": { category: "Cócteles", shortLabel: "Cócteles" },
      "sangrias-carta": { category: "Sangrías", shortLabel: "Sangrías" }
    },
    items: {
      "desayuno-tradicional": {
        title: "Desayuno tradicional",
        description: "Café o té/infusión + zumo + tostada a elegir: aceite, mermelada, tomate, mantequilla o bollería.",
        note: "Hasta las 12:00h"
      },
      "desayuno-supreme": {
        title: "Desayuno Suprem",
        description: "Café o té/infusión + zumo + tostada a elegir: tostada jamón con tomate, salmón y aguacate, o atún con tomate.",
        note: "Hasta las 12:00h"
      },
      "frutos-secos": {
        title: "Frutos secos",
        description: "Aperitivo clásico para acompañar la bebida."
      },
      papas: {
        title: "Papas",
        description: "Patatas chips crujientes."
      },
      aceitunas: {
        title: "Aceitunas",
        description: "Aceitunas servidas como aperitivo."
      },
      "barqueta-mini-fuets": {
        title: "Barqueta de mini fuets",
        description: "Mini fuets servidos en barqueta."
      },
      "papas-mejillones": {
        title: "Papas con mejillones",
        description: "Papas acompañadas de mejillones."
      },
      "papas-boquerones": {
        title: "Papas con boquerones",
        description: "Papas acompañadas de boquerones."
      },
      "papas-limon-berberechos": {
        title: "Papas fresquitas con limón y berberechos",
        description: "Papas con toque fresco de limón y berberechos."
      },
      "pulpo-pimenton": {
        title: "Pulpo al pimentón con patatas a lo pobre",
        description: "Pulpo al pimentón acompañado de patatas a lo pobre."
      },
      "ensaladilla-rusa": {
        title: "Ensaladilla rusa",
        description: "Ensaladilla rusa clásica."
      },
      "ajo-arriero": {
        title: "Ajo arriero",
        description: "Tapa tradicional de ajo arriero."
      },
      "nachos-verano": {
        title: "Nachos de verano",
        description: "Crema agria, guacamole y salsa mexicana."
      },
      "nachos-tartar-salmon": {
        title: "Nachos con tartar de salmón",
        description: "Tartar de salmón, alga wakame y salsa Tavola."
      },
      "tabla-jamon-iberico-duroc": {
        title: "Tabla jamón ibérico duroc",
        description: "Tabla de jamón ibérico duroc."
      },
      "tabla-quesos-valencianos": {
        title: "Tabla quesos valencianos",
        description: "Selección de quesos valencianos."
      },
      "tortilla-jamon": {
        title: "Mini Tortilla con jamón",
        description: "Mini tortilla acompañada de jamón."
      },
      "mejillones-vapor-limon": {
        title: "Mejillones al vapor con limón",
        description: "Mejillones al vapor con un toque de limón."
      },
      "servicio-pan": {
        title: "Servicio de pan",
        description: "Pan para acompañar."
      },
      "servicio-picos-pan-adicional": {
        title: "Servicio de picos y pan adicional",
        description: "Picos y pan extra."
      },
      "salsas-adicionales": {
        title: "Salsas adicionales",
        description: "Salsas extra a elección del cliente."
      },
      "bocadillo-escalivada": {
        title: "Bocadillo escalivada",
        description: "Bocadillo de escalivada.",
        note: "Acompañados con papas."
      },
      "magro-tomate": {
        title: "Magro con tomate",
        description: "Bocadillo de magro con tomate.",
        note: "Acompañados con papas."
      },
      "lomo-ajos-tiernos": {
        title: "Lomo con ajos tiernos",
        description: "Bocadillo de lomo con ajos tiernos.",
        note: "Acompañados con papas."
      },
      "bocadillo-atun-tomate": {
        title: "Bocadillo de atún con tomate",
        description: "Bocadillo de atún con tomate.",
        note: "Acompañados con papas."
      },
      margarita: {
        title: "Margarita",
        description: "Pizza clásica con tomate, mozzarella y albahaca."
      },
      tartufata: {
        title: "Tartufata",
        description: "Jamón, queso y trufa."
      },
      "jamon-queso": {
        title: "Jamón y queso",
        description: "Pizza de jamón y queso."
      },
      "cuatro-quesos": {
        title: "4 quesos",
        description: "Pizza con mezcla de cuatro quesos."
      },
      peperoni: {
        title: "Peperoni",
        description: "Pizza con peperoni."
      },
      canibal: {
        title: "Canibal",
        description: "Bacon, peperoni y jamón york."
      },
      "ensalada-quinoa": {
        title: "Ensalada de quinoa",
        description: "Ración de ensalada de quinoa."
      },
      "costillas-barbacoa": {
        title: "Costillas a la barbacoa",
        description: "Ración de costillas con salsa barbacoa."
      },
      "salmon-teriyaki": {
        title: "Salmón Teriyaki",
        description: "Ración de salmón con salsa teriyaki servido con arroz."
      },
      "pollo-curry": {
        title: "Pollo al Curry con arroz",
        description: "Ración de pollo al curry servido con arroz."
      },
      "macarrones-bolonesa": {
        title: "Macarrones Boloñesa",
        description: "Ración de macarrones con salsa boloñesa."
      },
      "paella-valenciana": {
        title: "Paella Valenciana",
        description: "Ración de paella valenciana tradicional."
      },
      "smoothie-pina-coco": {
        title: "Smoothie Piña & Coco",
        description: "Smoothie tropical de piña y coco.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-melon": {
        title: "Smoothie Melón",
        description: "Smoothie suave y refrescante de melón.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-maracuya-mango": {
        title: "Smoothie Maracuyá & Mango",
        description: "Smoothie exótico de maracuyá y mango.",
        note: "Suplemento 3 € con alcohol."
      },
      "smoothie-mango": {
        title: "Smoothie Mango",
        description: "Smoothie cremoso de mango.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-chocolate": {
        title: "Frappé Chocolate",
        description: "Frappé cremoso de chocolate.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-vainilla": {
        title: "Frappé Vainilla",
        description: "Frappé suave de vainilla.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-yogurt": {
        title: "Frappé Yogurt",
        description: "Frappé fresco de yogurt.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-cafe": {
        title: "Frappé Café",
        description: "Frappé intenso de café.",
        note: "Suplemento 3 € con alcohol."
      },
      "frappe-cafe-bayleis": {
        title: "Frappé Café Bayleis",
        description: "Frappé de café con toque de Bayleis.",
        note: "Suplemento 3 € con alcohol."
      },
      "mojito-normal": {
        title: "Mojito",
        description: "El cóctel cubano más clásico. Ron blanco, lima, hierbabuena, azúcar y soda."
      },
      "mojito-sabores": {
        title: "Mojito Sabores",
        description: "La versión afrutada y refrescante del mojito. Ron blanco, fruta a elegir, lima, hierbabuena y soda."
      },
      "daikiri-frozen": {
        title: "Daiquiri",
        description: "Un cóctel fresco, cítrico y equilibrado. Ron blanco, zumo de lima y azúcar."
      },
      "daiquiri-sabores": {
        title: "Daiquiri Sabores",
        description: "La versión afrutada del daiquiri clásico. Ron blanco, fruta a elegir, lima y azúcar."
      },
      "pina-colada": {
        title: "Piña Colada",
        description: "El cóctel tropical más cremoso. Ron, crema de coco y zumo de piña."
      },
      caipirinha: {
        title: "Caipirinha",
        description: "El clásico brasileño intenso y cítrico. Cachaça, lima, azúcar y hielo picado."
      },
      caipiroska: {
        title: "Caipiroska",
        description: "La versión con vodka de la caipirinha. Vodka, lima, azúcar y hielo picado."
      },
      "aperol-spritz": {
        title: "Aperol Spritz",
        description: "El spritz original italiano. Prosecco, Aperol, soda y una rodaja de naranja."
      },
      "crodino-sin-alcohol": {
        title: "Crodino sin alcohol",
        description: "El spritz italiano sin alcohol. Crodino, soda, hielo y una rodaja de naranja."
      },
      "sarti-spritz": {
        title: "Sarti Spritz",
        description: "El spritz afrutado y refrescante. Prosecco, Sarti, soda y una rodaja de lima."
      },
      "mondoro-hugo-spritz": {
        title: "Mondoro Hugo Spritz",
        description: "Un spritz floral y aromático. Prosecco, Mondoro, soda y hojas de menta."
      },
      "tinto-verano-vaso": {
        title: "Tinto verano vaso",
        description: "Tinto de verano servido en vaso."
      },
      "tinto-verano-jarra": {
        title: "Tinto verano jarra",
        description: "Tinto de verano servido en jarra."
      },
      "sangria-vino-blanco": {
        title: "Sangría vino blanco",
        description: "Sangría preparada con vino blanco."
      },
      "sangria-vino-tinto": {
        title: "Sangría vino tinto",
        description: "Sangría preparada con vino tinto."
      },
      "sangria-cava": {
        title: "Sangría de cava",
        description: "Sangría preparada con cava."
      },
      "agua-valencia": {
        title: "Agua de Valencia",
        description: "Cóctel valenciano fresco y cítrico."
      }
    }
  },
  en: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Language",
      topTabsLabel: "Menu categories",
      bottomTabsLabel: "Change menu section",
      menuLayoutLabel: "Interactive menu",
      menuListLabel: "Products in the selected category",
      imageFrameLabel: "Enlarge dish image",
      lightboxLabel: "Enlarged image",
      closeLightboxLabel: "Close enlarged image",
      viewSection: "View section",
      sectionEyebrow: "Section",
      productSingular: "product",
      productPlural: "products",
      pending: "Pending",
      pendingTitle: "Section pending",
      pendingCopy: "There are no products loaded in {section} yet.",
      dishSelected: "Selected dish",
      tariffPlural: "rates",
      scheduleLabel: "Time",
      includesTitle: "Includes 2 drinks",
      drinksList: "Beer, tinto de verano, coffee, soft drink, wine, or vermouth",
      reserveLabel: "Book",
      rulesTitle: "Beach Club Rules",
      infoTitle: "Additional information",
      selectTurnLabel: "Select session",
      priceLabel: "Price per umbrella and sunbeds"
    },
    sections: {
      bebidas: { category: "Drinks", shortLabel: "Drinks" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Smoothies & Frappés", shortLabel: "Smoothies & Frappés" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" },
      comidas: { category: "Food", shortLabel: "Food" },
      "tarifas-hamacas": { category: "Beach Club Zone", shortLabel: "Beach Club" }
    },
    groups: {
      desayuno: { category: "Breakfast", shortLabel: "Breakfast" },
      picar: { category: "Snacks & nibbles", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Sandwiches", shortLabel: "Sandwiches" },
      pizzas: { category: "Stone oven pizzas", shortLabel: "Pizzas" },
      platos: { category: "Prepared dishes", shortLabel: "Dishes" },
      refrescos: { category: "Soft drinks", shortLabel: "Soft drinks" },
      cafes: { category: "Coffee", shortLabel: "Coffee" },
      cerveza: { category: "Beer", shortLabel: "Beer" },
      "vermouth-copas": { category: "Vermouth & spirits", shortLabel: "Vermouth" },
      "vinos-blancos": { category: "White wines", shortLabel: "Whites" },
      "vinos-tintos": { category: "Red wines", shortLabel: "Reds" },
      "vinos-rosados": { category: "Rosé wines", shortLabel: "Rosés" },
      "cavas-espumosos": { category: "Cavas & sparkling wines", shortLabel: "Cavas" },
      "granizados-smoothies-frappes": { category: "Smoothies & Frappés", shortLabel: "Smoothies" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      agua: { title: "Water", description: "Still mineral water." },
      "agua-gas": { title: "Sparkling water", description: "Sparkling water." },
      pepsi: { title: "Pepsi", description: "Pepsi soft drink." },
      "pepsi-zero": { title: "Pepsi Zero", description: "Pepsi Zero soft drink." },
      "schweppes-naranja": { title: "Schweppes Orange", description: "Orange soft drink." },
      "schweppes-limon": { title: "Schweppes Lemon", description: "Lemon soft drink." },
      sevenup: { title: "SevenUp", description: "SevenUp soft drink." },
      "tonica-schweppes": { title: "Schweppes tonic", description: "Schweppes tonic water." },
      "aquarade-limon": { title: "Aquarade Lemon", description: "Lemon isotonic drink." },
      "aquarade-naranja": { title: "Aquarade Orange", description: "Orange isotonic drink." },
      "lipton-limon": { title: "Lipton Lemon", description: "Lemon iced tea." },
      redbull: { title: "Red Bull", description: "Energy drink." },
      zumos: { title: "Juices", description: "Assorted juices." },
      "cafe-solo": { title: "Espresso", description: "Espresso coffee." },
      cortado: { title: "Cortado", description: "Espresso with a small amount of milk." },
      bombon: { title: "Bombón coffee", description: "Coffee with condensed milk." },
      "cafe-con-leche": { title: "Coffee with milk", description: "Coffee with milk." },
      americano: { title: "Americano", description: "Americano coffee." },
      "infusiones-tes": { title: "Infusions or teas", description: "Assorted infusions or teas." },
      carajillo: { title: "Carajillo", description: "Coffee with a touch of spirit." },
      "aguila-dorada": { title: "Águila Dorada", description: "Águila Dorada beer." },
      radler: { title: "Radler", description: "Radler beer." },
      "cerveza-00": { title: "Alcohol-free beer", description: "Alcohol-free beer." },
      "cerveza-sin-gluten": { title: "Gluten-free beer", description: "Gluten-free beer." },
      "amstel-oro-lata": { title: "Amstel Oro can", description: "Amstel Oro beer can." },
      vermouth: { title: "Vermouth", description: "Red or white." },
      combinados: { title: "Mixed drinks", description: "Masters, Larios 12, Barceló, Brugal, Jony Walker, Moscovscaya, Dyc, Deseen and similar spirits." },
      "premium-desde": { title: "Premium spirits", price: "From 11,00 €", description: "Roku, Bulldog, Martin Miller's, 1888, Zacapa, Black Label, Macallan 12 and similar spirits." },
      chupitos: { title: "Shots", description: "Shots." },
      "chupitos-premium": { title: "Premium shots", description: "Premium shots." },
      licores: { title: "Liqueurs", description: "Baileys, herbal liqueur and similar options." },
      "ceremonia-sauvignon-blanc": { title: "Ceremonia Sauvignon Blanc", price: "Glass 4,00 € | Bottle 20,00 €", description: "Vicente Gandía winery." },
      "ramon-bilbao-verdejo": { title: "Ramón Bilbao Verdejo", price: "Glass 4,80 € | Bottle 22,00 €", description: "Ramón Bilbao Verdejo white wine." },
      "paco-lola-albarino": { title: "Paco & Lola N12", price: "Glass 4,80 € | Bottle 22,00 €", description: "Paco & Lola N12." },
      "ceremonia-cabernet-sauvignon": { title: "Ceremonia Cabernet Sauvignon", price: "Glass 4,00 € | Bottle 20,00 €", description: "Vicente Gandía winery." },
      "ramon-bilbao-crianza-rioja": { title: "Ramón Bilbao Crianza Rioja", price: "Glass 4,80 € | Bottle 22,00 €", description: "Ramón Bilbao Crianza Rioja red wine." },
      "ceramic-monastrell-vicente-gandia": { title: "Ceramic Monastrell Vicente Gandía", price: "Glass 4,80 € | Bottle 22,00 €", description: "Vicente Gandía Monastrell red wine." },
      "ceremonia-bobal-rose": { title: "Ceremonia Bobal Rosé", price: "Glass 4,00 € | Bottle 20,00 €", description: "Vicente Gandía winery." },
      "cava-patacona-brut": { title: "Cava Patacona Brut", price: "Glass 5,00 € | Bottle 30,00 €", description: "Cava Patacona Brut." },
      "cava-lola": { title: "Cava Lola", price: "Bottle 40,00 €", description: "Paco & Lola winery." },
      "moet-chandon": { title: "Moet & Chandon", price: "Bottle 110,00 €", description: "Moet & Chandon champagne." },
      "moet-chandon-rose": { title: "Moet & Chandon Rosé", price: "Bottle 130,00 €", description: "Moet & Chandon Rosé champagne." },
      "moet-chandon-ice": { title: "Moet & Chandon Ice", price: "Bottle 150,00 €", description: "Moet & Chandon Ice champagne." },
      "desayuno-tradicional": {
        title: "Traditional breakfast",
        description: "Coffee or tea/herbal infusion + juice + toast of your choice: olive oil, jam, tomato, butter, or pastry.",
        note: "Until 12:00."
      },
      "desayuno-supreme": {
        title: "Supreme breakfast",
        description: "Coffee or tea/herbal infusion + juice + toast of your choice: ham with tomato, salmon and avocado, or tuna with tomato.",
        note: "Until 12:00."
      },
      "frutos-secos": { title: "Mixed nuts", description: "Classic snack to pair with your drink." },
      papas: { title: "Potato chips", description: "Crispy potato chips." },
      aceitunas: { title: "Olives", description: "Olives served as an aperitif." },
      "barqueta-mini-fuets": { title: "Tray of mini fuets", description: "Mini fuets served in a tray." },
      "papas-mejillones": { title: "Potato chips with mussels", description: "Potato chips served with mussels." },
      "papas-boquerones": { title: "Potato chips with anchovies", description: "Potato chips served with anchovies." },
      "papas-limon-berberechos": { title: "Fresh chips with lemon and cockles", description: "Potato chips with a fresh touch of lemon and cockles." },
      "pulpo-pimenton": { title: "Octopus with paprika and poor man's potatoes", description: "Octopus with paprika served with poor man's potatoes." },
      "ensaladilla-rusa": { title: "Russian salad", description: "Classic Russian salad." },
      "ajo-arriero": { title: "Ajo arriero", description: "Traditional ajo arriero tapa." },
      "nachos-verano": { title: "Summer nachos", description: "Sour cream, guacamole, and Mexican sauce." },
      "nachos-tartar-salmon": { title: "Nachos with salmon tartare", description: "Salmon tartare, wakame seaweed, and Tavola sauce." },
      "tabla-jamon-iberico-duroc": { title: "Iberian Duroc ham board", description: "Board of Iberian Duroc ham." },
      "tabla-quesos-valencianos": { title: "Valencian cheese board", description: "Selection of Valencian cheeses." },
      "tortilla-jamon": { title: "Mini Spanish omelette with ham", description: "Mini Spanish omelette served with ham." },
      "mejillones-vapor-limon": { title: "Steamed mussels with lemon", description: "Steamed mussels with a touch of lemon." },
      "servicio-pan": { title: "Bread service", description: "Bread to accompany your meal." },
      "servicio-picos-pan-adicional": { title: "Breadsticks and extra bread", description: "Extra breadsticks and bread." },
      "salsas-adicionales": { title: "Extra sauces", description: "Extra sauces of the customer's choice." },
      "bocadillo-escalivada": { title: "Escalivada sandwich", description: "Sandwich with escalivada grilled vegetables.", note: "Served with potato chips." },
      "magro-tomate": { title: "Pork with tomato", description: "Pork and tomato sandwich.", note: "Served with potato chips." },
      "lomo-ajos-tiernos": { title: "Pork loin with tender garlic", description: "Pork loin sandwich with tender garlic shoots.", note: "Served with potato chips." },
      "bocadillo-atun-tomate": { title: "Tuna and tomato sandwich", description: "Tuna and tomato sandwich.", note: "Served with potato chips." },
      margarita: { title: "Margherita", description: "Classic pizza with tomato, mozzarella, and basil." },
      tartufata: { title: "Tartufata", description: "Ham, cheese, and truffle." },
      "jamon-queso": { title: "Ham and cheese", description: "Ham and cheese pizza." },
      "cuatro-quesos": { title: "4 cheeses", description: "Pizza with a blend of four cheeses." },
      peperoni: { title: "Pepperoni", description: "Pizza with pepperoni." },
      canibal: { title: "Canibal", description: "Bacon, pepperoni, and York ham." },
      "ensalada-quinoa": { title: "Quinoa salad", description: "Individual portion of quinoa salad." },
      "costillas-barbacoa": { title: "BBQ ribs", description: "Individual portion of ribs with barbecue sauce." },
      "salmon-teriyaki": { title: "Teriyaki salmon with rice", description: "Individual portion of salmon with teriyaki sauce served with rice." },
      "pollo-curry": { title: "Chicken curry with rice", description: "Individual portion of chicken curry served with rice." },
      "macarrones-bolonesa": { title: "Macaroni Bolognese", description: "Individual portion of macaroni with Bolognese sauce." },
      "paella-valenciana": { title: "Valencian paella", description: "Individual portion of traditional Valencian paella." },
      "smoothie-pina-coco": { title: "Pineapple & coconut smoothie", description: "Tropical pineapple and coconut smoothie.", note: "Alcohol supplement +3 €." },
      "smoothie-melon": { title: "Melon smoothie", description: "Smooth and refreshing melon smoothie.", note: "Alcohol supplement +3 €." },
      "smoothie-maracuya-mango": { title: "Passion fruit & mango smoothie", description: "Exotic passion fruit and mango smoothie.", note: "Alcohol supplement +3 €." },
      "smoothie-mango": { title: "Mango smoothie", description: "Creamy mango smoothie.", note: "Alcohol supplement +3 €." },
      "frappe-chocolate": { title: "Chocolate frappé", description: "Creamy chocolate frappé.", note: "Alcohol supplement +3 €." },
      "frappe-vainilla": { title: "Vanilla frappé", description: "Smooth vanilla frappé.", note: "Alcohol supplement +3 €." },
      "frappe-yogurt": { title: "Yogurt frappé", description: "Fresh yogurt frappé.", note: "Alcohol supplement +3 €." },
      "frappe-cafe": { title: "Coffee frappé", description: "Intense coffee frappé.", note: "Alcohol supplement +3 €." },
      "frappe-cafe-bayleis": { title: "Coffee Bayleis frappé", description: "Coffee frappé with a Bayleis touch.", note: "Alcohol supplement +3 €." },
      "mojito-normal": { title: "Classic mojito", description: "The most classic Cuban cocktail. White rum, lime, mint, sugar, and soda." },
      "mojito-sabores": { title: "Flavoured mojito", description: "The fruity, refreshing version of the mojito. White rum, fruit of your choice, lime, mint, and soda." },
      "daikiri-frozen": { title: "Daiquiri", description: "A fresh, citrusy, balanced cocktail. White rum, lime juice, and sugar." },
      "daiquiri-sabores": { title: "Flavoured Daiquiri", description: "The fruity version of the classic daiquiri. White rum, fruit of your choice, lime, and sugar." },
      "pina-colada": { title: "Piña colada", description: "The creamiest tropical cocktail. Rum, coconut cream, and pineapple juice." },
      caipirinha: { title: "Caipirinha", description: "The intense, citrusy Brazilian classic. Cachaça, lime, sugar, and crushed ice." },
      caipiroska: { title: "Caipiroska", description: "The vodka version of caipirinha. Vodka, lime, sugar, and crushed ice." },
      "aperol-spritz": { title: "Aperol Spritz", description: "The original Italian spritz. Prosecco, Aperol, soda, and an orange slice." },
      "crodino-sin-alcohol": { title: "Alcohol-free Crodino", description: "The alcohol-free Italian spritz. Crodino, soda, ice, and an orange slice." },
      "sarti-spritz": { title: "Sarti Spritz", description: "A fruity and refreshing spritz. Prosecco, Sarti, soda, and a lime slice." },
      "mondoro-hugo-spritz": { title: "Mondoro Hugo Spritz", description: "A floral, aromatic spritz. Prosecco, Mondoro, soda, and mint leaves." },
      "tinto-verano-vaso": { title: "Tinto de verano glass", description: "Tinto de verano served by the glass." },
      "tinto-verano-jarra": { title: "Tinto de verano jug", description: "Tinto de verano served in a jug." },
      "sangria-vino-blanco": { title: "White wine sangria", description: "Sangria made with white wine." },
      "sangria-vino-tinto": { title: "Red wine sangria", description: "Sangria made with red wine." },
      "sangria-cava": { title: "Cava sangria", description: "Sangria made with cava." },
      "agua-valencia": { title: "Agua de Valencia", description: "Fresh citrus Valencian cocktail." }
    }
  },
  de: {
    ui: {
      documentTitle: "Tavola Chiringo | Il dolce far niente è tutto",
      subtitle: "Il dolce far niente è tutto",
      languageLabel: "Sprache",
      topTabsLabel: "Kategorien der Karte",
      bottomTabsLabel: "Bereich der Karte wechseln",
      menuLayoutLabel: "Interaktive Speisekarte",
      menuListLabel: "Produkte der ausgewählten Kategorie",
      imageFrameLabel: "Bild des Gerichts vergrößern",
      lightboxLabel: "Vergrößertes Bild",
      closeLightboxLabel: "Vergrößertes Bild schließen",
      viewSection: "Bereich anzeigen",
      sectionEyebrow: "Bereich",
      productSingular: "Produkt",
      productPlural: "Produkte",
      pending: "Ausstehend",
      pendingTitle: "Bereich ausstehend",
      pendingCopy: "In {section} sind noch keine Produkte eingetragen.",
      dishSelected: "Ausgewähltes Gericht",
      tariffPlural: "Tarife",
      scheduleLabel: "Uhrzeit",
      includesTitle: "Inklusive 2 Getränke",
      drinksList: "Bier, Tinto de verano, Kaffee, Softdrink, Wein oder Wermut",
      reserveLabel: "Reservieren",
      rulesTitle: "Beach Club Regeln",
      infoTitle: "Zusätzliche Informationen",
      selectTurnLabel: "Turnus auswählen",
      priceLabel: "Preis pro Sonnenschirm und Liegen"
    },
    sections: {
      bebidas: { category: "Getränke", shortLabel: "Getränke" },
      cocteles: { category: "Cocktails", shortLabel: "Cocktails" },
      "granizados-smoothies": { category: "Smoothies & Frappés", shortLabel: "Smoothies & Frappés" },
      sangrias: { category: "Sangrias", shortLabel: "Sangrias" },
      comidas: { category: "Speisen", shortLabel: "Speisen" },
      "tarifas-hamacas": { category: "Beach Club Bereich", shortLabel: "Beach Club" }
    },
    groups: {
      desayuno: { category: "Frühstück", shortLabel: "Frühstück" },
      picar: { category: "Aperitif & Snacks", shortLabel: "Snacks" },
      tapas: { category: "Tapas", shortLabel: "Tapas" },
      bocadillos: { category: "Sandwiches", shortLabel: "Sandwiches" },
      pizzas: { category: "Pizzen aus dem Steinofen", shortLabel: "Pizzen" },
      platos: { category: "Zubereitete Gerichte", shortLabel: "Gerichte" },
      refrescos: { category: "Erfrischungsgetränke", shortLabel: "Softdrinks" },
      cafes: { category: "Kaffee", shortLabel: "Kaffee" },
      cerveza: { category: "Bier", shortLabel: "Bier" },
      "vermouth-copas": { category: "Wermut & Longdrinks", shortLabel: "Wermut" },
      "vinos-blancos": { category: "Weißweine", shortLabel: "Weißweine" },
      "vinos-tintos": { category: "Rotweine", shortLabel: "Rotweine" },
      "vinos-rosados": { category: "Roséweine", shortLabel: "Rosé" },
      "cavas-espumosos": { category: "Cavas & Schaumweine", shortLabel: "Cavas" },
      "granizados-smoothies-frappes": { category: "Smoothies & Frappés", shortLabel: "Smoothies" },
      "cocteles-clasicos": { category: "Cocktails", shortLabel: "Cocktails" },
      "sangrias-carta": { category: "Sangrias", shortLabel: "Sangrias" }
    },
    items: {
      agua: { title: "Wasser", description: "Stilles Mineralwasser." },
      "agua-gas": { title: "Sprudelwasser", description: "Wasser mit Kohlensäure." },
      pepsi: { title: "Pepsi", description: "Pepsi-Erfrischungsgetränk." },
      "pepsi-zero": { title: "Pepsi Zero", description: "Pepsi Zero Erfrischungsgetränk." },
      "schweppes-naranja": { title: "Schweppes Orange", description: "Orangen-Erfrischungsgetränk." },
      "schweppes-limon": { title: "Schweppes Zitrone", description: "Zitronen-Erfrischungsgetränk." },
      sevenup: { title: "SevenUp", description: "SevenUp-Erfrischungsgetränk." },
      "tonica-schweppes": { title: "Schweppes Tonic", description: "Schweppes Tonic Water." },
      "aquarade-limon": { title: "Aquarade Zitrone", description: "Isotonisches Getränk mit Zitrone." },
      "aquarade-naranja": { title: "Aquarade Orange", description: "Isotonisches Getränk mit Orange." },
      "lipton-limon": { title: "Lipton Zitrone", description: "Zitronen-Eistee." },
      redbull: { title: "Red Bull", description: "Energy Drink." },
      zumos: { title: "Säfte", description: "Verschiedene Säfte." },
      "cafe-solo": { title: "Espresso", description: "Espresso." },
      cortado: { title: "Cortado", description: "Espresso mit etwas Milch." },
      bombon: { title: "Café Bombón", description: "Kaffee mit Kondensmilch." },
      "cafe-con-leche": { title: "Milchkaffee", description: "Kaffee mit Milch." },
      americano: { title: "Americano", description: "Americano-Kaffee." },
      "infusiones-tes": { title: "Aufgüsse oder Tees", description: "Verschiedene Aufgüsse oder Tees." },
      carajillo: { title: "Carajillo", description: "Kaffee mit einem Schuss Spirituose." },
      "aguila-dorada": { title: "Águila Dorada", description: "Águila-Dorada-Bier." },
      radler: { title: "Radler", description: "Radler-Bier." },
      "cerveza-00": { title: "Alkoholfreies Bier", description: "Alkoholfreies Bier." },
      "cerveza-sin-gluten": { title: "Glutenfreies Bier", description: "Glutenfreies Bier." },
      "amstel-oro-lata": { title: "Amstel Oro Dose", description: "Amstel Oro in der Dose." },
      vermouth: { title: "Wermut", description: "Rot oder weiß." },
      combinados: { title: "Longdrinks", description: "Masters, Larios 12, Barceló, Brugal, Jony Walker, Moscovscaya, Dyc, Deseen und ähnliche Spirituosen." },
      "premium-desde": { title: "Premium-Spirituosen", price: "Ab 11,00 €", description: "Roku, Bulldog, Martin Miller's, 1888, Zacapa, Black Label, Macallan 12 und ähnliche Spirituosen." },
      chupitos: { title: "Shots", description: "Shots." },
      "chupitos-premium": { title: "Premium-Shots", description: "Premium-Shots." },
      licores: { title: "Liköre", description: "Baileys, Kräuterlikör und ähnliche Optionen." },
      "ceremonia-sauvignon-blanc": { title: "Ceremonia Sauvignon Blanc", price: "Glas 4,00 € | Flasche 20,00 €", description: "Weingut Vicente Gandía." },
      "ramon-bilbao-verdejo": { title: "Ramón Bilbao Verdejo", price: "Glas 4,80 € | Flasche 22,00 €", description: "Weißwein Ramón Bilbao Verdejo." },
      "paco-lola-albarino": { title: "Paco & Lola N12", price: "Glas 4,80 € | Flasche 22,00 €", description: "Paco & Lola N12." },
      "ceremonia-cabernet-sauvignon": { title: "Ceremonia Cabernet Sauvignon", price: "Glas 4,00 € | Flasche 20,00 €", description: "Weingut Vicente Gandía." },
      "ramon-bilbao-crianza-rioja": { title: "Ramón Bilbao Crianza Rioja", price: "Glas 4,80 € | Flasche 22,00 €", description: "Rotwein Ramón Bilbao Crianza Rioja." },
      "ceramic-monastrell-vicente-gandia": { title: "Ceramic Monastrell Vicente Gandía", price: "Glas 4,80 € | Flasche 22,00 €", description: "Monastrell-Rotwein von Vicente Gandía." },
      "ceremonia-bobal-rose": { title: "Ceremonia Bobal Rosé", price: "Glas 4,00 € | Flasche 20,00 €", description: "Weingut Vicente Gandía." },
      "cava-patacona-brut": { title: "Cava Patacona Brut", price: "Glas 5,00 € | Flasche 30,00 €", description: "Cava Patacona Brut." },
      "cava-lola": { title: "Cava Lola", price: "Flasche 40,00 €", description: "Weingut Paco & Lola." },
      "moet-chandon": { title: "Moet & Chandon", price: "Flasche 110,00 €", description: "Champagner Moet & Chandon." },
      "moet-chandon-rose": { title: "Moet & Chandon Rosé", price: "Flasche 130,00 €", description: "Champagner Moet & Chandon Rosé." },
      "moet-chandon-ice": { title: "Moet & Chandon Ice", price: "Flasche 150,00 €", description: "Champagner Moet & Chandon Ice." },
      "desayuno-tradicional": {
        title: "Traditionelles Frühstück",
        description: "Kaffee oder Tee/Kräutertee + Saft + Toast nach Wahl: Olivenöl, Marmelade, Tomate, Butter oder Gebäck.",
        note: "Bis 12:00 Uhr."
      },
      "desayuno-supreme": {
        title: "Supreme Frühstück",
        description: "Kaffee oder Tee/Kräutertee + Saft + Toast nach Wahl: Schinken mit Tomate, Lachs und Avocado oder Thunfisch mit Tomate.",
        note: "Bis 12:00 Uhr."
      },
      "frutos-secos": { title: "Gemischte Nüsse", description: "Klassischer Snack zum Getränk." },
      papas: { title: "Kartoffelchips", description: "Knusprige Kartoffelchips." },
      aceitunas: { title: "Oliven", description: "Oliven als Aperitif serviert." },
      "barqueta-mini-fuets": { title: "Schale mit Mini-Fuets", description: "Mini-Fuets in einer Schale serviert." },
      "papas-mejillones": { title: "Kartoffelchips mit Miesmuscheln", description: "Kartoffelchips mit Miesmuscheln." },
      "papas-boquerones": { title: "Kartoffelchips mit Sardellen", description: "Kartoffelchips mit Sardellen." },
      "papas-limon-berberechos": { title: "Frische Chips mit Zitrone und Herzmuscheln", description: "Kartoffelchips mit frischer Zitrone und Herzmuscheln." },
      "pulpo-pimenton": { title: "Oktopus mit Paprika und Kartoffeln", description: "Oktopus mit Paprika, serviert mit Kartoffeln." },
      "ensaladilla-rusa": { title: "Russischer Salat", description: "Klassischer russischer Salat." },
      "ajo-arriero": { title: "Ajo arriero", description: "Traditionelle Ajo-arriero-Tapa." },
      "nachos-verano": { title: "Sommer-Nachos", description: "Sour Cream, Guacamole und mexikanische Sauce." },
      "nachos-tartar-salmon": { title: "Nachos mit Lachstatar", description: "Lachstatar, Wakame-Algen und Tavola-Sauce." },
      "tabla-jamon-iberico-duroc": { title: "Brett mit iberischem Duroc-Schinken", description: "Brett mit iberischem Duroc-Schinken." },
      "tabla-quesos-valencianos": { title: "Brett mit valencianischem Käse", description: "Auswahl valencianischer Käsesorten." },
      "tortilla-jamon": { title: "Mini-Tortilla mit Schinken", description: "Mini-Tortilla mit Schinken serviert." },
      "mejillones-vapor-limon": { title: "Gedämpfte Miesmuscheln mit Zitrone", description: "Gedämpfte Miesmuscheln mit einem Hauch Zitrone." },
      "servicio-pan": { title: "Brotservice", description: "Brot als Beilage." },
      "servicio-picos-pan-adicional": { title: "Picos und zusätzliches Brot", description: "Picos und extra Brot." },
      "salsas-adicionales": { title: "Zusätzliche Saucen", description: "Zusätzliche Saucen nach Wahl des Gastes." },
      "bocadillo-escalivada": { title: "Bocadillo mit Escalivada", description: "Bocadillo mit Escalivada.", note: "Mit Kartoffelchips serviert." },
      "magro-tomate": { title: "Schweinefleisch mit Tomate", description: "Bocadillo mit Schweinefleisch und Tomate.", note: "Mit Kartoffelchips serviert." },
      "lomo-ajos-tiernos": { title: "Schweinelende mit jungem Knoblauch", description: "Bocadillo mit Schweinelende und jungem Knoblauch.", note: "Mit Kartoffelchips serviert." },
      "bocadillo-atun-tomate": { title: "Bocadillo mit Thunfisch und Tomate", description: "Bocadillo mit Thunfisch und Tomate.", note: "Mit Kartoffelchips serviert." },
      margarita: { title: "Margherita", description: "Klassische Pizza mit Tomate, Mozzarella und Basilikum." },
      tartufata: { title: "Tartufata", description: "Schinken, Käse und Trüffel." },
      "jamon-queso": { title: "Schinken und Käse", description: "Pizza mit Schinken und Käse." },
      "cuatro-quesos": { title: "4 Käse", description: "Pizza mit einer Mischung aus vier Käsesorten." },
      peperoni: { title: "Peperoni", description: "Pizza mit Peperoni." },
      canibal: { title: "Canibal", description: "Bacon, Peperoni und York-Schinken." },
      "ensalada-quinoa": { title: "Quinoa-Salat", description: "Einzelportion Quinoa-Salat." },
      "costillas-barbacoa": { title: "BBQ-Rippchen", description: "Einzelportion Rippchen mit Barbecue-Sauce." },
      "salmon-teriyaki": { title: "Teriyaki-Lachs mit Reis", description: "Einzelportion Lachs mit Teriyaki-Sauce und Reis." },
      "pollo-curry": { title: "Hähnchen-Curry mit Reis", description: "Einzelportion Hähnchen-Curry mit Reis." },
      "macarrones-bolonesa": { title: "Makkaroni Bolognese", description: "Einzelportion Makkaroni mit Bolognese-Sauce." },
      "paella-valenciana": { title: "Valencianische Paella", description: "Einzelportion traditionelle valencianische Paella." },
      "smoothie-pina-coco": { title: "Ananas & Kokos-Smoothie", description: "Tropischer Smoothie aus Ananas und Kokos.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-melon": { title: "Melonen-Smoothie", description: "Sanfter und erfrischender Melonen-Smoothie.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-maracuya-mango": { title: "Maracuja & Mango-Smoothie", description: "Exotischer Smoothie aus Maracuja und Mango.", note: "Aufpreis mit Alkohol: 3 €." },
      "smoothie-mango": { title: "Mango-Smoothie", description: "Cremiger Mango-Smoothie.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-chocolate": { title: "Schokoladen-Frappé", description: "Cremiger Schokoladen-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-vainilla": { title: "Vanille-Frappé", description: "Sanfter Vanille-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-yogurt": { title: "Joghurt-Frappé", description: "Frischer Joghurt-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-cafe": { title: "Kaffee-Frappé", description: "Intensiver Kaffee-Frappé.", note: "Aufpreis mit Alkohol: 3 €." },
      "frappe-cafe-bayleis": { title: "Kaffee Bayleis-Frappé", description: "Kaffee-Frappé mit einem Hauch Bayleis.", note: "Aufpreis mit Alkohol: 3 €." },
      "mojito-normal": { title: "Klassischer Mojito", description: "Der kubanische Cocktail-Klassiker. Weißer Rum, Limette, Minze, Zucker und Soda." },
      "mojito-sabores": { title: "Mojito mit Geschmack", description: "Die fruchtige und erfrischende Version des Mojitos. Weißer Rum, Frucht nach Wahl, Limette, Minze und Soda." },
      "daikiri-frozen": { title: "Daiquiri", description: "Ein frischer, zitrischer und ausgewogener Cocktail. Weißer Rum, Limettensaft und Zucker." },
      "daiquiri-sabores": { title: "Daiquiri mit Geschmack", description: "Die fruchtige Version des klassischen Daiquiris. Weißer Rum, Frucht nach Wahl, Limette und Zucker." },
      "pina-colada": { title: "Piña Colada", description: "Der cremigste tropische Cocktail. Rum, Kokoscreme und Ananassaft." },
      caipirinha: { title: "Caipirinha", description: "Der intensive, zitrische brasilianische Klassiker. Cachaça, Limette, Zucker und Crushed Ice." },
      caipiroska: { title: "Caipiroska", description: "Die Version der Caipirinha mit Wodka. Wodka, Limette, Zucker und Crushed Ice." },
      "aperol-spritz": { title: "Aperol Spritz", description: "Der original italienische Spritz. Prosecco, Aperol, Soda und eine Orangenscheibe." },
      "crodino-sin-alcohol": { title: "Crodino alkoholfrei", description: "Der alkoholfreie italienische Spritz. Crodino, Soda, Eis und eine Orangenscheibe." },
      "sarti-spritz": { title: "Sarti Spritz", description: "Ein fruchtiger und erfrischender Spritz. Prosecco, Sarti, Soda und eine Limettenscheibe." },
      "mondoro-hugo-spritz": { title: "Mondoro Hugo Spritz", description: "Ein floraler und aromatischer Spritz. Prosecco, Mondoro, Soda und Minzblätter." },
      "tinto-verano-vaso": { title: "Tinto de verano Glas", description: "Tinto de verano im Glas serviert." },
      "tinto-verano-jarra": { title: "Tinto de verano Krug", description: "Tinto de verano im Krug serviert." },
      "sangria-vino-blanco": { title: "Weißwein-Sangria", description: "Sangria mit Weißwein." },
      "sangria-vino-tinto": { title: "Rotwein-Sangria", description: "Sangria mit Rotwein." },
      "sangria-cava": { title: "Cava-Sangria", description: "Sangria mit Cava." },
      "agua-valencia": { title: "Agua de Valencia", description: "Frischer, zitrischer Cocktail aus Valencia." }
    }
  }
};

const languageNames = {
  es: "Español",
  en: "English",
  de: "Deutsch"
};

const groupLinearts = {
  refrescos: "assets/linearts/bebidas/refrescoart.webp",
  cafes: "assets/linearts/bebidas/cafesart.webp",
  cerveza: "assets/linearts/bebidas/cervezaart.webp",
  "vermouth-copas": "assets/linearts/bebidas/vermouthycopasart.webp",
  "vinos-blancos": "assets/linearts/bebidas/vinosblancosart.webp",
  "vinos-tintos": "assets/linearts/bebidas/vinostintosart.webp",
  "vinos-rosados": "assets/linearts/bebidas/vinosrosadosart.webp",
  "cavas-espumosos": "assets/linearts/bebidas/cavasyespumososart.webp",
  desayuno: "assets/linearts/comidas/desayunoart.webp",
  picar: "assets/linearts/comidas/aperitivoypicarart.webp",
  tapas: "assets/linearts/comidas/tapasart.webp",
  bocadillos: "assets/linearts/comidas/bocadillosart.webp",
  pizzas: "assets/linearts/comidas/pizzaart.webp",
  platos: "assets/linearts/comidas/platospreparadosart.webp"
};

const topTabs = document.querySelector("#topTabs");
const bottomTabs = document.querySelector("#bottomTabs");
const languageSwitcher = document.querySelector("#languageSwitcher");
const introCopy = document.querySelector("#introCopy");
const menuLayout = document.querySelector(".menu-layout");
const menuList = document.querySelector("#menuList");
const dishPreview = document.querySelector("#dishPreview");
const imageFrame = document.querySelector("#imageFrame");
const dishImage = document.querySelector("#dishImage");
const dishCategory = document.querySelector("#dishCategory");
const dishTitle = document.querySelector("#dishTitle");
const dishPrice = document.querySelector("#dishPrice");
const dishDescription = document.querySelector("#dishDescription");
const dishNote = document.querySelector("#dishNote");
const photoDisclaimer = document.querySelector("#photoDisclaimer");
const dishStatus = document.querySelector("#dishStatus");
const imageLightbox = document.querySelector("#imageLightbox");
const imageLightboxImg = document.querySelector("#imageLightboxImg");
const imageLightboxClose = document.querySelector("#imageLightboxClose");
const allergenModal = document.querySelector("#allergenModal");
const allergenModalClose = document.querySelector("#allergenModalClose");
const allergenTitle = document.querySelector("#allergenTitle");
const allergenModalContent = document.querySelector("#allergenModalContent");

let activeSectionId = "bebidas";
let activeHamacaTurnId = "todo-dia";
let currentLanguage = getSavedLanguage();
let lastFocusedElement = null;
let ignoreNextImageClick = false;
let imageDragState = null;
let activeDragReturn = null;
let previewUpdateToken = 0;

const imagePreloadCache = new Map();

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem("tavolaLanguage");
    return translations[savedLanguage] ? savedLanguage : "es";
  } catch (error) {
    return "es";
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("tavolaLanguage", language);
  } catch (error) {
    // Local storage can be unavailable in some private browsing modes.
  }
}

function getCopy() {
  return translations[currentLanguage] || translations.es;
}

function getUiCopy() {
  return getCopy().ui;
}

function getSectionText(section) {
  return getCopy().sections[section.id] || translations.es.sections[section.id] || section;
}

function getGroupText(group) {
  return getCopy().groups[group.id] || translations.es.groups[group.id] || group;
}

function getItemText(item) {
  return getCopy().items[item.id] || translations.es.items[item.id] || item;
}

function getItemPrice(item, itemText = getItemText(item)) {
  return itemText.price || item.price;
}

function formatProductCount(count) {
  const ui = getUiCopy();
  const label = count === 1 ? ui.productSingular : ui.productPlural;

  return `${count} ${label}`;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getScrollBehavior() {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function scrollElementNearTop(element, offset = 12) {
  if (!element) return;

  const top = Math.max(0, window.scrollY + element.getBoundingClientRect().top - offset);

  window.scrollTo({
    top,
    behavior: getScrollBehavior()
  });
}

function scheduleScrollToMainPanel() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollElementNearTop(menuLayout, isMobileLayout() ? 10 : 24);
    });
  });
}

function scheduleScrollToGroupStart(groupBlock, panel) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const previewOffset = isMobileLayout() && !dishPreview.classList.contains("is-hidden")
        ? dishPreview.getBoundingClientRect().height + 14
        : 18;

      scrollElementNearTop(groupBlock, previewOffset);
    });
  });
}

function getActiveSection() {
  return menuSections.find((section) => section.id === activeSectionId) || menuSections[0];
}

function createTab(section, placement) {
  const button = document.createElement("button");
  const sectionText = getSectionText(section);
  button.className = placement === "bottom" ? "tab-button category-chip" : "tab-button";
  button.type = "button";
  button.dataset.category = section.id;
  button.setAttribute("aria-controls", "menuList");
  button.setAttribute("aria-pressed", "false");
  button.setAttribute("aria-label", `${getUiCopy().viewSection} ${sectionText.category}`);

  if (placement === "bottom") {
    const label = document.createElement("span");

    label.className = "category-label";
    label.textContent = sectionText.shortLabel;
    button.append(label);
  } else {
    button.textContent = sectionText.category;
  }

  button.addEventListener("click", () => setActiveSection(section.id));

  return button;
}

function renderTabs() {
  const topFragment = document.createDocumentFragment();
  const bottomFragment = document.createDocumentFragment();

  topTabs.textContent = "";
  bottomTabs.textContent = "";

  menuSections.forEach((section) => {
    topFragment.append(createTab(section, "top"));
    bottomFragment.append(createTab(section, "bottom"));
  });

  topTabs.append(topFragment);
  bottomTabs.append(bottomFragment);
}

function getAllergenInfo(item) {
  return allergenData[item.id] || null;
}

function createAllergenButton(item, itemText) {
  const button = document.createElement("button");
  const icon = document.createElement("img");
  const label = document.createElement("span");

  button.className = "allergen-trigger";
  button.type = "button";
  button.setAttribute("aria-label", `Ver alérgenos de ${itemText.title}`);
  icon.src = "assets/ui/icons/precaucion1.webp";
  icon.alt = "";
  icon.loading = "lazy";
  icon.decoding = "async";
  icon.setAttribute("aria-hidden", "true");
  label.textContent = "Ver alérgenos";
  button.append(icon, label);
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openAllergenModal(item, button);
  });

  return button;
}

function createDishButton(item, sectionName) {
  const card = document.createElement("article");
  const isInteractive = item.hasDetail !== false;
  const button = document.createElement(isInteractive ? "button" : "div");
  const itemText = getItemText(item);
  const itemPrice = getItemPrice(item, itemText);
  const allergens = getAllergenInfo(item);

  card.className = "dish";
  card.dataset.dish = item.id;
  card.classList.toggle("has-allergens", Boolean(allergens));
  card.classList.toggle("is-static", !isInteractive);

  button.className = isInteractive ? "dish-select" : "dish-select is-static";

  if (isInteractive) {
    button.type = "button";
    button.setAttribute("aria-controls", "dishPreview");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `${itemText.title}, ${sectionName}, ${itemPrice}`);
  }

  const text = document.createElement("span");
  const title = document.createElement("strong");
  const description = document.createElement("small");
  const price = document.createElement("b");

  title.textContent = itemText.title;
  description.textContent = itemText.description;
  price.textContent = itemPrice;

  text.append(title, description);

  if (itemText.note) {
    const note = document.createElement("em");
    note.className = "dish-note-inline";
    note.textContent = itemText.note;
    text.append(note);
  }

  button.append(text, price);

  if (isInteractive) {
    button.addEventListener("click", () => showDish(item, sectionName));
  }

  card.append(button);

  if (allergens) {
    card.append(createAllergenButton(item, itemText));
  }

  return card;
}

function getSectionItemCount(section) {
  return section.groups.reduce((total, group) => total + group.items.length, 0);
}

function getFirstSectionDish(section) {
  const firstGroup = section.groups.find((group) => group.items.length > 0);

  if (!firstGroup) return null;

  return {
    dish: firstGroup.items[0],
    groupName: firstGroup.category
  };
}

function createEmptySection(section) {
  const emptyState = document.createElement("div");
  const title = document.createElement("strong");
  const copy = document.createElement("p");
  const ui = getUiCopy();
  const sectionText = getSectionText(section);

  emptyState.className = "empty-section";
  title.textContent = ui.pendingTitle;
  copy.textContent = ui.pendingCopy.replace("{section}", sectionText.category);

  emptyState.append(title, copy);
  return emptyState;
}

function getHamacaCopy() {
  return hamacaLanguageCopy[currentLanguage] || hamacaLanguageCopy.es;
}

function getActiveHamacaTariff() {
  return hamacaTariffs.find((tariff) => tariff.id === activeHamacaTurnId) || hamacaTariffs[0];
}

function createHamacaIcon(type) {
  const icon = document.createElement("span");
  const icons = {
    morning: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"></path>
      </svg>`,
    afternoon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 18h16"></path>
        <path d="M7 18a5 5 0 0 1 10 0"></path>
        <path d="M12 5v3M5.6 8.6l2.1 2.1M18.4 8.6l-2.1 2.1"></path>
      </svg>`,
    "full-day": `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3.5"></circle>
        <path d="M12 2v2.5M12 15.5V18M4 10h2.5M17.5 10H20M6.3 4.3l1.8 1.8M15.9 13.9l1.8 1.8M17.7 4.3l-1.8 1.8M8.1 13.9l-1.8 1.8M5 21h14"></path>
      </svg>`,
    beach: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19c3-2 5-2 8 0s5 2 8 0"></path>
        <path d="M5 12a7 7 0 0 1 14 0"></path>
        <path d="M12 12v7"></path>
        <path d="M7 12h10"></path>
      </svg>`,
    drink: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10l-1 8a4 4 0 0 1-8 0L7 3Z"></path>
        <path d="M12 15v5"></path>
        <path d="M9 20h6"></path>
        <path d="M9 7h6"></path>
      </svg>`
  };

  icon.className = `hamaca-icon hamaca-icon-${type}`;
  icon.innerHTML = icons[type] || icons.morning;
  return icon;
}

function createHamacaRules() {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const list = document.createElement("ul");

  details.className = "hamaca-accordion";
  summary.textContent = ui.rulesTitle;

  hamacaCopy.rules.forEach((rule) => {
    const item = document.createElement("li");

    item.textContent = rule;
    list.append(item);
  });

  details.append(summary, list);
  return details;
}

function createHamacaBenefits() {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const block = document.createElement("section");
  const title = document.createElement("h3");
  const grid = document.createElement("div");

  block.className = "hamaca-benefits";
  title.textContent = ui.infoTitle;
  grid.className = "hamaca-benefit-grid";

  hamacaCopy.benefits.forEach((benefit, index) => {
    const item = document.createElement("div");
    const mark = document.createElement("span");
    const copy = document.createElement("p");

    item.className = "hamaca-benefit";
    mark.className = "hamaca-benefit-mark";
    mark.textContent = index === 0 ? "QR" : "TAV";
    copy.textContent = benefit;
    item.append(mark, copy);
    grid.append(item);
  });

  block.append(title, grid);
  return block;
}

function createHamacaTurnSelector(activeTariff) {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const block = document.createElement("section");
  const title = document.createElement("h3");
  const options = document.createElement("div");

  block.className = "hamaca-selector hamaca-turns";
  title.textContent = ui.selectTurnLabel;
  options.className = "hamaca-turn-grid";

  hamacaTariffs.forEach((tariff) => {
    const button = document.createElement("button");
    const text = document.createElement("span");
    const label = document.createElement("strong");
    const schedule = document.createElement("small");
    const isActive = tariff.id === activeTariff.id;

    button.className = "hamaca-choice hamaca-turn-choice";
    button.type = "button";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    label.textContent = hamacaCopy.tariffs[tariff.id] || tariff.name;
    schedule.textContent = tariff.schedule;
    text.append(label, schedule);
    button.append(createHamacaIcon(tariff.icon), text);
    button.addEventListener("click", () => {
      activeHamacaTurnId = tariff.id;
      renderActiveSection();
    });

    options.append(button);
  });

  block.append(title, options);
  return block;
}

function createHamacaHeroCard(activeTariff) {
  const ui = getUiCopy();
  const hamacaCopy = getHamacaCopy();
  const card = document.createElement("article");
  const imageWrap = document.createElement("div");
  const image = document.createElement("img");
  const overlay = document.createElement("div");
  const turn = document.createElement("span");
  const schedule = document.createElement("strong");
  const info = document.createElement("div");
  const priceBlock = document.createElement("div");
  const priceLabel = document.createElement("span");
  const price = document.createElement("strong");
  const drinksBlock = document.createElement("div");
  const drinksCopy = document.createElement("div");
  const drinksTitle = document.createElement("strong");
  const drinksText = document.createElement("p");

  card.className = "hamaca-visual-card";
  imageWrap.className = "hamaca-visual-image";
  overlay.className = "hamaca-visual-overlay";
  info.className = "hamaca-visual-info";
  priceBlock.className = "hamaca-price-block";
  priceLabel.className = "hamaca-price-label";
  drinksBlock.className = "hamaca-drinks-block";

  image.src = "assets/hamacas/hamaca1.webp";
  image.alt = "Hamacas frente al mar en Tavola Chiringo";
  image.loading = "lazy";
  image.decoding = "async";
  turn.textContent = hamacaCopy.tariffs[activeTariff.id] || activeTariff.name;
  schedule.textContent = activeTariff.schedule;
  priceLabel.textContent = ui.priceLabel;
  price.textContent = activeTariff.price;
  drinksTitle.textContent = ui.includesTitle;
  drinksText.textContent = ui.drinksList;

  overlay.append(turn, schedule);
  imageWrap.append(image, overlay);
  priceBlock.append(priceLabel, price);
  drinksCopy.append(drinksTitle, drinksText);
  drinksBlock.append(createHamacaIcon("drink"), drinksCopy);
  info.append(priceBlock, drinksBlock);
  card.append(imageWrap, info);
  return card;
}

function createHamacaReserveButton() {
  const ui = getUiCopy();
  const link = document.createElement("a");

  link.className = "hamaca-reserve-button";
  link.href = "https://restaurante.covermanager.com/tavola-chiringo-valencia/";
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = ui.reserveLabel;
  return link;
}

function createHamacasSection() {
  const wrapper = document.createElement("div");
  const activeTariff = getActiveHamacaTariff();

  wrapper.className = "hamacas-section";
  wrapper.append(
    createHamacaTurnSelector(activeTariff),
    createHamacaHeroCard(activeTariff),
    createHamacaReserveButton(),
    createHamacaRules(),
    createHamacaBenefits()
  );
  return wrapper;
}

function createFoodGroup(group, isExpanded) {
  const groupBlock = document.createElement("section");
  const toggle = document.createElement("button");
  const titleWrap = document.createElement("span");
  const label = document.createElement("span");
  const title = document.createElement("strong");
  const count = document.createElement("small");
  const indicator = document.createElement("span");
  const panel = document.createElement("div");
  const groupText = getGroupText(group);
  const lineartSrc = groupLinearts[group.id];

  groupBlock.className = "food-group";
  groupBlock.dataset.group = group.id;
  toggle.className = "food-group-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-controls", `food-group-${group.id}`);
  toggle.setAttribute("aria-expanded", String(isExpanded));

  titleWrap.className = "food-group-title-wrap";
  label.className = "food-group-label";
  title.textContent = groupText.category;
  count.textContent = formatProductCount(group.items.length);
  label.append(title, count);

  if (lineartSrc) {
    const lineart = document.createElement("img");

    lineart.className = "food-group-lineart";
    if (group.id === "cavas-espumosos") {
      lineart.classList.add("food-group-lineart--cavas");
    }
    lineart.src = lineartSrc;
    lineart.alt = "";
    lineart.loading = "eager";
    lineart.decoding = "async";
    lineart.setAttribute("aria-hidden", "true");
    titleWrap.append(lineart);
  }

  titleWrap.append(label);

  indicator.className = "food-group-indicator";
  indicator.setAttribute("aria-hidden", "true");
  indicator.textContent = isExpanded ? "−" : "+";

  panel.className = "food-group-panel";
  panel.id = `food-group-${group.id}`;
  panel.hidden = !isExpanded;

  if (isExpanded) {
    groupBlock.classList.add("is-open");
  }

  group.items.forEach((item) => {
    panel.append(createDishButton(item, groupText.category));
  });

  toggle.append(titleWrap, indicator);
  toggle.addEventListener("click", () => toggleFoodGroup(groupBlock, panel, toggle, indicator, group));
  groupBlock.append(toggle, panel);

  return groupBlock;
}

function toggleFoodGroup(groupBlock, panel, toggle, indicator, group) {
  const shouldOpen = !groupBlock.classList.contains("is-open");

  document.querySelectorAll(".food-group.is-open").forEach((openGroup) => {
    if (openGroup === groupBlock) return;

    const openPanel = openGroup.querySelector(".food-group-panel");
    const openToggle = openGroup.querySelector(".food-group-toggle");
    const openIndicator = openGroup.querySelector(".food-group-indicator");

    openGroup.classList.remove("is-open");
    openPanel.hidden = true;
    openToggle.setAttribute("aria-expanded", "false");
    openIndicator.textContent = "+";
  });

  groupBlock.classList.toggle("is-open", shouldOpen);
  panel.hidden = !shouldOpen;
  toggle.setAttribute("aria-expanded", String(shouldOpen));
  indicator.textContent = shouldOpen ? "−" : "+";

  if (shouldOpen && group.items[0]) {
    const groupText = getGroupText(group);

    dishPreview.classList.remove("is-hidden");
    menuLayout.classList.remove("is-empty-section");
    showDish(group.items[0], groupText.category);
    scheduleScrollToGroupStart(groupBlock, panel);
  }
}

function renderActiveSection() {
  const section = getActiveSection();
  const sectionText = getSectionText(section);
  const ui = getUiCopy();
  const sectionBlock = document.createElement("div");
  const heading = document.createElement("div");
  const eyebrow = document.createElement("p");
  const title = document.createElement("h2");
  const count = document.createElement("span");
  const itemCount = getSectionItemCount(section);

  menuList.textContent = "";
  menuLayout.classList.toggle("is-hamacas-section", section.id === "tarifas-hamacas");
  menuList.classList.toggle("is-hamacas-list", section.id === "tarifas-hamacas");
  sectionBlock.className = "menu-section active-section";
  heading.className = "section-heading";
  eyebrow.className = "section-eyebrow";
  title.id = "activeCategoryTitle";
  count.className = "section-count";

  eyebrow.textContent = ui.sectionEyebrow;
  title.textContent = sectionText.category;
  count.textContent = itemCount > 0 ? formatProductCount(itemCount) : ui.pending;

  heading.append(eyebrow, title, count);
  sectionBlock.append(heading);

  if (section.id === "tarifas-hamacas") {
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    sectionBlock.textContent = "";
    sectionBlock.classList.add("hamacas-active-section");
    sectionBlock.append(createHamacasSection());
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-label", sectionText.category);
    return;
  }

  if (itemCount === 0) {
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    sectionBlock.append(createEmptySection(section));
    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    return;
  }

  if (section.id === "comidas" || section.id === "bebidas") {
    section.groups.forEach((group) => {
      sectionBlock.append(createFoodGroup(group, false));
    });

    menuList.append(sectionBlock);
    menuList.setAttribute("aria-labelledby", "activeCategoryTitle");
    resetImageDrag();
    previewUpdateToken += 1;
    dishPreview.classList.add("is-hidden");
    menuLayout.classList.add("is-empty-section");
    return;
  }

  section.groups.forEach((group) => {
    group.items.forEach((item) => {
      sectionBlock.append(createDishButton(item, sectionText.category));
    });
  });

  menuList.append(sectionBlock);
  menuList.setAttribute("aria-labelledby", "activeCategoryTitle");

  const firstDish = getFirstSectionDish(section);

  dishPreview.classList.remove("is-hidden");
  menuLayout.classList.remove("is-empty-section");

  if (firstDish) {
    showDish(firstDish.dish, sectionText.category);
  }
}

function updateActiveTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isSelected = button.dataset.category === activeSectionId;

    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function setActiveSection(sectionId) {
  if (sectionId === activeSectionId) return;

  activeSectionId = sectionId;
  renderActiveSection();
  updateActiveTabs();
  scheduleScrollToMainPanel();
}

function updateStaticText() {
  const ui = getUiCopy();

  document.documentElement.lang = currentLanguage;
  document.title = ui.documentTitle;
  introCopy.setAttribute("aria-label", ui.subtitle);
  languageSwitcher.setAttribute("aria-label", ui.languageLabel);
  topTabs.setAttribute("aria-label", ui.topTabsLabel);
  bottomTabs.setAttribute("aria-label", ui.bottomTabsLabel);
  menuLayout.setAttribute("aria-label", ui.menuLayoutLabel);
  menuList.setAttribute("aria-label", ui.menuListLabel);
  imageFrame.setAttribute("aria-label", ui.imageFrameLabel);
  imageLightbox.setAttribute("aria-label", ui.lightboxLabel);
  imageLightboxClose.setAttribute("aria-label", ui.closeLightboxLabel);

  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    const languageName = languageNames[button.dataset.lang] || button.dataset.lang;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("aria-label", `${ui.languageLabel}: ${languageName}`);
  });
}

function setLanguage(language) {
  if (!translations[language] || language === currentLanguage) return;

  currentLanguage = language;
  saveLanguage(language);
  updateStaticText();
  renderTabs();
  renderActiveSection();
  updateActiveTabs();
}

function setupLanguageSwitcher() {
  languageSwitcher.querySelectorAll(".language-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function preloadImage(src) {
  if (imagePreloadCache.has(src)) {
    return imagePreloadCache.get(src);
  }

  const preload = new Promise((resolve, reject) => {
    const image = new Image();

    image.decoding = "async";

    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).then(() => resolve(src));
        return;
      }

      resolve(src);
    };

    image.onerror = reject;
    image.src = src;
  });

  imagePreloadCache.set(src, preload);
  preload.catch(() => imagePreloadCache.delete(src));
  return preload;
}

async function showDish(selectedDish, sectionName) {
  const updateToken = ++previewUpdateToken;
  const itemText = getItemText(selectedDish);
  const ui = getUiCopy();

  resetImageDrag();
  dishPreview.classList.add("is-changing");

  document.querySelectorAll(".dish").forEach((card) => {
    const isSelected = card.dataset.dish === selectedDish.id;
    const selectButton = card.querySelector(".dish-select");

    card.classList.toggle("is-active", isSelected);

    if (selectButton?.tagName === "BUTTON") {
      selectButton.setAttribute("aria-pressed", String(isSelected));
    }
  });

  try {
    await preloadImage(selectedDish.image);
  } catch (error) {
    console.warn("No se pudo cargar la imagen:", selectedDish.image);
  }

  if (updateToken !== previewUpdateToken) return;

  dishImage.loading = "lazy";
  dishImage.decoding = "async";
  dishImage.src = selectedDish.image;
  dishImage.alt = itemText.title;
  dishCategory.textContent = sectionName;
  dishTitle.textContent = itemText.title;
  dishPrice.textContent = getItemPrice(selectedDish, itemText);
  dishDescription.textContent = itemText.description;
  photoDisclaimer.classList.toggle("is-hidden", !selectedDish.image);
  dishStatus.textContent = `${ui.dishSelected}: ${itemText.title}.`;

  if (itemText.note) {
    dishNote.textContent = itemText.note;
    dishNote.classList.remove("is-hidden");
  } else {
    dishNote.textContent = "";
    dishNote.classList.add("is-hidden");
  }

  requestAnimationFrame(() => {
    if (updateToken === previewUpdateToken) {
      dishPreview.classList.remove("is-changing");
    }
  });
}

function createAllergenGroup(label, allergens, className) {
  if (!allergens?.length) return null;

  const group = document.createElement("div");
  const title = document.createElement("strong");
  const list = document.createElement("div");

  group.className = `allergen-group ${className}`;
  title.textContent = label;
  list.className = "allergen-chip-list";

  allergens.forEach((allergen) => {
    const chip = document.createElement("span");

    chip.textContent = allergen;
    list.append(chip);
  });

  group.append(title, list);
  return group;
}

function createAllergenEntry(entry, { showTitle = true } = {}) {
  const card = document.createElement("article");
  const contains = createAllergenGroup("Contiene", entry.contains, "contains");
  const traces = createAllergenGroup("Puede contener trazas", entry.traces, "traces");

  card.className = "allergen-entry";

  if (showTitle) {
    const title = document.createElement("h3");

    title.textContent = entry.name;
    card.append(title);
  }

  if (contains) {
    card.append(contains);
  }

  if (traces) {
    card.append(traces);
  }

  return card;
}

function openAllergenModal(item, sourceElement) {
  const itemText = getItemText(item);
  const info = getAllergenInfo(item);

  if (!info) return;

  const entries = info.entries || [
    {
      name: info.title || itemText.title,
      contains: info.contains || [],
      traces: info.traces || []
    }
  ];

  lastFocusedElement = sourceElement || document.activeElement;
  allergenTitle.textContent = info.title || itemText.title;
  allergenModalContent.textContent = "";

  entries.forEach((entry) => {
    allergenModalContent.append(createAllergenEntry(entry, { showTitle: entries.length > 1 }));
  });

  allergenModal.classList.add("is-open");
  allergenModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("allergen-open");
  allergenModalClose.focus({ preventScroll: true });
}

function closeAllergenModal() {
  allergenModal.classList.remove("is-open");
  allergenModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("allergen-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function openImageLightbox() {
  lastFocusedElement = document.activeElement;
  imageLightboxImg.src = dishImage.currentSrc || dishImage.src;
  imageLightboxImg.alt = dishImage.alt;
  imageLightbox.classList.add("is-open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  imageLightboxClose.focus({ preventScroll: true });
}

function closeImageLightbox() {
  imageLightbox.classList.remove("is-open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetImageDrag() {
  if (imageDragState?.preview) {
    imageDragState.preview.remove();
  }

  clearActiveDragReturn();
  imageFrame.classList.remove("is-drag-source", "is-liquid-settle");
  imageDragState = null;
}

function clearActiveDragReturn({ settle = false } = {}) {
  const runningReturn = activeDragReturn;

  if (!runningReturn) return false;

  if (runningReturn.animation) {
    runningReturn.animation.cancel();
  }

  if (runningReturn.preview) {
    runningReturn.preview.remove();
  }

  activeDragReturn = null;
  imageFrame.classList.remove("is-drag-source");

  if (settle) {
    runImageFrameSettle();
  }

  return true;
}

function beginImageDrag(event) {
  if (!event.isPrimary || imageLightbox.classList.contains("is-open")) return;

  imageFrame.classList.remove("is-liquid-settle");

  imageDragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    rect: imageFrame.getBoundingClientRect(),
    preview: null,
    isDragging: false,
    scale: 1
  };

  imageFrame.setPointerCapture(event.pointerId);
}

function updateImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const deltaX = event.clientX - imageDragState.startX;
  const deltaY = event.clientY - imageDragState.startY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  if (distance < 3) return;

  event.preventDefault();
  imageDragState.isDragging = true;

  if (!imageDragState.preview) {
    imageDragState.preview = createImageDragPreview(imageDragState.rect);
    imageFrame.classList.add("is-drag-source");
  }

  updateImageDragPreview(imageDragState, deltaX, deltaY, distance);
}

function finishImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;

  const wasDragging = imageDragState.isDragging;
  const dragState = imageDragState;

  if (imageFrame.hasPointerCapture(event.pointerId)) {
    imageFrame.releasePointerCapture(event.pointerId);
  }

  imageDragState = null;

  if (wasDragging) {
    ignoreNextImageClick = true;
    window.setTimeout(() => {
      ignoreNextImageClick = false;
    }, 450);
    animateImageDragBack(dragState);
  }
}

function handleImageFrameClick(event) {
  if (ignoreNextImageClick || imageDragState || imageLightbox.classList.contains("is-open")) {
    event.preventDefault();
    return;
  }

  event.preventDefault();
  openImageLightbox();
}

function cancelImageDrag(event) {
  if (!imageDragState || imageDragState.pointerId !== event.pointerId) return;
  resetImageDrag();
}

function createImageDragPreview(rect) {
  const preview = document.createElement("img");

  preview.className = "image-drag-preview";
  preview.src = dishImage.currentSrc || dishImage.src;
  preview.alt = dishImage.alt;
  preview.decoding = "async";
  preview.style.width = `${rect.width}px`;
  preview.style.height = `${rect.height}px`;
  preview.style.left = `${rect.left}px`;
  preview.style.top = `${rect.top}px`;

  document.body.append(preview);
  return preview;
}

function updateImageDragPreview(state, deltaX, deltaY, distance) {
  const rect = state.rect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.55;
  const progress = Math.min(distance / threshold, 1);
  const eased = progress * progress * (3 - 2 * progress);
  const finalRect = getImageDragFinalRect(rect, viewportWidth, viewportHeight);
  const currentLeft = rect.left + (finalRect.left - rect.left) * eased;
  const currentTop = rect.top + (finalRect.top - rect.top) * eased;
  const currentWidth = rect.width + (finalRect.width - rect.width) * eased;
  const currentHeight = rect.height + (finalRect.height - rect.height) * eased;

  state.left = currentLeft;
  state.top = currentTop;
  state.width = currentWidth;
  state.height = currentHeight;
  state.progress = progress;
  state.preview.style.left = `${currentLeft}px`;
  state.preview.style.top = `${currentTop}px`;
  state.preview.style.width = `${currentWidth}px`;
  state.preview.style.height = `${currentHeight}px`;
}

function getImageDragFinalRect(rect, viewportWidth, viewportHeight) {
  const maxWidth = viewportWidth * 0.9;
  const maxHeight = viewportHeight * (viewportWidth <= 820 ? 0.72 : 0.76);
  const ratio = rect.height / rect.width;
  let width = Math.min(maxWidth, rect.width * (viewportWidth <= 820 ? 4.1 : 2.35));
  let height = width * ratio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height / ratio;
  }

  const left = (viewportWidth - width) / 2;
  const top = clamp((viewportHeight - height) / 2, 20, Math.max(20, viewportHeight - height - 20));

  return { left, top, width, height };
}

function animateImageDragBack(state) {
  const preview = state.preview;
  const rect = state.rect;

  if (!preview) {
    imageFrame.classList.remove("is-drag-source");
    return;
  }

  const fromLeft = state.left ?? rect.left;
  const fromTop = state.top ?? rect.top;
  const fromWidth = state.width ?? rect.width;
  const fromHeight = state.height ?? rect.height;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof preview.animate !== "function") {
    imageFrame.classList.remove("is-drag-source");
    window.setTimeout(() => preview.remove(), 180);
    return;
  }

  imageFrame.classList.remove("is-drag-source");

  const returnDuration = 400;
  const returnAnimation = preview.animate(
    [
      {
        left: `${fromLeft}px`,
        top: `${fromTop}px`,
        width: `${fromWidth}px`,
        height: `${fromHeight}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 0
      },
      {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: "scale(1, 1)",
        opacity: 1,
        filter: "saturate(1)",
        offset: 1
      }
    ],
    {
      duration: returnDuration,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      fill: "forwards"
    }
  );

  activeDragReturn = { animation: returnAnimation, preview };

  returnAnimation.onfinish = () => {
    if (activeDragReturn?.preview !== preview) return;

    activeDragReturn = null;
    preview.remove();
    runImageFrameSettle();
  };

  returnAnimation.oncancel = () => {
    if (activeDragReturn?.preview === preview) {
      activeDragReturn = null;
    }
  };
}

function runImageFrameSettle() {
  imageFrame.classList.remove("is-liquid-settle");
  void imageFrame.offsetWidth;
  imageFrame.classList.add("is-liquid-settle");
}

imageFrame.addEventListener("animationend", (event) => {
  if (event.animationName === "imageLiquidSettle") {
    imageFrame.classList.remove("is-liquid-settle");
  }
});

window.addEventListener(
  "scroll",
  () => {
    clearActiveDragReturn({ settle: true });
  },
  { passive: true }
);

setupLanguageSwitcher();
updateStaticText();
renderTabs();
renderActiveSection();
updateActiveTabs();

imageFrame.addEventListener("pointerdown", beginImageDrag);
imageFrame.addEventListener("pointermove", updateImageDrag);
imageFrame.addEventListener("pointerup", finishImageDrag);
imageFrame.addEventListener("pointercancel", cancelImageDrag);
imageFrame.addEventListener("click", handleImageFrameClick);

imageFrame.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageLightbox();
  }
});

imageLightboxClose.addEventListener("click", closeImageLightbox);

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

allergenModalClose.addEventListener("click", closeAllergenModal);

allergenModal.addEventListener("click", (event) => {
  if (event.target === allergenModal) {
    closeAllergenModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox.classList.contains("is-open")) {
    closeImageLightbox();
  }

  if (event.key === "Escape" && allergenModal.classList.contains("is-open")) {
    closeAllergenModal();
  }
});
