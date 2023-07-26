<script>
  import { fly, scale, fade } from "svelte/transition";
  import RandomFadeIn from "$lib/components/RandomFadeIn.svelte";
  import BlurredFadeIn from "$lib/components/BlurredFadeIn.svelte";
  import FreeChatIcon from "$lib/icon.svg?raw";
  import GradientLayer from "../lib/components/GradientLayer.svelte";
  import Hero from "./Hero.svelte";
  import { light, initLightMode, setLightMode } from "$lib/switchLightMode";
  import { onMount } from "svelte";

  let mounted = false;

  $: isLight = $light;
  $: mounted && setLightMode(isLight);

  onMount(() => {
    initLightMode();
    mounted = true;
  });
</script>

{#if mounted}
  <div class="flex flex-col text-center tracking-wider whitespace-nowrap relative select-none">
    <div class="bg-mask-hero-tic-tac-toe h-screen bg-teal-950/7 w-screen fixed dark:bg-gray-50/5" in:scale|global={{ start: 1.2, opacity: 0, duration: 1500 }} out:scale|global={{ start: 0.9, duration: 800 }} />
    <Hero />
    <div in:fade|global={{ delay: 200, duration: 1000 }} out:fade|global={{ duration: 800 }}><GradientLayer /></div>

    <div class="flex flex-col gap-7 fixed-center">
      <div class="flex flex-col m-0 p-0 gap-3 items-center md:flex-row">
        <h1 class="font-quicksand m-0 text-4xl lg:text-5xl xl:text-6xl">
          <RandomFadeIn text="Free Accounts" />
        </h1>
        <h2 class="flex flex-row m-0 text-lg text-teal-800 translate-y-1 items-center dark:text-cyan-300" in:fly|global={{ y: 5, delay: 50 }} out:fade|global={{ duration: 200, delay: 100 }}>
          <strong class="font-bold dark:font-normal">「 免费OpenAI账号 」</strong>
          <span class="dark:opacity-55">官网直登</span>
          <div class="ml-1.5 text-5.5 i-solar-emoji-funny-circle-broken dark:opacity-60" />
        </h2>
      </div>

      <div class="flex flex-col-reverse gap-3.5 md:flex-row md:items-center">
        <div class="flex text-center gap-3.5 justify-start items-start">
          <a class="btn !bg-teal-800 !text-white !px-3 !ring-teal-800 dark:!bg-cyan-200 dark:!ring-cyan-200 dark:!text-cyan-900 hover:!bg-opacity-10 hover:!text-teal-700 dark:hover:!text-white" href="/list" in:fly|global={{ y: 15, delay: 100, duration: 500 }} out:fade|global={{ duration: 200, delay: 200 }}>
            <div class="flex flex-row font-bold h-5 gap-1 items-center">
              <span>立即挑选</span>
              <div class="i-material-symbols-play-arrow-rounded" />
            </div>
          </a>
          <button class="btn !px-3" in:fly|global={{ y: 15, delay: 200, duration: 500 }} out:fade|global={{ duration: 200, delay: 150 }}>
            <div class="flex flex-row h-5 gap-1 items-center">
              <span>随机抽一个</span>
              <div class="text-lg i-lucide-dices" />
            </div>
          </button>
          <a class="btn" in:fly|global={{ y: 15, delay: 300, duration: 500 }} out:fade|global={{ duration: 200, delay: 100 }} href="https://free-chat.asia/">
            <BlurredFadeIn delay={300}>
              <div class="h-5 w-5">
                {@html FreeChatIcon}
              </div>
            </BlurredFadeIn>
          </a>
          <button class="btn" class:lightOn={isLight} in:fly|global={{ y: 15, delay: 400, duration: 500 }} out:fade|global={{ duration: 200, delay: 50 }} on:click={() => (isLight = !isLight)}>
            <BlurredFadeIn delay={400}>
              <div class="!h-5 !w-5" class:i-ph-lightbulb-filament-fill={isLight} class:i-ph-lightbulb-filament={!isLight} />
            </BlurredFadeIn>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .btn {
    --uno: rounded-md p-2 transition-all no-underline active:scale-95 ease-out backdrop-blur-md;
    --uno: bg-white/30 dark:bg-cool-gray-950/30 hover:bg-teal-950/5 dark:hover:bg-cyan-50/5;
    --uno: ring-inset ring-1.3 ring-teal-950/10 dark:ring-cyan-50/10 hover:ring-teal-700 dark:hover:ring-cyan-200;
    --uno: text-teal-900/90 dark:text-white;
    --uno: dark:shadow-lg dark:shadow-transparent dark:hover:shadow-cyan-200/10;
  }
  
  .lightOn {
    --uno: bg-teal-800 text-white;
    --uno: hover:bg-teal-800/90 \!ring-transparent;
  }
</style>
