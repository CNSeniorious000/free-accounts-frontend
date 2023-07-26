<script>
  import "uno.css";
  import "@unocss/reset/tailwind-compat.css";
</script>

<slot />

<style>
  :global(body) {
    --uno: bg-white dark:bg-cool-gray-950;
    --uno: text-gray-950 dark:text-white;
  }
</style>
