let body = document.querySelector('body');
let products = document.querySelectorAll('.pr .price');
let productPic = document.querySelectorAll('.pr')
let productsPrice = [];

let cartPrice = 0;
let cart = document.querySelector('.price')

let load = 0;
let maxLoad = 1000;

body.append(products)

for (let i = 0; i < products.length; i++) {
    productsPrice[i] = products[i].innerHTML;
}
productPic.forEach(product => {
    product.addEventListener('click', (e)=> {
        let int = setInterval(blurring, 30);
        function blurring () {
            load++;
            if (load > maxLoad) {
                clearInterval(int)
            }
            product.style.filter = `blur(${scale(load, 0, maxLoad + 1, 30, 0)}px)`;
        }
        let currentPrice = parseFloat(product.querySelector('.price').innerHTML)
        if (isNaN(currentPrice)) {
            console.log(currentPrice + " is not a number")
        }
        cartPrice += parseFloat(currentPrice)
        console.log(cartPrice)
        cart.innerText = cartPrice;
        console.log("Cart " + cart.innerText)

        function scale (num, in_min, in_max, out_min, out_max) {
            return (num - in_min) * (out_max - out_min) / 
                   (in_max - in_min) + out_min;
        }
    
    })
})