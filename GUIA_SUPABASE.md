# 🐘 Guia Completo: Configurar Supabase para a Mamute Cristalizações

Este guia te mostrará, passo a passo, como configurar o banco de dados na nuvem (Supabase) para que seu sistema de agendamentos funcione em qualquer dispositivo.

## 📋 Índice
1. [Criar Conta no Supabase](#criar-conta)
2. [Criar um Novo Projeto](#criar-projeto)
3. [Criar as Tabelas do Banco de Dados](#criar-tabelas)
4. [Obter as Chaves de API](#obter-chaves)
5. [Configurar o Arquivo HTML](#configurar-html)
6. [Testar o Sistema](#testar)

---

## 1. Criar Conta no Supabase {#criar-conta}

### Passo 1.1: Acessar o Site do Supabase

Abra seu navegador e acesse: **https://supabase.com**

### Passo 1.2: Clicar em "Start Your Project" ou "Sign Up"

Procure pelo botão verde **"Start your project"** ou **"Sign Up"** na página inicial.

### Passo 1.3: Escolher Método de Login

Você pode se registrar usando:
- **Google** (Recomendado - mais rápido)
- **GitHub**
- **Email e Senha**

Clique em uma das opções e siga as instruções.

### Passo 1.4: Confirmar seu Email

Se escolheu email e senha, verifique seu email e clique no link de confirmação.

---

## 2. Criar um Novo Projeto {#criar-projeto}

### Passo 2.1: Acessar o Dashboard

Após fazer login, você será redirecionado para o dashboard do Supabase.

### Passo 2.2: Criar um Novo Projeto

Clique no botão **"New Project"** ou **"Create a new project"**.

### Passo 2.3: Preencher os Detalhes do Projeto

Preencha os seguintes campos:

| Campo | Valor |
| :--- | :--- |
| **Project Name** | `mamute-agendamentos` |
| **Database Password** | Crie uma senha forte (ex: `Mamute@2025Segura!`) - **Guarde bem essa senha!** |
| **Region** | Escolha `South America (São Paulo)` se disponível, ou a mais próxima. |
| **Pricing Plan** | Selecione **Free** (Gratuito) |

### Passo 2.4: Criar o Projeto

Clique em **"Create new project"** e aguarde alguns minutos enquanto o Supabase configura seu banco de dados.

---

## 3. Criar as Tabelas do Banco de Dados {#criar-tabelas}

Após o projeto ser criado, você será redirecionado para o editor do Supabase.

### Passo 3.1: Acessar o Editor SQL

No menu lateral esquerdo, clique em **"SQL Editor"**.

### Passo 3.2: Criar a Tabela de Agendamentos

Cole o seguinte código SQL na janela de edição:

```sql
CREATE TABLE agendamentos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  empresa VARCHAR(255) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  hora VARCHAR(5),
  telefone VARCHAR(20),
  duracao INT DEFAULT 1,
  fidelizado BOOLEAN DEFAULT FALSE,
  obs TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Passo 3.3: Executar o SQL

Clique no botão **"Run"** (ou pressione `Ctrl+Enter`) para criar a tabela.

Você verá uma mensagem de sucesso: **"Success. No rows returned"**.

### Passo 3.4: Criar a Tabela de Usuários (Autenticação)

O Supabase já cria automaticamente uma tabela de usuários para autenticação, então você não precisa fazer nada adicional.

---

## 4. Obter as Chaves de API {#obter-chaves}

Você precisará de duas chaves para conectar seu site ao Supabase.

### Passo 4.1: Acessar as Configurações do Projeto

No menu lateral esquerdo, clique em **"Settings"** (Configurações).

### Passo 4.2: Ir para a Seção "API"

Clique em **"API"** no submenu.

### Passo 4.3: Copiar as Chaves

Você verá duas chaves importantes:

1. **Project URL**: Parece com `https://xxxxxxxxxxxxx.supabase.co`
2. **anon public**: Uma chave longa de texto

**Copie ambas e guarde em um lugar seguro.** Você precisará delas no próximo passo.

---

## 5. Configurar o Arquivo HTML {#configurar-html}

Agora você precisa adicionar as chaves do Supabase ao seu arquivo `index.html`.

### Passo 5.1: Abrir o Arquivo `index.html`

Abra o arquivo `index.html` em um editor de texto (Bloco de Notas, VS Code, etc.).

### Passo 5.2: Procurar pela Seção de Configuração

Procure pela seguinte linha no arquivo:

```html
<!-- CONFIGURAÇÃO DO SUPABASE - ADICIONE SUAS CHAVES AQUI -->
```

### Passo 5.3: Adicionar as Chaves

Substitua `SEU_PROJECT_URL` e `SUA_ANON_KEY` pelas chaves que você copiou:

```html
<script>
  const SUPABASE_URL = 'https://seu-projeto.supabase.co';
  const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui';
</script>
```

### Passo 5.4: Salvar o Arquivo

Salve o arquivo `index.html`.

---

## 6. Testar o Sistema {#testar}

### Passo 6.1: Abrir o Site Localmente

Abra o arquivo `index.html` em seu navegador (clique duas vezes nele ou arraste para o navegador).

### Passo 6.2: Fazer Login

Use as credenciais:
- **Usuário**: `Mamute`
- **Senha**: `mamute2025`

### Passo 6.3: Criar um Agendamento

Clique em **"✨ Novo Serviço"** e crie um agendamento de teste.

### Passo 6.4: Verificar no Supabase

Volte ao dashboard do Supabase e clique em **"Table Editor"** no menu lateral.

Você deverá ver a tabela `agendamentos` com o agendamento que você criou!

### Passo 6.5: Testar em Outro Dispositivo

Abra o site em outro computador ou celular usando o link do GitHub Pages:

`https://caiomatheusaraujo02.github.io/mamute-agendamentos/`

Você deverá ver o mesmo agendamento que criou no primeiro dispositivo!

---

## ✅ Pronto!

Seu sistema de agendamentos agora está sincronizado na nuvem e funciona em qualquer dispositivo!

Se tiver dúvidas, consulte a documentação do Supabase: https://supabase.com/docs
