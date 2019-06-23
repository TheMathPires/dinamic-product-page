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

let rightSide = document.getElementsByClassName('info');
let leftSide = document.getElementsByClassName('product'); 
let mainRow = Array.from(document.getElementsByClassName('row'))[0];

document.querySelector('.container .row').parentNode.removeChild(rightSide);

// Create a new element
//var newColumn = document.createElement('div');

// Get the reference node
//var referenceNode = document.querySelector('.info');

// Insert the new node before the reference node
//referenceNode.before(newColumn);