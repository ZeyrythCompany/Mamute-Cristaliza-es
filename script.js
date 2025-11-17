// =====================================================
// MAMUTE CRISTALIZAÇÕES - SISTEMA DE AGENDAMENTOS
// COM SUPABASE (BANCO DE DADOS NA NUVEM)
// =====================================================

// ⚠️ IMPORTANTE: Você precisa adicionar suas chaves do Supabase no index.html
// Veja o arquivo GUIA_SUPABASE.md para instruções

// Variáveis globais
let supabaseClient = null;
let servicos = [];
let editingIndex = -1;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let usuarioAutenticado = null;

// Constantes
const VALID_USER = 'Mamute';
const VALID_PASSWORD = 'mamute2025';
const AUTH_KEY = 'mamute_auth_v1';

// =====================================================
// INICIALIZAÇÃO DO SUPABASE
// =====================================================

async function inicializarSupabase() {
  try {
    // Verificar se as chaves estão definidas no HTML
    if (typeof SUPABASE_URL === 'undefined' || typeof SUPABASE_ANON_KEY === 'undefined') {
      console.error('❌ Erro: Chaves do Supabase não encontradas. Verifique o arquivo GUIA_SUPABASE.md');
      return false;
    }

    // Importar a biblioteca do Supabase
    const { createClient } = window.supabase;
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Supabase inicializado com sucesso!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao inicializar Supabase:', error);
    return false;
  }
}

// =====================================================
// ELEMENTOS DO DOM
// =====================================================

const loginScreen = document.getElementById('loginScreen');
const appScreen = document.getElementById('appScreen');
const loginForm = document.getElementById('loginForm');
const loginUser = document.getElementById('loginUser');
const loginPassword = document.getElementById('loginPassword');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const backupHeaderBtn = document.getElementById('backupHeaderBtn');

const listaEl = document.getElementById('lista');
const novoBtn = document.getElementById('novoBtn');
const calBtn = document.getElementById('calBtn');
const exportBtn = document.getElementById('exportBtn');
const filtroCategoria = document.getElementById('filtroCategoria');

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('formServico');
const modalTitle = document.getElementById('modalTitle');

const empresaInput = document.getElementById('empresa');
const dataInput = document.getElementById('data');
const horaInput = document.getElementById('hora');
const telefoneInput = document.getElementById('telefone');
const duracaoInput = document.getElementById('duracao');
const categoriaInput = document.getElementById('categoria');
const fidelizadoInput = document.getElementById('fidelizado');
const obsInput = document.getElementById('obs');

const modalCalendario = document.getElementById('modalCalendario');
const closeCal = document.getElementById('closeCal');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const calTitulo = document.getElementById('calTitulo');
const calendarGrid = document.getElementById('calendarGrid');

const modalDia = document.getElementById('modalDia');
const closeDia = document.getElementById('closeDia');
const listaDoDia = document.getElementById('listaDoDia');
const diaTitulo = document.getElementById('diaTitulo');
const printDayBtn = document.getElementById('printDayBtn');

// =====================================================
// INICIALIZAÇÃO
// =====================================================

window.addEventListener('load', async () => {
  // Inicializar Supabase
  const supabaseOk = await inicializarSupabase();
  
  if (!supabaseOk) {
    alert('❌ Erro ao conectar ao Supabase. Verifique suas chaves de API no arquivo index.html');
    return;
  }

  // Verificar autenticação
  const isAuthenticated = sessionStorage.getItem(AUTH_KEY);
  if (isAuthenticated) {
    await showApp();
  } else {
    showLogin();
  }
});

// =====================================================
// LOGIN / LOGOUT
// =====================================================

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = loginUser.value.trim();
    const password = loginPassword.value;
    
    if (user === VALID_USER && password === VALID_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      loginError.textContent = '';
      showApp();
    } else {
      loginError.textContent = '❌ Usuário ou senha incorretos!';
      loginPassword.value = '';
      loginPassword.focus();
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('Tem certeza que deseja sair?')) {
      sessionStorage.removeItem(AUTH_KEY);
      if (loginUser) loginUser.value = '';
      if (loginPassword) loginPassword.value = '';
      showLogin();
    }
  });
}

