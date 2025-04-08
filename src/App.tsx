import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="p-6 text-center text-2xl font-bold">Xitonight</header>
        <main className="p-6 space-y-12">
          <section id="about" className="text-center">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 text-lg">A short introduction about yourself...</p>
          </section>

          <section id="projects" className="text-center">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-4 text-lg">Showcase your best works here...</p>
          </section>

          <section id="contact" className="text-center">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-4 text-lg">How people can reach you...</p>
          </section>
        </main>

        <footer className="p-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Xitonight. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default App
