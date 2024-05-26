function validarFormulario() {
    // Obtener los valores de los campos de entrada
       var nombre = document.getElementById("nombre").value;
       var email = document.getElementById("email").value;




   // Verificar si los campos están vacíos
        if (nombre === "") {
           mostrarMensaje("Por favor, ingresa tu nombre.");
             return false;
        } else if (email === "") {
              mostrarMensaje("Por favor, ingresa tu correo electrónico.");
             return false;
         }




   // Si todos los campos son válidos, mostrar un mensaje de éxito
   mostrarMensaje("Gracias por enviar el formulario, " + nombre + "!");
    return false; // Evitar que el formulario se envíe de forma predeterminada
   }




function mostrarMensaje(mensaje) {
// Mostrar el mensaje en el elemento con el id "mensaje"
document.getElementById("mensaje").innerHTML = mensaje;




// Después de 3 segundos, borrar el mensaje
setTimeout(function() {
   document.getElementById("mensaje").innerHTML = "";
}, 3000); // 3000 milisegundos = 3 segundos
}




document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c3c226c9eac62670595178844431b9cc';
    const city = 'Tijuana';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;


            weatherDiv.innerHTML = `
                <h2>${city}</h2>
                <p>Temperatura: ${temp} °C</p>
                <p>Descripción: ${description}</p>
                <p>Humedad: ${humidity}%</p>
                <p>Velocidad del viento: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('weather').innerHTML = '<p>No se pudo cargar el clima.</p>';
        });
});
