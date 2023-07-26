<script>
  import { scale } from "svelte/transition";
  import Icon from "$lib/openai.svg?raw";
</script>

<div out:scale|global={{ start: 1.02, duration: 500 }} />

<section in:scale|global={{ start: 0.95, opacity: 0, duration: 1000, delay: 200 }} out:scale|global={{ start: 1.02, duration: 500 }}>{@html Icon}</section>

<style>
  div {
    --uno: md:hidden min-w-800px min-h-800px;
    --uno: fixed-center;

    --uno: text-[#80808020] dark:text-cool-gray-500/5 i-ri-openai-fill;
    --uno: animate-fade-in animate-duration-500 animate-delay-200 animate-both;
  }

  section {
    --uno: min-w-550px max-w-750px w-[50%];
    --uno: fixed-center left-2/7;

    --uno: blur-7 dark:blur-10 2xl:\!blur-0 2xl:opacity-50;
    --uno: opacity-0 md:opacity-100 text-teal-700 dark:text-cyan-300;
    --uno: transition-all duration-500; 
}
</style>
