import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  const NavItem = ({ href, icon }) => (
    <Link href={href} className="flex items-center justify-center p-3 text-white hover:bg-yellow-500 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-110">
    <>   {icon} </>
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Dashboard - English Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile Bottom App Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-orange-500 flex justify-around items-center h-16 text-white z-10">
        <NavItem href="/profile" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
        <NavItem href="/dashboard" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} />
        <NavItem href="/tools" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} />
        <NavItem href="/courses" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} />
      </div>

      {/* Desktop Side App Bar */}
      <div className="hidden md:flex fixed inset-y-0 left-0 w-20 bg-orange-500 flex-col items-center justify-between py-8 z-10">
        <div>
          <NavItem href="/dashboard" icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} />
        </div>
        <div className="space-y-8">
          <NavItem href="/profile" icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
          <NavItem href="/tools" icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} />
          <NavItem href="/courses" icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>} />
        </div>
        <div>{/* Placeholder for bottom alignment */}</div>
      </div>

      {/* Main Content */}
      <main className="md:ml-20 p-4 pb-20 md:pb-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-6">Bem-vindo ao seu Painel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-100 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-brown-800 mb-4">Progresso do Curso</h3>
            <div className="w-full bg-yellow-200 rounded-full h-2.5 dark:bg-yellow-300">
              <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-brown-600 mt-2">45% concluído</p>
          </div>
          <div className="bg-yellow-100 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-brown-800 mb-4">Próxima Aula</h3>
            <p className="text-brown-600">Gramática Avançada</p>
            <p className="text-brown-500 text-sm">Amanhã, 15:00</p>
          </div>
          <div className="bg-yellow-100 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-brown-800 mb-4">Conquistas Recentes</h3>
            <ul className="list-disc list-inside text-brown-600">
              <li>Completou 10 lições consecutivas</li>
              <li>Dominou 50 novos vocábulos</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}