import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

export interface PostType {
    id: number, 
    author: Author,
    publishedAt: Date,
    content: Content[]
}

interface PostProps {
   post: PostType
}

export function Post(props: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    /* const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(props.publishedAt) */

    const publishedDateFormated = format(props.post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((comment) => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }
    
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatorio!')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.post.author.avatarUrl}></Avatar>

                    <div className={styles.authorInfo}>
                        <strong>{props.post.author.name}</strong>
                        <span>{props.post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={props.post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {props.post.content.map((line) => {

                    /* if(line.type === 'paragraph') {
                        return(
                            <p>{line.content}</p>
                        )
                    } else if(line.type ==='link') {
                        return(
                            <p><a href='#'>{line.content}</a></p>
                        )
                    }*/

                    switch (line.type) {
                        case 'paragraph':
                            return (
                                <p key={line.content}>{line.content}</p>
                            )
                            break

                        case 'link':
                            return (
                                <p key={line.content}><a href='#'>{line.content}</a></p>
                            )
                            break

                        default:
                            console.log(`Sorry, we are missing the ${line.type} type`)
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                ></textarea>

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                        </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        ></Comment>
                    )
                })}
            </div>
        </article>
    )
}