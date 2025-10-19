function formatearTiempo(ms) {
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const mil = Math.floor(ms % 1000);
  return `${d}d ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(mil).padStart(3,'0')}`;
}

function fechaActual() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

function actualizarContadores() {
  document.querySelectorAll('.contador').forEach(c => {
    if (c.dataset.running === "true") {
      const start = parseInt(c.dataset.start);
      const diff = Date.now() - start + parseInt(c.dataset.accum || 0);
      c.textContent = formatearTiempo(diff);
    }
  });
}
setInterval(actualizarContadores, 50);

function actualizarRecord(c, total) {
  const rec = parseInt(c.dataset.record) || 0;
  if (total > rec) {
    c.dataset.record = total;
    const card = c.closest(".card");
    card.querySelector(".valor-record").textContent = formatearTiempo(total);
    card.querySelector(".fecha-record").textContent = `(${fechaActual()})`;
  }
}

document.querySelectorAll(".iniciar").forEach(b => {
  b.addEventListener("click", e => {
    const c = e.target.closest(".card").querySelector(".contador");
    c.dataset.start = Date.now();
    c.dataset.running = "true";
  });
});

document.querySelectorAll(".pausa").forEach(b => {
  b.addEventListener("click", e => {
    const c = e.target.closest(".card").querySelector(".contador");
    if (c.dataset.running === "true") {
      const total = Date.now() - parseInt(c.dataset.start) + parseInt(c.dataset.accum || 0);
      c.dataset.accum = total;
      c.dataset.running = "false";
      actualizarRecord(c, total);
    }
  });
});

document.querySelectorAll(".resetear").forEach(b => {
  b.addEventListener("click", e => {
    const c = e.target.closest(".card").querySelector(".contador");
    const total = parseInt(c.dataset.accum || 0);
    actualizarRecord(c, total);
    c.dataset.accum = 0;
    c.dataset.running = "false";
    c.textContent = "0d 00:00:00.000";
  });
});

/* Flechas del carrusel */
document.querySelectorAll('.carousel-wrap').forEach(wrap => {
  const carousel = wrap.querySelector('.carousel');
  wrap.querySelector('.prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  wrap.querySelector('.next').addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
