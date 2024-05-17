import Post from "$lib/server/database/models/Post.js"

export async function load({ params: { index } }) {
  const [post] = await Post.find({ index })

  return {
    post: JSON.stringify(post),
  }
}
