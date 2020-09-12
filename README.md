# bdc-components

> React components for visualizing and collecting data.

[![NPM](https://img.shields.io/npm/v/bdc-components.svg)](https://www.npmjs.com/package/bdc-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bdc-components
```

## Usage

```tsx
import React from 'react'
import { FormModal } from 'bdc-components'

const App = () => {
	return (
		<FormModal
			name="Sign Up"
			fieldStructures={{
				name: { type: 'text' },
				dob: { type: 'date' },
				food: {
					type: 'option',
					options: [ 'pizza', 'salad', 'cookies', 'macaroni', 'chicken' ]
				},
				headshot: { type: 'file' },
				bio: { type: 'text', multiline: true }
			}}
			onSubmit={console.log}
			onClose={() => console.log('close')}
		/>
	);
};
```

## License

MIT © [baldwin-design-co](https://github.com/baldwin-design-co)
