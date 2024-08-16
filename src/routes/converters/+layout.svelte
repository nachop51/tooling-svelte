<script lang="ts">
	import PageLayout from '$lib/components/page-layout.svelte'

	const links = {
		'Color Conversion': '/converters/colors',
		'Length Conversion': '/converters/length',
		'Number Conversion': '/converters/numbers'
	}
</script>

<PageLayout {links}>
	<slot />
</PageLayout>
