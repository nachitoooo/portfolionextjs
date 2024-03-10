
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { ContactForm } from "@/components/component/ContactForm";
import TechnologiesCarousel from "@/components/component/TechnologiesCarousel";
import  WorkExperienceItem  from "@/components/component/experience";
import WorkExperienceItem2 from "@/components/component/experience2";
import WorkExperienceItem3 from "@/components/component/experience3";
import TypingEffect from "@/components/component/typingEffect";
import { IoBagOutline } from "react-icons/io5";
import DownloadBtn from "@/components/component/downloadBtn";
import { Download } from "lucide-react";

export default function Component() {
  return (
    
    <div className="bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar style={{ width: '150px', height: '150px' }}>
              <AvatarImage alt="Profile picture" src="/cv2.png" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
            </Avatar>
            <span className="bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">
              open to work
            </span>
            <DownloadBtn></DownloadBtn>
          </div>
          
          <nav className="flex flex-wrap space-x-4">
            <Link className="hover:text-gray-300" href="#laboralExperience">
              experience
            </Link>
            <Link className="hover:text-gray-300" href="#projects">
              projects
            </Link>
            <Link className="hover:text-gray-300" href="#">
              about me
            </Link>
            <Link className="hover:text-gray-300" href="#contact">
              contact
            </Link>

          </nav>
        </header>
        <main>
        <section className="text-center py-8">
            <h1 className="text-4xl md:text-8xl font-bold">Ignacio Aristegui</h1>
            <p className="text-gray-400 mt-3">
              Software and fullstack developer student from Paraná, Argentina.
              <br />
              Specializing in unique web application development with Next.js, Python and Django.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <LinkedinIcon className="text-gray-400 hover:text-gray-300" />
              <GithubIcon className="text-gray-400 hover:text-gray-300" />
              <InstagramIcon className="text-gray-400 hover:text-gray-300" />
            </div>
          </section>
          <div className="container my-24 mx-auto md:px-6">
  <section class="mb-32" id="projects">
    <h2 class="mb-12 text-center text-2xl font-bold">
      My Projects
    </h2>

    <div class="grid gap-6 lg:grid-cols-2">
    <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] transition-transform duration-550 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src="/tkinter.jpg"
      className="w-full align-middle transition duration-300 ease-linear" />
    <a href="https://github.com/nachitoooo/SoftwareCuota" target="_BLANK">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">
           Tkinter software
          </h5>n
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
      <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src="/uriel.jpg"
      className="w-full align-middle transition duration-300 ease-linear" />
    <a href="https://urielpires.netlify.app/" target="_BLANK">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">
            Online coaching
          </h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
  <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src="/casalacosta.jpg"
      className="w-full align-middle transition duration-300 ease-linear" />
    <a href="https://casadelacosta.netlify.app/" target="_BLANK">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">
            Charitative project
          </h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
  <div className="zoom relative overflow-hidden rounded-lg bg-cover shadow-lg dark:shadow-black/20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
  <img
    src="/drfGym.jpg"
    className="w-full h-full object-cover align-middle transition duration-300 ease-linear"
  />
  <a href="https://github.com/nachitoooo/sistemagimnasio/" target="_BLANK">
    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
      <div className="flex h-full items-end justify-start">
        <h5 className="m-6 text-lg font-bold text-white">
          Django Rest Framework System for gym
        </h5>
      </div>
    </div>
    <div>
      <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
    </div>
  </a>
</div>
  
<div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src="/tasklistapp.jpeg"
      className="w-full align-middle transition duration-300 ease-linear" />
    <a href="https://github.com/nachitoooo/django-nextjs" target="_BLANK">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">Task List App with Django and Next.js
          </h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>

      
  <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    <img src="/soon.jpg"
      className="w-full align-middle transition duration-300 ease-linear" />
    <a href="#!">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
        <div className="flex h-full items-end justify-start">
          <h5 className="m-6 text-lg font-bold text-white">
          {/* Coming soon... */}
          </h5>
        </div>
      </div>
      <div>
        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
        </div>
      </div>
    </a>
  </div>
    </div>
    <section className="mb-32">

  </section>
  <section id="laboralExperience">
  <TypingEffect/>

  <TechnologiesCarousel>
  </TechnologiesCarousel>
  </section>

  <h3 className="text-3xl font-bold mb-6 text-center">
    
  <IoBagOutline className="inline-block mr-3 text-3xl" /> Laboral experience
  
  
</h3>
        

  <WorkExperienceItem />
  <WorkExperienceItem2 />
  <WorkExperienceItem3 />
  <section id="contact">
  <ContactForm  />
  </section>


  </section>

  
  
</div>

        </main>       
      </div>

    </div>
  ) 
  
}

function GithubIcon(props) {
  return (
    <a href="https://github.com/nachitoooo" target="_blank" rel="noopener noreferrer">
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
    </a>
  );
}


function InstagramIcon(props) {
  return (
    <a href="https://www.instagram.com/atlanticsoftware/" target="_blank" rel="noopener noreferrer">
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
    </a>
  );
}

function LinkedinIcon(props) {
  return (
    <a href="https://www.linkedin.com/in/ignacio-aristegui-6635b4270/" target="_blank" rel="noopener noreferrer">
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
    </a>
  );
}