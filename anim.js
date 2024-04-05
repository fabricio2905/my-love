// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Moon, a hole of light", time: 7 },
  { text: "Through the big top tent up high", time: 9 },
  { text: "Here before and after me", time: 14 },
  { text: "Shinin' down on me", time: 18 },
  { text: "Moon, tell me if I could", time: 24 },
  { text: "Send up my heart to you?", time: 27 },
  { text: "So, when I die, which I must do", time: 31 },
  { text: "Could it shine down here with you?", time: 34 },
  { text: "'Cause my love is mine, all mine", time: 39 },
  { text: "I love mine, mine, mine", time: 44 },
  { text: "Nothing in the world belongs to me", time: 48 },
  { text: "But my love mine, all mine, all mine", time: 53 },
  { text: "", time: 61 },
  { text: "Você é LINDA", time: 67 },
  { text: "", time: 70 },
  { text: "My baby, here on earth", time: 76 },
  { text: "Showed me what my heart was worth", time: 80 },
  { text: "So, when it comes to be my turn", time: 84 },
  { text: "Could you shine it down here for her?", time: 87 },
  { text: "'Cause my love is mine, all mine", time: 90 },
  { text: "I love mine, mine, mine", time: 97 },
  { text: "Nothing in the world belongs to me", time: 100 },
  { text: "But my love mine, all mine", time: 104 },
  { text: "Nothing in the world is mine for free", time: 110 },
  { text: "But my love mine, all mine, all mine", time: 112 },
  { text: "Eu te amo, MEU AMOR", time: 123 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);