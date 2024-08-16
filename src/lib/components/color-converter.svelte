<script lang="ts">
	let validHex = false
	let lastValidHex = ''
	let value = ''

	function handleKeyDown(event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		if (
			(event.keyCode > 64 && event.keyCode < 71) ||
			event.code === 'Backspace' ||
			event.code === 'Delete' ||
			event.code === 'ArrowLeft' ||
			event.code === 'ArrowRight' ||
			event.code === 'ArrowUp' ||
			event.code === 'ArrowDown' ||
			(event.keyCode > 47 && event.keyCode < 58)
		) {
		} else {
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
			<div class="label"><span class="label-text">HEX Color</span></div>
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
			</label>
		</label>
		{#if lastValidHex}
			<div class="h-8 w-8" style="background-color: #{lastValidHex};">&nbsp;</div>
		{/if}
	</div>
</div>