if (backupHeaderBtn) {
  backupHeaderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    exportarDados();
  });
}

function showLogin() {
  if (loginScreen) loginScreen.classList.remove('hidden');
  if (appScreen) appScreen.classList.add('hidden');
  if (loginUser) loginUser.focus();
}

async function showApp() {
  if (loginScreen) loginScreen.classList.add('hidden');
  if (appScreen) appScreen.classList.remove('hidden');
  await carregarAgendamentos();
  renderList();
  renderCalendar();
}

// =====================================================
// CARREGAR AGENDAMENTOS DO SUPABASE
// =====================================================

async function carregarAgendamentos() {
  try {
    if (!supabaseClient) {
      console.error('Supabase não inicializado');
      return;
    }

    const { data, error } = await supabaseClient
      .from('agendamentos')
      .select('*')
      .order('data', { ascending: true });

    if (error) {
      console.error('Erro ao carregar agendamentos:', error);
      servicos = [];
    } else {
      servicos = data || [];
      console.log('✅ Agendamentos carregados:', servicos.length);
    }
  } catch (error) {
    console.error('Erro ao carregar agendamentos:', error);
    servicos = [];
  }
}

// =====================================================
// EVENT LISTENERS
// =====================================================

if (filtroCategoria) {
  filtroCategoria.addEventListener('change', () => {
    renderList();
    renderCalendar();
  });
}

if (novoBtn) {
  novoBtn.addEventListener('click', () => {
    editingIndex = -1;
    openModal();
  });
}

if (closeModal) closeModal.addEventListener('click', closeModalFn);
if (cancelBtn) cancelBtn.addEventListener('click', closeModalFn);

if (calBtn) {
  calBtn.addEventListener('click', () => {
    modalCalendario.classList.remove('hidden');
    renderCalendar();
  });
}

if (closeCal) closeCal.addEventListener('click', () => {
  modalCalendario.classList.add('hidden');
});

if (prevMonth) {
  prevMonth.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });
}

if (nextMonth) {
  nextMonth.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });
}

if (closeDia) {
  closeDia.addEventListener('click', () => {
    modalDia.classList.add('hidden');
  });
}

if (printDayBtn) {
  printDayBtn.addEventListener('click', () => {
    window.print();
  });
}

if (exportBtn) {
  exportBtn.addEventListener('click', exportarDados);
}

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const novo = {
      empresa: empresaInput.value.trim(),
      data: dataInput.value,
      hora: horaInput.value,
      telefone: telefoneInput.value.trim(),
      duracao: Number(duracaoInput.value) || 1,
      categoria: categoriaInput.value,
      fidelizado: !!fidelizadoInput.checked,
      obs: obsInput.value.trim(),
    };

    try {
      if (editingIndex === -1) {
        // Inserir novo agendamento
        const { data, error } = await supabaseClient
          .from('agendamentos')
          .insert([novo])
          .select();

        if (error) {
          alert('❌ Erro ao salvar agendamento: ' + error.message);
        } else {
          showSaveNotification();
          await carregarAgendamentos();
          closeModalFn();
          renderList();
          renderCalendar();
        }
      } else {
        // Atualizar agendamento existente
        const agendamento = servicos[editingIndex];
        const { error } = await supabaseClient
          .from('agendamentos')
          .update(novo)
          .eq('id', agendamento.id);

        if (error) {
          alert('❌ Erro ao atualizar agendamento: ' + error.message);
        } else {
          showSaveNotification();
          await carregarAgendamentos();
          closeModalFn();
          renderList();
          renderCalendar();
        }
      }
    } catch (error) {
      alert('❌ Erro: ' + error.message);
    }
  });
}

// Fechar modais clicando fora
document.addEventListener('click', (e) => {
  if (e.target === modal) closeModalFn();
  if (e.target === modalCalendario) modalCalendario.classList.add('hidden');
  if (e.target === modalDia) modalDia.classList.add('hidden');
});

// Fechar modais com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModalFn();
    modalCalendario.classList.add('hidden');
    modalDia.classList.add('hidden');
  }
});

// =====================================================
// FUNÇÕES DE MODAL
// =====================================================

