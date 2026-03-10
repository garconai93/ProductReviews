// Product Data - 15 products with Romanian reviews
const products = [
    // Tech Category
    {
        id: 1,
        name: "Apple iPhone 15 Pro Max",
        category: "tech",
        categoryName: "Tech",
        emoji: "📱",
        price: 8999,
        originalPrice: 9499,
        rating: 4.8,
        reviewCount: 234,
        description: "Cel mai avansat iPhone de până acum. Echipat cu procesor A17 Pro, ecran Super Retina XDR de 6.7 inci și sistem de camere revoluționar. Construcție din titan de grad aerospațial.",
        features: [
            "Procesor A17 Pro",
            "Ecran 6.7\" Super Retina XDR",
            "Sistem de camere 48MP",
            "Baterie pentru întreaga zi",
            "Face ID și Apple Pay"
        ],
        reviews: [
            { name: "Mihai D.", rating: 5, date: "15 Feb 2026", text: "Cel mai bun telefon pe care l-am avut vreodată. Cameră fantastică și bateria ține foarte mult." },
            { name: "Ana C.", rating: 5, date: "10 Feb 2026", text: "Design-ul din titan e super. Ecranul este impecabil." },
            { name: "Cristian I.", rating: 4, date: "5 Feb 2026", text: "Foarte bun, dar prețul este cam mare." }
        ]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "tech",
        categoryName: "Tech",
        emoji: "📱",
        price: 7499,
        originalPrice: 7999,
        rating: 4.7,
        reviewCount: 189,
        description: " flagship-ul Samsung cu S Pen integrat, ecran Dynamic AMOLED 2X de 6.8 inci și procesor Snapdragon 8 Gen 3. Sistem de camere AI pentru fotografii profesionale.",
        features: [
            "Procesor Snapdragon 8 Gen 3",
            "Ecran 6.8\" Dynamic AMOLED 2X",
            "S Pen integrat",
            "200MP Camera principală",
            "One UI 6.1"
        ],
        reviews: [
            { name: "George M.", rating: 5, date: "18 Feb 2026", text: "S Pen-ul e foarte util. Cameră de excepție!" },
            { name: "Elena B.", rating: 4, date: "12 Feb 2026", text: "Android pur, funcționează perfect. Bateria ar putea fi mai bună." },
            { name: "Ionuț P.", rating: 5, date: "8 Feb 2026", text: "Best Android phone ever!" }
        ]
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        category: "tech",
        categoryName: "Tech",
        emoji: "🎧",
        price: 2499,
        originalPrice: 2799,
        rating: 4.9,
        reviewCount: 412,
        description: "Căști wireless premium cu anulare activă a zgomotului de generație următoare. Autonomie de 30 de ore și sunet Hi-Res Audio.",
        features: [
            "Anulare activă a zgomotului",
            "Autonomie 30 ore",
            "Sunet Hi-Res Audio",
            "Microfoane pentru apeluri",
            "Touch control"
        ],
        reviews: [
            { name: "Andrei S.", rating: 5, date: "20 Feb 2026", text: "Cel mai bun headphones pentru zbor! Anularea zgomotului e incredibilă." },
            { name: "Maria T.", rating: 5, date: "16 Feb 2026", text: "Sunet excelent, foarte confortabile pentru ore întregi." },
            { name: "Rareș V.", rating: 4, date: "11 Feb 2026", text: "Prea scumpe, dar merită fiecare leu." }
        ]
    },
    {
        id: 4,
        name: "MacBook Air M3",
        category: "tech",
        categoryName: "Tech",
        emoji: "💻",
        price: 6499,
        originalPrice: 6999,
        rating: 4.8,
        reviewCount: 156,
        description: "Laptop ultra-subțire și performant cu procesor M3. Ecran Liquid Retina de 13.6 inci, autonomie de până la 18 ore.",
        features: [
            "Procesor Apple M3",
            "Ecran 13.6\" Liquid Retina",
            "8GB RAM, 256GB SSD",
            "Autonomie 18 ore",
            "Touch ID"
        ],
        reviews: [
            { name: "Diana F.", rating: 5, date: "19 Feb 2026", text: "Perfect pentru muncă și development. Baterie incredibilă!" },
            { name: "Alexandru R.", rating: 5, date: "14 Feb 2026", text: "Cel mai bun laptop pe care l-am avut. Silențios și rapid." }
        ]
    },
    // Home Category
    {
        id: 5,
        name: "Dyson V15 Detect",
        category: "home",
        categoryName: "Casă",
        emoji: "🧹",
        price: 4999,
        originalPrice: 5499,
        rating: 4.7,
        reviewCount: 98,
        description: "Aspirator wireless cu laser detectează praful invizibil. Putere de aspirare de 240AW și timp de funcționare de 60 minute.",
        features: [
            "Laser pentru detectarea prafului",
            "Putere 240AW",
            "Autonomie 60 minute",
            "Filtru HEPA",
            "Ecran LCD"
        ],
        reviews: [
            { name: "Carmen L.", rating: 5, date: "17 Feb 2026", text: "Incredibil! Văd praful pe care nu-l vedeam niciodată." },
            { name: "Marius C.", rating: 4, date: "13 Feb 2026", text: "Foarte puternic, dar scump. merită" }
        ]
    },
    {
        id: 6,
        name: "Philips Hue Starter Kit",
        category: "home",
        categoryName: "Casă",
        emoji: "💡",
        price: 1299,
        originalPrice: 1499,
        rating: 4.6,
        reviewCount: 245,
        description: "Sistem de iluminat smart cu 4 becuri LED RGBW și bridge. Controlează luminile din telefon sau voce.",
        features: [
            "4 becuri RGBW",
            "Bridge inclus",
            "Control vocal",
            "16 milioane culori",
            "Programe automate"
        ],
        reviews: [
            { name: "Ioana M.", rating: 5, date: "15 Feb 2026", text: "Transformă complet atmosfera din casă! Super cool." },
            { name: "Bogdan H.", rating: 4, date: "9 Feb 2026", text: "Setup simplu, funcționează perfect cu HomeKit." }
        ]
    },
    {
        id: 7,
        name: "Nespresso Vertuo Plus",
        category: "home",
        categoryName: "Casă",
        emoji: "☕",
        price: 1899,
        originalPrice: 2199,
        rating: 4.5,
        reviewCount: 312,
        description: "Mașină de cafea premium cu tehnologie Centrifusion pentru espresso și cafea lungă. 5 dimensiuni de ceașcă.",
        features: [
            "Tehnologie Centrifusion",
            "5 dimensiuni ceașcă",
            "Preîncălzire 30 secunde",
            "Capacitate 1.8L",
            "Mod economic"
        ],
        reviews: [
            { name: "Daniela P.", rating: 5, date: "18 Feb 2026", text: "Cea mai bună cafea de acasă! Îmi lipsea Starbucks-ul." },
            { name: "Victor S.", rating: 4, date: "12 Feb 2026", text: "Cafea excelentă, dar capsulele sunt scumpe." }
        ]
    },
    {
        id: 8,
        name: "Xiaomi Mi Smart Band 8",
        category: "home",
        categoryName: "Casă",
        emoji: "⌚",
        price: 349,
        originalPrice: 399,
        rating: 4.4,
        reviewCount: 567,
        description: "Brățară fitness cu ecran AMOLED de 1.62\", monitorizare 24/7 a sănătății și peste 150 moduri de sport.",
        features: [
            "Ecran AMOLED 1.62\"",
            "Monitorizare puls, oxigen",
            "150+ moduri sport",
            "Autonomie 16 zile",
            "NFC (opțional)"
        ],
        reviews: [
            { name: "Ștefan A.", rating: 5, date: "20 Feb 2026", text: "Excelent raport calitate-preț. Bateria ține o eternitate!" },
            { name: "Monica D.", rating: 4, date: "14 Feb 2026", text: "Foarte bună pentru monitorizarea somnului." }
        ]
    },
    // Beauty Category
    {
        id: 9,
        name: "Dyson Airwrap Complete",
        category: "beauty",
        categoryName: "Frumusețe",
        emoji: "💇",
        price: 3899,
        originalPrice: 4299,
        rating: 4.6,
        reviewCount: 178,
        description: "Styler profesional cu multiple accesorii pentru toate tipurile de păr. Tehnologie Coanda pentru styling fără căldură excesivă.",
        features: [
            "6 accesorii incluse",
            "Tehnologie Coanda",
            "Control inteligent temperatură",
            "Pentru toate tipurile de păr",
            "Căldură sub 110°C"
        ],
        reviews: [
            { name: "Raluca N.", rating: 5, date: "16 Feb 2026", text: "Părul meu a arătat niciodată mai bine! Investiție bună." },
            { name: "Georgiana I.", rating: 4, date: "10 Feb 2026", text: "Rezultate de salon acasă. Scump, dar merită." }
        ]
    },
    {
        id: 10,
        name: "Oral-B Pro 3 3000",
        category: "beauty",
        categoryName: "Frumusețe",
        emoji: "🦷",
        price: 699,
        originalPrice: 799,
        rating: 4.7,
        reviewCount: 423,
        description: "Periuță de dinți electrică cu tehnologie oscilație-rotație-pulsatii. 3 moduri de curățare și temporizator.",
        features: [
            "Tehnologie 3D",
            "3 moduri curățare",
            "Senzor de presiune",
            "Temporizator 2 min",
            "2 capete incluse"
        ],
        reviews: [
            { name: "Adriana T.", rating: 5, date: "19 Feb 2026", text: "Dentiștii mei au observat diferența! Super." },
            { name: "Petruț B.", rating: 4, date: "15 Feb 2026", text: "Cea mai bună periuță pe care am avut-o." }
        ]
    },
    {
        id: 11,
        name: "La Mer Creme de la Mer",
        category: "beauty",
        categoryName: "Frumusețe",
        emoji: "🧴",
        price: 2499,
        originalPrice: 2799,
        rating: 4.9,
        reviewCount: 89,
        description: "Cremă de față de lux cu extract de alge marine. Hidratare intensă și regenerare celulară.",
        features: [
            "Extract de alge marine",
            "Hidratare 12 ore",
            "Anti-îmbătrânire",
            "Potrivit pentru toate tipurile",
            "Textură bogată"
        ],
        reviews: [
            { name: "Irina C.", rating: 5, date: "11 Feb 2026", text: "Cea mai bună cremă din viața mea. Vârsta pielii a scăzut!" },
            { name: "Claudia M.", rating: 5, date: "6 Feb 2026", text: "Investiție, dar rezultatele sunt acolo." }
        ]
    },
    {
        id: 12,
        name: "Foreo Luna 3",
        category: "beauty",
        categoryName: "Frumusețe",
        emoji: "🧼",
        price: 1199,
        originalPrice: 1399,
        rating: 4.5,
        reviewCount: 234,
        description: "Dispozitiv de curățare facială cu tehnologie T-Sonic și silicon medical. 8 intensități de vibrații.",
        features: [
            "Tehnologie T-Sonic",
            "Silicon medical",
            "8 intensități",
            "USB rechargeable",
            "100% waterproof"
        ],
        reviews: [
            { name: "Larisa F.", rating: 5, date: "17 Feb 2026", text: "Tenul meu nu a arătat niciodată mai curat!" },
            { name: "Nicoleta R.", rating: 4, date: "8 Feb 2026", text: "Foarte igienic, siliconul e moale și placut." }
        ]
    },
    // Sports Category
    {
        id: 13,
        name: "Apple Watch Ultra 2",
        category: "sports",
        categoryName: "Sport",
        emoji: "⌚",
        price: 4999,
        originalPrice: 5499,
        rating: 4.8,
        reviewCount: 167,
        description: "Ceas sport profesional cu GPS dual-frecvență, autonomie de 36 de ore și carcasă din titan.",
        features: [
            "GPS dual-frecvență",
            "Autonomie 36 ore",
            "Carbură din titan",
            "100m rezistență apă",
            "Buton Action"
        ],
        reviews: [
            { name: "Florin B.", rating: 5, date: "18 Feb 2026", text: "Cel mai bun ceas pentru sportivi! Bateria e incredibilă." },
            { name: "Mihai T.", rating: 5, date: "13 Feb 2026", text: "Am alergat ultramaraton cu el. Nu m-a lăsat niciodată." }
        ]
    },
    {
        id: 14,
        name: "Nike Air Zoom Pegasus 40",
        category: "sports",
        categoryName: "Sport",
        emoji: "👟",
        price: 899,
        originalPrice: 999,
        rating: 4.7,
        reviewCount: 534,
        description: "Pantofi de alergare cu amortizare Zoom Air și talpă React. Ideali pentru antrenament zilnic și competiții.",
        features: [
            "Tehnologie Zoom Air",
            "Talpă React",
            "Upper respirabil",
            "Drop 10mm",
            "Greutate 260g"
        ],
        reviews: [
            { name: "Alexandru G.", rating: 5, date: "19 Feb 2026", text: "Cea mai confortabilă pereche de sneakers!" },
            { name: "Ionuț M.", rating: 4, date: "14 Feb 2026", text: "Excelenți pentru alergat. Se mulează perfect pe picior." }
        ]
    },
    {
        id: 15,
        name: "Theragun Pro",
        category: "sports",
        categoryName: "Sport",
        emoji: "💪",
        price: 3999,
        originalPrice: 4499,
        rating: 4.8,
        reviewCount: 123,
        description: "Masajator percussiv profesional cu 5 niveluri de viteză și 6 capete de masaj. Autonomie de 150 de minute.",
        features: [
            "5 niveluri viteză",
            "6 capete masaj",
            "Autonomie 150 min",
            "Bluetooth integrat",
            "Torp silențios"
        ],
        reviews: [
            { name: "Radu C.", rating: 5, date: "16 Feb 2026", text: "Recuperare post-anjtrenament în 2 minute!" },
            { name: "Dragoș P.", rating: 5, date: "10 Feb 2026", text: "Folosit de fizioterapeuți profesioniști. Merită." }
        ]
    }
];

