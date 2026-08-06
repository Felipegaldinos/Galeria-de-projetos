document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(
    "#service-options .option-card",
  );
  const urgencyCards = document.querySelectorAll(
    "#urgency-options .option-card",
  );
  const whatsappBtn = document.getElementById("whatsapp-submit-btn");

  const userPhone = "5584991829988"; // Seu número de WhatsApp

  function updateWhatsAppUrl() {
    const selectedService =
      document.querySelector("#service-options .option-card.active")?.dataset
        .value || "Projeto Web";
    const selectedUrgency =
      document.querySelector("#urgency-options .option-card.active")?.dataset
        .value || "Normal";

    const text = `Olá Felipe! Vi seu portfólio e gostaria de um orçamento:%0A%0A📌 *Serviço:* ${encodeURIComponent(selectedService)}%0A⚡ *Urgência:* ${encodeURIComponent(selectedUrgency)}`;

    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/${userPhone}?text=${text}`;
    }
  }

  // Interatividade nos Cards de Serviço
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      serviceCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      updateWhatsAppUrl();
    });
  });

  // Interatividade nos Cards de Urgência
  urgencyCards.forEach((card) => {
    card.addEventListener("click", () => {
      urgencyCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      updateWhatsAppUrl();
    });
  });

  // Atualiza no carregamento da página
  updateWhatsAppUrl();
});

document.addEventListener('DOMContentLoaded', () => {
  const terminalCard = document.querySelector('.terminal-card');

  if (terminalCard) {
    terminalCard.addEventListener('mousemove', (e) => {
      const rect = terminalCard.getBoundingClientRect();
      
      // Posição do cursor relativa ao card (em porcentagem)
      const cursorX = ((e.clientX - rect.left) / rect.width) * 100;
      const cursorY = ((e.clientY - rect.top) / rect.height) * 100;

      // Efeito Imã Repelente: O brilho azul foge do cursor (calcula a posição invertida)
      const repelX = 100 - cursorX;
      const repelY = 100 - cursorY;

      // Atualiza as variáveis CSS em tempo real
      terminalCard.style.setProperty('--mouse-x', `${repelX}%`);
      terminalCard.style.setProperty('--mouse-y', `${repelY}%`);
    });

    // Quando o mouse sai do card, o brilho volta suavemente ao centro
    terminalCard.addEventListener('mouseleave', () => {
      terminalCard.style.setProperty('--mouse-x', '50%');
      terminalCard.style.setProperty('--mouse-y', '50%');
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('space-card');
  const canvas = document.getElementById('stars-canvas');
  if (!card || !canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  // Posição do mouse
  const mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = card.offsetWidth;
    height = canvas.height = card.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Criar Campo de Estrelas
  const numStars = 100;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    stars.push({
      x: x,
      y: y,
      baseX: x,
      baseY: y,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      vx: 0,
      vy: 0
    });
  }

  // Detecta o movimento do mouse sobre o card
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  card.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Loop de Animação
  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      // 1. Animação de piscar suave e movimento autônomo
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;

      // 2. Cálculo da distância até o mouse (Efeito Repulsão Magnética)
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 100; // Raio de alcance do efeito de repulsão

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist;
        const angle = Math.atan2(dy, dx);
        
        // Empurra a estrela na direção oposta ao mouse
        star.vx -= Math.cos(angle) * force * 4;
        star.vy -= Math.sin(angle) * force * 4;
      }

      // 3. Força elástica para retornar à posição de origem
      star.vx += (star.baseX - star.x) * 0.04;
      star.vy += (star.baseY - star.y) * 0.04;

      // Fricção (desaceleração suave)
      star.vx *= 0.85;
      star.vy *= 0.85;

      star.x += star.vx;
      star.y += star.vy;

      // 4. Desenhar a Estrela com Brilho Cyan/Azul
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(186, 230, 253, ${Math.abs(star.alpha)})`;
      ctx.shadowBlur = star.size > 1.2 ? 8 : 0;
      ctx.shadowColor = '#38bdf8';
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
});