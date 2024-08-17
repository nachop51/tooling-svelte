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
		{#if lastValidHex}
			<div class="h-6 w-6 rounded-md" style="background-color: #{lastValidHex};">&nbsp;</div>
		{/if}
	</label>
</label>
