import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor chunks for better caching
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'ui-vendor': [
                        '@radix-ui/react-accordion',
                        '@radix-ui/react-alert-dialog',
                        '@radix-ui/react-avatar',
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-dropdown-menu',
                        '@radix-ui/react-slot',
                        '@radix-ui/react-toast',
                        '@radix-ui/react-tooltip'
                    ],
                    'markdown-vendor': ['react-markdown', 'react-syntax-highlighter', 'remark-gfm'],
                },
            },
        },
        // Set to 800 to accommodate markdown-vendor chunk (793KB)
        // This chunk is large due to syntax highlighter but only loads on blog pages
        chunkSizeWarningLimit: 800,
    },
});
