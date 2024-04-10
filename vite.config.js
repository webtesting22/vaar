import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    // Set custom MIME types for specific file extensions
    // Ensure that JSX files are treated as JavaScript modules
    mimeTypes: {
      'text/jsx': ['js']
    }
  }
});
