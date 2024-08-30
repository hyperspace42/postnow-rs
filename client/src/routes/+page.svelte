<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
  import InfoCard from '@components/card/InfoCard.svelte';
  import formatCash from '@lib/formatCash.js'

  const cards = [
    {
      name: 'Мир',
      cash: 4200
    },
    {
      name: 'Ваи',
      cash: 7400
    },
    {
      name: 'Лен 117',
      cash: 9650
    },
    {
      name: 'Остужева',
      cash: 4670
    },
    {
      name: 'Лен 20',
      cash: 5430
    }
  ];

  const getCashSum = () => {
    return cards.reduce((acc, x) => acc + x.cash, 0);
  };

</script>

<div class="container">
  <Header />
  <div class="cards grid grid-cols-3 grid-rows-2 gap-12">
    <InfoCard cashValue={formatCash(getCashSum())} />
    {#each cards as card}
      <Card name={card.name} cashValue={formatCash(card.cash)} />
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
