import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../lib/supabaseClient';


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c47c32] to-[#2d3353]">
      <Head>
        <title>Aprenda Inglês - Comece Sua Jornada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row items-center justify-between mb-12">
  <div className="mb-4 md:mb-0">
    <Image
      src="/images/logos.png"
      alt="Company Logo"
      width={300}
      height={100}
      className="object-contain"
    />
  </div>
  <div className="text-center md:text-right">
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
      Domine o Inglês, Abra Novas Portas
    </h1>
    <p className="text-lg md:text-xl text-white">
      Sua jornada para fluência começa aqui!
    </p>
  </div>
</header>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/hero.jpg"
              alt="Aprenda Inglês"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Por que aprender inglês conosco?
            </h2>
            <ul className="space-y-4 text-white">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Aulas interativas e divertidas
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Professores nativos qualificados
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Flexibilidade de horários
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certificado reconhecido internacionalmente
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Pronto para começar?
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setModalIsOpen(true)}
            >
              {isHovered ? 'Let\'s Go!' : 'Começar Agora'}
            </button>
            <button className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#2d3353] transition duration-300">
              Já tenho uma conta
            </button>
          </div>
        </div>
      </main>
 
      <footer className="text-center py-4 text-white">
        <p>&copy; 2024 Aprenda Inglês Online. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}


