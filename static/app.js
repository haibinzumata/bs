$(document).ready(function() {
  'use strict';
  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
  $('#submitButton').click(function(e) {
    if ($('#inputName').val() === '') {
      e.preventDefault();
      $('#inputNameFormGroup').addClass('has-error');
    } else if ($('#inputEmail').val() === '') {
      e.preventDefault();
      $('#inputEmailFormGroup').addClass('has-error');
    } else if (!emailReg.test($('#inputEmail').val())) {
      e.preventDefault();
      $('#inputEmailFormGroup').addClass('has-error');
    } else if ($('#inputPassword').val() === '') {
      e.preventDefault();
      $('#inputPasswordFormGroup').addClass('has-error');
    } else if ($('#inputRepeatPassword').val() === '') {
      e.preventDefault();
      $('#inputRepeatPasswordFormGroup').addClass('has-error');
    } else if ($('#inputPassword').val() !== $('#inputRepeatPassword').val()) {
      e.preventDefault();
      $('#inputPasswordFormGroup').addClass('has-error');
      $('#inputRepeatPasswordFormGroup').addClass('has-error');
      $('#placeForAlert').addClass('alert alert-warning');
      var icon = "<span class='glyphicon glyphicon-remove'></span>";
      var str = "<button type='button' class='close' data-dismiss='alert'>" + icon + "</button>";
      $('#placeForAlert').html(str + ' Password and Repeat Password must be the same');
    } else {
      $('#signupForm').submit();
    }
  });
});
