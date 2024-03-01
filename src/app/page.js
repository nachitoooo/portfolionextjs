/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UX3TKGOX0MP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
        <Avatar style={{ width: '120px', height: '120px' }}>
            <AvatarImage alt="Profile picture" src="/cv2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </Avatar>
          <span className="bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">
            Disponible para trabajar
          </span>
        </div>
          
          <nav className="flex space-x-4">
            <Link className="hover:text-gray-300" href="#">
              Experiencia
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Proyectos
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Sobre mí
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Contacto
            </Link>
            <ShoppingBagIcon className="text-gray-400 hover:text-gray-300" />
          </nav>
        </header>
        <main>
          <section className="text-center py-8">
            <h1 className="text-4xl font-bold">Ignacio Aristegui</h1>
            <p className="text-gray-400 mt-3">
              Software Engineer and Digital Content Creator from Paraná, Argentina.
              <br />
              Specializing in unique web application development.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <LinkedinIcon className="text-gray-400 hover:text-gray-300" />
              <ClipboardIcon className="text-gray-400 hover:text-gray-300" />
              <InstagramIcon className="text-gray-400 hover:text-gray-300" />
            </div>
          </section>
          <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <h2 class="mb-12 text-center text-3xl font-bold">
      Latest projects
    </h2>

    <div class="grid gap-6 lg:grid-cols-2">
      <div
        class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
          class="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div class="flex h-full items-end justify-start">
              <h5 class="m-6 text-lg font-bold text-white">
                Hollywood exhibition
              </h5>
            </div>
          </div>
          <div>
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>

      <div
        class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg"
          class="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div class="flex h-full items-end justify-start">
              <h5 class="m-6 text-lg font-bold text-white">Genius Loci</h5>
            </div>
          </div>
          <div>
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>

      <div
        class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg"
          class="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div class="flex h-full items-end justify-start">
              <h5 class="m-6 text-lg font-bold text-white">Big Apple</h5>
            </div>
          </div>
          <div>
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>

      
      <div
        class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/049.jpg"
          class="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div class="flex h-full items-end justify-start">
              <h5 class="m-6 text-lg font-bold text-white">
                Sky is the limit
              </h5>
            </div>
          </div>
          <div>
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</div>
        </main>
        
      </div>
    </div>
  )
  
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
