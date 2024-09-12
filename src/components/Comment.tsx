import { Rocket, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment(props: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        props.onDeleteComment(props.content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/MTHSKM.png' alt=""></Avatar>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Kim</strong>
                            <time title='11 de Maio às 08:13' dateTime='2024-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}></Trash>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <Rocket size={20}></Rocket>
                        Turbinar <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}