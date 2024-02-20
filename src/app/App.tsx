import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Sidebar } from '../components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 font-roboto antialiased">
      <Header />
      <div className="max-w-6xl my-8 mx-auto py-0 px-4 grid grid-cols-layout gap-x-8 items-start">
        <Sidebar />
        <main>
          <Post
            author="Henrique Nunes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis, ipsum aut deleniti repudiandae officiis quibusdam quaerat quae quod fugit inventore quas voluptas similique sapiente saepe quam mollitia, aspernatur eius."
          />
          <Post
            author="Luísa Belisário"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure reiciendis, ipsum aut deleniti repudiandae officiis quibusdam quaerat quae quod fugit inventore quas voluptas similique sapiente saepe quam mollitia, aspernatur eius."
          />
        </main>
      </div>
    </div>
  )
}

export default App
