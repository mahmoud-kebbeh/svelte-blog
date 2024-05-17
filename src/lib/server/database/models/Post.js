import { mongoose } from "$lib/server/database/mongoose"

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required."],
      trim: true,
    },
  },
  { timestamps: true }
)

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post
