# finance

Crie no diretorio raiz a conexão do banco

Nome do arquivo: .env
Conteúdo: 
TYPEORM_USERNAME = [USUARIO_BANCO]
TYPEORM_PASSWORD = [SENHA_BANCO]
TYPEORM_DATABASE = [NOME_BANCO]
TYPEORM_PORT = [PORT] -> 5432 

TYPEORM_MIGRATIONS = src/database/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/database/migrations