<script>
  export let list;
</script>

<div class="w-full flex gap-2 items-center content-center justify-center">
  {#each list.reverse() as item}
    {#if item === 1}
      <div class="block_red h-5 w-5 rounded-full"></div>
    {:else}
      <div class="block_violet h-5 w-5 rounded-full"></div>
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