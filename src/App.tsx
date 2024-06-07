import { ModeToggle } from './client/components/ModeToggle'
import { ThemeProvider } from './client/components/ThemeProvider'
import Gallery from './client/components/Gallery'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="sm:p-12 p-4">
        <section className="pb-12 flex flex-row justify-between">
          <h1 className="text-2xl font-bold">Lazy-Load Image Gallery</h1>
          <ModeToggle />
        </section>
        <Gallery />
      </main>
    </ThemeProvider>
  )
}

export default App
