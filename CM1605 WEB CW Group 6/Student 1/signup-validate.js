
function validateForm() {
  
  let fname = document.forms["signupForm"]["fname"].value;
  let lname = document.forms["signupForm"]["lname"].value;
  let email = document.forms["signupForm"]["email"].value;
  let age = document.forms["signupForm"]["age"].value;
  let occupation = document.forms["signupForm"]["occupation"].value;
  
  
  if (fname == "" || lname == "" || email == "" || age == "" || occupation == "") {

    alert("Form should be filled completely ");
    return false;

  } else if (!isNaN(fname) || !isNaN(lname) || !isNaN(occupation)) {

    alert("Names or Occupation cannot include numbers ")
    return false;

  } else {

    alert("Dear " + fname + " thank you for Signing up with us.")

    return true;

  }
}


function  validateFormDiseases(form) {

  if (form.d1.checked) {
      return true;
  } if (form.d2.checked) {
      return true;
  } if (form.d3.checked) {
      return true;
  } if (form.d4.checked) {
      return true;
  } if (form.d5.checked) {
      return true;
  } if (form.other.checked) {
      return true;
  } else {
      alert("Select atleast one option")
      return false;
  }
}


function validateFormServices(form) {

  if (form.s1.checked) {
      return true;
      
  } if (form.s2.checked) {
      return true;

  } if (form.s3.checked) {
      return true;

  } if (form.other.checked) {
      return true;

  } else {
      alert("Select atleast one option")
      return false;
  }
}


function validateFormUse (form) {

  if (form.daily.checked) {

    return true;

  } if (form.weekly.checked) {
    
    return true;

  } if (form.monthly.checked) {

    return true;

  } else {
    alert("Select one option")
    return false;

  } 
}
