<script>
  import moment from "moment"

  export let data

  const posts = JSON.parse(data.posts)
</script>

<svelte:head>
  <title>Blog | Homepage</title>
  <meta name="description" content="Blog Homepage" />
</svelte:head>

{#if posts.length > 0}
  <ul>
    {#each posts as post (post._id)}
      <li>
        <div>
          <a href={`/posts/${post.index}-${post.slug}`}>{post.title}</a>
          <p>{post.content.substring(0, 50)}...</p>
          <p>{moment(post.createdAt).fromNow(false)}</p>
        </div>
      </li>
    {/each}
  </ul>
{:else}
  <h3>No posts to show...</h3>
{/if}
