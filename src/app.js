// Importo Bootstrap y mis estilos
import "bootstrap";
import "./style.css";

// Importo imágenes (solo para que no las borre el empaquetador)
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Cuando la página está lista, genero la carta aleatoria
window.onload = () => {
  // Busco la carta y el span del número
  const card = document.querySelector('.card');
  const numberSpan = document.querySelector('.numero');

  // Quito cualquier palo anterior (por si recargo varias veces)
  card.classList.remove('spade', 'club', 'heart', 'diamond');

  // Genero número y palo aleatorio
  const palo = generateRandomSuit();
  const numero = generateRandomNumber();

  // Añado la clase del palo (spade, club, heart, diamond)
  card.classList.add(palo);

  // Escribo el número en el centro de la carta
  numberSpan.textContent = numero;
};

// Devuelve un número/figura aleatorio como string
let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
}

// Devuelve un palo aleatorio como string para la clase (CSS)
let generateRandomSuit = () => {
  let suit = ["diamond", "heart", "spade", "club"];
  let index = Math.floor(Math.random() * suit.length);
  return suit[index];
};