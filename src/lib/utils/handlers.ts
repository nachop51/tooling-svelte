export function isCodeHexAlphanumeric(value: string): boolean {
	return /^[a-fA-F0-9]+$/.test(value)
}

export function isArrowsCode(value: string): boolean {
	return /^Arrow/.test(value)
}

export function isDeleteCode(value: string): boolean {
	return value === 'Delete' || value === 'Backspace'
}
