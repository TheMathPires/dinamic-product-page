const btncolors = Array.from(document.getElementsByClassName("btn-color"));
const products = Array.from(document.getElementsByClassName("product-image"));
const product = products[0];

btncolors.map(function(button) {
    button.addEventListener('click', function(){
        console.log(button);
        const color = button.lastElementChild.textContent.toLowerCase();
        
        //product.src='./assets/images/' + color + '-model.png';
        product.src=`./assets/images/${color}-model.png`;

    });
});