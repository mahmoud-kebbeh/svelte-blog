<script>
  import moment from "moment"

  export let data

  const post = JSON.parse(data.post)
</script>

<svelte:head>
  <title>Blog | {post.title}</title>
  <meta name="description" content={post.title} />
</svelte:head>

<h2>{post.title}</h2>

<h3>{post.content}</h3>

<p>{moment(post.createdAt).fromNow(false)}</p>
