const { Schema, model } = require('mongoose');
const isStrongPassword = require('validator/lib/isStrongPassword');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    //trims user input's whitespace in the beginning and end of the string
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //e is the element value recieved from the form
    validate: {
      validator: function (e) {
        return e.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
      },
      message: 'Not a valid email.',
    },
  },
  password: {
    type: String,
    required: true,
    //validate using regex
    validate: {
      validator: function (e) {
        return isStrongPassword(e, {
          minLength: 8,
          minLowercase: 0,
          minUppercase: 0,
          minNumbers: 0,
          minSymbols: 0,
        });
      },
      message: 'At least 8 characters.',
    },
  },
  picture: {
    type: String,
    required: true,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  },
});

//hashing password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//checking password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
