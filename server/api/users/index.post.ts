import { User, UserSchema } from "../../userModel";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  User.insertMany(body);
  const users = await User.find();
  return {
    users,
  };
});
