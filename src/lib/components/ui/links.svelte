<script lang="ts">
	import { page } from '$app/stores'

	export let links: { [key: string]: string } = {}
</script>

<ul>
	{#each Object.keys(links) as link}
		<li>
			<a
				href={links[link]}
				class="link-hover link"
				class:link-primary={$page.url.pathname === links[link]}
			>
				{link}
			</a>
		</li>
	{/each}
</ul>
