# 🧪 Cypress E2E Automation - SauceDemo

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)



---

## 📌 Sobre o Projeto

Este projeto consiste em uma automação de testes **End-to-End (E2E)** utilizando Cypress para validar o fluxo completo de compra do e-commerce fictício SauceDemo.

A solução foi desenvolvida com foco em boas práticas de automação, escalabilidade e simulação de um ambiente de testes próximo ao cenário real de produção.

---

## 🚀 Objetivo

Validar de forma automatizada o fluxo crítico de um usuário no sistema:

- Login no sistema
- Seleção de produto
- Adição ao carrinho
- Checkout completo
- Finalização da compra

---

## 🏗️ Arquitetura e Boas Práticas

O projeto foi estruturado utilizando:

- 📐 **Page Object Model (POM)** para reutilização e organização de código
- 🧩 Separação de responsabilidades por páginas
- 🧪 Scripts organizados por fluxo de negócio
- 🔄 Reutilização de métodos de ações

---

## 🧪 Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Mochawesome (Reports)
- Git / GitHub
- GitHub Actions (CI/CD)

---

## 📊 Relatórios de Teste

O projeto utiliza **Mochawesome Reporter**, permitindo:

- Geração de relatórios HTML detalhados
- Visualização de status dos testes
- Tempo de execução por cenário
- Logs completos de execução

📁 Local dos relatórios: mochawesome-report/


---

## ⚙️ CI/CD (GitHub Actions)

O projeto possui pipeline automatizado configurado no GitHub Actions.

A cada push ou pull request na branch `main`, o pipeline executa:

1. Instalação de dependências (`npm ci`)
2. Execução dos testes Cypress
3. Validação do fluxo E2E

✔ Garantindo qualidade contínua do código (Continuous Testing)

---



## ▶️ Como Executar o Projeto

### 1. Instalar dependências

npm install


### 2. Executar Cypress em modo interativo

npx cypress open




---



## 🧠 Conceitos Aplicados

O projeto foi desenvolvido aplicando práticas modernas de automação de testes:

- ✔ Testes E2E (End-to-End)
- ✔ Automação de UI com Cypress
- ✔ Page Object Model (POM)
- ✔ Integração CI/CD com GitHub Actions
- ✔ Geração automatizada de relatórios (Mochawesome)
- ✔ Boas práticas de QA Automation (legibilidade, manutenção e escalabilidade)


---


## 📌 Cenário Automatizado

O fluxo automatizado simula uma jornada real de compra no e-commerce SauceDemo:

- 🔐 Autenticação de usuário
- 🛍️ Seleção de produto
- 🛒 Validação de itens no carrinho
- 🧾 Preenchimento de dados no checkout
- ✅ Finalização da compra com sucesso



---


🏁 Status do Projeto

✔ Testes funcionais
✔ CI/CD implementado
✔ Relatórios automatizados
✔ Estrutura escalável
