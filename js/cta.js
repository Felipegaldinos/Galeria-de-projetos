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
