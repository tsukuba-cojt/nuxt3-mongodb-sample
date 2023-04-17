import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();
  console.log("Nitro plugin Accesing");
  try {
    await mongoose.connect(config.mongodbUri);
    console.log("connect mongo");
  } catch (e) {
    console.error(e);
  }
};
