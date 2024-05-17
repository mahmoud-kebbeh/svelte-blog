import Post from "$lib/server/database/models/Post.js"

export async function load() {
  try {
    const posts = await Post.find({})

    return {
      posts: JSON.stringify(posts),
    }
  } catch (error) {
    console.log(error)
  }
}
