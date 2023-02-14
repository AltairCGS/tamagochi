const bars = document.querySelectorAll(".progreso-bar");
const comerBoton = document.querySelector("#comer");
const dormirBoton = document.querySelector("#dormir");

function reduceProgreso() {
  // Reduce la barra de hambre
  let hambreProgreso = document.querySelector(".hambre-progreso");
  hambreProgreso.style.width = `${hambreProgreso.offsetWidth - 1}px`;

  // Reduce la barra de sueño
  let sueñoProgreso = document.querySelector(".sueño-progreso");
  sueñoProgreso.style.width = `${sueñoProgreso.offsetWidth - 1}px`;

  // Reduce la barra de felicidad
  let felicidadProgreso = document.querySelector(".felicidad-progreso");
  felicidadProgreso.style.width = `${felicidadProgreso.offsetWidth - 1}px`;

  // Comprueba si la barra de felicidad ha alcanzado el 50%
  if (
    felicidadProgreso.offsetWidth <=
    felicidadProgreso.parentElement.offsetWidth / 2
  ) {
    // Cambia la imagen de fondo
    let tamagochiImg = document.querySelector(".tamagochi-img");
    tamagochiImg.style.backgroundImage =
      "url('https://media.giphy.com/media/XDYQLYA0W7REk/giphy.gif')";
  }
  // Comprueba si la barra esta al 25%
  if (
    felicidadProgreso.offsetWidth <=
    felicidadProgreso.parentElement.offsetWidth / 4
  ) {
    let tamagochiImg = document.querySelector(".tamagochi-img");
    tamagochiImg.style.backgroundImage =
      "url('https://i.pinimg.com/originals/6d/a8/63/6da8637a6e3ceb440b1e87a308b583a5.gif')";
  }
  // Comprueba si la barra de felicidad ha alcanzado el 0%
  if (felicidadProgreso.offsetWidth <= 0) {
    // Muestra una alerta, limpia el intervalo y reinicia las barras
    alert("Chopper se escapó porque no lo cuidaste!");
    clearInterval(reduceProgreso);
    reiniciarBarras();
  }
}

// botones

//comer
comerBoton.addEventListener("click", function () {
  let hambreProgreso = document.querySelector(".hambre-progreso");
  let felicidadProgreso = document.querySelector(".felicidad-progreso"); //felicidad
  hambreProgreso.style.width = `${hambreProgreso.offsetWidth + 30}px`;
  felicidadProgreso.style.width = `${felicidadProgreso.offsetWidth + 20}px`; //felicidad
});
//dormir
dormirBoton.addEventListener("click", function () {
  let sueñoProgreso = document.querySelector(".sueño-progreso");
  let felicidadProgreso = document.querySelector(".felicidad-progreso"); //felicidad
  sueñoProgreso.style.width = `${sueñoProgreso.offsetWidth + 20}px`;
  felicidadProgreso.style.width = `${felicidadProgreso.offsetWidth + 10}px`; //felicidad
});

//reinicar barras y gif
function reiniciarBarras() {
  let hambreProgreso = document.querySelector(".hambre-progreso");
  hambreProgreso.style.width = `100%`;

  let sueñoProgreso = document.querySelector(".sueño-progreso");
  sueñoProgreso.style.width = `100%`;

  let felicidadProgreso = document.querySelector(".felicidad-progreso");
  felicidadProgreso.style.width = `100%`;

  let tamagochiImg = document.querySelector(".tamagochi-img");
  tamagochiImg.style.backgroundImage =
    "url('https://i.pinimg.com/originals/ed/67/0a/ed670a8b6b14dce2f0f580a3409aa46d.gif')";
}
setInterval(reduceProgreso, 150);
