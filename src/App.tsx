import { Header } from './components/Header.tsx'
import { Post, PostType } from './components/Post.tsx'
import { Sidebar } from './components/Sidebar.tsx'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MTHSKM.png',
      name: 'Matheus Kim',
      role: 'Acessor - Recuperação e tragetória'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-09-11 15:06:37')
  },  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/MTHSKM.png',
      name: 'Matheus Kim 2',
      role: 'Acessor - Recuperação e tragetória'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2024-09-09 15:06:37')
  }
]

export function App() {
  return (
    <>
      <Header></Header>

      <div className={styles.wrapper}>
        <Sidebar></Sidebar>

        <main>
         {posts.map((post) => {
          return(
            <Post
              key={post.id}
              post={post}
            ></Post>
          )
         })}
        </main>
      </div>
    </>
  )
}
