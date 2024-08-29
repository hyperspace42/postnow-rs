<script>
  import Logo from '@components/icons/Logo.svelte';
  import Login from '@components/icons/Login.svelte';
</script>

<header class="py-3 flex justify-between items-center mb-10">
  <div class="logo flex items-center gap-1.5">
    <Logo />
    <h1 class="text-zinc-100 text-3xl font-medium">reports</h1>
  </div>
  <div class="">
    <button
      class="text-zinc-800 hover:text-zinc-950 text-2xl bg-violet-400 px-4 py-2 rounded-2xl flex items-center gap-2.5 hover:bg-indigo-500"
      ><Login />login</button
    >
  </div>
</header>

<style>
  h1 {
    letter-spacing: 0.04rem;
  }

  button {
    transition: ease-in 0.075s;
  }
</style>
