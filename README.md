# 🐘 Mamute Cristalizações - Sistema de Agendamentos Online

## 📋 Sobre o Sistema

Sistema web completo e funcional para gerenciar agendamentos de serviços da empresa **Mamute Cristalizações**. Desenvolvido especificamente para uso da secretária, com interface intuitiva e todas as funcionalidades necessárias.

---

## ✨ Funcionalidades

### 📅 Agendamentos
- Criar novos agendamentos com cliente, data, hora, duração e categoria
- Editar agendamentos existentes
- Excluir agendamentos com confirmação de segurança
- Marcar clientes como fidelizados
- Adicionar observações detalhadas

### 🗓️ Calendário
- Visualizar todos os agendamentos em um calendário interativo
- Clicar em um dia para ver detalhes dos serviços
- Indicadores visuais para dias com agendamentos
- Navegação entre meses

### 🔍 Filtros
- Filtrar agendamentos por categoria de serviço
- Visualizar "Todos" os agendamentos ou apenas uma categoria

### 📊 Exportação
- Exportar todos os agendamentos para arquivo CSV
- Compatível com Excel e Google Sheets
- Inclui todas as informações (cliente, data, categoria, etc.)

### 🖨️ Impressão
- Imprimir agendamentos do dia
- Formato otimizado para papel A4
- Sem elementos desnecessários

### 💾 Armazenamento
- Dados salvos automaticamente no navegador
- Sem necessidade de servidor ou banco de dados
- Privacidade garantida (dados locais)

---

## 🚀 Como Usar

### Primeiro Acesso
1. Abra o arquivo `index.html` no navegador
2. Ou acesse o link do site publicado
3. Você verá a interface pronta para usar

### Criar um Novo Agendamento
1. Clique no botão **+ Novo Serviço** (vermelho, canto superior direito)
2. Preencha os dados:
   - **Cliente / Empresa**: Nome da empresa ou cliente
   - **Data do Serviço**: Data de início do trabalho
   - **Hora**: Hora de início (opcional)
   - **Duração**: Quantos dias durará o serviço
   - **Categoria**: Tipo de serviço (Limpeza de Vidro, Restauração, etc.)
   - **Cliente fidelizado**: Marque se é cliente fidelizado
   - **Observações**: Detalhes adicionais
3. Clique em **Salvar Serviço**

### Editar um Agendamento
1. Na lista de agendamentos, clique no botão **✏️ Editar** do serviço
2. Modifique os dados desejados
3. Clique em **Salvar Serviço**

### Excluir um Agendamento
1. Clique no botão **🗑️ Excluir** do serviço
2. Confirme a exclusão
3. O agendamento será removido

### Ver Calendário
1. Clique no botão **📅 Calendário**
2. Navegue entre meses com os botões **◀** e **▶**
3. Clique em um dia para ver os agendamentos daquele dia

### Filtrar Agendamentos
1. Use o seletor **Filtrar por categoria** no topo
2. Selecione a categoria desejada
3. A lista será atualizada automaticamente

### Exportar Dados
1. Clique no botão **📥 Exportar**
2. Um arquivo CSV será baixado
3. Abra em Excel ou Google Sheets

### Imprimir
1. Abra o calendário e clique em um dia
2. Clique em **🖨️ Imprimir** na janela de detalhes
3. Ou use Ctrl+P para imprimir a página inteira

---

## 📁 Estrutura de Arquivos

```
mamute-agendamentos/
├── index.html           # Página principal (abra este arquivo)
├── style.css            # Estilos e design
├── script.js            # Funcionalidades e lógica
├── logo.png             # Logo da empresa
├── README.md            # Este arquivo
└── GUIA_PUBLICACAO.md   # Guia para publicar online
```

---

## 🎨 Cores e Design

