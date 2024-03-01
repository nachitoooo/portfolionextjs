/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yOEVKKAvRPQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="bg-[#0d1117] text-white min-h-screen flex flex-col items-center justify-center">
      <nav className="flex justify-between items-center py-4 px-8 mx-auto max-w-screen-lg fixed top-0 left-0 right-0 z-10 bg-[#0d1117] text-white w-full">
        <div className="flex items-center space-x-4">
        <Avatar style={{ width: '120px', height: '120px' }}>
            <AvatarImage alt="Profile picture" src="/cv2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </Avatar>
          <span className="bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">
            Disponible para trabajar
          </span>
        </div>

        
        <div className="flex-grow"></div>

        {/* Grupo 2: Alineado al centro */}
        <div className="flex items-center space-x-6">
          <Link className="text-white hover:text-gray-300" href="#">
            Experiencia
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Proyectos
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Sobre mí
          </Link>
          <Link className="text-white hover:text-gray-300" href="#">
            Contacto
          </Link>
          <ShoppingCartIcon className="text-white" />
        </div>
      </nav>
      <header className="px-8 mt-12 text-center">
        <h1 className="text-3xl font-bold">Ignacio Aristegui</h1>
        <p className="mt-4 text-lg">
          Software Engineer and Digital Content Creator from Paraná, Argentina.<br>
          </br> Specializing in unique web application
          development.
        </p>
        <div className="mt-6 flex justify-around " >
          <Button className="w-36" variant="ghost">
            LinkedIn
          </Button>
          <Button className="w-36" variant="ghost">
            <GithubIcon className="h-6 w-6 text-gray-500 hover:text-gray-300" />
          </Button>
          <Button className="w-36" variant="ghost">
            <InstagramIcon className="h-6 w-6 text-gray-500 hover:text-gray-300" />
          </Button>
        </div>
      </header>
      <section className="mt-16 px-8">
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Nombre del Proyecto 1</h3>
            <p className="text-gray-400 mb-4">Breve descripción del proyecto.</p>
            <Button className="w-full" variant="primary">
              Ver Detalles
            </Button>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Nombre del Proyecto 2</h3>
            <p className="text-gray-400 mb-4">Breve descripción del proyecto.</p>
            <Button className="w-full" variant="primary">
              Ver Detalles
            </Button>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Nombre del Proyecto 3</h3>
            <p className="text-gray-400 mb-4">Breve descripción del proyecto.</p>
            <Button className="w-full" variant="primary">
              Ver Detalles
            </Button>
          </div>
        </div>
      </section>
    </div>

    
    
  )
}

function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}


function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}
