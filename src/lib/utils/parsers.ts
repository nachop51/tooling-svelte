import type { Color } from '$lib/types'

export function parseHexValues(hex: string): Color {
	if (hex.length % 2 !== 0 && hex.length !== 3) {
		throw new Error('Invalid hex string')
	}

	const color: Color = {
		hex,
		red: 0,
		green: 0,
		blue: 0,
		opacity: 1
	}

	if (hex.length === 3 || hex.length === 4) {
		color.red = parseInt(hex[0] + hex[0], 16)
		color.green = parseInt(hex[1] + hex[1], 16)
		color.blue = parseInt(hex[2] + hex[2], 16)

		if (hex.length === 4) {
			color.opacity = parseInt(hex[3] + hex[3], 16) / 255
		}
	} else {
		color.red = parseInt(hex.slice(0, 2), 16)
		color.green = parseInt(hex.slice(2, 4), 16)
		color.blue = parseInt(hex.slice(4, 6), 16)
	}

	console.log(color)

	return color
}
