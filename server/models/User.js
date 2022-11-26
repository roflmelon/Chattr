import mongoose, { Schema, model } from 'mongoose';

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
    //validate using regex
    validate: {
      validator: function (e) {
        return e.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
      },
      message: 'Not a valid email.',
    },
  },
  picture: {
    type: String,
    required: true,
    default:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  },
});

const User = model('User', userSchema);

export default User;
