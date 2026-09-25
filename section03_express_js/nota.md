npm - Node Package Manager

NPM é o gerenciador de pacotes do Node.js, ele é utilizado para instalar, atualizar e gerenciar as dependências do projeto.

- Instalação de dependências: npm install <nome_do_pacote>
- Remoção de dependências: npm uninstall <nome_do_pacote>
- Atualização de dependências: npm update <nome_do_pacote>
- Listagem de dependências: npm list
- Visualização de dependências globais: npm list -g

## Nodemon

Nodemon é uma ferramenta que automatiza o processo de reinicialização do servidor quando há alterações no código.

- Instalar: npm install nodemon -g
- Executar: nodemon index.js

## Docker & MySQL

Configuração do banco de dados MySQL via Docker Compose.

- Subir containers (em segundo plano): `docker compose up -d`
- Parar containers: `docker compose down`
- Ver status dos containers: `docker compose ps`
- Ver logs do MySQL: `docker compose logs -f mysql`

### Credenciais de Conexão:
- **Host:** `localhost`
- **Porta:** `3306`
- **Database:** `cursodenodejs`
- **Usuário Root:** `root` / **Senha:** `root`
- **Usuário Padrão:** `nodejs` / **Senha:** `password123`
- **Interface Web (phpMyAdmin):** http://localhost:8080