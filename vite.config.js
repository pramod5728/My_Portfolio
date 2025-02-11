import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['framer-motion'], // Add this line
  },
  // Other configuration...
});