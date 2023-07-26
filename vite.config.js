import { sveltekit } from "@sveltejs/kit/vite";
import Uno from "unocss/vite";

const config = {
  plugins: [
    Uno(),
    sveltekit(),
  ],
};

export default config;
