//variables
const btn = document.querySelector("button.btn"),
  turno = document.querySelector(".turno"),
  celdas = document.querySelectorAll(".celda"),
  puntos = document.querySelector(".puntos");
let turnoJugador = '<i class="bx bx-x bx-md"></i>';
let puntosX = 0,
  puntosO = 0;


puntos.childNodes[0].innerHTML =`Puntos <i class="bx bx-x bx-md"></i>: ${puntosO}`
puntos.childNodes[1].innerHTML =`Puntos <i class="bx bx-circle bx-md"></i>: ${puntosO}`

const combinaciones = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

turno.innerHTML = `Turno: ${turnoJugador}`;
//functions
function start() {
  document.querySelector(".tablero").classList.remove("hide");
  document.querySelector(".turno").classList.remove("hide");
  puntos.classList.remove("hide");
  setTimeout(() => {
    btn.className = "btn reload";
    btn.innerHTML = `Reiniciar <i class='bx bx-refresh bx-md'></i>`;
  }, 1200);
}
function reload() {
  celdas.forEach(
    (celda) => (
      (celda.innerHTML = ""),
      celda.classList.remove("inhabilitar"),
      celda.classList.remove("win")
    )
  );

  turno.innerHTML = `Turno: ${turnoJugador}`;
}

function juegoGanado() {
  for (let i = 0; i <= 7; i++) {
    let comb = combinaciones[i];
    if (
      celdas[comb[0]].innerHTML == "" ||
      celdas[comb[1]].innerHTML == "" ||
      celdas[comb[2]].innerHTML == ""
    ) {
      continue;
    } else if (
      celdas[comb[0]].innerHTML == '<i class="bx bx-x bx-md"></i>' &&
      celdas[comb[1]].innerHTML == '<i class="bx bx-x bx-md"></i>' &&
      celdas[comb[2]].innerHTML == '<i class="bx bx-x bx-md"></i>'
    ) {
      turno.innerHTML = `Ganador <i class="bx bx-x bx-md"></i>`;
      inhabilitar();
      cambiarColorCelda(celdas[comb[0]], celdas[comb[1]], celdas[comb[2]]);
      puntosX++
      puntos.childNodes[0].innerHTML=`Puntos <i class="bx bx-x bx-md"></i>: ${puntosX}`;
    } else if (
      celdas[comb[0]].innerHTML == '<i class="bx bx-circle bx-md"></i>' &&
      celdas[comb[1]].innerHTML == '<i class="bx bx-circle bx-md"></i>' &&
      celdas[comb[2]].innerHTML == '<i class="bx bx-circle bx-md"></i>'
    ) {
      turno.innerHTML = `Ganador <i class="bx bx-circle bx-md"></i>`;
      inhabilitar();
      cambiarColorCelda(celdas[comb[0]], celdas[comb[1]], celdas[comb[2]]);
      puntosO++
      puntos.childNodes[1].innerHTML =`Puntos <i class="bx bx-circle bx-md"></i>: ${puntosO}`;
    }
  }
}
function inhabilitar() {
  celdas.forEach((celda) => celda.classList.add("inhabilitar"));
}
function cambiarColorCelda(...params) {
  params.forEach((el) => el.classList.add("win"));
}

//listeners
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") == "btn reload") {
    reload();
  } else {
    start();
  }
});

celdas.forEach((celda) => {
  celda.addEventListener("click", (e) => {
    if (celda.innerHTML != "") return;
    celda.innerHTML = turnoJugador;
    juegoGanado();
    turnoJugador =
      turnoJugador === '<i class="bx bx-x bx-md"></i>'
        ? '<i class="bx bx-circle bx-md"></i>'
        : '<i class="bx bx-x bx-md"></i>';
    turno.innerHTML = `Turno: ${turnoJugador}`;
  });
});

//<i class="bx bx-circle bx-md"></i>
//<i class="bx bx-x bx-md"></i>
