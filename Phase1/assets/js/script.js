// array of product objects (watches)
const products = [
    { 
        name: "CLASSIC LEATHER", 
        category: "Rolex", 
        price: 199.99, 
        image: "assets/imgs/watch1.jpg",
        info: "stylish leather watch with a minimalist dial design."
    },
    { 
        name: "ELEGANT GOLD", 
        category: "Rolex", 
        price: 499.99, 
        image: "assets/imgs/watch2.jpg",
        info: "luxurious gold watch perfect for special occasions."
    },
    {
        name: "MODERN CHRONO", 
        category: "Rolex", 
        price: 349.99, 
        image: "assets/imgs/watch3.jpg",
        info: "modern watch with chronograph function and stainless steel strap."
    },
    {
        name: "SPORTY VIBE", 
        category: "Casio", 
        price: 299.49, 
        image: "assets/imgs/watch4.jpg",
        info: "sports watch with durable rubber strap and water resistance."
    },
    {
        name: "SILVER SHINE", 
        category: "Casio", 
        price: 399.99, 
        image: "assets/imgs/watch5.jpg",
        info: "sleek silver watch with a brushed finish and elegant design."
    },
    {
        name: "DIGITAL PRO", 
        category: "Citizen", 
        price: 249.99, 
        image: "assets/imgs/watch6.jpg",
        info: "multifunctional digital watch with timer, alarm, and light features."
    },
    {
        name: "CLASSIC AUTOMATIC", 
        category: "Citizen", 
        price: 599.99, 
        image: "assets/imgs/watch7.jpg",
        info: "automatic mechanical watch with a classic design."
    },
    {
        name: "AUTOMATIC PRO", 
        category: "Citizen", 
        price: 599.99, 
        image: "assets/imgs/watch8.jpg",
        info: "sleek silver watch with a brushed finish and elegant design."
    }
];

// Function to filter products
function filterProd(category) {
    let filteredProducts;
    let catego = document.getElementById('category');

    if (category === 'all') {
        filteredProducts = products;
        catego.innerHTML = "OUR PRODUCT LISTS";
    } else {
        filteredProducts = products.filter(product => product.category === category);
        catego.innerHTML = `${category.toUpperCase()} LIST`;
    }

    displayProd(filteredProducts);

    const buttons = document.querySelectorAll('#filter-btns button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.innerText.toLowerCase() === category) {
            button.classList.add('active');
        }
    });
}

// Display products
function displayProd(filteredProducts) {
    const productContainer = document.getElementById('prod-container');
    productContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category.toUpperCase()}</p>
            <p> ${product.info}</p>
            <h4>$${product.price}</h4>
        `;
        productContainer.appendChild(productCard);
    });
}

// Initial display of all products
displayProd(products);
