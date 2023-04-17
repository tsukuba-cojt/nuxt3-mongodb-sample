import { User, UserSchema } from "../../userModel";

//User.insertMany({ email: "hoge@hoge.com", name: "hoge" });

export default defineEventHandler(async (event) => {
  const users = await User.find();

  return {
    users,
  };
});
