// import { render } from "react-dom" ==> Not supported on react 18
import { createRoot } from 'react-dom/client' // react 18 supported
import { App } from './App'

const container = document.getElementById('root')!
const root = createRoot(container) // createRoot(container!) if you use 

root.render(<App />)  