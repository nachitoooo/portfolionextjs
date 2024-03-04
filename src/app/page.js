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
        <header className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar style={{ width: '120px', height: '120px' }}>
              <AvatarImage alt="Profile picture" src="/cv2.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </Avatar>
            <span className="bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">
              Open to work
            </span>
          </div>
          
          <nav className="flex flex-wrap space-x-4">
            <Link className="hover:text-gray-300" href="#">
              experience
            </Link>
            <Link className="hover:text-gray-300" href="#">
              projects
            </Link>
            <Link className="hover:text-gray-300" href="#">
              about me
            </Link>
            <Link className="hover:text-gray-300" href="#">
              contact
            </Link>
          </nav>
        </header>
        <main>
        <section className="text-center py-8">
            <h1 className="text-4xl md:text-8xl font-bold">Ignacio Aristegui</h1>
            <p className="text-gray-400 mt-3">
              Software developer and Digital Content Creator from Paraná, Argentina.
              <br />
              Specializing in unique web application development with next, astro and Django.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <LinkedinIcon className="text-gray-400 hover:text-gray-300" />
              <GithubIcon className="text-gray-400 hover:text-gray-300" />
              <InstagramIcon className="text-gray-400 hover:text-gray-300" />
            </div>
          </section>
          <div class="container my-24 mx-auto md:px-6">
  <section class="mb-32">
    <h2 class="mb-12 text-center text-3xl font-bold">
      My latest projects
    </h2>

    <div class="grid gap-6 lg:grid-cols-2">
      <div
        class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
        data-te-ripple-init data-te-ripple-color="dark">
        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/351633281/original/6b1265dc5a87983e47838ce3aa62a428265ef249/develop-a-desktop-app-in-python-using-tkinter-pyqt-kivy.jpg"
          class="w-full align-middle transition duration-300 ease-linear" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
            <div class="flex h-full items-end justify-start">
              <h5 class="m-6 text-lg font-bold text-white">
                Desktop Software with Tkinter
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
  <footer>
    
  </footer>
</div>

        </main>
        
      </div>
    </div>
  )
  
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
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
      width="36"
      height="36"
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