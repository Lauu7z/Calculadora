const display = document.getElementById("display");
const teclas = document.querySelectorAll(".teclas input");

const agregar = (valor) => {
  display.value += valor;
};

const borrar = () => {
  display.value = "";
};

const borrarUltimo = () => {
  display.value = display.value.slice(0, -1);
};

const calcular = () => {
  const valorPantalla = display.value;
  const resultado = eval(valorPantalla);
  display.value = resultado;
};

teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => {
    const valor = tecla.value;
    if (valor === "AC") {
      borrar();
    } else if (valor === "DE") {
      borrarUltimo();
    } else if (valor === "=") {
      calcular();
    } else {
      agregar(valor);
    }
  });
});
