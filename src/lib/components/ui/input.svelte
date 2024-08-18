<script lang="ts">
	export let classes = ''
	export let value: string | number = ''
	export let placeholder = ''
	export let readonly = false
</script>

<label class="input input-bordered flex items-center justify-center gap-2 {classes}">
	<slot name="before" />
	<input type="text" class="!w-7 grow" {placeholder} {readonly} {value} />
	<slot name="after" />
</label>
