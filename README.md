<hr>
<div align="center">
  <h1 align="center">
    useSystemColorMode()
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=react-use-system-color-mode">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/react-use-system-color-mode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/react-use-system-color-mode">
    <img alt="Types" src="https://img.shields.io/npm/types/react-use-system-color-mode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/jaredLunde/react-hook">
    <img alt="Build status" src="https://img.shields.io/travis/com/jaredLunde/react-hook?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/react-use-system-color-mode">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/react-use-system-color-mode?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/react-use-system-color-mode?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i react-use-system-color-mode</pre>
<hr>

A React hook for retrieving the system color mode. It is SSR compatible, built with TypeScript and listens to live changes
of the system preference.

## Quick Start

[Check out the example on **CodeSandbox**](https://codesandbox.io/s/react-hookmouse-position-example-udsxi?file=/src/App.js)

```jsx harmony
import { useSystemColorMode } from 'react-use-system-color-mode'

const Component = (props) => {
  const colorMode = useSystemColorMode() // 'dark' or 'light'

  return (

  )
}
```

## API

### useSystemColorMode()

Returns the current color mode of the users OS. Returns `dark` or `light`. On the server it always returns `dark`.

#### Returns `'dark' | 'light'`

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Johannes Klauss - [@JohannesKlauss](https://github.com/JohannesKlauss) - klauss.johannes@gmail.com

Project Link: [https://github.com/JohannesKlauss/react-use-system-color-mode](https://github.com/JohannesKlauss/react-use-system-color-mode)

## Prior Art
Basis of this package is the [react-use-color-mode](https://github.com/JasonHeylon/react-use-color-mode)
which is not maintained anymore.