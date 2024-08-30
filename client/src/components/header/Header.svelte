<script>
  import Logo from '@components/icons/Logo.svelte';
  import LogoutButton from './LogoutButton.svelte';
  import LoginButton from './LoginButton.svelte';
</script>

<header class="py-3 flex justify-between items-center mb-10">
  <div class="logo flex items-center gap-1.5">
    <Logo />
    <h1 class="text-zinc-100 text-3xl font-medium">reports</h1>
  </div>
  <LogoutButton/>
</header>

<style>
  h1 {
    letter-spacing: 0.04rem;
  }
</style>
