
# Desafio Frontend

Este é um projeto frontend desenvolvido com Vue.js que implementa um sistema de cadastro de usuários. O projeto inclui um formulário para cadastrar usuários, com busca automática de endereço através da API ViaCEP, e exibe a lista de usuários cadastrados em uma tabela.
## Preparação

![Home](https://github.com/user-attachments/assets/545d3454-650e-407d-8c66-07007e4984ef)
Antes de ser criado o site, foi criado um modelo no canva, para definir melhor a ideia de como gostaria que fosse o projeto final




## Funcionalidades

- **Formulário de Cadastro de Usuários**:
  - Campos para Nome, E-mail, CEP, Endereço, Bairro, Cidade, Estado, e Origem.
  - Máscara para formatação do CEP no padrão `XXXXX-XXX`.
  - Busca automática do endereço ao preencher o CEP (API ViaCEP).
  - Layout responsivo: o formulário fica no canto direito em telas grandes e se ajusta para cima em telas pequenas.

- **Lista de Usuários**:
  - Exibe a lista de usuários cadastrados em uma tabela.
  - Layout responsivo: a tabela ocupa o lado esquerdo em telas grandes e se ajusta para baixo em telas pequenas.
  
- **Responsividade Completa**: A interface se adapta para oferecer uma boa experiência tanto em desktops quanto em dispositivos móveis.

## Tecnologias Utilizadas

- **Vue.js 3**: Framework JavaScript para construção da interface.
- **Vuetify**: Biblioteca de componentes UI baseada no Material Design.
- **Pinia**: Biblioteca de gerenciamento de estado para Vue.js.
- **Axios**: Cliente HTTP para fazer a integração com a API ViaCEP.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- **Vue CLI**: Ferramenta de linha de comando para iniciar o projeto Vue.js.

## Como Instalar e Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/desafio-frontend.git
```

### 2. Entre na Pasta do Projeto

```bash
cd desafio-frontend
```

### 3. Instale as Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

### 4. Execute a Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run serve
```

A aplicação estará disponível no endereço: `http://localhost:8080`.

## Estrutura do Projeto

- **`src/components/UserForm.vue`**: Componente de formulário de cadastro com máscara de CEP e integração com API ViaCEP.
- **`src/components/UserTable.vue`**: Componente de tabela para exibir os usuários cadastrados.
- **`src/stores/userStore.js`**: Store do Pinia para gerenciar o estado da lista de usuários.
- **`src/plugins/vuetify.js`**: Configuração do Vuetify para estilizar a interface.
- **`src/App.vue`**: Componente raiz que organiza a estrutura de layout responsivo entre o formulário e a tabela.

## Personalizações

- **Estilo dos Componentes**: O projeto utiliza o Vuetify para um design moderno. No entanto, você pode ajustar o CSS dos componentes em cada arquivo `.vue`.
- **Configuração de Layout Responsivo**: O layout do formulário e da tabela é ajustável via propriedades `v-col` no arquivo `App.vue`.

## Contato

Em caso de dúvidas ou sugestões, entre em contato pelo e-mail: 
- [Lucas Dal Jovem Neyssinger](https://github.com/lucasdaljovem)
