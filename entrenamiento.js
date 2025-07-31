// Base de datos de entrenamientos por combinación
const planesEntrenamiento = {
  "MTB-Enduro-sobrepeso-endomorfo": [
    "Día 1: Cardio en bici 30 min + movilidad de cadera",
    "Día 2: Técnica de descenso en curva + fuerza tren inferior",
    "Día 3: Descanso activo (caminar o yoga)",
    "Día 4: Circuito en cerro 45 min ritmo bajo",
    "Día 5: Tren superior con peso corporal + core",
    "Día 6: Bajadas técnicas controladas + visualización mental",
    "Día 7: Salida larga en cerro ritmo constante"
  ],

  // Puedes seguir agregando más combinaciones aquí
  // Ejemplo:
  // "gimnasio-estética-normal-mesomorfo": [ ... ],
  // "natación-mariposa-bajo-ectomorfo": [ ... ]
};

// Obtener datos guardados
const deporte = localStorage.getItem("deporte");
const disciplina = localStorage.getItem("disciplina");
const imc = localStorage.getItem("imc");
const cuerpo = localStorage.getItem("tipoCuerpo");

// Armar la clave de búsqueda
const clave = `${deporte}-${disciplina}-${imc}-${cuerpo}`;

// Seleccionar el contenedor
const contenedor = document.getElementById("entrenamiento");

// Verificar si existe plan
if (planesEntrenamiento[clave]) {
  const plan = planesEntrenamiento[clave];
  plan.forEach((dia, index) => {
    const div = document.createElement("div");
    div.className = "dia";
    div.innerHTML = `<h3>Día ${index + 1}</h3><p>${dia}</p>`;
    contenedor.appendChild(div);
  });
} else {
  contenedor.innerHTML = `
    <p>No hay un plan de entrenamiento aún para tu combinación:</p>
    <p><strong>${deporte} → ${disciplina} → ${imc} → ${cuerpo}</strong></p>
    <p>Por favor, vuelve pronto. Estamos trabajando en ello.</p>
  `;
}
