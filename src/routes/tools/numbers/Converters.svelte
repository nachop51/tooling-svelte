<script lang="ts">
  import Input from './Input.svelte'

  let number = ''
  let newMode = 'dec'
  const bases = {
    hex: 16,
    dec: 10,
    oct: 8,
    bin: 2,
    b36: 36
  }

  // $: realNumber = BigInt(number).toString()
  // $: console.log(realNumber)

  $: realValue = parseInt(number, bases[newMode as keyof typeof bases]).toString()

  function swapMode(mode: string) {
    if (mode === newMode) return
    newMode = mode
  }
</script>

<div class="pt-4">
  <div class="join mb-3 w-full">
    <input
      type="text"
      placeholder="Type a number"
      class="input join-item flex-grow"
      bind:value={number}
    />
    <button
      class="btn join-item mr-0"
      on:click={() => navigator.clipboard.writeText(number?.toString() || '')}>{newMode}</button
    >
  </div>
  {#each Object.entries(bases) as [baseName, baseValue]}
    {#if baseName !== newMode}
      <Input number={realValue} text={baseName} base={baseValue} />
    {/if}
  {/each}
  <div class="font-semibold flex flex-col justify-center items-center">
    <h3>Swap between modes...</h3>
    <ul class="menu menu-horizontal bg-base-200 text-base-content rounded-box">
      {#each Object.keys(bases) as key}
        <li><button on:click={() => swapMode(key)}>{key.toUpperCase()}</button></li>
      {/each}
    </ul>
  </div>
</div>
