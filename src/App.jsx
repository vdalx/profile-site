import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
