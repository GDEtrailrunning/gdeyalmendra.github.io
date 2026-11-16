document.addEventListener("DOMContentLoaded", function () {
  actualizarDiasRestantes();
  setInterval(actualizarDiasRestantes, 24*60*60*1000); // Actualizar diario
  //Datos para el gráfico de líneas
const dataLine1 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'], // Etiquetas de los días
  datasets: [{
    label: 'Km recorridos en Semana 44',
    data: [12, 13, 11, 14, 29], // Datos de los km recorridos en cada día
    borderColor: 'rgba(75, 192, 192, 1)',
    fill: true,
    tension: 0.1
  }]
};

const dataLine2 = {
  labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5'], // Etiquetas de los días
  datasets: [{
    label: 'Total Km recorridos en Semana 45',
    data: [10, 9, 8, 7, 17],// Datos de los km recorridos en cada día
    borderColor: 'rgba(45, 78, 199, 1)',
    fill: true,
    tension: 0.1
  }]
};

// Configuración del gráfico de líneas
const configLine = { 
  type: 'line',
  data: dataLine1,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Seleccione los contextos de los <canvas> y cree los gráficos
const myChartLine1 = new Chart(document.getElementById('myChart-line-1'),
 configLine);
const myChartLine2 = new Chart(document.getElementById('myChart-line-2'), {
  type: 'line',
  data: dataLine2,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
let expandedContainer = null;

document.querySelectorAll("video").forEach((video) => {
  const container = video.closest(".image-container");
  if (!container) return;

  const closeExpandedView = () => {
    container.classList.remove("video-expanded");
    document.body.classList.remove("video-expanded-open");
    expandedContainer = null;
  };

  video.addEventListener("play", () => {
    if (expandedContainer && expandedContainer !== container) {
      expandedContainer.classList.remove("video-expanded");
    }

    expandedContainer = container;
    container.classList.add("video-expanded");
    document.body.classList.add("video-expanded-open");
  });

  video.addEventListener("pause", closeExpandedView);
  video.addEventListener("ended", closeExpandedView);
});

function actualizarDiasRestantes() {
  // Fecha objetivo fija
  const objetivoDate = new Date('2026-12-06');
  const currentDate = new Date();
  const timeDiff = objetivoDate - currentDate;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `<span class="cuenta-regresiva-titulo">CUENTA REGRESIVA</span><br><span class="cuenta-regresiva-numero">${days}d : ${hours}h : ${minutes}m : ${seconds}s</span>`;
}

});
