<script type="text/javascript">
var studentFirstNameCell = document.getElementById("sfName");
var studentLastNameCell =  document.getElementById("slName");
var studentPhoneCell = document.getElementById("sPhone");
var studentEmailCell =document.getElementById("sEmail");

var parent1FirstNameCell = document.getElementById("p1fName");
var parent1LastNameCell = document.getElementById("p1lName");
var  parent1PhoneCell = document.getElementById("p1Phone");
var  parent1EmailCell = document.getElementById("p1Email");

var parent2FirstNameCell = document.getElementById("p1fName");
var parent2LastNameCell =document.getElementById("p2lName");
var  parent2PhoneCell = document.getElementById("p2Email");
var  parent2EmailCell = document.getElementById("p2Phone");

function validatePhone(phone) {
  var re =\d{3}[\-]\d{3}[\-]\d{4};
  return re.test(phone);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var checkStudentFirstNameValidity = function() {
    if (studentFirstNameCell.value.length === 0 ) {
        studentFirstNameCell.setCustomValidity('Student first name is required.');
    } else {
        studentFirstNameCell.setCustomValidity('');
    }
};

var checkStudentLastNameValidity = function() {
    if (studentLastNameCell.value.length === 0 ) {
        studentLastNameCell.setCustomValidity('Student last name is required.');
    } else {
        studentLastNameCell.setCustomValidity('');
    }
};

var checkStudentPhoneValidity = function() {
    if (studentPhoneCell.value.length === 0 ) {
        studentPhoneCell.setCustomValidity('Student phone is required.');
        return;
    } else {
        studentPhoneCell.setCustomValidity('');
    }
    if (!validatePhone(studentPhoneCell))   {
        studentPhoneCell.setCustomValidity('Please use a valid phone.');
    }   else {
        studentPhoneCell.setCustomValidity('');
    }
};

var checkStudentEmailValidity = function() {
    if (studentEmailCell.value.length === 0 ) {
        studentEmailCell.setCustomValidity('Student phone is required.');
        return;
    } else {
        studentEmailCell.setCustomValidity('');
    }
    if (!validateEmail(studentEmailCell))   {
        studentEmailCell.setCustomValidity('Please use a valid email.');
    }   else {
        studentEmailCell.setCustomValidity('');
    }
};

var updateErrorMessages = function() {
    form.getElementsByClassName('errorSF')[0].innerHTML = studentFirstNameCell.validationMessage;
    form.getElementsByClassName('errorSL')[0].innerHTML = studentLastNameCell.validationMessage;
    form.getElementsByClassName('errorSP')[0].innerHTML = studentPhoneCell.validationMessage;
    form.getElementsByClassName('errorSE')[0].innerHTML = studentEmailCell.validationMessage;
};

// studentFirstNameCell.addEventListener('change', checkStudentFirstNameValidity, false);
// studentLastNameCell.addEventListener('change',checkStudentLastNameValidity, false);
// studentPhoneCell.addEventListener('change', checkStudentPhoneValidity, false);
// studentEmailCell.addEventListener('change', checkStudentEmailValidity, false);

// parent1FirstNameCell.addEventListener('change', checkParent1FirstNameValidity, false);
//  parent1LastNameCell.addEventListener('change', checkParent1LastNameValidity, false);
// parent1PhoneCell.addEventListener('change', checkParent1PhoneValidity, false);
//  parent1EmailCell.addEventListener('change', checkParent1EmailValidity, false);
//
//   parent2PhoneCell.addEventListener('change', checkParent2PhoneValidity, false);
//   parent2EmailCell.addEventListener('change', checkParent2EmailValidity, false);

  var form = document.getElementById('frmMemberSignUp');
  form.addEventListener('submit', function(event) {
      if (form.classList) form.classList.add('submitted');
      checkStudentFirstNameValidity();
      checkStudentLastNameValidity();
      checkStudentPhoneValidity();
      checkStudentEmailValidity();
      if (!this.checkValidity()) {
          event.preventDefault();
          updateErrorMessages();
      }
  }, false);
}
</script>
