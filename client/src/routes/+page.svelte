<script>
  import '../app.css';

  import Header from '@components/header/Header.svelte';
  import Card from '@components/Card/Card.svelte';
  import InfoCard from '@components/card/InfoCard.svelte';

  const cards = [
    {
      name: 'Мир',
      cash: 10200
    },
    {
      name: 'Ваи',
      cash: 7400
    },
    {
      name: 'Лен 117',
      cash: 14550
    },
    {
      name: 'Остужева',
      cash: 4670
    },
    {
      name: 'Лен 20',
      cash: 10000
    }
  ];

  const getCashSum = () => {
    return cards.reduce((acc, x) => acc + x.cash, 0);
  };

</script>

<div class="container">
  <Header />
  <div class="cards grid xl:grid-cols-3 xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 md:grid-cols-1 md:grid-rows-6 gap-12">
    <InfoCard cashValue={getCashSum()} />
    {#each cards as card}
      <Card name={card.name} cashValue={card.cash} />
    {/each}
  </div>
</div>

<style>
  .container {
    max-width: 65%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
