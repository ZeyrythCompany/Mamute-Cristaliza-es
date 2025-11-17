# 🐘 Guia Atualizado: Novos Campos de Status e Duração em Horas

Este guia complementa o `GUIA_SUPABASE.md` com as novas funcionalidades adicionadas.

## 📋 O que mudou?

O sistema agora suporta:

1. **Status do Serviço**: Marcar um serviço como "Pendente" ou "Concluído"
2. **Duração em Horas**: Além de dias, agora você pode registrar serviços que duram horas
3. **Hora de Término**: Campo para registrar a hora exata em que o serviço foi finalizado
4. **Indicador Visual**: Serviços concluídos aparecem com uma borda verde e um sinal ✅

## 🔄 Atualizar o Banco de Dados

Se você já criou seu projeto no Supabase, você precisa adicionar os novos campos à tabela `agendamentos`.

### Passo 1: Acessar o SQL Editor

No dashboard do Supabase, clique em **"SQL Editor"** no menu lateral.

### Passo 2: Adicionar os Novos Campos

Cole o seguinte código SQL:

```sql
ALTER TABLE agendamentos
ADD COLUMN tipo_duracao VARCHAR(10) DEFAULT 'dias',
ADD COLUMN hora_fim VARCHAR(5),
ADD COLUMN status VARCHAR(20) DEFAULT 'pendente';
```

### Passo 3: Executar

Clique em **"Run"** (ou `Ctrl+Enter`) para adicionar os campos.

## 📝 Como Usar as Novas Funcionalidades

### Criar um Serviço com Duração em Horas

1. Clique em **"✨ Novo Serviço"**
2. Preencha os campos normalmente
3. Em **"Tipo de Duração"**, selecione **"Horas"**
4. Em **"Duração"**, digite o número de horas (ex: 2, 3, 4)
5. Preencha a **"Hora de Início"** e **"Hora de Término"** (opcional)
6. Clique em **"💾 Salvar Serviço"**

### Criar um Serviço com Duração em Dias

1. Clique em **"✨ Novo Serviço"**
2. Preencha os campos normalmente
3. Em **"Tipo de Duração"**, selecione **"Dias"** (padrão)
4. Em **"Duração"**, digite o número de dias (ex: 1, 2, 3)
5. Clique em **"💾 Salvar Serviço"**

### Marcar um Serviço como Concluído

1. Na lista de agendamentos, localize o serviço que deseja finalizar
2. Clique no botão **"✅ Finalizar"** (só aparece para serviços pendentes)
3. O serviço agora aparecerá com:
   - Uma borda verde à esquerda
   - Um sinal **"✅ Concluído"** em verde
   - O botão "Finalizar" desaparecerá

## 🎨 Indicadores Visuais

| Status | Cor | Símbolo |
| :--- | :--- | :--- |
| **Pendente** | Laranja | ⏳ |
| **Concluído** | Verde | ✅ |

## 📊 Exportar Dados

Quando você exporta os dados (clicando em **"💾 Backup"**), o arquivo HTML agora inclui:

- **Hora Início**: A hora em que o serviço começou
- **Hora Fim**: A hora em que o serviço terminou
- **Duração**: Exibida em horas (ex: 2h) ou dias (ex: 3 dia(s))
- **Status**: Mostra se o serviço está Pendente ou Concluído

## ❓ Dúvidas Frequentes

**P: Posso mudar o status de um serviço de "Concluído" para "Pendente"?**  
R: Sim! Clique em **"✏️ Editar"** no serviço, e você poderá alterar o status manualmente.

**P: Um serviço com duração em horas aparece no calendário?**  
R: Sim, mas apenas no dia em que foi agendado. Se for em dias, ele aparecerá em todos os dias da duração.

**P: Preciso preencher "Hora de Término"?**  
R: Não é obrigatório, mas é recomendado para registrar quando o serviço foi finalizado.

---

Se tiver dúvidas, consulte o `GUIA_SUPABASE.md` ou entre em contato!
