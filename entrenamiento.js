function generarPlanesEntrenamiento() {
  const deportes = {
    mtb: ['xc', 'all_mountain', 'dh', 'enduro', 'descenso_urbano'],
    ruta: ['contra_reloj', 'competencia', 'resistencia'],
    pista: ['velocidad', 'omnium', 'persecucion'],
    triatlon: [''],
    natacion: ['aguas_abiertas', 'pecho', 'espalda', 'mariposa', 'libre'],
    esqui_nieve: ['alpino_freestyle', 'fondo'],
    snowboard: ['freestyle', 'slalom', 'halfpipe'],
    esqui_acuatico: ['slalom', 'saltos', 'trucos'],
    atletismo: ['pista', 'salto', 'lanzamiento', 'fondo', 'velocidad'],
    boxeo: ['amateur', 'profesional', 'entrenamiento'],
    escalada: ['boulder', 'deportiva', 'velocidad'],
    buceo: ['profundo', 'tecnico', 'recreativo'],
    rugby: ['back', 'forward'],
    basquet: ['base', 'escolta', 'alero', 'ala_pivot', 'pivot'],
    gym: ['fuerza', 'resistencia', 'estetica', 'rehabilitacion', 'hipertrofia', 'movilidad'],
    artes_marciales: ['jiu_jitsu', 'muay_thai_boxeo', 'lucha', 'mma']
  };

  const imc = ['bajo_peso', 'normal', 'sobrepeso'];
  const tiposCuerpo = ['endomorfo', 'mesomorfo', 'ectomorfo'];
  const edades = ['18-30', '31-50', '51+'];
  const niveles = ['principiante', 'intermedio', 'avanzado'];
  const horas = ['2-5', '5-8', '10-15', '15+'];

  function textoDia(dia, deporte, disciplina, imc, tipoCuerpo, edad, nivel, horas) {
    return `Día ${dia}: Entrenamiento para ${disciplina.replace(/_/g, ' ') || deporte.toUpperCase()}, IMC: ${imc.replace('_',' ')}, Tipo de cuerpo: ${tipoCuerpo}, Edad: ${edad}, Nivel: ${nivel}, Tiempo semanal: ${horas} horas. Ejercicio variado para mejorar resistencia, fuerza y técnica.`;
  }

  const planes = {};

  for (const deporte in deportes) {
    planes[deporte] = {};
    for (const disciplina of deportes[deporte]) {
      planes[deporte][disciplina] = {};
      for (const i of imc) {
        planes[deporte][disciplina][i] = {};
        for (const tipo of tiposCuerpo) {
          planes[deporte][disciplina][i][tipo] = {};
          for (const edad of edades) {
            planes[deporte][disciplina][i][tipo][edad] = {};
            for (const nivel of niveles) {
              planes[deporte][disciplina][i][tipo][edad][nivel] = {};
              for (const h of horas) {
                const dias = [];
                for (let d=1; d<=7; d++) {
                  dias.push(textoDia(d, deporte, disciplina, i, tipo, edad, nivel, h));
                }
                planes[deporte][disciplina][i][tipo][edad][nivel][h] = dias;
              }
            }
          }
        }
      }
    }
  }

  return planes;
}

const planesEntrenamiento = generarPlanesEntrenamiento();

function mostrarPlan(deporte, disciplina, imc, tipoCuerpo, edad, nivel, horas) {
  const plan = planesEntrenamiento[deporte]?.[disciplina]?.[imc]?.[tipoCuerpo]?.[edad]?.[nivel]?.[horas];
  const contenedor = document.getElementById('plan-container');
  if (!plan) {
    contenedor.innerHTML = 'No hay plan para esa combinación.';
    return;
  }
  contenedor.innerHTML = '';
  plan.forEach((dia) => {
    const p = document.createElement('p');
    p.textContent = dia;
    contenedor.appendChild(p);
  });
}
