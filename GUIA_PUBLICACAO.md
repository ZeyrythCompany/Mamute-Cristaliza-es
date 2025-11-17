# 📚 Guia Completo: Como Publicar seu Site de Agendamentos Gratuitamente

## 🎯 Introdução

Seu site **Mamute Cristalizações** está pronto para ser publicado! Este guia mostra **3 formas diferentes e totalmente gratuitas** de colocar seu site online em minutos.

---

## ✅ Opção 1: GitHub Pages (RECOMENDADO - Mais Fácil)

### Por que escolher?
- ✓ Completamente gratuito
- ✓ Domínio gratuito (seu-usuario.github.io)
- ✓ Muito simples de usar
- ✓ Suporta todos os seus arquivos
- ✓ Sem limite de tempo

### Passo a Passo:

#### 1. Criar uma conta GitHub (se não tiver)
- Acesse: https://github.com/signup
- Preencha o formulário com seus dados
- Confirme seu e-mail

#### 2. Criar um novo repositório
- Clique no ícone **+** (canto superior direito)
- Selecione **New repository**
- Nome do repositório: `mamute-agendamentos` (ou outro nome que desejar)
- Descrição: "Sistema de Agendamentos - Mamute Cristalizações"
- Selecione **Public**
- Clique em **Create repository**

#### 3. Fazer upload dos arquivos
- Na página do repositório, clique em **Add file** → **Upload files**
- Selecione todos os arquivos da pasta `mamute-agendamentos`:
  - `index.html`
  - `style.css`
  - `script.js`
  - `logo.png`
- Clique em **Commit changes**

#### 4. Ativar GitHub Pages
- Vá para **Settings** (engrenagem)
- Desça até **Pages** (no menu esquerdo)
- Em **Source**, selecione **main** (ou **master**)
- Clique em **Save**
- Aguarde alguns segundos...

#### 5. Seu site está online!
- URL: `https://seu-usuario.github.io/mamute-agendamentos`
- Exemplo: `https://joao123.github.io/mamute-agendamentos`

**Pronto! Seu site está ao vivo!** 🎉

---

## ✅ Opção 2: Netlify (Alternativa Excelente)

### Por que escolher?
- ✓ Completamente gratuito
- ✓ Domínio gratuito personalizado
- ✓ Muito rápido e confiável
- ✓ Interface amigável
- ✓ Suporte excelente

### Passo a Passo:

#### 1. Criar uma conta Netlify
- Acesse: https://app.netlify.com/signup
- Clique em **Sign up with GitHub** (mais fácil)
- Autorize o acesso
- Confirme seu e-mail

#### 2. Fazer upload dos arquivos
- Na dashboard, clique em **Add new site** → **Deploy manually**
- Arraste a pasta `mamute-agendamentos` para a área indicada
- Aguarde o upload (alguns segundos)

#### 3. Seu site está online!
- URL será gerada automaticamente
- Exemplo: `https://mamute-agendamentos-xyz.netlify.app`
- Você pode personalizar o nome

**Pronto! Seu site está ao vivo!** 🎉

---

## ✅ Opção 3: Vercel (Outra Alternativa)

### Por que escolher?
- ✓ Completamente gratuito
- ✓ Muito rápido (CDN global)
- ✓ Domínio gratuito
- ✓ Fácil de usar

### Passo a Passo:

#### 1. Criar uma conta Vercel
- Acesse: https://vercel.com/signup
- Clique em **Continue with GitHub** (mais fácil)
- Autorize o acesso

#### 2. Fazer upload dos arquivos
- Clique em **Add New...** → **Project**
- Selecione **Import Git Repository**
- Ou clique em **Deploy** se tiver feito upload no GitHub
- Siga as instruções

#### 3. Seu site está online!
- URL será gerada automaticamente
- Exemplo: `https://mamute-agendamentos.vercel.app`

**Pronto! Seu site está ao vivo!** 🎉

---

## 🔧 Configurações Adicionais (Opcional)

### Adicionar um Domínio Personalizado

Se você tiver um domínio próprio (ex: `www.mamutecrista.com.br`), pode conectá-lo:

**GitHub Pages:**
- Settings → Pages → Custom domain
- Insira seu domínio
- Configure os DNS records (instruções fornecidas)

**Netlify:**
- Site settings → Domain management
- Add custom domain
- Configure os DNS records

**Vercel:**
- Settings → Domains
- Add domain
- Configure os DNS records

---

## 📱 Testar seu Site

Após publicar, teste:

1. **Desktop**: Abra em um navegador normal
2. **Celular**: Abra pelo celular para verificar responsividade
3. **Funcionalidades**:
   - Criar um novo agendamento
   - Editar um agendamento
   - Excluir um agendamento
   - Filtrar por categoria
   - Ver calendário
   - Exportar dados
   - Imprimir

---

## 💾 Fazer Backup dos Dados

Seus agendamentos são salvos **localmente no navegador** (localStorage). Para não perder dados:

### Exportar Regularmente
- Clique em **📥 Exportar** no seu site
- Um arquivo CSV será baixado
- Guarde em um local seguro

### Fazer Backup Manual
- Abra o navegador (Chrome, Firefox, etc.)
- Pressione **F12** (Ferramentas do Desenvolvedor)
- Vá para **Application** → **Local Storage**
- Procure por `mamute_servicos_v3`
- Copie o conteúdo e salve em um arquivo de texto

---

## 🚀 Próximos Passos

### Para Melhorar seu Site:

1. **Adicionar Banco de Dados** (se quiser sincronizar em vários computadores)
   - Requer conhecimento técnico
   - Contate um desenvolvedor

2. **Adicionar Autenticação** (senha para secretária)
   - Requer conhecimento técnico
   - Contate um desenvolvedor

3. **Enviar Notificações** (SMS/WhatsApp para clientes)
   - Requer integração com APIs
   - Contate um desenvolvedor

4. **Domínio Personalizado**
   - Compre em: godaddy.com, namecheap.com, registro.br
   - Conecte ao seu site (veja seção acima)

---

## ❓ Dúvidas Frequentes

### P: Meus dados serão perdidos se fechar o navegador?
**R:** Não! Os dados são salvos no navegador. Eles persistem mesmo após fechar.

### P: Posso usar em vários computadores?
**R:** Não com a versão atual. Cada computador tem seu próprio armazenamento. Para sincronizar, exporte/importe dados ou contate um desenvolvedor para adicionar banco de dados.

### P: Preciso pagar algo?
**R:** Não! Todas as opções são 100% gratuitas.

### P: Posso usar meu próprio domínio?
**R:** Sim! Compre um domínio e configure (veja seção "Adicionar um Domínio Personalizado").

### P: O site é seguro?
**R:** Sim! Os dados são armazenados localmente no navegador. Ninguém pode acessá-los pela internet.

### P: Posso editar o site depois?
**R:** Sim! Faça as alterações nos arquivos e faça upload novamente.

---

## 📞 Suporte

Se tiver dúvidas sobre:
- **GitHub Pages**: https://docs.github.com/en/pages
- **Netlify**: https://docs.netlify.com/
- **Vercel**: https://vercel.com/docs

---

## 🎉 Parabéns!

Seu site está pronto e publicado! 

**Dicas finais:**
- Compartilhe o link com sua secretária
- Faça backup dos dados regularmente
- Teste todas as funcionalidades
- Aproveite o sistema! 🚀

---

**Mamute Cristalizações - Sistema de Agendamentos Online**  
Desenvolvido com ❤️ para sua empresa
