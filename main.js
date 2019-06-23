const btncolors = Array.from(document.getElementsByClassName("btn-color"));
const products = Array.from(document.getElementsByClassName("product-image"));
const product = products[0];

btncolors.map(function(button) {
    button.addEventListener('click', function(){
        console.log(button);
        const color = button.lastElementChild.textContent.toLowerCase();
        product.src=`./assets/images/${color}-model.png`;
    });
});

let c_info = document.getElementById('info');
let c_product = document.getElementById('product'); 
let c_mainRow = document.getElementById('main');

c_info.remove();
c_product.remove();
c_mainRow.append(c_info, c_product);
