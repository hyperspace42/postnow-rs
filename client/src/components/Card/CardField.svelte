<script>
  import currencyFormat from '@lib/currencyFormat.js';
</script>

<div class="card_field mx-2 px-4 py-2 rounded-2xl flex items-center justify-between">
  <div class="flex items-center gap-2">
    <div class="w-8 h-8 bg-violet-300 rounded-full"></div>
    <p class="text-xl text-zinc-200">Егор взял <span>{currencyFormat(3500)}</span></p>
  </div>
  <div class="">
    <p class="text-xl text-zinc-400">29.08</p>
  </div>
</div>

<style>
  .card_field {
    background-color: #46464d7e;
    border-left: solid #ff4d6b 1rem;
  }

  span {
    color: #ff4d6b;
  }
</style>
