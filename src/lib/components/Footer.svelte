<footer>
  <div class="info">
    <p class="copyrights">
      Copyright &copy; Blog 2020-{new Date().getFullYear()}. All rights
      reserved.
    </p>
    <p>
      Powered by <a href="https://svelte.dev/">Svelte</a><a
        href="https://kit.svelte.dev/">Kit</a
      >
    </p>
  </div>
</footer>

<style>
  footer {
    display: block;
    text-align: center;
    margin-bottom: 0.25em;
    font-weight: 200;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.33em;
  }

  a {
    -webkit-text-fill-color: #ccc;
    -webkit-text-stroke: 1px;
  }

  a:nth-of-type(1) {
    color: #ff3e00;
  }

  a:nth-of-type(2) {
    color: #656565;
  }
</style>
