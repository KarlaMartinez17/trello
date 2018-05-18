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
    listTitle.value = inputBoxValue;
}

saveButton.addEventListener('click', addList);

//*********************************version 0.0.3***************************************


var addCardLinkButton = document.getElementById('add-card-link-button');

function showCardForm(event){
    var addCardLinkContainer = document.getElementById('add-card-link-container');
    var addCardForm = document.getElementById('add-card-form')
    addCardForm.classList.remove('hidden');
    addCardLinkContainer.classList.add('hidden'); 
    getfocus();
}

addCardLinkButton.addEventListener('click',showCardForm);

//****************************Version 0.0.4*****************************************

function getfocus(){
    document.getElementById('list-title').focus();
}

//***************************Version 0.0.4-1 y 5 ****************************************
var addCardButton = document.getElementById('add-card-button');

function addCard (){
    var textValueCard = document.getElementById('text-value-card').value;
    document.getElementById('text-value-card').value = '';
    var cardContainer = document.getElementById('card-container');
    
    var newDiv = document.createElement('div');
    newDiv.innerHTML = textValueCard;
    var addCardLinkContainer = document.getElementById('add-card-link-container');

    cardContainer.insertBefore(newDiv, addCardLinkContainer)

}


addCardButton.addEventListener('click', addCard);


