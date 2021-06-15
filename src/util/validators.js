// validators
const validators = {};

// validate register input
validators.validateRegisterInput = (
     fullname, username, email, password, confirmPassword
) => {
     const errors = {};
     if (fullname.trim() === '') {
          errors.fullname = 'the fullname must not be empty';
     }
     else if (username.trim() === '') {
          errors.username = 'the username must not be empty';
     }
     else if (email.trim() === '') {
          errors.email = 'the email must not be empty';
     }
     else if (password.trim() === '') {
          errors.password = 'the password must not be empty';
     }
     else if (confirmPassword.trim() === '') {
          errors.confirmPassword = 'confirm password must not be empty';
     }
     else {
          const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          if (!email.match(regex)) {
               errors.email = 'the email must be a valid email address';
          }
          else if (password !== confirmPassword) {
               errors.confirmPassword = 'passwords must match';
          }
     }
     return {
          errors,
          valid: Object.keys(errors).length === 0
     }
}

// validate login input
validators.validateLoginInput = (email, password) => {
     const errors = {};
     if (email.trim() === '') {
          errors.email = 'the email must not be empty';
     }
     else if (password.trim() === '') {
          errors.password = 'the password must not be empty';
     }
     else {
          const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
          if (!email.match(regex)) {
               errors.email = 'the email must be a valid email address';
          }
     }
     return {
          errors,
          valid: Object.keys(errors).length === 0
     }
}

// export module
module.exports = validators;