function openModal() {
  if (editingIndex > -1) {
    const s = servicos[editingIndex];
    modalTitle.textContent = '✏️ Editar Serviço';
    empresaInput.value = s.empresa || '';
    dataInput.value = s.data || '';
    horaInput.value = s.hora || '';
    telefoneInput.value = s.telefone || '';
    duracaoInput.value = s.duracao || 1;
    categoriaInput.value = s.categoria || '';
    fidelizadoInput.checked = !!s.fidelizado;
    obsInput.value = s.obs || '';
  } else {
    modalTitle.textContent = '✨ Novo Serviço';
    form.reset();
    duracaoInput.value = 1;
    telefoneInput.value = '';
  }
  modal.classList.remove('hidden');
}

function closeModalFn() {
  modal.classList.add('hidden');
  editingIndex = -1;
  form.reset();
}

// =====================================================
// RENDERIZAÇÃO DA LISTA
// =====================================================

function renderList() {
  if (!listaEl) return;

  const filtro = (filtroCategoria && filtroCategoria.value) ? filtroCategoria.value : 'Todos';
  listaEl.innerHTML = '';

  const filtrados = servicos.filter(s => filtro === 'Todos' || s.categoria === filtro);

  if (!filtrados.length) {
    listaEl.innerHTML = `<div class="card"><p style="color: var(--text-secondary); text-align: center; margin: 0;">Nenhum serviço cadastrado. Clique em "✨ Novo Serviço" para adicionar.</p></div>`;
    return;
  }

  filtrados.sort((a, b) => {
    if (a.data === b.data) return (a.hora || '').localeCompare(b.hora || '');
    return (a.data || '').localeCompare(b.data || '');
  });

  filtrados.forEach((s, index) => {
    const realIndex = servicos.findIndex(x => x.id === s.id);
    const card = document.createElement('div');
    card.className = 'card';

    const fim = calcularFimServico(s.data, s.duracao);
    const fidelizadoBadge = s.fidelizado ? '<span class="badge">⭐ Fidelizado</span>' : '';
    const whatsappBtn = s.telefone ? `<button class="small-btn whatsapp" onclick="enviarWhatsApp('${s.telefone}', '${s.empresa}', '${formatDateDisplay(s.data)}', '${s.hora || ''}')">📱 WhatsApp</button>` : '';

    card.innerHTML = `
      <div class="title">${s.empresa || '—'}</div>
      <div class="meta">${s.categoria || '—'} • ${formatDateDisplay(s.data)} ${s.hora ? '• ' + s.hora : ''}</div>
      <div class="info">
        <strong>Início:</strong> ${formatDateDisplay(s.data)} | 
        <strong>Fim previsto:</strong> ${formatDateDisplay(fim)} | 
        <strong>Duração:</strong> ${s.duracao} dia(s)
      </div>
      ${s.obs ? `<div class="obs">${s.obs}</div>` : ''}
      ${fidelizadoBadge}
      <div class="actions">
        ${whatsappBtn}
        <button class="small-btn edit" onclick="editarServico(${realIndex})">✏️ Editar</button>
        <button class="small-btn del" onclick="excluirServico(${realIndex})">🗑️ Excluir</button>
      </div>
    `;

    listaEl.appendChild(card);
  });
}

function editarServico(index) {
  editingIndex = index;
  openModal();
}

async function excluirServico(index) {
  const s = servicos[index];
  if (!confirm(`Deseja realmente excluir o serviço de ${s.empresa}?`)) return;
  
  try {
    const { error } = await supabaseClient
      .from('agendamentos')
      .delete()
      .eq('id', s.id);

    if (error) {
      alert('❌ Erro ao excluir agendamento: ' + error.message);
    } else {
      await carregarAgendamentos();
      renderList();
      renderCalendar();
    }
  } catch (error) {
    alert('❌ Erro: ' + error.message);
  }
}

// =====================================================
// FUNÇÕES UTILITÁRIAS
// =====================================================

function formatDateDisplay(isoDate) {
  if (!isoDate) return '—';
  const p = isoDate.split('-');
  if (p.length !== 3) return isoDate;
  return `${p[2]}/${p[1]}/${p[0]}`;
}

