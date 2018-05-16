var showFormButton = document.getElementById('show-form-button');
var saveButton = document.getElementById('green-button');

function hideForm(event){
    var listForm = document.getElementById('list-form');
    var showButtonContainer = document.getElementById('show-button-container');
    listForm.classList.remove('hidden');
    showButtonContainer.classList.add('hidden'); 
  }

showFormButton.addEventListener('click', hideForm);

function rescueValue(){
    
    var columnElement = document.createElement('section');
    columnElement.setAttribute('class','column');

    var taskValue = document.getElementById('inputBox').value;
    
    var textContainer = '<div id="text-container" class="add-card">'+
                        '<p class="card-box">'+taskValue+'</p>'+
                        '<a href="#" class="add-card-link">'+
                            'Añadir una tarjeta...'+
                        '</a>'+
                    '</div>';

    columnElement.innerHTML = textContainer;

    var controlsSection = document.getElementById('controls');

    document.body.insertBefore(columnElement, controlsSection);
}

saveButton.addEventListener('click', rescueValue);

    