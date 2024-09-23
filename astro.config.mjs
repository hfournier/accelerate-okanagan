// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
	experimental: { contentLayer: true },
	integrations: [
		tailwind({ applyBaseStyles: false }),
		icon({
			include: {
				"fa6-brands": ["facebook", "instagram", "linkedin", "youtube", "x-twitter"],
				mdi: ["chevron-double-right", "chevron-down", "chevron-up", "map-marker", "search", "user"]
			}
		})
	]
})
