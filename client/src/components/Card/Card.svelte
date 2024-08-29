<script>
  import CardField from './CardField.svelte';
  import CardLine from './CardLine.svelte';

  export let span = 0;
  export let name = 'Мир';
  export let cash = 10000;

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

<button class="col-span-{span} rounded-3xl">
  <p class="text-5xl text-violet-400 font-medium px-3 pt-6 mb-5">{name}</p>
  <p class="text-7xl text-violet-300 font-semibold px-3 py-3 ">{cash}</p>
  <p class="text-4xl text-zinc-300 font-medium px-3 mb-8">Остаток</p>
  <CardLine list={cardList()} />
  <div class="flex flex-col gap-3 mt-3 p-3">
    <CardField />
    <CardField />
  </div>
</button>

<style>
  button {
    visibility: visible;
    background-color: #27272a;
    transition: cubic-bezier(0.29, 0.56, 0.24, 1.28) 0.3s;
  }

  button:hover {
    transform: translateY(-2rem);
    background-color: #343436;
    box-shadow: 0 1.2rem 2rem -0.5rem #a78bfa27;
  }

</style>
