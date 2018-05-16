/*función que esconde el boton de "añadir lista" 
y lo reemplaza con un cuadro con un input para guardar 
la informacion que ingrese el usuario*/

var addListFormButton = document.getElementById('add-list-form-button');

function hideForm(event){
    var listForm = document.getElementById('list-form');
    var showButtonContainer = document.getElementById('show-button-container');
    listForm.classList.remove('hidden');
    showButtonContainer.classList.add('hidden'); 
}

addListFormButton.addEventListener('click', hideForm);

//***************************************************************************************
 

var saveButton = document.getElementById('save-list-button');

function rescueValue(){
    
    var columnElement = document.createElement('section');
    columnElement.setAttribute('class','column');

    var listValue = document.getElementById('inputBox').value;
    document.getElementById('inputBox').value = '';
    
    var textContainer = '<div id="text-container" class="add-card">'+
                        '<p class="card-box">'+listValue+'</p>'+
                        '<a href="#" class="add-card-link">'+
                            'Añadir una tarjeta...'+
                        '</a>'+
                    '</div>';

    columnElement.innerHTML = textContainer;

    var controlsSection = document.getElementById('controls');

    document.body.insertBefore(columnElement, controlsSection);
}

saveButton.addEventListener('click', rescueValue);


/*
var perroBtns = document.getElementsByClassName('add-card-link');

function perroFunction(event) {
    this.parentNode.classList.add('hidden');
    this.parentNode.nextElementSibling.classList.remove('hidden');
}

for (var i = 0; i < perroBtns.length; i++) {
    perroBtns[i].addEventListener('click', perroFunction, false);
}
*/
    