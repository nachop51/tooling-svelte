<script lang="ts">
	import Links from './ui/links.svelte'

  export let links: { [key: string]: string } = {};
</script>

<div class="set-width flex gap-4 p-8">
	<div class="flex-1">
		<slot />
	</div>

  {#if Object.keys(links).length > 0}
    <Links {links} />
  {/if}
</div>
