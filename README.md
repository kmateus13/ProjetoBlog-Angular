# Angular Blog Project

Este é um projeto de blog desenvolvido em Angular, que permite criar, editar e visualizar postagens. Ele usa formulários reativos para criar e editar posts e interage com um serviço de API para salvar e atualizar os dados.

## Requisitos

- **Node.js**: O projeto foi desenvolvido com Node.js.
- **Angular CLI**: O Angular CLI é necessário para criar, desenvolver e testar o projeto.
- **Navegador web moderno**: O projeto deve ser executado em um navegador compatível.

## Pré-requisitos

1. **Node.js**: Você precisará do Node.js instalado em seu sistema. Caso não tenha, pode ser baixado e instalado a partir de [nodejs.org](https://nodejs.org/).

2. **Angular CLI**: Instale o Angular CLI globalmente (caso ainda não tenha instalado) executando o seguinte comando:

    ```bash
    npm install -g @angular/cli
    ```

3. **Repositório do Projeto**: Clone este repositório em seu ambiente local:

    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/kmateus13/ProjetoBlog-Angular.git)
    ```

## Passos para Rodar o Projeto

1. **Instalar Dependências**:

    Dentro da pasta do projeto, execute o comando a seguir para instalar as dependências do projeto:

    ```bash
    npm install
    ```

2. **Executar o Servidor de Desenvolvimento**:

    Com todas as dependências instaladas, você pode rodar o projeto localmente com o comando:

    ```bash
    ng serve
    ```

    Isso iniciará o servidor de desenvolvimento. O projeto estará disponível em [http://localhost:4200](http://localhost:4200).

3. **Acessar a Aplicação**:

    Abra seu navegador e acesse [http://localhost:4200](http://localhost:4200) para começar a usar a aplicação.

## Funcionalidades

- **Página Inicial**: Exibe uma lista de postagens (simulada) com a opção de criar ou editar postagens.
- **Criar Postagem**: O formulário permite a criação de uma nova postagem. O título e o conteúdo são obrigatórios, com validação de comprimento mínimo.
- **Editar Postagem**: A página de edição permite que o usuário edite os dados de uma postagem existente.
- **Validações**: Campos de título e conteúdo têm validações de comprimento mínimo e obrigatórios.

## Estrutura do Projeto

O projeto segue a estrutura padrão do Angular, com componentes principais para exibir e editar postagens. A seguir está uma visão geral das pastas e arquivos mais importantes:

- **src/app**
  - `create.component.ts` - Componente para criação de novas postagens.
  - `edit.component.ts` - Componente para editar postagens existentes.
  - `post.service.ts` - Serviço que interage com a API para criar, editar e listar postagens.
  - `post.model.ts` - Define a estrutura dos dados de uma postagem.
  - `app.component.ts` - Componente principal que gerencia as rotas e exibe o layout básico.

## Dependências

- **Angular**: Framework utilizado para construir a aplicação.
- **RxJS**: Biblioteca para manipulação de observáveis.
- **Reactive Forms**: Utilizado para gerenciar o estado dos formulários.

## Contribuições
Se você deseja contribuir para este projeto, por favor, faça um fork e envie um pull request. Qualquer contribuição será muito apreciada!


