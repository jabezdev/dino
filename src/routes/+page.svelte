<script lang="ts">
  import type { PageProps } from "./$types";

  // Receive data prop
  let { data }: PageProps = $props();

  // Make dinosaurs reactive
  let dinosaurs = $state(data.dinosaurs);

  // Make newDino reactive
  let newDino = $state("");

  async function addDino() {
    if (newDino.trim()) {
      // Update local state
      dinosaurs = [...dinosaurs, { name: newDino }];

      // Send to backend
      await fetch('/api/add-dino', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newDino })
      });

      newDino = "";
    }
  }
</script>

<main>
  <h1>🦕 Dinosaur app</h1>
  <p>Click on a dinosaur below to learn more.</p>

  <input
    type="text"
    bind:value={newDino}
    placeholder="Add a dinosaur name..."
  />
  <button onclick={addDino}>Add Dinosaur</button>

  {#each dinosaurs as dinosaur (dinosaur.name)}
    <a href="/{dinosaur.name.toLowerCase()}" class="dinosaur">
      {dinosaur.name}
      <br>
    </a>
  {/each}
</main>
