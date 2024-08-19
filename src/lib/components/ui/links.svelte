<script lang="ts">
	import { page } from '$app/stores'

	export let links: { [key: string]: string } = {}
</script>

<ul class="list-none">
	{#each Object.keys(links) as link}
		<li class="relative" data-active={$page.url.pathname === links[link]}>
			<a href={links[link]} class="link" class:selected={$page.url.pathname === links[link]}>
				{link}
			</a>
		</li>
	{/each}
</ul>

<style lang="postcss">
	li[data-active='true']:before {
		content: '';
		@apply absolute -left-2.5 h-full w-[3px] bg-primary;
	}

	a.selected {
		@apply link-primary font-bold no-underline hover:text-primary;
	}

	li[data-active='false'] a {
		@apply link-hover;
	}
</style>
