'use client';

import { useState } from 'react';
import { db } from '@/config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AgendamentoPage() {
    // estados p armazenar as infos digitadas pelo user
    const [petNome, setPetNome] = useState(''); // padrão vazio
    const [tipoServico, setTipoServico] = useState('Consulta'); // padrão consulta
    const [especialidade, setEspecialidade] = useState('Clínica geral'); 
    const [dataHora, setDataHora] = useState('');

    // estados de controle de interface --> p dar fallback p o user
    const [loading, setLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);

    // fn q roda qdo o form é enviado --> btn clicado
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // impede q a página recarregue
        setLoading(true); // ativa o estado carregando ....

        try {
            //o 'addDoc' crie 1 nova linha (doc) dentro da coleção --> agendamento
            await addDoc(collection(db, 'agendamento'), {
                petNome: petNome,
                tipoServico: tipoServico,
                especialidade: especialidade,
                dataHora: dataHora,
                status: 'agendado',
                criadoEm: serverTimestamp()
            });

            // se o try der certo ....
            setSucesso(true);
            setPetNome('');
            setDataHora('');
        } catch (error) {
            console.error("Erro ao salvar no Firebase: ", error);
        } finally {
            setLoading(false); // desativa o carregando
        }
    };

    return(
        <>
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full p-6 bg-slate-900 border border-slate-800 text-white rounded-xl shadow-2xl">
        
        <h1 className="text-2xl font-bold mb-2 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
          PurrfectCare
        </h1>
        <p className="text-center text-slate-400 text-sm mb-6">Agendamento de Consultas e Cirurgias</p>

        {/* Feedback visual de Sucesso */}
        {sucesso && (
          <div className="mb-4 p-3 bg-emerald-600/20 border border-emerald-500 text-emerald-300 rounded-lg text-center text-sm">
            ✨ Agendamento salvo com sucesso no Firebase!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo: Nome do Pet */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Nome do Pet</label>
            <input
              type="text"
              required
              value={petNome}
              onChange={(e) => setPetNome(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition text-sm"
              placeholder="Ex: Grogu, Seth, Mina..."
            />
          </div>

          {/* Campo: Tipo de Serviço */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Tipo de Serviço</label>
            <select
              value={tipoServico}
              onChange={(e) => setTipoServico(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition text-sm"
            >
              <option value="consulta">🩺 Consulta</option>
              <option value="cirurgia">✂️ Cirurgia</option>
            </select>
          </div>

          {/* Campo: Especialidade */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Especialidade Veterinária</label>
            <select
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition text-sm"
            >
              <option value="clínica geral">Clínica Geral</option>
              <option value="oncologista">Oncologista</option>
              <option value="cardiologista">Cardiologista</option>
            </select>
          </div>

          {/* Campo: Data e Hora */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Data e Hora</label>
            <input
              type="datetime-local"
              required
              value={dataHora}
              onChange={(e) => setDataHora(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition text-sm"
            />
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3 px-4 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 font-bold hover:opacity-95 transition disabled:opacity-50 text-sm shadow-md"
          >
            {loading ? 'Salvando no banco...' : 'Confirmar Agendamento'}
          </button>
        </form>
      </div>
    </div>
        
        </>

    );



    
}
