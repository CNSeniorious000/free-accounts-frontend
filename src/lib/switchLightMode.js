import { writable } from "svelte/store";

export const light = writable(false);

export function initLightMode() {
    const sessionLight = sessionStorage.getItem('lightMode')
    const lightModeOn = window.matchMedia("(prefers-color-scheme: light)");

    sessionLight === null ? light.set(lightModeOn.matches) : light.set(sessionLight === "light");

    lightModeOn.addEventListener("change", () => {
        light.set(lightModeOn.matches);
    });
}

export function setLightMode(isLight) {
    sessionStorage.setItem("lightMode", isLight ? "light" : "dark")
    document.documentElement.classList.toggle("dark", !isLight);
}
