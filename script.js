const container = document.querySelector(".container");

const button = document.querySelector(".button");
button.addEventListener("click", function (e) {
    let cases = 0;
    while(cases <= 0 || cases >= 100) {
       cases = parseInt(window.prompt("Number of squares per side?(Enter a numerical number below 100)", "O"), 10);
    }
    makeGrid(cases);
})

function makeGrid(boxes = 16) {
    const previousGrid = document.querySelectorAll("div.box");
    for (let i = 0; i < previousGrid.length; i++) {
        previousGrid[i].remove();
    }    
    container.setAttribute('style', `display: grid; grid-template-columns: repeat(${boxes}, 1fr); grid-gap: 1px;`);
    for(let i = 0; i < boxes * boxes; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', 'color: blue; background: red;'); 
        div.setAttribute('class', 'box');
        div.addEventListener('mouseenter', function (e) {
            e.target.style.backgroundColor = "blue";
            console.log(e)
        });  
        container.appendChild(div);
    }    
}