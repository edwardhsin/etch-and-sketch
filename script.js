let initSize = 4;
let totalBox;
let newSize;


let grid = document.querySelector('.grid')

const rezizeBtn = document.querySelector('.resizeBtn');
rezizeBtn.addEventListener("click", resizeGrid);

const inputSize = document.querySelector('.inputSize');


const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', erasePaint);

function alertFunc() {
    alert("alert func called: " + inputSize.value);
}

createGrid(initSize);

//functions by adamperry
//creating grid with flexbox method
function createGrid(insertSize){
    totalBox = insertSize * insertSize;
    console.log(insertSize + " ^2--> " + totalBox);

    //fixed size container grid, need to adjust inner grid boxes to fit in the container grid
    let pixelLength = (getComputedStyle(grid).minWidth.replace('px', '') / insertSize) + 'px';

    while (totalBox) {
        const pixel = document.createElement('div');
        pixel.style.width = pixelLength;
        pixel.style.height = pixelLength;
        pixel.style.backgroundColor = 'white';
        //pixel.style.border = "black solid 1px";  can't add borders bc wont fit in container grid
        pixel.classList.add('pixel');
        grid.appendChild(pixel);
        pixel.addEventListener('mouseover', turnBlue);
        totalBox--;
    }

}

function resizeGrid(){
    newSize = inputSize.value;
    if (newSize > 100){
        // to prevent lon loading
        newSize = 100;
    }
    clearGrid();
    createGrid(newSize);
}

function erasePaint() {
    Array.from(document.querySelectorAll('.pixel')).forEach(pixel => pixel.style.backgroundColor = 'white');
}

function clearGrid() {
    Array.from(document.querySelectorAll('.pixel')).forEach(pixel => grid.removeChild(pixel));
}

function turnBlue(e){
    e.target.style.backgroundColor = "blue";
}
