# Sala de Espera - Conectando Dentistas e Consultórios

## Descrição
O **Sala de Espera** é uma plataforma desenvolvida para conectar dentistas e consultórios odontológicos de forma rápida e eficaz. O objetivo é facilitar a publicação de vagas por consultórios e a busca de oportunidades por dentistas, garantindo flexibilidade, agilidade e segurança para ambas as partes. Dentistas podem se candidatar a vagas que melhor se adequem às suas especializações e disponibilidade, enquanto os consultórios encontram profissionais qualificados para atender suas demandas.

## Stacks Utilizadas

### Frontend: (To be done)
- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Redux**: Gerenciamento de estado global da aplicação.
- **Material-UI**: Componentes de interface de usuário customizáveis.
- **Axios**: Realização de requisições HTTP.

### Backend: (Doing)
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs.
- **Sequelize**: ORM para integração com o banco de dados.
- **JWT (JSON Web Token)**: Autenticação e gerenciamento de sessões.
- **AdminJS**: Painel administrativo para gerenciamento de dados.

### Banco de Dados: (Doing)
- **PostgreSQL**: Sistema de banco de dados relacional.
- **Sequelize**: Migrations, Models e Seeders para controle do banco de dados.
 
### CI/CD e Infraestrutura: (To be done)
- **Docker**: Containerização da aplicação para ambientes padronizados.
- **AWS**: EC2 para hospedagem do backend e frontend, RDS para o banco de dados.
- **GitHub Actions**: Pipeline de integração contínua e deploy automatizado.

## Funcionalidades Principais
- **Cadastro de Perfis**: Consultórios e dentistas podem criar e gerenciar seus perfis.
- **Publicação de Vagas**: Consultórios podem publicar vagas para diferentes especializações odontológicas.
- **Busca de Oportunidades**: Dentistas podem buscar vagas utilizando filtros avançados.
- **Candidatura Direta**: Dentistas podem se candidatar diretamente às vagas publicadas.
- **Notificações**: Sistema de notificações em tempo real para candidaturas e atualizações.
- **Avaliações**: Sistema de avaliação mútuo entre dentistas e consultórios.
- **Autenticação JWT**: Sistema seguro de login com tokens JWT.
- **Painel AdminJS**: Ferramenta de gerenciamento para administradores da plataforma.

## Estrutura do Projeto

```bash
sala-de-espera/
│
├── backend/
│   ├── src/
│   │   ├── admin/              # Configuração do painel AdminJS
│   │   ├── auth/               # Middleware e lógica de autenticação (JWT)
│   │   ├── config/             # Configurações gerais do backend e banco de dados
│   │   ├── controllers/        # Controladores para lidar com as requisições
│   │   ├── middlewares/        # Middlewares para validação e segurança
│   │   ├── migrations/         # Migrations do Sequelize para versionamento do banco de dados
│   │   ├── models/             # Definição dos modelos de dados no Sequelize
│   │   ├── routes/             # Rotas para os endpoints da API (CRUD de usuários, vagas, etc.)
│   │   ├── seeders/            # Seeders para popular o banco de dados com dados iniciais
│   │   └── utils/              # Utilitários diversos (formatação, validações, etc.)
│   ├── app.js                    # Arquivo de variáveis de ambiente
│   └── server.js               # Ponto de entrada da API
│
├── frontend/
│   ├── public/                 # Arquivos públicos do React
│   ├── src/
│   │   ├── assets/             # Imagens, ícones, fontes
│   │   ├── components/         # Componentes reutilizáveis do React
│   │   ├── pages/              # Telas principais da aplicação (Login, Registro, Dashboard, etc.)
│   │   ├── redux/              # Configuração do Redux (actions, reducers, store)
│   │   ├── services/           # Serviços para consumir a API (Axios)
│   │   └── App.js              # Arquivo principal de configuração das rotas e layout
│   └── .env                    # Arquivo de variáveis de ambiente para o frontend
│
├── database/                   # Contém a configuração do banco de dados e scripts relacionados
│   ├── migrations/             # Arquivos de migração do banco de dados (Sequelize)
│   ├── models/                 # Definições dos modelos de dados (ORM Sequelize)
│   └── seeders/                # Seeders para dados de exemplo e população inicial
│
├── docker/
│   ├── Dockerfile.backend       # Dockerfile para container do backend
│   ├── Dockerfile.frontend      # Dockerfile para container do frontend
│   └── docker-compose.yml       # Arquivo de composição dos containers (backend, frontend e banco de dados)
│
└── README.md                    # Documentação do projeto

```

**Arquivo README.md gerado por inteligência artificial.**