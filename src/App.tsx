import { AccordionDemo } from './client/components/AccordionDemo'
import { CarouselDemo } from './client/components/CarouselDemo'
import { ModeToggle } from './client/components/ModeToggle'
import { ThemeProvider } from './client/components/ThemeProvider'
import { Button } from './client/components/ui/button'
import { Calendar } from './client/components/ui/calendar'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="p-24">
        <section className="pb-12 flex flex-row justify-between">
          <h1 className="text-2xl font-bold">
            Woah Shadcn + tailwind is sick!
          </h1>
          <ModeToggle />
        </section>
        <div className="px-24 flex flex-col justify-center">
          <AccordionDemo />
          <div className="flex gap-6 py-6 items-center">
            <Button className="">Hello</Button>
            <Button className="">Hi</Button>
          </div>
        </div>

        <div className="flex justify-center">
          <CarouselDemo />
        </div>
        <div>
          <Calendar />
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
