/**
 * Je crée un composant Cart qui affiche le panier de l'utilisateur. 
 *
 */

// J'importe le fichier css de Cart
import styles from '../styles/Cart.module.css'

const Cart = () => { // Je crée un composant Cart sous forme de fonction fléchée
    const pivoines = 5
    const lotus = 3
    const monstera = 2

    return (
        <div className={styles.cart}>
            <h2> Votre panier</h2>
            
            <ul>
                <li>Pivoine: {pivoines} €</li>
                <li>Lotus: {lotus} yuans</li>
                <li>Monstera: {monstera} £</li>
            </ul>
            <p>Total : {pivoines + lotus + monstera} €</p>

        </div>
    )
}

export default Cart // j'exporte le composant Cart 