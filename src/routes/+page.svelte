<script lang="ts">
  import type { PageProps } from "./$types";

  // Receive data prop
  let { data }: PageProps = $props();

  // Make dinosaurs reactive
  let dinosaurs = $state(data.dinosaurs);

  // Make newDino reactive
  let newDino = $state("");

  function addDino() {
    if (newDino.trim()) {
      dinosaurs = [...dinosaurs, { name: newDino }];
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
