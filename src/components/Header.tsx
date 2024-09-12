import styles from './Header.module.css'

import falconLogo from '../assets/falcon6-logo.png'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={falconLogo} alt = 'Logotipo da Falcon'></img>
            </header>
        </>
    )
}