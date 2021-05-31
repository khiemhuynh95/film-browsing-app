import Home from './pages/Home'
import Navbar from './components/Navbar'

import LoginForm from './components/LoginForm';
import { useState } from 'react'

function App() {

  const [showLogin, setShowLoginForm] = useState(false)

  function showLoginForm() {
    setShowLoginForm(true)
  }

  function closeLoginForm() {
    setShowLoginForm(false)
  }

  return (
    <div >
      {showLogin && <LoginForm onCloseLoginForm={closeLoginForm}></LoginForm>}
      <Navbar onOpenLoginForm={showLoginForm} />

      <Home />

    </div>

  );
}

export default App;
