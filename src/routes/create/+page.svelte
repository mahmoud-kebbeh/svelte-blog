<script>
  import { enhance } from "$app/forms"

  export let form

  let creating = false
</script>

<svelte:head>
  <title>Blog | Create</title>
  <meta name="description" content="Create a new blog post" />
</svelte:head>

<h2>Create</h2>

<form
  method="POST"
  use:enhance={() => {
    creating = true

    return async ({ update }) => {
      await update()
      creating = false
    }
  }}
>
  <label>
    Title:
    <input name="title" value={form?.title ?? ""} />
  </label>

  <label>
    Content:
    <input name="content" value={form?.content ?? ""} />
  </label>

  <button type="submit" disabled={creating}>Create</button>
</form>

{#if creating}
  <p class="creating">Creating the post...</p>
{:else}
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  {#if form?.success}
    <div class="success">
      <p>{form.success}</p>
      <p>Visit: <a href="/posts/{form.index}-{form.slug}">here</a></p>
    </div>
  {/if}
{/if}

<p>Go back <a href="/">Home</a></p>