function formatDateISO(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function calcularFimServico(dataInicial, duracao) {
  if (!dataInicial) return '';
  const dt = new Date(dataInicial);
  dt.setDate(dt.getDate() + Number(duracao) - 1);
  return dt.toISOString().slice(0, 10);
}

// =====================================================
// ENVIAR WHATSAPP
// =====================================================

function enviarWhatsApp(telefone, empresa, data, hora) {
  const telefoneLimpo = telefone.replace(/\D/g, '');
  let telefoneFormatado = telefoneLimpo;
  if (!telefoneLimpo.startsWith('55')) {
    telefoneFormatado = '55' + telefoneLimpo;
  }
  
  const mensagem = `Olá! 👋\n\nEste é um lembrete do agendamento de serviço:\n\n📋 *Serviço:* ${empresa}\n📅 *Data:* ${data}\n${hora ? `⏰ *Hora:* ${hora}\n` : ''}\nAguardamos sua confirmação!\n\nAtenciosamente,\nMamute Cristalizações`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsApp = `https://wa.me/${telefoneFormatado}?text=${mensagemCodificada}`;
  
  window.open(linkWhatsApp, '_blank');
}

// =====================================================
// CALENDÁRIO
// =====================================================

function renderCalendar() {
  if (!calendarGrid || !calTitulo) return;

  calendarGrid.innerHTML = '';

  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  calTitulo.textContent = `${meses[currentMonth]} ${currentYear}`;

  const primeiroDia = new Date(currentYear, currentMonth, 1).getDay();
  const totalDias = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < primeiroDia; i++) {
    const e = document.createElement('div');
    e.className = 'day empty';
    calendarGrid.appendChild(e);
  }

  for (let d = 1; d <= totalDias; d++) {
    const el = document.createElement('div');
    el.className = 'day';

    const spanDate = document.createElement('div');
    spanDate.className = 'date-num';
    spanDate.textContent = d;
    el.appendChild(spanDate);

    const dataStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

    const servNoDia = [];

    servicos.forEach(s => {
      if (!s.data) return;
      const start = new Date(s.data);
      const dur = Number(s.duracao) || 1;

      for (let k = 0; k < dur; k++) {
        const dd = new Date(start);
        dd.setDate(dd.getDate() + k);
        if (formatDateISO(dd) === dataStr) {
          servNoDia.push(s);
          break;
        }
      }
    });

    if (servNoDia.length === 1) {
      const marker = document.createElement('div');
      marker.className = 'marker';
      el.appendChild(marker);
    } else if (servNoDia.length > 1) {
      const multi = document.createElement('div');
      multi.className = 'marker multi';
      const qtd = Math.min(servNoDia.length, 3);
      for (let i = 0; i < qtd; i++) {
        const p = document.createElement('span');
        multi.appendChild(p);
      }
      el.appendChild(multi);
    }

    servicos.forEach(s => {
      const fim = calcularFimServico(s.data, s.duracao);
      if (fim === dataStr) {
        const end = document.createElement('div');
        end.className = 'marker-end';
        el.appendChild(end);
      }
    });

    el.addEventListener('click', () => openDayModal(dataStr));

    calendarGrid.appendChild(el);
  }
}

// =====================================================
// MODAL DO DIA
// =====================================================

