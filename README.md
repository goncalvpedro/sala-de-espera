# Sala de Espera - Conectando Dentistas e Consultórios

## Visão Geral
**Sala de Espera** é uma plataforma que conecta dentistas e consultórios odontológicos. Ela permite que consultórios encontrem profissionais especializados com flexibilidade, e que dentistas encontrem vagas adequadas às suas especializações e disponibilidade.

## Funcionalidades Principais
- **Cadastro de Perfis:** Consultórios e dentistas podem criar e gerenciar seus perfis.
- **Publicação de Vagas:** Consultórios podem postar oportunidades de trabalho.
- **Busca Avançada:** Dentistas podem procurar vagas com filtros detalhados.
- **Candidatura Direta:** Dentistas se candidatam diretamente às vagas de seu interesse.
- **Sistema de Notificações:** Usuários são notificados sobre novas oportunidades ou candidaturas.
- **Avaliações:** Dentistas e consultórios podem se avaliar mutuamente.
- **Perfis Verificados:** Sistema de verificação de perfis para garantir segurança e autenticidade.

## Tecnologias Utilizadas
- **Frontend:** React, Redux, Material-UI
- **Backend:** Node.js, Express, Sequelize
- **Banco de Dados:** PostgreSQL, AWS RDS
- **Autenticação:** JWT, Auth0
- **CI/CD:** Docker, GitHub Actions
- **Infraestrutura:** AWS EC2, S3

## Instalação e Configuração

### Requisitos
- Node.js (>= 14.x)
- npm ou yarn
- Docker

### Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/sala-de-espera.git
    ```
2. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```
3. Instale as dependências do frontend:
    ```bash
    cd frontend
    npm install
    ```

### Configuração
1. Configure as variáveis de ambiente criando o arquivo `.env` na raiz do backend e frontend, conforme o exemplo em `.env.example`.

2. Inicie o ambiente de desenvolvimento:
    ```bash
    npm run dev
    ```

## Estrutura do Projeto
- **backend/**: Contém a lógica do servidor, rotas, e integrações com o banco de dados.
- **frontend/**: Interface de usuário, composta por páginas e componentes React.
- **docker/**: Arquivos de configuração Docker para backend e frontend.

## Contribuição
Contribuições são bem-vindas! Siga as etapas abaixo para colaborar:
1. Faça um fork do repositório.
2. Crie uma branch com suas alterações (`git checkout -b minha-feature`).
3. Faça o commit das alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

---

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).
