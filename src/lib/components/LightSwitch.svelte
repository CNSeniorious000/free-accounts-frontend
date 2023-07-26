<script>
  import { isLight, initLightMode } from "../switchLightMode";
  import { onMount } from "svelte";

  $: light = $isLight;

  onMount(initLightMode);
</script>

<button class="h-5 m-0 p-0 w-5" on:click={() => (light = !light)}>
  <div class:lightOn={light} class:lightOff={!light} />
</button>

<style>
</style>
