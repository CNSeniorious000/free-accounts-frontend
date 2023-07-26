<script>
  import { blur, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let delay = 0;
  export let duration = 500;
</script>

<span in:blur|global={{ delay, duration, amount: 5, opacity: 1, easing: quintOut }}>
  <span in:scale|global={{ delay, duration, start: 0.7, easing: quintOut }}>
    <slot />
  </span>
</span>
