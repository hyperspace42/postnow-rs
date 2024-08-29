<script>
  import CardField from "./CardField.svelte";
  import CardLine from "./CardLine.svelte";
  
  export let col = 2
</script>

<button class="test rounded-3xl col-span-{col}">
  <div class="">
    <h1 class="text-5xl text-violet-400 font-medium px-3 py-6">Мир</h1>
    <CardLine />
    <p class="text-7xl text-violet-300 font-semibold px-3 pt-10">6500</p>
    <p class="text-4xl text-zinc-300 font-medium px-3">Остаток</p>
    <div class="flex flex-col gap-3 mt-6 p-3">
      <CardField />
      <CardField />
    </div>
  </div>
</button>

<style>
  button {
    visibility: visible;
    background-color: #27272A;
    width: auto;
    transition: cubic-bezier(.29,.56,.24,1.28) .3s;
  }

  button:hover {
    transform: translateY(-2rem);
    background-color: #343436;
    box-shadow: 0 1.2rem 2rem -0.5rem #a78bfa27;
  }
</style>