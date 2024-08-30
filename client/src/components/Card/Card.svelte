<script>
  import CardField from './CardField.svelte';
  import CardLine from './CardLine.svelte';

  import currencyFormat from '@lib/currencyFormat.js';

  export let name = 'Мир';
  export let cashValue = 10000;

  const cardList = () => {
    let arr = [];
    for (const i in [1, 1, 1, 1, 1, 1]) {
      const s = Math.random() * 10;

      if (s > 5) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }

    return arr;
  };
</script>

<button class="rounded-3xl visible">
  <p class="text-5xl text-violet-400 font-medium px-3 pt-6 pb-5 mb-3 border-b border-zinc-700">
    {name}
  </p>
  <p class="text-7xl text-violet-300 font-semibold px-3 pt-3">{currencyFormat(cashValue)}</p>
  {#if 10000 < cashValue}
    <p class="text-2xl text-zinc-500">+{currencyFormat(cashValue - 10000)}</p>
    {:else if cashValue === 10000}
    <p class="text-2xl text-zinc-500">{currencyFormat(cashValue - 10000)}</p>
  {:else}
    <p class="text-2xl text-zinc-500">-{currencyFormat(10000 - cashValue)}</p>
  {/if}
  <p class="text-4xl text-zinc-300 font-medium px-3 mb-8 pt-4">Остаток</p>
  <CardLine list={cardList()} />
  <div class="flex flex-col gap-3 mt-3 p-3">
    <CardField />
  </div>
</button>

<style>
  button {
    background-color: #27272a;
    transition: cubic-bezier(0.29, 0.56, 0.24, 1.28) 0.3s;
  }

  button:hover {
    transform: translateY(-2rem);
    background-color: #343436;
    box-shadow: 0 1.2rem 2rem -0.5rem #fa8bb527;
  }
</style>
