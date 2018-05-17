/*función que esconde el boton de "añadir lista" 
y lo reemplaza con un cuadro con un input para guardar 
la informacion que ingrese el usuario*/

var addListFormButton = document.getElementById('add-list-form-button');

function showForm(event){
    var listForm = document.getElementById('list-form');
    var showButtonContainer = document.getElementById('show-button-container');
    listForm.classList.remove('hidden');
    showButtonContainer.classList.add('hidden'); 
}

addListFormButton.addEventListener('click', showForm);

//**************************************************************************** */

var saveButton = document.getElementById('save-list-button');

function addList(){
    var inputBox = document.getElementById('input-box');
    var inputBoxValue = inputBox.value
    document.getElementById('input-box').value = '';
    var listTitle = document.getElementById('list-title');
    var column = document.getElementById('column');
    column.classList.remove('hidden');
    listTitle.innerText = inputBoxValue;

}

saveButton.addEventListener('click', addList);
/*****************************************************************************

var addCardButton.document.getElementById('add-card-button');

function showCardForm(event){
    var addCardLinkContainer.getElementById('"add-card-link-container')
    var 
}

addCardButton.addEventListener('click',)*/