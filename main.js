const tableBody = document.querySelector('.tableBody');
const rowAdd = document.querySelector('.buttonTable')

rowAdd.addEventListener('click', addNewRow);

function addNewRow(){
    const rowNew = document.createElement('tr');
    rowNew.classList.add('fila');

    tableBody.appendChild(rowNew);

    const celda1 = document.createElement('td');
    celda1.classList.add('celda');

    const inputTable1 = document.createElement('input');
    inputTable1.setAttribute('type', Text);
    inputTable1.classList.add('tableInput');

    celda1.appendChild(inputTable1);
    rowNew.appendChild(celda1);

    const celda2 = document.createElement('td');
    celda1.classList.add('celda');

    const inputTable2 = document.createElement('input');
    inputTable2.setAttribute('type', Text);
    inputTable2.classList.add('tableInput');

    celda2.appendChild(inputTable2);
    rowNew.appendChild(celda2);

    const celda3 = document.createElement('td');
    celda1.classList.add('celda');

    const inputTable3 = document.createElement('input');
    inputTable3.setAttribute('type', Text);
    inputTable3.classList.add('tableInput');

    celda3.appendChild(inputTable3);
    rowNew.appendChild(celda3);

    const celda4 = document.createElement('td');
    celda1.classList.add('celda');

    const inputTable4 = document.createElement('input');
    inputTable4.setAttribute('type', Text);
    inputTable4.classList.add('tableInput');

    celda4.appendChild(inputTable4);
    rowNew.appendChild(celda4);

    const celda5 = document.createElement('td');
    celda1.classList.add('celda');

    const inputTable5 = document.createElement('input');
    inputTable5.setAttribute('type', Text);
    inputTable5.classList.add('tableInput');

    celda5.appendChild(inputTable5);
    rowNew.appendChild(celda5);
}

