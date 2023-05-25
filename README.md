# Projeto UI Clone React Netflix

Este projeto é um clone da interface do usuário do Netflix, utilizando ViteJS como bundler, React como framework de desenvolvimento, conexão com a API do TMDB para obter informações sobre filmes e séries, além de CSS para estilização.

Você pode visualizar o projeto online através do seguinte link: [UI Clone React Netflix](https://uireact-netflix.netlify.app/)

## Funcionalidades

- Interface de usuário semelhante ao Netflix, com listagem de filmes e séries.
- Utilização do React para facilitar o desenvolvimento da interface.
- Conexão com a API do TMDB para obter informações sobre os filmes e séries exibidos.
- Estilização utilizando CSS.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (versão 12 ou superior)

## Instalação

Siga as instruções abaixo para configurar e executar o projeto localmente:

1. Clone este repositório em sua máquina local:

   ```
   git clone https://github.com/joaonetogit/uiclone-react-netflix.git
   ```

2. Navegue até o diretório raiz do projeto:

   ```
   cd uiclone-react-netflix
   ```

3. Instale as dependências do projeto utilizando o npm:

   ```
   npm install
   ```

## Uso

Após a instalação, você pode executar o projeto localmente com o seguinte comando:

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto no seu navegador através do endereço `http://localhost:3000`.

## Configuração da API TMDB

O projeto utiliza a API do TMDB para obter informações sobre os filmes e séries exibidos. É necessário configurar sua chave de API para que o projeto funcione corretamente. 

1. Acesse o site [TMDB](https://www.themoviedb.org/) e crie uma conta.

2. Obtenha sua chave de API na página de [desenvolvedores do TMDB](https://www.themoviedb.org/documentation/api).

3. No arquivo `.env`, substitua `YOUR_API_KEY` pela sua chave de API:

   ```
   REACT_APP_TMDB_API_KEY=YOUR_API_KEY
   ```

4. Salve o arquivo `.env`.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Fork este repositório.
2. Crie uma branch com a sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e faça commit delas: `git commit -m 'Minha nova feature'`.
4. Envie para o branch principal: `git push origin minha-feature`.
5. Abra uma Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão em relação a este projeto, sinta-se à vontade para entrar em contato comigo através do e-mail [joaoneto.work@gmail.com] ou visite meu perfil no [meu GitHub](https://github.com/joaonetogit).
