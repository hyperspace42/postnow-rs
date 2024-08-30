<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
  import InfoCard from '@components/card/InfoCard.svelte';
  
</script>

<div class="container">
  <Header />
  <div class="cards grid grid-cols-3 grid-rows-2 gap-12">
    <InfoCard cashValue=42004/>
    <Card name='Мир' cashValue=1000/>
    <Card name='Лен 117' cashValue=9800/>
    <Card name='Остужева' cashValue=2760/>
    <Card name='Ваи' cashValue=4520/>
    <Card name='Лен 20' cashValue=6500/>
  </div>
</div>

<style>
  .container {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

</style>

