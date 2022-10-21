function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const registeredClose = document.querySelectorAll("#registered-close-btn");
const displayThanks = document.querySelectorAll("#thanks");
const modalBody = document.querySelectorAll("#modal-body");
const formDisplay = document.querySelectorAll("#registrationForm");
// const form = document.querySelector("#registrationForm");

// modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// modal form
function launchModal() {
  modalbg.style.display = "block";
  formDisplay[0].style.display = "block";
}

// close modal form
modalClose.forEach(close => close.addEventListener("click", closeModal));
registeredClose.forEach(close => close.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  displayThanks[0].style.display = "none";
}

function thanksForRegistering() {
  let thanksHeight = formDisplay[0].offsetHeight;

  formDisplay[0].style.display = "none";
  displayThanks[0].style.display = "flex";
  displayThanks[0].style.height = thanksHeight + "px";
}

// form 
let form = document.querySelector('#registrationForm');

// firstName + validation

function validFirstName() {
    const firstNameValue = document.getElementById("first").value;
    const errorFirstName = document.querySelector("#error-message-first-name");
    
    if(firstNameValue.length < 2) {
      return errorFirstName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    }
    errorFirstName.textContent = "";
    return true;
};

console.log(validFirstName)


// lastName + validation

function validLastName() {
    const lastNameValue = document.getElementById("last").value;
    console.log("LastName",lastNameValue)
    const errorLastName = document.querySelector("#error-message-last-name");

    if(lastNameValue.length < 2) {
      return errorLastName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    }
    errorLastName.textContent = "";
    return true;
};

// email + validation

function validEmail() {
  const emailValue = document.getElementById("email").value;
  console.log("email",emailValue)
  const erroremail = document.querySelector("#error-message-email");

    var emailformat = /^(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+[,;]?[ ]?)+$/;
    console.log("pattern",emailformat.test(emailValue))
    if(!emailformat.test(emailValue)) {
      return erroremail.textContent = 'Votre e-mail est invalide';
    }
    erroremail.textContent = "";
    return true;
};


// birthdate validation

function validBirthdate() {
  const birthdateValue = document.getElementById("birthdate").value;
  console.log("birthdate",birthdateValue)
  const errorbirthdate = document.querySelector("#error-message-birthdate");

    var birthdateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    console.log("pattern",birthdateformat.test(birthdateValue))
    if(!birthdateformat.test(birthdateValue)) {
      return errorbirthdate.textContent = 'Votre date de naissance est invalide';
    }
    errorbirthdate.textContent = "";
    return true;
};

// tournament validation

function validQuantity() {
  const quantityValue = document.getElementById("quantity").value;
  console.log("quantity",quantityValue)
  const errorquantity = document.querySelector("#error-message-quantity");

    var quantityformat = /[0-9]/;
    console.log("pattern",quantityformat.test(quantityValue))
    if(!quantityformat.test(quantityValue)) {
      return errorquantity.textContent = 'Seul les chiffres sont acceptés';
    }
    errorquantity.textContent = "";
    return true;
  };

// check validation

function validCities()
{
  const errorcities = document.querySelector("#error-message-cities");

    var radios = document.getElementsByName("location");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) {
          formValid = true;
          errorcities.textContent = ''
        }
        i++;        
    }

    if (!formValid) {
  errorcities.textContent = 'Sélectionner une ville'
    }
    return formValid;


}

// terms and conditions ok

function validCondition()
{
  const condi = document.querySelector(`#checkbox1`);
  const errorcondi = document.querySelector("#error-message-condition");
	let isValid = false;
	
		if (condi.checked)
		{ console.log(condi.checked,"test condi")
			isValid = true
    
		}else if(condi.checked!=true){
      errorcondi.textContent = 'veuillez accepter les conditions'
    }
   

  
	return isValid 
}



form.addEventListener('submit', function(e){
    e.preventDefault();

    const checkValidFirstName = validFirstName();

    const checkValidLastName = validLastName();

    const checkValidEmail = validEmail();

    const checkValidBirthdate = validBirthdate();

    const checkValidQuantity = validQuantity();

    const checkValidCities = validCities();
    const checkValidCondition = validCondition();
    
 
   
     if(checkValidFirstName === true && checkValidLastName === true && checkValidEmail === true && checkValidBirthdate === true && checkValidQuantity === true && checkValidCities === true && checkValidCondition===true)
thanksForRegistering()

});
