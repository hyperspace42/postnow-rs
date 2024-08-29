<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
</script>

<div class="container">
  <Header />
  <div class="grid grid-cols-4 gap-8">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</div>

<style>
  .container {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
