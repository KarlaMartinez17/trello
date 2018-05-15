var showFormButton = document.getElementById('show-form-button');
var listForm = document.getElementById('list-form');
var showButtonContainer = document.getElementById('show-button-container');


function hideForm(event){
    listForm.classList.remove('hidden');
    showButtonContainer.classList.add('hidden'); 
  }
  
  
  showFormButton.addEventListener('click', hideForm);