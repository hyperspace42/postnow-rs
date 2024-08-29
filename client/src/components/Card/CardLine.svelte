<script>
  const list = ['rose', 'violet', 'rose', 'rose', 'violet', 'violet'];
</script>

<div class="w-full flex">
  {#each list.reverse() as item}
    {#if item === 'rose'}
      <div class="block_red h-4 w-full"></div>
    {:else}
      <div class="block_violet h-4 w-full"></div>
    {/if}
  {/each}
</div>

<style>
  .block_red {
    background-color: #FF4D6B;
  }

  .block_violet {
    background-color: #A78BFA;
  }
</style>