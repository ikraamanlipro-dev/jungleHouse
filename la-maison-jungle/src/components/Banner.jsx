/**
 * Banner est un composant pour présenter la bannière (barre de navigation)
 */
import styles from '../styles/Banner.module.css' // j'importe le fichier css de la bannière
import logo from '../assets/logo.jpg' // j'importe le logo de la bannière

/**
 * 
 * @param {*} param0 
 * @returns 
 * Le composant Banner.jsx prend comme props ses enfants décaré dans le composant app.jsx
 * J'utilise {children} pour faire appel à tous les éléments enfants du composant <Banner> déclaré dans App.jsx
 * Le composant Banner.jsx retourne une div qui contient une image (le logo) et un titre (Ben-venido à la casa) et les enfants du composant Banner
 */

const Banner = ({children}) => { // crée une fonction Banner
    const title = 'Ben-venido à la casa' // je crée une variable title qui contient le titre de la bannière
    

    return(
        <div className={styles.banner}>
            <img src={logo} className={styles.logo} alt="Logo" />
            {children} {/* j'affiche les enfants du composant Banner */}
            <h1 className={styles.title}>{title}</h1> 
            
        </div>
    )
}

export default Banner