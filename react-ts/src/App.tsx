import { UserCard } from './components/UserCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Panel de Control del Gremio</h1>
      <UserCard nombre="Niko" rol="Admin" puntos={9000} />
    </div>
  )
}

export default App