// App State
let currentPage = 'home';
let currentCategory = null;
let currentProduct = null;

// Render Functions
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            html += '<span class="star filled">★</span>';
        } else if (i === fullStars && hasHalf) {
            html += '<span class="star filled">★</span>';
        } else {
            html += '<span class="star">★</span>';
        }
    }
    return html;
}

function formatPrice(price) {
    return price.toLocaleString('ro-RO') + ' lei';
}

function renderProductCard(product, index) {
    return `
        <div class="product-card card-enter" style="animation-delay: ${index * 0.1}s" onclick="navigate('product', ${product.id})">
            <div class="product-image">
                <span class="product-badge ${product.category}">${product.categoryName}</span>
                <span class="emoji">${product.emoji}</span>
            </div>
            <div class="product-content">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="rating-value">${product.rating}</span>
                    <span class="review-count">(${product.reviewCount} recenzii)</span>
                </div>
                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}

function renderHomePage() {
    const featuredProducts = products.slice(0, 8);
    
    return `
        <div class="page-enter">
            <section class="hero">
                <div class="hero-badge">
                    <span>✦</span> 15+ Produse Recenzionate
                </div>
                <h1>Găsește Cel Mai Bun<br><span class="highlight">Produs Pentru Tine</span></h1>
                <p>Recenzii oneste și detaliate de la utilizatori reali. Comparează prețuri, vezi ratinguri și alege în cunoștință de cauză.</p>
                
                <div class="category-pills">
                    <button class="category-pill active" onclick="navigate('home')">
                        <span class="icon">🏠</span> Toate
                    </button>
                    <button class="category-pill" onclick="navigate('category', 'tech')">
                        <span class="icon">📱</span> Tech
                    </button>
                    <button class="category-pill" onclick="navigate('category', 'home')">
                        <span class="icon">🏠</span> Casă
                    </button>
                    <button class="category-pill" onclick="navigate('category', 'beauty')">
                        <span class="icon">💄</span> Frumusețe
                    </button>
                    <button class="category-pill" onclick="navigate('category', 'sports')">
                        <span class="icon">⚽</span> Sport
                    </button>
                </div>
            </section>

            <section class="container">
                <div class="section-header">
                    <h2 class="section-title">Produse Recomandate</h2>
                </div>
                <div class="product-grid">
                    ${featuredProducts.map((p, i) => renderProductCard(p, i)).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderCategoryPage(category) {
    const categoryNames = {
        tech: 'Tech',
        home: 'Casă',
        beauty: 'Frumusețe',
        sports: 'Sport'
    };
    
    const categoryEmojis = {
        tech: '📱',
        home: '🏠',
        beauty: '💄',
        sports: '⚽'
    };
    
    const categoryProducts = products.filter(p => p.category === category);
    
    return `
        <div class="page-enter">
            <section class="category-header">
                <span style="font-size: 64px;">${categoryEmojis[category]}</span>
                <h1>${categoryNames[category]}</h1>
                <p>${categoryProducts.length} produse în această categorie</p>
            </section>
            
            <section class="container">
                <div class="product-grid">
                    ${categoryProducts.map((p, i) => renderProductCard(p, i)).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderProductPage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return renderNotFoundPage();
    
    return `
        <div class="product-detail page-enter">
            <button class="back-btn" onclick="navigate(currentCategory ? 'category' : 'home', currentCategory)">
                ← Înapoi
            </button>
            
            <div class="product-detail-grid">
                <div class="product-detail-image">
                    <span class="emoji">${product.emoji}</span>
                </div>
                <div class="product-detail-info">
                    <span class="product-badge ${product.category}">${product.categoryName}</span>
                    <h1>${product.name}</h1>
                    <div class="product-detail-meta">
                        <span class="product-detail-category">${product.categoryName}</span>
                        <div class="product-rating">
                            <div class="stars">${renderStars(product.rating)}</div>
                            <span class="rating-value">${product.rating}</span>
                            <span class="review-count">(${product.reviewCount} recenzii)</span>
                        </div>
                    </div>
                    <div class="product-detail-price">
                        <span class="price-current">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-features">
                        <h3>Caracteristici</h3>
                        <ul>
                            ${product.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                    <button class="buy-btn" onclick="alert('Funcție de cumpărare vine curând!')">
                        🛒 Cumperi Acum
                    </button>
                </div>
            </div>
            
            <section class="reviews-section">
                <h2>Recenzii de la Utilizatori</h2>
                <div class="reviews-list">
                    ${product.reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                                    <div>
                                        <div class="reviewer-name">${review.name}</div>
                                        <div class="review-date">${review.date}</div>
                                    </div>
                                </div>
                                <div class="review-stars">${renderStars(review.rating)}</div>
                            </div>
                            <p class="review-text">${review.text}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderSearchResults(query) {
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    
    return `
        <div class="search-results page-enter">
            <div class="container">
                <h1>Rezultate pentru "${query}"</h1>
                ${filtered.length > 0 ? `
                    <div class="product-grid">
                        ${filtered.map((p, i) => renderProductCard(p, i)).join('')}
                    </div>
                ` : `
                    <div class="no-results">
                        <span class="emoji">🔍</span>
                        <h3>Nu am găsit produse</h3>
                        <p>Încearcă să cauți altceva</p>
                    </div>
                `}
            </div>
        </div>
    `;
}

function renderNotFoundPage() {
    return `
        <div class="no-results page-enter">
            <span class="emoji">😕</span>
            <h3>Pagina nu a fost găsită</h3>
            <button class="nav-btn" onclick="navigate('home')">Înapoi la Acasă</button>
        </div>
    `;
}

// Navigation
function navigate(page, param = null) {
    currentPage = page;
    currentCategory = param;
    currentProduct = param;
    
    const main = document.getElementById('mainContent');
    
    switch(page) {
        case 'home':
            main.innerHTML = renderHomePage();
            break;
        case 'category':
            main.innerHTML = renderCategoryPage(param);
            break;
        case 'product':
            main.innerHTML = renderProductPage(param);
            break;
        case 'search':
            main.innerHTML = renderSearchResults(param);
            break;
        default:
            main.innerHTML = renderNotFoundPage();
    }
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Close mobile menu
    document.getElementById('mobileNav').classList.remove('show');
}

// Search
function searchProducts() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        navigate('search', query);
    }
}

// Enter key for search
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    document.getElementById('mobileNav').classList.toggle('show');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    navigate('home');
});
