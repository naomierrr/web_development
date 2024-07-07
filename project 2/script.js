let navbar = document.querySelector('.navbar')
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active')
}




let search = document.querySelector('.search')
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active')
}

var swiper = new Swiper(".cat-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".story-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartButton = document.getElementById('close-cart');
const clearCartButton = document.getElementById('clear-cart');
const cartContent = document.getElementById('cart-content');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

let cart = [];

// Event listeners for adding items to cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartClicked);
});

// Event listener for closing cart overlay
closeCartButton.addEventListener('click', toggleCartOverlay);

// Event listener for clearing cart
clearCartButton.addEventListener('click', clearCart);

// Function to handle adding items to cart
function addToCartClicked(event) {
    const button = event.target;
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const image = button.dataset.image;

    // Check if item already exists in cart
    const isInCart = cart.some(item => item.id === id);
    if (isInCart) {
        alert('This item is already added to the cart.');
        return;
    }

    // Add item to cart
    const item = { id, name, price, image, quantity: 1 };
    cart.push(item);

    // Update cart UI
    updateCartUI();

    // Update cart total and count
    updateCartTotal();
    updateCartCount();
}

// Function to update cart UI
function updateCartUI() {
    cartContent.innerHTML = ''; // Clear existing content

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <h5>$${item.price.toFixed(2)}</h5>
                <span class="remove-item" data-id="${item.id}">remove</span>
            </div>
            <div>
                <i class="fa-solid fa-chevron-left" data-id="${item.id}"></i>
                <span class="item-quantity">${item.quantity}</span>
                <i class="fa-solid fa-chevron-right" data-id="${item.id}"></i>
            </div>
        `;
        cartContent.appendChild(div);

        // Add event listeners for remove and quantity change
        div.querySelector('.remove-item').addEventListener('click', removeItem);
        div.querySelectorAll('.fa-chevron-left, .fa-chevron-right').forEach(icon => {
            icon.addEventListener('click', changeItemQuantity);
        });
    });
}

// Function to update cart total
function updateCartTotal() {
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotal.innerText = `$${totalAmount.toFixed(2)}`;
}

// Function to update cart count
function updateCartCount() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.innerText = itemCount;
}

// Function to remove item from cart
function removeItem(event) {
    const id = event.target.dataset.id;
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    updateCartTotal();
    updateCartCount();
}

// Function to change item quantity in cart
function changeItemQuantity(event) {
    const id = event.target.dataset.id;
    const operation = event.target.classList.contains('fa-chevron-left') ? -1 : 1;
    const item = cart.find(item => item.id === id);
    item.quantity += operation;
    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }
    updateCartUI();
    updateCartTotal();
    updateCartCount();
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    cartContent.innerHTML = ''; // Clear cart content
    updateCartTotal();
    updateCartCount();
}

// Function to toggle cart overlay visibility
function toggleCartOverlay() {
    cartOverlay.classList.toggle('show-cart');
    if (cartOverlay.classList.contains('show-cart')) {
        updateCartUI(); // Update cart overlay content when showing
    }
}

// Event listener for icon cart (toggle cart tab)
const iconCart = document.querySelector('.icon-cart');
const cartTab = document.querySelector('.cartTab');
const closeCart = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    cartTab.classList.toggle('open');
});

closeCart.addEventListener('click', () => {
    cartTab.classList.remove('open');
});











