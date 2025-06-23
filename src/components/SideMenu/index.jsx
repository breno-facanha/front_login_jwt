import { ArrowCircleLeft, ArrowCircleRight, Gear, House, List, SignOut, UserCircleGear } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SideMenu() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

    const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    router.push('/'); // Redireciona para a página de login
  };

  return (
    <>
      {/* Botão para abrir o menu, sempre visível no topo esquerdo */}
      {!open && (
        <div className="fixed top-0 z-50 p-2 pr-2 pt-4 h-screen">

          <button
            className=" pb-4 flex justify-items-start align-top text-white rounded focus:outline-none shadow"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu lateral"
          >
            <ArrowCircleRight size={32} />
          </button>
          <div className="border-b border-gray-700 mb-6"></div>
          <button
            className=" flex pb-6 justify-items-start align-top text-white rounded focus:outline-none shadow"
            onClick={() => router.push('/home')}
            aria-label="Abrir menu lateral"
          >
            <House size={27} />
          </button>
          <button
            className=" flex pb-6 justify-items-start align-top text-white rounded focus:outline-none shadow"
            onClick={() => router.push('/home')}
            aria-label="Abrir menu lateral"
          >
            <UserCircleGear size={27} />
          </button>
          <button
            className=" flex pb-6 justify-items-start align-top text-white rounded focus:outline-none shadow"
            onClick={() => router.push('/home')}
            aria-label="Abrir menu lateral"
          >
            <Gear size={27} />
          </button>
          <button
            className=" flex pb-6 justify-items-start align-top text-white rounded focus:outline-none shadow"
            onClick={handleLogout}
            aria-label="Abrir menu lateral"
          >
            <SignOut size={27} />
          </button>
        </div>
      )}

      {/* Menu lateral retrátil */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full"}
          w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="font-bold text-lg">Menu</span>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu lateral"
          >
            <ArrowCircleLeft size={32} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li><a href="/home" className="hover:text-blue-400">Dashboard</a></li>
          <li><a href="#" className="hover:text-blue-400">Perfil</a></li>
          <li><a href="#" className="hover:text-blue-400">Configurações</a></li>
          <button onClick={handleLogout}> 
            <li><a href="#" className="hover:text-blue-400">Sair</a></li>
          </button>
        </ul>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}