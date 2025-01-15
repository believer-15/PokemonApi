import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom';
function App() {

  return (
    <>
      <div className="Outer-Pokemon">
        <h1 id="pokemon-heading">
          <Link to="/">Pokemon</Link>
        </h1>
        <CustomRoutes/>
      </div>
    </>
  )
}

export default App
