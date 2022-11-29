const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      trim: true,
    },
    chatRoom: {
      type: Schema.Types.ObjectId,
      ref: 'ChatRoom',
    },
  },
  { timestamps: true }
);

const Message = model('Message', messageSchema);

module.exports = Message;
