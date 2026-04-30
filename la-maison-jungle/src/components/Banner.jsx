/**
 * Banner est un composant pour présenter la bannière (barre de navigation)
 */
import styles from '../styles/Banner.module.css' // j'importe le fichier css de la bannière
import logo from '../assets/logo.jpg' // j'importe le logo de la bannière

const Banner = () => { // crée une fonction Banner
    const title = 'Ben-venido à la casa' // je crée une variable title qui contient le titre de la bannière
    

    return(
        <div className={styles.banner}>
            <img src={logo} className={styles.logo} alt="Logo" />
            <h1 className={styles.title}>{title}</h1> 
            
        </div>
    )
}

export default Banner