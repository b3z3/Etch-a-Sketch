(function () {

    const generateCanvas = function (size = 16) {
        const main = document.querySelector('.canvas-container');

        main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        main.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            main.appendChild(div);
        }

        let cells = document.querySelectorAll('.cell');

        cells.forEach(cell => {
            cell.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'orange';
            });

            // cell.addEventListener('mouseout', (e) => {
            //     e.target.style.backgroundColor = 'white';
            // });
        });
    };

    generateCanvas();

    // const getCells = function () {
    //     return document.querySelectorAll('.cell');
    // };

    const changeSize = document.querySelector('#change-size');

    changeSize.addEventListener('click', () => {
        const main = document.querySelector('.canvas-container');
        main.innerHTML = '';

        let newSize = +prompt('Enter new size:', 16);
        if (newSize > 0 && newSize < 100) {
            generateCanvas(newSize);
        }
    });

})()