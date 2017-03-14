/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */

function getUsernameField() {

  if ($("input[name=email]").length !== 0){
    // facebook
    return $("input[name=email]");
  } else if ($("input[name=username]").length !== 0){
    // instagram, citi
    return $("input[name=username]");
  } else if ($("input[name=login_email]").length !== 0){
    // paypal
    return $("input[name=login_email]");
  } else if ($("input[name=onlineId1]").length !== 0){
    // Bank of America
    return $("input[name=onlineId1]");
  }
  console.log("no username found");
  return $("");
}

function getPasswordField() {
  if ($("input[name=pass]").length !== 0){
    // facebook
    return $("input[name=pass]");
  } else if ($("input[name=password]").length !== 0){
    // instagram, citi
    return $("input[name=password]");
  } else if ($("input[name=login_password]").length !== 0){
    // paypal
    return $("input[name=login_password]");
  } else if ($("input[name=passcode1]").length !== 0){
    // Bank of America
    return $("input[name=passcode1]");
  } else if ($("input[name=passwd]").length !== 0){
    // yahoo
    return $("input[name=passwd]");
  }
  console.log("no pw found");
  return $("");
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  if ($("#loginbutton").length !== 0){
    // facebook
    return $("#loginbutton");
  } else if ($("form button").length !== 0){
    // instagram, paypal
    return $("form button");
  } else if ($("#hp-sign-in-btn").length !== 0){
    // Bank of America
    return $("#hp-sign-in-btn");
  } else if ($("#signInBtn").length !== 0){
    // Citi
    return $("#signInBtn");
  }
  return $("");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  username = getUsernameField().val();
  password = getPasswordField().val();

  let usernameField = getUsernameField();
  let passwordField = getPasswordField();
  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  //
  // XXX: Modify this code, if necessary, to work on more sites.
  //
  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};
