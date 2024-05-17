<script>
  import Header from "$lib/components/Header.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<main>
  <div class="container">
    <Header />

    <div class="slot">
      <slot />
    </div>

    <Footer />
  </div>
</main>

<style>
  main {
    background: linear-gradient(to right, #36a0a499, #3c97ffa1);
    font-size: 2em;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: 0 3em;
  }

  .slot {
    margin-top: 0;
    margin-bottom: auto;
  }
</style>
