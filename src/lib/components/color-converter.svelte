<script lang="ts">
	import type { Color } from '$lib/types'
	import { isArrowsCode, isCodeHexAlphanumeric, isDeleteCode } from '$lib/utils/handlers'
	import { parseHexValues } from '$lib/utils/parsers'
	import Input from './ui/input.svelte'

	let lastValidHex: Color | null = null
	let value = ''

	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const valid =
			isCodeHexAlphanumeric(event.key) || isArrowsCode(event.code) || isDeleteCode(event.code)

		if (!valid) {
			event.preventDefault()
		}
	}

	$: if ([3, 4, 6, 8].includes(value.length)) {
		lastValidHex = parseHexValues(value)
	}
</script>

<div class="py-4">
	<div class="flex gap-8">
		<label class="form-control flex-1">
			<div class="label">
				<span class="label-text"
					>HEX Color <div
						class="tooltip"
						data-tip="Valid hex colors are formed like in three, four, six or eight digits, examples: #aaa #bbbb #cccccc #dddddddd"
					>
						?
					</div></span
				>
			</div>
			<label class="input input-bordered flex items-center gap-2">
				<kbd class="kbd kbd-sm">#</kbd>
				<input
					type="text"
					class="grow"
					placeholder="fff"
					maxlength="8"
					bind:value
					on:keydown={handleKeyDown}
				/>
			</label>
		</label>
		<div class="flex-1 rounded-lg border border-base-content/20 bg-base-100 py-4">
			<div class="rounded1 mx-auto mb-6 grid w-1/3 place-items-center">
				{#if lastValidHex}
					<div
						class="aspect-square w-full rounded"
						style="background-color: #{lastValidHex.hex}"
					></div>
				{:else}
					<span>Insert a color</span>
				{/if}
			</div>
			{#if lastValidHex}
				<div class="flex gap-4 px-4">
					<Input classes="flex-1" value={lastValidHex.red} readonly>
						<div slot="before" class="tooltip" data-tip="Red color">
							<kbd class="kbd kbd-sm">R</kbd>
						</div>
					</Input>
					<Input classes="flex-1" value={lastValidHex.green} readonly>
						<div slot="before" class="tooltip" data-tip="Green color">
							<kbd class="kbd kbd-sm">G</kbd>
						</div>
					</Input>
					<Input classes="flex-1" value={lastValidHex.blue} readonly>
						<div slot="before" class="tooltip" data-tip="Blue color">
							<kbd class="kbd kbd-sm">B</kbd>
						</div>
					</Input>
				</div>
			{/if}
		</div>
	</div>
</div>
