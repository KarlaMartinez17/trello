//***************************version 0.0.1****************************************

var addListFormButton = document.getElementById('add-list-form-button');

function showForm(event){
    var listForm = document.getElementById('list-form');
    var showButtonContainer = document.getElementById('show-button-container');
    listForm.classList.remove('hidden');
    showButtonContainer.classList.add('hidden'); 
}

addListFormButton.addEventListener('click', showForm);

//********************************version 0.0.2***********************************

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

//*********************************version 0.0.3***************************************


var addCardButton = document.getElementById('add-card-link-button');

function showCardForm(event){
    var addCardLinkContainer = document.getElementById('add-card-link-container');
    var addCardForm = document.getElementById('add-card-form')
    addCardForm.classList.remove('hidden');
    addCardLinkContainer.classList.add('hidden'); 
}

addCardButton.addEventListener('click',showCardForm);