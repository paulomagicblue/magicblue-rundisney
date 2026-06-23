/**
 * componentes.js — Magic Blue runDisney
 * Componentes compartilhados entre index, springtime-surprise e marathon-weekend.
 *
 * Para adicionar um depoimento: adicione um objeto ao array DEPOIMENTOS abaixo.
 * Para editar os cards "Por que correr": edite o array DIFERENCIAIS abaixo.
 * Salve e suba no GitHub — todas as páginas atualizam automaticamente.
 */

// =============================================
// DEPOIMENTOS
// =============================================
const DEPOIMENTOS = [
  {
    foto: 'imgs/depoimento-renata.webp',
    frase: '"Correr na Disney é algo simplesmente fantástico."',
    texto: 'Ela não é corredora. Foi pela Disney. E voltou transformada. Renata participou do 5K e do 10K pela primeira vez, sem pace, sem treino de corrida. "Se você ama Disney, vá participar — correndo ou caminhando. É uma experiência única, emocionante e inesquecível."',
    nome: 'Renata Sato',
    evento: 'runDisney 5K e 10K · Walt Disney World',
    instagram: 'https://www.instagram.com/p/DYhmnUxFjSm/'
  },
  // --- ADICIONAR NOVOS DEPOIMENTOS AQUI ---
  // {
  //   foto: 'imgs/depoimento-nome.webp',
  //   frase: '"Texto de destaque do depoimento."',
  //   texto: 'Texto completo do depoimento.',
  //   nome: 'Nome Sobrenome',
  //   evento: 'runDisney 5K · Walt Disney World',
  //   instagram: 'https://www.instagram.com/p/...'
  // },
];

// =============================================
// DIFERENCIAIS — Por que correr com a Magic Blue
// =============================================
const DIFERENCIAIS = [
  {
    num: '82 min',
    titulo: '<strong>Se esgotar não tem problema.</strong>',
    texto: 'As inscrições para as corridas de Janeiro de 2027 esgotaram em 82 minutos depois da abertura das vendas. Quem estava na lista com a Magic Blue já tinha a sua inscrição garantida.'
  },
  {
    num: '+15 anos',
    titulo: '<strong>Desde 2010 a Magic Blue trabalha com o destino Disney.</strong>',
    texto: 'Somos especialistas e conhecemos cada detalhe do evento.'
  },
  {
    num: 'Concierge',
    titulo: 'Temos especialistas em corridas Disney dedicadas para te auxiliar desde a sua inscrição e em cada etapa da sua preparação.',
    texto: ''
  }
];

// =============================================
// CSS INJETADO PELO COMPONENTE
// Fonte de verdade para estilização das seções gerenciadas por este arquivo.
// Sobrescreve qualquer regra conflitante do CSS da página.
// =============================================
const COMPONENTES_CSS = `
  /* --- Por que correr com a Magic Blue --- */
  .porquemagicblue { background: #FFFFFF; }

  .diferenciais-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 48px;
  }

  .diferencial-card {
    background: #F7F8FA;
    border: 1px solid #E2E5EA;
    border-radius: 12px;
    padding: 32px 28px;
    text-align: center;
  }

  .diferencial-num {
    font-family: 'Inter', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #f6633c;
    line-height: 1;
    margin-bottom: 8px;
    letter-spacing: -.01em;
    display: block;
  }

  .diferencial-title {
    font-size: 17px;
    font-weight: 400;
    color: #1C1C1E;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .diferencial-title strong {
    font-weight: 700;
  }

  .diferencial-text {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.6;
  }

  /* --- Depoimentos --- */
  .depoimentos { background: #1A3A6B; }

  .dep-carousel { width: 100%; }
  .dep-slides { position: relative; }
  .dep-slide { display: none; }
  .dep-slide.active { display: block; }

  .dep-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 40px;
  }

  .dep-arrow {
    width: 40px; height: 40px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.25);
    background: transparent;
    color: rgba(255,255,255,0.6);
    font-size: 16px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background .2s, border-color .2s, color .2s;
    flex-shrink: 0;
  }
  .dep-arrow:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.5);
    color: #fff;
  }

  .dep-dots { display: flex; gap: 8px; align-items: center; }

  .dep-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
    cursor: pointer;
    transition: background .2s, transform .2s;
    border: none; padding: 0;
  }
  .dep-dot.active { background: #F5A623; transform: scale(1.2); }

  /* --- Eyebrow centralizado nas seções do componente --- */
  .porquemagicblue .section-eyebrow,
  .depoimentos .section-eyebrow {
    text-align: center;
    display: block;
  }

  .porquemagicblue .section-title,
  .depoimentos .section-title {
    text-align: center;
  }

  @media (max-width: 768px) {
    .diferenciais-grid { grid-template-columns: 1fr; gap: 16px; }
    .diferencial-card { padding: 24px 20px; }
  }
`;

