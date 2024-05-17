import mongoose from "mongoose"

import { MONGODB_URI } from "$env/static/private"

mongoose.set("strictQuery", false)

const connectToDB = async () => {
  console.log(`Connecting to the database.`)
  try {
    await mongoose.connect(MONGODB_URI)
    console.log(`Connected to the database.`)
  } catch (error) {
    console.log(error.message)
  }
}

export { mongoose, connectToDB }
