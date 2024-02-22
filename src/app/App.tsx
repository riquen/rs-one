import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Sidebar } from '../components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 font-roboto antialiased">
      <Header />
      <div className="max-w-6xl mt-8 mx-auto px-4 grid grid-cols-layout gap-x-8 items-start">
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
