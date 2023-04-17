import { Schema, model } from "mongoose";
export const UserSchema = new Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
});

export const User = model<any>("User", UserSchema);
