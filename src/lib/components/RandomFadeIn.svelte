<script>
  import { fade } from "svelte/transition";
  import BlurredFadeIn from "./BlurredFadeIn.svelte";
  export let text;
</script>

{#each text as letter}
  {@const r = Math.random()}
  <BlurredFadeIn delay={300 * r} duration={800 + 400 * r}><span out:fade|global={{ delay: 150 * r, duration: 150 + 100 * r }}>{letter}</span></BlurredFadeIn>
{/each}
