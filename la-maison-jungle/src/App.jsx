import './App.css'

// J'import le composant Banner.jsx
import Banner from './components/Banner' // j'importe le composant Banner depuis le dossier components

// J'import le composant Cart.jsx
import Cart from './components/Cart' // j'importe le composant Cart depuis le dossier components

// J'import le composant ShoppingList.jsx
import ShoppingList from './components/ShoppingList' // j'importe le composant ShoppingList depuis le dossier components

// logo passed as child; import removed (uses logo.jpg in Banner)

// J'importe le logo de la bannière
import logo from './assets/logo.jpg' // j'importe le logo de la bannière depuis le dossier assets

// J'importe le fichier css de la bannière
import styles from './styles/Banner.module.css' // j'importe le fichier css de la bannière depuis le dossier styles

function App() { // je crée un composant App sous forme de fonction . Le composant renvoie le composant Banner

  return ( 
    <>
      <Banner>
          <img src={logo} className={styles.logo} alt="Logo" /> {/* j'affiche le logo dans la bannière en tant qu'enfant du composant Banner */}
          <h1 className={styles.title}></h1> {/* j'affiche le titre dans la bannière en tant qu'enfant du composant Banner */}
      </Banner>

      <Cart /> {/* J'appelle le composant Cart dans App sous d'une balise */}
      
      <ShoppingList /> {/* J'appelle le composant ShoppingList dans App sous d'une balise */}
    </>
  )
}

export default App // j'exporte le composant App 
