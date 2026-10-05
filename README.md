# 🏋️ FitAiPro

Aplicação web para **geração de fichas de treino personalizadas utilizando Inteligência Artificial**.

O FitAiPro coleta informações como objetivo, nível de experiência, frequência de treino, foco muscular e restrições físicas para gerar uma ficha de exercícios personalizada.

Os treinos gerados são estruturados em **Treino A, B e C**, contendo exercícios, séries, repetições, descanso e instruções de execução. Os dados também são persistidos em banco de dados para que os planos possam ser consultados e atualizados posteriormente.

## 🚀 Features

* Geração de fichas de treino com IA
* Personalização baseada no objetivo do usuário
* Consideração do nível de experiência
* Definição da quantidade de dias de treino
* Definição do foco principal
* Consideração de restrições e lesões
* Geração de treinos A, B e C
* Exercícios com séries e repetições
* Tempo de descanso
* Instruções de execução
* Visualização dos exercícios em cards
* Modal com detalhes do exercício
* Persistência dos planos de treino
* Consulta de fichas salvas
* Atualização de fichas existentes
* API Routes utilizando Next.js
* Gerenciamento de dados assíncronos com TanStack Query
* Interface responsiva

## 🤖 AI Integration

O FitAiPro utiliza um modelo de linguagem através do **Groq SDK** para gerar os planos de treinamento.

O usuário fornece informações como:

```text
Objetivo
Experiência
Dias disponíveis para treino
Foco principal
Restrições ou lesões
```

Essas informações são enviadas para uma API interna que constrói o prompt e solicita à IA a geração dos exercícios.

O resultado esperado é estruturado em:

```text
Treino A
├── Exercício
├── Séries/Repetições
├── Descanso
└── Instruções de execução

Treino B
├── Exercício
├── Séries/Repetições
├── Descanso
└── Instruções de execução

Treino C
├── Exercício
├── Séries/Repetições
├── Descanso
└── Instruções de execução
```

### Generation Flow

```text
User
 │
 │ Informações do treino
 ▼
Workout Form
 │
 ▼
/api/generated-workout
 │
 ▼
Groq API
 │
 │ Plano gerado
 ▼
Workout Data
 │
 ├───────────────┐
 ▼               ▼
/api/workout   UI
 │
 ▼
Prisma
 │
 ▼
SQLite
```

## 🛠️ Technologies

### Front-end

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**

### AI

* **Groq SDK**
* **LLM integration**
* Prompt engineering

O projeto também possui dependências preparadas para integração com outros provedores/modelos, incluindo **OpenAI** e **Google GenAI**.

### Back-end

* **Next.js Route Handlers**
* **REST API**
* **Axios**
* **TanStack Query**

### Database

* **Prisma ORM**
* **SQLite**
* Prisma Migrations

### UI

* **Radix UI**
* **Lucide React**
* **Phosphor Icons**

## 🧠 Concepts Applied

O projeto foi desenvolvido colocando em prática conceitos importantes de desenvolvimento Full-Stack:

* Integração de aplicações web com Inteligência Artificial
* Consumo de APIs de modelos de linguagem
* Construção de prompts
* Processamento de respostas geradas por IA
* API Routes / Route Handlers
* REST APIs
* CRUD
* ORM
* Relacionamentos entre entidades
* Modelagem de banco de dados
* Prisma Client
* Prisma Migrations
* Server-side logic
* Client Components
* React Hooks
* TanStack React Query
* Gerenciamento de estado assíncrono
* Componentização
* TypeScript
* Interfaces responsivas
* Modais e componentes interativos
* Separação entre camada de interface e API

## 🗃️ Database

O projeto utiliza **Prisma ORM** com **SQLite**.

A estrutura principal do banco é composta por:

```text
User
 │
 └── WorkoutPlan
       │
       ├── WorkoutDay
       │     └── Exercise
       │
       ├── WorkoutDay
       │     └── Exercise
       │
       └── WorkoutDay
             └── Exercise
```

### Models

#### User

Armazena os usuários da aplicação.

#### WorkoutPlan

Representa uma ficha de treino criada para um usuário.

#### WorkoutDay

Representa cada divisão do treinamento, como:

* Treino A
* Treino B
* Treino C

#### Exercise

Armazena os exercícios pertencentes a cada dia de treino, incluindo:

* Nome
* Séries/repetições
* Descanso
* Instruções de execução

## 🔄 Workout Management

O projeto possui endpoints específicos para trabalhar com as fichas.

### Generate Workout

```http
POST /api/generated-workout
```

Responsável por enviar as informações do usuário para a IA e receber o treino gerado.

### Create Workout

```http
POST /api/workout
```

Persiste o plano de treino gerado no banco de dados.

### Get Workout

```http
GET /api/get-workout
```

Recupera os planos de treino associados ao usuário.

### Update Workout

```http
PATCH /api/update-workout
```

Atualiza os exercícios de uma ficha existente.

## 📂 Project Structure

```text
.
├── app/
│   ├── api/
│   │   ├── generated-workout/
│   │   │   └── route.ts
│   │   ├── get-workout/
│   │   │   └── route.ts
│   │   ├── update-workout/
│   │   │   └── route.ts
│   │   └── workout/
│   │       └── route.ts
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutForm.tsx
│   │   └── ...
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   ├── prisma.ts
│   │   └── queryclient.ts
│   │
│   ├── workout/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
├── package.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## ⚙️ Getting Started

### Prerequisites

Before starting, make sure you have installed:

* Node.js
* npm
* A Groq API key

### Installation

Clone the repository:

```bash
git clone https://github.com/ReinaldoARamos/FitAiPro.git
```

Enter the project directory:

```bash
cd FitAiPro
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
DATABASE_URL="file:./dev.db"
GROQ_API_KEY="your_groq_api_key"
```

Never commit real API keys to the repository.

### Database

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply the database migrations:

```bash
npx prisma migrate dev
```

### Running the application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Creates the production build  |
| `npm run start` | Starts the production server  |
| `npm run lint`  | Runs ESLint                   |

## 🎯 Project Goals

The main goal of FitAiPro was to build a practical application combining **modern web development with Artificial Intelligence**.

The project focuses on:

* Integrating AI into a web application
* Building APIs with Next.js
* Working with LLM-generated data
* Persisting AI-generated content
* Modeling relational data with Prisma
* Managing asynchronous requests
* Creating reusable React components
* Building an interactive and responsive user interface
* Connecting front-end, API and database layers

## 🔮 Possible Improvements

Some possible improvements for future versions include:

* User authentication
* Individual workout plans per authenticated user
* Dynamic exercise images
* YouTube integration for exercise demonstrations
* Workout history
* Exercise replacement
* Workout completion tracking
* Progress tracking
* Weight and measurement tracking
* AI-powered workout adjustments
* AI-generated nutrition suggestions
* Better validation of AI responses
* Structured JSON output validation with Zod
* Improved error handling
* Automated tests
* Production database
* Production deployment
* Rate limiting for AI requests

## ⚠️ Important

The workout suggestions generated by the application are intended for **educational and demonstration purposes**.

AI-generated workout plans should not replace evaluation or guidance from qualified health and fitness professionals, particularly when the user has injuries, medical conditions or physical limitations.

## 👨‍💻 Author

**Reinaldo Aparecido Ramos**

Full-Stack Developer focused on building modern web applications with **React, Next.js, TypeScript and Node.js**.

* GitHub: https://github.com/ReinaldoARamos
* LinkedIn: https://www.linkedin.com/in/reinaldo-aparecido/
