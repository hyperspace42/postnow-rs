<script>
  import currencyFormat from '@lib/currencyFormat.js';

  export let cashValue;
</script>

<div class="info bg-zinc-800 flex flex-col items-center pointer-events-none visible rounded-3xl">
  <p
    class="text_header text-5xl text-zinc-800 bg-violet-400 w-full font-medium px-3 pt-6 pb-6 text-center"
  >
    Всего
  </p>
  <div class="w-full h-full flex flex-col content-center items-center justify-center">
    <p class="text-7xl text-violet-300 font-semibold px-3 py-3 border-b-2 border-zinc-500">
      {currencyFormat(cashValue)}
    </p>
    {#if 50000 > cashValue}
      <p class="text-5xl text-rose-400 font-semibold px-3 py-3">
        -{currencyFormat(50000 - cashValue)}
      </p>
    {:else if 50000 === cashValue}
      <p class="text-5xl text-violet-400 font-semibold px-3 py-3">
        {currencyFormat(cashValue - 50000)}
      </p>
    {:else}
      <p class="text-5xl text-violet-400 font-semibold px-3 py-3">
        +{currencyFormat(cashValue - 50000)}
      </p>
    {/if}
    <div class="flex flex-col gap-3 mt-3 p-3"></div>
  </div>
</div>

<style>
  .info {
    transition: cubic-bezier(0.29, 0.56, 0.24, 1.28) 0.3s;
  }

  .text_header {
    border-radius: 1.5rem 1.5rem 0 0;
  }
</style>
