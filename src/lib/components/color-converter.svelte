<script lang="ts">
	import { isArrowsCode, isCodeHexAlphanumeric, isDeleteCode } from '$lib/utils/handlers'

	let validHex = false
	let lastValidHex = ''
	let value = ''

	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const valid =
			isCodeHexAlphanumeric(event.key) || isArrowsCode(event.code) || isDeleteCode(event.code)

		if (!valid) {
			event.preventDefault()
		}
	}

	function handleKeyUp() {
		validHex = [3, 4, 6, 8].includes(value.length)
		if (validHex) {
			console.log('here')

			lastValidHex = value
		}
	}
</script>

<div class="py-4">
	<div class="flex">
		<label class="form-control w-full max-w-xs">
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
					on:input={handleKeyUp}
				/>
				{#if lastValidHex}
					<div class="h-6 w-6 rounded-md" style="background-color: #{lastValidHex};">&nbsp;</div>
				{/if}
			</label>
		</label>
	</div>
</div>
