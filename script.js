let initSize = 4;
let totalBox;



let grid = document.querySelector('.grid')


createGrid(initSize);

//section by adamperry
function createGrid(insertSize){
    totalBox = insertSize * insertSize;
    console.log(insertSize + " ^2--> " + totalBox);

    //fixed size grid, need to adjust gordboxes to fit in the grid
    let pixelLength = (getComputedStyle(grid).minWidth.replace('px', '') / insertSize) + 'px';

    while (totalBox) {
        const pixel = document.createElement('div');
        pixel.style.width = pixelLength;
        pixel.style.height = pixelLength;
        pixel.style.backgroundColor = 'white';
        pixel.classList.add('pixel');
        grid.appendChild(pixel);
        totalBox--;
    }

}