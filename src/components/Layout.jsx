import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 dark:bg-black">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className=" flex w-full flex-col">
        <Header />
        <main className="w-full flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
