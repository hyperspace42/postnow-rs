<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
</script>

<!-- svelte-ignore css_unused_selector -->
<div class="container">
  <Header />
  <div class="cards grid grid-cols-6 grid-row-2 gap-16">
    <Card col=2/>
    <Card col=2/>
    <Card col=2/>
    <Card col=3/>
    <Card col=3/>
  </div>
</div>

<style>
  .container {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>

