const tableBody = document.querySelector('.tableBody')
const rowAdd = document.querySelector('.buttonTable')

fileAdd.addEventListener('click', addNewRow)

const addNewRow = () => {
    tableBody.innerHTML ='<tr> <td><input type="text"class= 'tableInput'></td> <td><input type="text"class= 'tableInput'></td> <td><input type="text"class= 'tableInput'></td><td><input type="text"class= 'tableInput'></td><td><input type="text"class= 'tableInput'></td></tr>'
}
