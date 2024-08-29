<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
</script>

<div class="container">
  <Header />
  <div class="cards grid grid-cols-6 grid-rows-2 gap-16">
    <Card name='Мир' cash=1000 span=2/>
    <Card name='Лен 117' cash=9800 span=2/>
    <Card name='Остужева' cash=2760 span=2/>
    <Card name='Ваи' cash=4520 span=3/>
    <Card name='Лен 20' cash=6500 span=3/>
  </div>
</div>

<style>
  .container {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>