// =============================================
// INJETAR CSS NO <head>
// =============================================
function injectCSS() {
  if (document.getElementById('componentes-css')) return;
  const style = document.createElement('style');
  style.id = 'componentes-css';
  style.textContent = COMPONENTES_CSS;
  document.head.appendChild(style);
}

// =============================================
// RENDERIZADORES
// =============================================

/**
 * Renderiza a seção "Por que correr com a Magic Blue"
 * @param {string} ctaHref  - destino do botão (ex: '#corridas' ou '#formulario')
 * @param {string} ctaText  - texto do botão
 */
function renderPorqueCorrer(ctaHref, ctaText) {
  injectCSS();
  const el = document.getElementById('porque-correr');
  if (!el) return;

  const cards = DIFERENCIAIS.map(d => `
    <div class="diferencial-card">
      <span class="diferencial-num">${d.num}</span>
      <div class="diferencial-title">${d.titulo}</div>
      ${d.texto ? `<p class="diferencial-text">${d.texto}</p>` : ''}
    </div>
  `).join('');

  el.outerHTML = `
    <section class="porquemagicblue">
      <div class="section-inner">
        <span class="section-eyebrow">Magia em dobro</span>
        <h2 class="section-title">Por que correr<br>com a Magic Blue?</h2>
        <div class="diferenciais-grid">
          ${cards}
        </div>
        <div class="cta-mid">
          <a href="${ctaHref}" class="btn-primary">${ctaText}</a>
        </div>
      </div>
    </section>
  `;
}

/**
 * Renderiza a seção de Depoimentos com carrossel
 * @param {string} ctaHref  - destino do botão
 * @param {string} ctaText  - texto do botão
 */
function renderDepoimentos(ctaHref, ctaText) {
  injectCSS();
  const el = document.getElementById('depoimentos');
  if (!el) return;

  const slides = DEPOIMENTOS.map((d, i) => `
    <div class="dep-slide${i === 0 ? ' active' : ''}">
      <div style="max-width:680px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:24px;">
        <div style="border-radius:16px;overflow:hidden;aspect-ratio:4/5;background:#1a2a4a;width:200px;flex-shrink:0;">
          <img src="${d.foto}" alt="${d.nome}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,4vw,44px);color:#fff;line-height:1.05;letter-spacing:.01em;">
          ${d.frase}
        </div>
        <div style="font-size:15px;color:rgba(255,255,255,0.72);line-height:1.7;">
          ${d.texto}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:16px;width:100%;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;">
          <div>
            <div style="font-size:14px;font-weight:700;color:#fff;">${d.nome}</div>
            <div style="font-size:12px;color:rgba(255,255,255,0.45);">${d.evento}</div>
          </div>
          ${d.instagram ? `
          <a href="${d.instagram}" target="_blank"
            style="font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,0.35);text-decoration:none;"
            onmouseover="this.style.color='#F5A623'" onmouseout="this.style.color='rgba(255,255,255,0.35)'">
            Ver no Instagram
          </a>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  el.outerHTML = `
    <section class="depoimentos">
      <div class="section-inner">
        <span class="section-eyebrow">Quem já correu com a Magic Blue</span>
        <h2 class="section-title white">O que dizem<br>nossos corredores.</h2>
        <div class="dep-carousel" id="depCarousel">
          <div class="dep-slides">
            ${slides}
          </div>
          <div class="dep-nav">
            <button class="dep-arrow" onclick="depMove(-1)" aria-label="Anterior">&#8592;</button>
            <div class="dep-dots" id="depDots"></div>
            <button class="dep-arrow" onclick="depMove(1)" aria-label="Próximo">&#8594;</button>
          </div>
        </div>
        <div class="cta-mid" style="margin-top:48px;">
          <a href="${ctaHref}" class="btn-primary">${ctaText}</a>
        </div>
      </div>
    </section>
  `;

  initDepCarousel();
}

/**
 * Inicializa o carrossel após renderização
 */
function initDepCarousel() {
  var slides = document.querySelectorAll('.dep-slide');
  var dotsContainer = document.getElementById('depDots');
  var current = 0;
  if (!slides.length || !dotsContainer) return;

  slides.forEach(function(_, i) {
    var dot = document.createElement('button');
    dot.className = 'dep-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Depoimento ' + (i + 1));
    dot.onclick = function() { goTo(i); };
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsContainer.querySelectorAll('.dep-dot')[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.querySelectorAll('.dep-dot')[current].classList.add('active');
  }

  window.depMove = function(dir) { goTo(current + dir); };
}
