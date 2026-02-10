import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
// Set `base` to your GitHub Pages repository subpath so built assets load correctly.
export default defineConfig({
    base: '/mortgage-repayment-calculator/',
    plugins: [react(), tailwindcss()],
 });
