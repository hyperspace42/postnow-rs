<script>
  import CardField from './CardField.svelte';
  import CardLine from './CardLine.svelte';

  export let cashValue;
</script>

<button class="info pointer-events-none visible bg-zinc-200 rounded-3xl">
  <p class="text-5xl text-violet-400 font-medium px-3 pt-6 pb-5 mb-3 border-b border-zinc-700">
    Всего
  </p>
  <p class="text-7xl text-emerald-400 font-semibold px-3 py-3">{cashValue}</p>
  <p class="text-4xl text-zinc-300 font-medium px-3 mb-8">Остаток</p>
  <div class="flex flex-col gap-3 mt-3 p-3"></div>
</button>

<style>
  .info {
    background-color: #27272a;
  }

  button {
    transition: cubic-bezier(0.29, 0.56, 0.24, 1.28) 0.3s;
  }
</style>
