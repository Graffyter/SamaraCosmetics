//agregar nueva fila a la tabla
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

//cambio de pagina
const buttonPage1 = document.querySelector('.page1');
const buttonPage2 = document.querySelector('.page2');
const buttonPage3 = document.querySelector('.page3');
const hoja1 = document.querySelector('hoja1')
const hoja2 = document.querySelector('hoja2')
const hoja3 = document.querySelector('hoja3')

buttonPage1.addEventListener('click', colorChange1);
buttonPage1.addEventListener('click', showHoja1);
buttonPage2.addEventListener('click', colorChange2);
buttonPage2.addEventListener('click', showHoja2);
buttonPage3.addEventListener('click', colorChange3);
buttonPage3.addEventListener('click', showHoja3);

function colorChange1(){
    const HaveClassSelected = buttonPage1.classList.contains('selected');
    if(!HaveClassSelected){
        buttonPage1.classList.add('selected');
        buttonPage2.classList.remove('selected');
        buttonPage3.classList.remove('selected');
    }  
}

function showHoja1(){
    const isHoja1Show = hoja1.classList.contains('noSelected');
    if(!isHoja1Show){
        hoja1.classList.remove('noSelected');
        hoja2.classList.add('noSelected');
        hoja3.classList.add('noSelected');
    }
}


function colorChange2(){
    const HaveClassSelected = buttonPage2.classList.contains('selected');
    if(!HaveClassSelected){
        buttonPage1.classList.remove('selected');
        buttonPage2.classList.add('selected');
        buttonPage3.classList.remove('selected');
    }
}

function showHoja2(){
    const isHoja2Show = hoja1.classList.contains('noSelected');
    if(!isHoja2Show){
        hoja1.classList.add('noSelected');
        hoja2.classList.remove('noSelected');
        hoja3.classList.add('noSelected');
    }
}

function colorChange3(){
    const HaveClassSelected = buttonPage3.classList.contains('selected');
    if(!HaveClassSelected){
        buttonPage1.classList.remove('selected');
        buttonPage2.classList.remove('selected');
        buttonPage3.classList.add('selected');
    }
}
function showHoja3(){
    const isHoja3Show = hoja1.classList.contains('noSelected');
    if(!isHoja3Show){
        hoja1.classList.add('noSelected');
        hoja2.classList.add('noSelected');
        hoja3.classList.remove('noSelected');
    }
}