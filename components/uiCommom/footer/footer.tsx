"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-300 relative mt-auto">
      <div className="h-1 w-full bg-linear-to-r from-purple-600 via-pink-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg inline-block group"
              aria-label="PurrfectCare Home"
            >
              <span className="bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent group-hover:to-yellow-400 transition-all duration-300">
                Purrfect
              </span>
              <span className="text-white">Care</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cuidado especializado e saúde preditiva para quem você mais ama. O
              bem-estar do seu felino em primeiro lugar.
            </p>
          </div>

          {/* navegação */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-purple-500 pl-2">
              Plataforma
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-purple-400 transition-colors focus:outline-none focus:underline"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/consultas"
                  className="hover:text-pink-400 transition-colors focus:outline-none focus:underline"
                >
                  Consultas
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="hover:text-orange-400 transition-colors focus:outline-none focus:underline"
                >
                  Meus Gatos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-pink-500 pl-2">
              Suporte
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ajuda"
                  className="hover:text-pink-400 transition-colors focus:outline-none focus:underline"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-orange-400 transition-colors focus:outline-none focus:underline"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-yellow-400 transition-colors focus:outline-none focus:underline"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-orange-500 pl-2">
              Atendimento
            </h3>
            <p className="text-sm text-slate-400">Precisa de ajuda urgente?</p>
            <Link
              href="/agendamento"
              className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-orange-500 shadow-md transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} PurrfectCare. Todos os direitos reservados.
          </div>
          <div className="flex space-x-4">
            <span>Desenvolvido com carinho para felinos 🐾</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