function openDayModal(dataISO) {
  diaTitulo.textContent = `📌 Serviços em ${formatDateDisplay(dataISO)}`;
  listaDoDia.innerHTML = '';

  const encontrados = [];

  servicos.forEach(s => {
    const start = new Date(s.data);
    const dur = Number(s.duracao) || 1;
    for (let k = 0; k < dur; k++) {
      const dd = new Date(start);
      dd.setDate(dd.getDate() + k);
      if (formatDateISO(dd) === dataISO) {
        encontrados.push(s);
        break;
      }
    }
  });

  if (!encontrados.length) {
    listaDoDia.innerHTML = `<p style="color: var(--text-secondary); text-align: center;">Nenhum serviço nesse dia.</p>`;
  }

  encontrados.forEach(s => {
    const realIndex = servicos.findIndex(x => x.id === s.id);
    const item = document.createElement('div');
    item.className = 'lista-dia-item';

    const fim = calcularFimServico(s.data, s.duracao);
    const fidelizadoMark = s.fidelizado ? ' ⭐ (Fidelizado)' : '';
    const whatsappBtn = s.telefone ? `<button class="small-btn whatsapp" onclick="enviarWhatsApp('${s.telefone}', '${s.empresa}', '${formatDateDisplay(s.data)}', '${s.hora || ''}')">📱 WhatsApp</button>` : '';

    item.innerHTML = `
      <div>${s.empresa}${fidelizadoMark}</div>
      <div class="small-meta">
        <strong>${s.categoria}</strong> • Início: ${formatDateDisplay(s.data)} • Fim: ${formatDateDisplay(fim)} • ${s.hora || 'Horário não definido'}
      </div>
      ${s.obs ? `<div style="margin-top: 6px; color: var(--text-secondary);">${s.obs}</div>` : ''}
      <div style="margin-top: 8px; display: flex; gap: 8px; justify-content: flex-end;">
        ${whatsappBtn}
        <button class="small-btn edit-day" onclick="editarServico(${realIndex})">✏️ Editar</button>
        <button class="small-btn del-day" onclick="excluirServico(${realIndex})">🗑️ Excluir</button>
      </div>
    `;

    listaDoDia.appendChild(item);
  });

  modalDia.classList.remove('hidden');
}

// =====================================================
// EXPORTAR DADOS
// =====================================================

function exportarDados() {
  if (servicos.length === 0) {
    alert('Nenhum serviço para exportar.');
    return;
  }

  // Gerar HTML visual
  let html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backup - Mamute Cristalizações</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #C41E3A; padding-bottom: 20px; }
    .header h1 { color: #C41E3A; font-size: 28px; margin-bottom: 5px; }
    .header p { color: #666; font-size: 14px; }
    .data-backup { text-align: center; color: #999; font-size: 12px; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th { background: #C41E3A; color: white; padding: 12px; text-align: left; font-weight: 600; }
    td { padding: 12px; border-bottom: 1px solid #eee; }
    tr:hover { background: #f9f9f9; }
    .fidelizado { background: #fff3cd; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; color: #856404; }
    .total { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #C41E3A; color: #666; }
    @media print { body { background: white; } .container { box-shadow: none; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🐘 Mamute Cristalizações</h1>
      <p>Backup de Agendamentos</p>
    </div>
    <div class="data-backup">Gerado em: ${new Date().toLocaleString('pt-BR')}</div>
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Categoria</th>
          <th>Data Início</th>
          <th>Data Fim</th>
          <th>Hora</th>
          <th>Duração</th>
          <th>Status</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>
`;

  servicos.forEach(s => {
    const fim = calcularFimServico(s.data, s.duracao);
    const fidelizado = s.fidelizado ? '<span class="fidelizado">⭐ Fidelizado</span>' : '—';
    const obs = s.obs || '—';
    
    html += `
        <tr>
          <td><strong>${s.empresa || '—'}</strong></td>
          <td>${s.categoria || '—'}</td>
          <td>${formatDateDisplay(s.data)}</td>
          <td>${formatDateDisplay(fim)}</td>
          <td>${s.hora || '—'}</td>
          <td>${s.duracao} dia(s)</td>
          <td>${fidelizado}</td>
          <td>${obs}</td>
        </tr>
`;
  });

  html += `
      </tbody>
    </table>
    <div class="total">
      <strong>Total de Agendamentos: ${servicos.length}</strong>
    </div>
  </div>
</body>
</html>
`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  const dataAtual = new Date().toISOString().split('T')[0];
  link.setAttribute('href', url);
  link.setAttribute('download', `mamute-agendamentos-${dataAtual}.html`);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =====================================================
// NOTIFICAÇÕES
// =====================================================

function showSaveNotification() {
  const notification = document.createElement('div');
  notification.textContent = '✓ Salvo com sucesso!';
  notification.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    color: white;
    padding: 14px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 8px 24px rgba(46, 204, 113, 0.3);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

console.log('✨ Mamute Cristalizações - Sistema de Agendamentos com Supabase carregado!');
