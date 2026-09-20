import type { Config } from "tailwindcss";
import { theme } from "./theme.config";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme,
  plugins: [],
};
export default config;
