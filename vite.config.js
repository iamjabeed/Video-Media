// import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
// ...
export default defineConfig({
  // ...
  define: {
    "process.env": {},
  },
});
