import mongoose, { Schema, model } from 'mongoose';

const chatSchema = new Schema(
  {
    roomName: {
      type: String,
      required: true,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      required: false,
      default: false,
    },
    users: [
      {
        types: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    latestMessage: [
      {
        types: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
    groupAdming: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Chat = model('Chat', chatSchema);

export default Chat;
