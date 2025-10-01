// Lista de nombres comunes para la masacre de Labubus
const nombresLabubu = [
    "Jack",
    "Agustín",
    "Brian",
    "Sofía",
    "Juan",
    "María",
    "Lucas",
    "Martina",
    "David",
    "Laura",
    "Carlos",
    "Ana",
    "Pedro",
    "Elena",
    "Andrés",
    "Valeria",
    "Jorge",
    "Camila",
    "Miguel",
    "Isabel",
    "Javier",
    "Nicole",
    "Pablo",
    "Julia",
    "Ricardo",
    "Gabriel",
    "Diego",
    "Victoria",
    "Fernando",
    "Renata",
    "Guillermo",
    "Paula",
    "Santiago",
    "Emma",
    "Manuel",
    "Zoe",
    "Héctor",
    "Sara",
    "Roberto",
    "Benjamín",
    "Chris",
    "Alice",
    "Sam",
    "Michelle",
    "Kevin",
    "Esther",
    "Oliver",
    "Fiona",
    "Liam",
    "Chloe",
    "Ethan",
    "Grace",
    "Noah",
    "Mia",
    "Alexander",
    "Emily",
    "Daniel",
    "Harper",
    "Joseph",
    "Avery"
];

// Lista de Lugares al azar
const lugaresAzar = [
    "una base secreta en Groenlandia",
    "un puesto de tacos en Tijuana",
    "un templo abandonado en Nepal",
    "un cajero automático en Tokio",
    "un autobús en Ciudad del Cabo",
    "una góndola en Venecia",
    "la Luna (probablemente)",
    "un jacuzzi en Las Vegas",
    "una cabina telefónica en Londres",
    "la casa de tu vecino",
    "un iceberg en la Antártida",
    "el vestuario del Manchester United",
    "la oficina de correos de tu pueblo"
];

let clicks = 0;
// Obtener la referencia al elemento de audio (asegúrate que 'index.html' tenga el ID 'botonAudio')
const audioElement = document.getElementById('botonAudio');

// Esta función se ejecuta cada vez que alguien hace clic en el botón
// NOTA: Esta función DEBE llamarse 'matarLabubu' porque así está en tu HTML.
function matarLabubu() {
    // 1. Reproducir el sonido
    // Reinicia el audio para que pueda sonar aunque se haga clic rápido
    audioElement.currentTime = 0; 
    audioElement.play(); 
    
    // 2. Aumentar el contador de clics
    clicks++;
    document.getElementById('contador').textContent = clicks;

    // 3. Elegir un nombre y un lugar al azar
    const indiceNombre = Math.floor(Math.random() * nombresLabubu.length);
    const nombreVictima = nombresLabubu[indiceNombre];
    
    const indiceLugar = Math.floor(Math.random() * lugaresAzar.length);
    const lugarMuerte = lugaresAzar[indiceLugar];

    // 4. Crear el mensaje completo usando el nombre y lugar al azar
    const mensaje = `Enviamos un sicario a matar a ${nombreVictima} (en ${lugarMuerte}). ¡Gracias por confiar en nosotros!`;

    // 5. Mostrar el cartelito emergente (alert)
    alert(mensaje);
}