import { PencilLine } from "@phosphor-icons/react"

import styles from './Sidebar.module.css'
import { Avatar } from "./Avatar"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvY2tldHxlbnwwfHwwfHx8MA%3D%3D'
            ></img>

            <div className={styles.profile}>
                <Avatar src="https://github.com/MTHSKM.png"></Avatar>

                <strong>Matheus Kim</strong>
                <span>Acessor - Recuperação e tragetória</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}