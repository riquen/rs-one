import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Sidebar } from '../components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-50 font-roboto antialiased text-sm md:text-base">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 items-start md:grid-cols-md">
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
