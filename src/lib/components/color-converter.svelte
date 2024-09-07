<script lang="ts">
	import type { Color } from '$lib/types'
	import { isArrowsCode, isCodeHexAlphanumeric, isDeleteCode } from '$lib/utils/handlers'
	import { parseHexValues } from '$lib/utils/parsers'
	import Input from './ui/input.svelte'

	let lastValidHex: Color | null = null
	let value = 'fff'

	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const valid =
			isCodeHexAlphanumeric(event.key) || isArrowsCode(event.code) || isDeleteCode(event.code)

		if (!valid) {
			event.preventDefault()
		}
	}

	function handleBlur(event: FocusEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		console.log('what')

		value = event.currentTarget.value.replace('#', '')
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
					placeholder="fafbfc"
					maxlength="8"
					bind:value
					on:keydown={handleKeyDown}
				/>
				<label>
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20.936 5.889a2.825 2.825 0 0 0-4.81-2.02l-2.21 2.22l-.75-.75a.77.77 0 0 0-.55-.22a.8.8 0 0 0-.55.22a.785.785 0 0 0 0 1.1l.75.75l-8.76 8.76a3.15 3.15 0 0 0-.92 2.13l-.07 1.52a1.316 1.316 0 0 0 1.28 1.35h.06l1.52-.07a3.2 3.2 0 0 0 2.13-.93l8.76-8.76l.75.75a.8.8 0 0 0 1.1 0a.785.785 0 0 0 0-1.1l-.75-.75l2.18-2.18a2.85 2.85 0 0 0 .84-2.02m-8.56 8.33H7.2l6.33-6.32l2.59 2.59ZM19.4 7.2l-2.18 2.19l-2.594-2.59l2.21-2.22a1.823 1.823 0 0 1 2.56 0a1.86 1.86 0 0 1 0 2.62Z"
						/></svg
					>
					<input class="absolute !h-0 !w-0" type="color" on:blur={handleBlur} />
				</label>
			</label>
		</label>
		{#if !lastValidHex}
			<span class="mt-11 flex-1 text-xl">👈🏼 Insert a color</span>
		{:else}
			<div class="flex-1 rounded-lg border border-base-content/20 bg-base-100 py-4">
				<div class="rounded1 mx-auto mb-2 grid w-1/3 place-items-center">
					<div
						class="mb-2 aspect-square w-full rounded"
						style="background-color: #{lastValidHex.hex}"
					></div>
					<code>#{lastValidHex.hex}</code>
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
		{/if}
	</div>
</div>