- **Cor Primária**: Vermelho (#C41E3A) - Marca da Mamute
- **Cor Secundária**: Preto (#1a1a1a) - Elegância
- **Design**: Moderno, responsivo e intuitivo
- **Compatibilidade**: Desktop, tablet e celular

---

## 💻 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para publicar online)
- Nenhum software adicional necessário

---

## 🔒 Segurança e Privacidade

- Todos os dados são armazenados **localmente no navegador**
- Nenhuma informação é enviada para servidores externos
- Seus dados são privados e seguros
- Recomenda-se fazer backup regularmente (exportar CSV)

---

## 📱 Responsividade

O sistema funciona perfeitamente em:
- ✓ Desktop (Windows, Mac, Linux)
- ✓ Tablet (iPad, Android)
- ✓ Celular (iPhone, Android)

---

## 🔧 Personalização

### Alterar Categorias
1. Abra o arquivo `index.html` em um editor de texto
2. Procure por `<option>Limpeza de Vidro</option>`
3. Adicione ou remova categorias conforme necessário
4. Salve o arquivo

### Alterar Cores
1. Abra o arquivo `style.css` em um editor de texto
2. Procure por `--primary: #C41E3A;`
3. Altere o código de cor
4. Salve o arquivo

### Alterar Empresa
1. Abra o arquivo `index.html` em um editor de texto
2. Procure por `<h1>Mamute Cristalizações</h1>`
3. Altere para o nome desejado
4. Salve o arquivo

---

## 🌐 Publicar Online

Para colocar seu site na internet gratuitamente, veja o arquivo **GUIA_PUBLICACAO.md** incluído nesta pasta.

Opções disponíveis:
- GitHub Pages (recomendado)
- Netlify
- Vercel

---

## 📊 Categorias Padrão

O sistema vem com as seguintes categorias:
- Limpeza de Vidro
- Restauração
- Pós-Obra
- Placa Solar
- Limpeza de Piso
- Outros

Você pode adicionar ou modificar conforme necessário.

---

## 🆘 Solução de Problemas

### Dados desapareceram
- Limpar cache/cookies do navegador pode deletar dados
- Sempre faça backup exportando para CSV
- Use o mesmo navegador para acessar

### Site não carrega
- Verifique se todos os arquivos estão na mesma pasta
- Certifique-se de que o arquivo é `index.html` (não `.txt`)
- Tente outro navegador

### Botões não funcionam
- Atualize a página (F5)
- Limpe o cache (Ctrl+Shift+Delete)
- Tente outro navegador

### Logo não aparece
- Certifique-se de que o arquivo `logo.png` está na mesma pasta
- Verifique se o nome está correto (case-sensitive)

---

## 📞 Suporte Técnico

Se encontrar problemas:

1. Verifique se todos os arquivos estão na pasta correta
2. Tente abrir em outro navegador
3. Limpe o cache do navegador
4. Reinicie o navegador

Para problemas mais complexos, consulte um desenvolvedor web.

---

## 📝 Notas

- Os dados são salvos automaticamente ao criar/editar
- Não é necessário clicar em nenhum botão "Salvar" adicional
- Os dados persistem mesmo após fechar o navegador
- Cada navegador/computador tem seus próprios dados

---

## 🎯 Dicas de Uso

1. **Backup Regular**: Exporte seus dados para CSV uma vez por semana
2. **Categorias Claras**: Use categorias consistentes para melhor filtro
3. **Observações Detalhadas**: Adicione informações importantes nas observações
4. **Clientes Fidelizados**: Marque para identificar rapidamente
5. **Duração Correta**: Indique corretamente quantos dias durará cada serviço

---

## 🚀 Próximas Melhorias (Futuro)

Possíveis adições:
- Sincronização em nuvem
- Autenticação com senha
- Notificações para clientes
- Integração com WhatsApp/SMS
- Relatórios avançados
- Múltiplos usuários

---

## 📄 Licença

Sistema desenvolvido especificamente para **Mamute Cristalizações**.

---

## 🙏 Obrigado

Obrigado por usar o Sistema de Agendamentos da Mamute Cristalizações!

Para dúvidas ou sugestões, consulte o arquivo **GUIA_PUBLICACAO.md**.

---

**Desenvolvido com ❤️ para sua empresa**  
Mamute Cristalizações - Agendamentos Online
