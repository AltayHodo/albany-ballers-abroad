import styles from './styles/App.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1>Albany Ballers Abroad</h1>
      <img className={styles.logo} src="/logo.png" alt="logo" />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
