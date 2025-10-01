// Lista de nombres comunes para la masacre de Labubus
const nombresLabubu = [
    "Jack", "Agustín", "Brian", "Sofía", "Juan", "María", "Lucas", "Martina", 
    "David", "Laura", "Carlos", "Ana", "Pedro", "Elena", "Andrés", "Valeria", 
    "Jorge", "Camila", "Miguel", "Isabel", "Javier", "Nicole", "Pablo", "Julia", 
    "Ricardo", "Gabriel", "Diego", "Victoria", "Fernando", "Renata", "Guillermo", 
    "Paula", "Santiago", "Emma", "Manuel", "Zoe", "Héctor", "Sara", "Roberto", 
    "Benjamín", "Chris", "Alice", "Sam", "Michelle", "Kevin", "Esther", "Oliver", 
    "Fiona", "Liam", "Chloe", "Ethan", "Grace", "Noah", "Mia", "Alexander", 
    "Emily", "Daniel", "Harper", "Joseph", "Avery"
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
// Obtener la referencia al elemento de audio del botón de disparo
const audioElement = document.getElementById('botonAudio');

// FUNCIÓN PRINCIPAL: MATAR UN LABUBU
function matarLabubu() {
    // 1. Reproducir el sonido de disparo
    // Reinicia el audio para que pueda sonar aunque se haga clic rápido
    audioElement.currentTime = 0; 
    
    // El .play() debería funcionar porque el clic del usuario lo inicia.
    audioElement.play().catch(error => {
        console.error("No se pudo iniciar el sonido de disparo:", error);
    }); 
    
    // 2. Aumentar el contador de clics
    clicks++;
    document.getElementById('contador').textContent = clicks;

    // 3. Elegir un nombre y un lugar al azar
    const indiceNombre = Math.floor(Math.random() * nombresLabubu.length);
    const nombreVictima = nombresLabubu[indiceNombre];
    
    const indiceLugar = Math.floor(Math.random() * lugaresAzar.length);
    const lugarMuerte = lugaresAzar[indiceLugar];

    // 4. Crear el mensaje y mostrar el cartelito emergente
    const mensaje = `Enviamos un sicario a matar a ${nombreVictima} (en ${lugarMuerte}). ¡Gracias por confiar en nosotros!`;
    alert(mensaje);
}


// --- FUNCIÓN PARA INICIAR LA MÚSICA DE FONDO ---
// Esta función se ejecuta al hacer clic en el botón "ESCUCHÁ ESTO!"
function iniciarMusica() {
    const musica = document.getElementById('musicaFondo');
    const boton = document.getElementById('toggleMusic');
    
    // Intenta reproducir el audio. Esto solo es posible si el usuario ha hecho clic.
    musica.play().then(() => {
        // Si la reproducción fue exitosa, eliminamos el botón para que no estorbe.
        if (boton) {
            // El botón se elimina de la interfaz
            boton.remove(); 
        }
    }).catch(error => {
        // Si hay un error, lo mostramos en la consola, pero la música no sonará.
        console.error("Error al iniciar la música de fondo:", error);
    });
}