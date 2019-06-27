const btncolors = Array.from(document.getElementsByClassName('btn-color'));
const products = Array.from(document.getElementsByClassName('product-image'));
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

let button = document.createElement('button');
let btn_content = document.createTextNode('VER OUTROS MODELOS');

button.append(btn_content);
let element = document.getElementById('info');
element.appendChild(button);

button.classList.add('btn-more');
let moreModels = document.createElement('div');
moreModels.classList.add('more-models');
let buttonOther = document.querySelector('.btn-more');

button.addEventListener('click', function(button){
    c_info.appendChild(moreModels);
    moreModels.innerHTML= '<div class="col-md-10 color others"> <a class="btn-color"> <img class="other-model" src="assets/images/iphone-xs.jpg"> <span>iPhone XS</span> </div>';
    btn_content.remove();
    buttonOther.remove();
});