let cartItems = [];

if (localStorage.getItem('cartItems')) {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
}

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price
    };
    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

document.addEventListener('DOMContentLoaded', function () {
    displayCart();
});

function displayCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}тг/кг`;
        cartList.appendChild(listItem);
    });
}

function buy() {
    var phone = document.getElementById("телефон").value;
    var ad = document.getElementById("адрес").value;
    var na = document.getElementById("имя").value;
    console.log(phone)
    if (phone.length !== 11 || ad.length < 10 || na.length < 3) {
        alert("Некорректные данные");
    } else {
        cartItems = [];
        displayCart();
        localStorage.clear()
        alert("Товары куплены, в ближайшее время с вами свяжутся!");
        document.location = 'Katalog.html'
    }
}
