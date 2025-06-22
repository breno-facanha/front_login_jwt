import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    router.push('/'); // Redireciona para a página de login
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            Home
          </h1>
          
          <nav className="flex items-center">
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border-2 border-red-400 text-red-400 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-red-400 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
              <span className="mr-2">🚪</span>
              Sair
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
