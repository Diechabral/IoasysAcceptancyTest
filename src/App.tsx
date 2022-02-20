import logo from './assets/images/logo.svg'
import './assets/css/app.css'

import { Login } from './components/login'

function App() {
  return (
    <main className="w-screen h-screen bg-ioasys">
      <section className="container mx-auto h-full">
        <div className="h-full flex flex-row items-center">
          <div className="flex flex-col">
            <div className="mb-14">
              <img src={logo} width="198" height="40" />
            </div>

            <Login />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
