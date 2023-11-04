# AudsatTest

Projeto inicializado usando o [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.1.

Para registro de logs foi usado a ferramenta [json-server](https://www.npmjs.com/package/json-server/v/0.17.4) versão 0.17.4.

Para um simples deploy da aplicação foi usado a ferramenta [http-server](https://www.npmjs.com/package/http-server/v/14.1.1) versão 14.1.1;

## Iniciando

O projeto está disponível em [GitHub](https://github.com/matheusalencar23/audsat-test).

Para baixar use o comando `git clone git@github.com:matheusalencar23/audsat-test.git`.

Ao baixar o projeto execute o comando `npm install` na pasta raiz do projeto.

## Ambiente de desenvolvimento

Para executar o projeto localmente é necessário executar o comando `npm run serve`, esse comando vai executar a aplicação Angular em http://localhost:4200 e o servidor de logs em http://localhost:3000.

## Deploy

Para executar o deploy local da aplicação é necessário executar o comando `npm run deploy`, esse comando vai executar o build da aplicação Angular na pasta `./dist` e realizar o deploy usando [http-server] em http://localhost:3001 e o servidor de logs em http://localhost:3000. A aplicação será aberta automaticamente.

## Testes

Para executar os testes unitários usando Karma e Jasmine execute o comando `npm run test`.

Executando o comando `npm run test:coverage` será gerado um relatório detalhado dos testes na pasta `./coverage`;

## Principais desafios

Faltou tempo para implementação de mais testes e revisar os recursos implementados.
