import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig, presetUno, presetIcons, presetWebFonts, transformerDirectives } from "unocss";
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export default defineConfig({
    extractors: [extractorSvelte()],
    transformers: [transformerDirectives()],
    shortcuts: {
        "fixed-center": "fixed top-1/2 left-1/2 -translate-1/2"
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
            fonts: {
                quicksand: [
                    { name: "Quicksand", provider: "bunny", weights: [700] },
                    { name: "sans-serif", provider: "none" },
                ],
            },
        }),
        presetHeroPatterns()
    ],
})