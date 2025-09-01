# Jabez' Dino site

## This is available on [dino.jabez.dev](https://dino.jabez.dev)

# This is a test to:
1. Develop a SvelteKit website with Deno
2. Build the website for deployment
3. Deploy the site to a VPS for everyone to access

# What I did
- I followed the documentation of [Deno](https://docs.deno.com/examples/svelte_tutorial/) to create the sample site
- Practiced the server <-> client interactions of SvelteKit
- Built the webapp for Node (@sveltejs/adapter-node) since the Deno adapter isn't well maintained
- Created this repository and cloned it to my VPS in Digital Ocean
- Configured PM2 to run the app as a service
- Configured Caddy as reverse proxy to this simple app