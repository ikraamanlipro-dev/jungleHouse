import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// J'import le composant Banner.jsx
import Banner from './components/Banner' // j'importe le composant Banner depuis le dossier components

// J'import le composant Cart.jsx
import Cart from './components/Cart' // j'importe le composant Cart depuis le dossier components

function App() { // je crée un composant App sous forme de fonction . Le composant renvoie le composant Banner

  return ( 
    <>
      <Banner /> {/* J'appelle le composant Banner dans App sous d'une balise */}

      <Cart /> {/* J'appelle le composant Cart dans App sous d'une balise */}
    </>
  )
}

export default App // j'exporte le composant App 
