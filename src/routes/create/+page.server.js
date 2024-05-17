import Post from "$lib/server/database/models/Post.js"

import { fail } from "@sveltejs/kit"

import slugify from "slugify"

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()

    const title = data.get("title")
    const slug = slugify(title.substring(0, 36))
    const content = data.get("content")

    let post

    try {
      if (title.trim() === "" || content.trim() === "") {
        throw new Error("Please fill out all the fields.")
      }

      const lastIndex = await Post.countDocuments()

      post = await Post.create({
        index: lastIndex > 0 ? lastIndex + 1 : 1,
        title,
        slug,
        content,
      })
    } catch (error) {
      return fail(422, {
        title,
        content,
        error: error.message,
      })
    }

    return {
      success: "Post created successfully!",
      index: post.index,
      slug,
    }
  },
}
