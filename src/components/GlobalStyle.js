import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  box-sizing: border-box;
  /* box-sizing: content-box; */
}

body {
  margin: 0;
  padding: 0;
  background-color: #A9A9A9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}
`
