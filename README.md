# Next & Firebase
---

## Criando e Configurando o Banco de Dados no Firebase
O Firebase é uma plataforma da Google que nos dá um banco de dados pronto para usar chamado Cloud Firestore. Ele é um banco NoSQL (armazena dados em formato de "objetos" ou "documentos", muito parecido com JSON).
- Comando de instalação: `npm install firebase`

1. Acesse o site do Firebase Console e faça login com uma conta Google.
2. Clique em Adicionar projeto.
3. Diga o nome do projeto (ex: PurrfectCare) e clique em continuar. (Pode desativar o Google Analytics para este exemplo escolar).
4. No menu lateral esquerdo, clique em Build (ou Construir) e depois em Firestore Database.
5. Clique no botão Criar banco de dados.

### Muito Importante: 
Quando perguntar sobre as regras de segurança, selecione Iniciar no modo de teste. Isso permite que o aplicativo envie dados sem exigir autenticação complexa logo de início.
- Escolha o local do servidor (ex: southamerica-east1 se estiver no Brasil) e clique em Ativar.
- Pronto! O banco de dados está criado na nuvem e esperando por dados.