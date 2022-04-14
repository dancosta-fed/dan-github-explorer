import { Nav } from './components/Nav'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
  // throw new Error('Eita! Something deu ruim there!')
  return (
    <>
      <Nav />    
      <RepositoryList />
    </>
  )
}