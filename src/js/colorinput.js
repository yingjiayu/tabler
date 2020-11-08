import {
	getjQuery,
	onDOMContentLoaded
} from 'bootstrap/js/src/util'

import EventHandler from 'bootstrap/js/src/dom/event-handler'

const NAME = 'colorinput'

class ColorInput {
	constructor(element, config) {
		this._element = element

		this._config = this._getConfig(config)
	}

	static get VERSION() {
		return VERSION
	}
}

export default ColorInput;