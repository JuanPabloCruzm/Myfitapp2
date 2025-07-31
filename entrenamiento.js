document.addEventListener("DOMContentLoaded", () => {
  const deporte = localStorage.getItem("deporte");
  const disciplina = localStorage.getItem("disciplina");
  const tipoCuerpo = localStorage.getItem("tipoCuerpo");
  const imc = localStorage.getItem("imc");

  const clave = `${deporte}_${disciplina}_${tipoCuerpo}_${imc}`.toLowerCase();

  const entrenamientos = {
    // 🔻 Ejemplo de estructura (tú puedes completarla con más combinaciones)
    "mtb_xc_endomorfo_normal": [
      "Día 1: Rodaje suave 45 min + movilidad",
      "Día 2: Técnica en subidas + core",
      "Día 3: Fondo 90 min",
      "Día 4: Descanso activo",
      "Día 5: Series en cuestas",
      "Día 6: Fondo con intervalos",
      "Día 7: Yoga + recuperación"
    ],

    "gimnasio_estetica_mesomorfo_sobrepeso": [
      "Día 1: Full body + 20 min cardio",
      "Día 2: Tren inferior + movilidad",
      "Día 3: Tren superior + cardio HIIT",
      "Día 4: Descanso o caminata",
      "Día 5: Circuito funcional",
      "Día 6: Pesas + técnica",
      "Día 7: Estiramiento + respiración"
    ],

    // Agrega aquí todas las combinaciones...
  };

  const plan = entrenamientos[clave];

  const contenedor = document.getElementById("planEntrenamiento");
  const titulo = document.getElementById("tituloPlan");
  titulo.textContent = `${deporte} - ${disciplina} (${tipoCuerpo}, ${imc})`;

  if (plan) {
    plan.forEach((dia) => {
      const div = document.createElement("div");
      div.className = "dia";
      div.textContent = dia;
      contenedor.appendChild(div);
    });
  } else {
    contenedor.innerHTML = "<p>No hay plan disponible para esta combinación aún.</p>";
  }
});
