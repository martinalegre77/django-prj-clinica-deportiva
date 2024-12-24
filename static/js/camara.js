
document.addEventListener('DOMContentLoaded', function() {

    let canvas = document.getElementById('canvasElement');

    const video = document.getElementById('videoElement');
    const habilitarButton = document.getElementById('habilitar');
    const capturarButton = document.getElementById('capturar');
    const grabarBtn = document.getElementById('submit');
    
    const form = document.getElementById('registrationForm');

    const titulo = document.getElementById('user-info');

    if (grabarBtn) {
        grabarBtn.style.display = 'none'; // Cambiar a 'block' si existe
    }

    // Ocultar el botón 'Cámara' y mostrar el video al hacer clic en 'Cámara'
    habilitarButton.addEventListener('click', function(event) {
        event.preventDefault();
        habilitarButton.style.display = 'none';
        habilitarCamara();
    });

    function habilitarCamara() {
        canvas.style.display = 'none';
        capturarButton.style.display = 'block';
        navigator.mediaDevices.getUserMedia({ audio: false,
                                                video: {
                                                    facingMode: 'user',
                                                    width: 200,
                                                    height: 200,
                                                    }})
            .then(
                (stream) => {
                    video.srcObject = stream;
                    console.log(stream);
                        setTimeout(function() {
                            capturarButton.style.display = 'inline-block';
                            }, 1000); // Espera de 1 segundo
                    }
                )
            .catch((error) => {
                console.log(error);
            });
    }

    // Capturar la foto
    capturarButton.addEventListener('click', (event)=> {
        event.preventDefault();
        takePicture();
        video.style.display = 'none';
        capturarButton.style.display = 'none';
        canvas.style.display = 'inline-block';
    })


    function takePicture() {
        titulo.style.display = 'none';
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        grabarBtn.style.display = 'block';
    }


    // Enviar el formulario
    form.addEventListener('submit', event => {
        event.preventDefault();

        // Añadir la clase de estilos y deshabilitar el botón
        grabarBtn.classList.add('boton-deshabilitado');
        setTimeout(() => {
            grabarBtn.disabled = false; // Reactivar después de 2 segundos
        }, 1000);
        
        grabarBtn.disabled = true; 

        canvas.toBlob(blob => {
            const formData = new FormData(form);
            formData.append('image', blob, 'foto.png');

            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                } else {
                    return response.json();
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                // Reactivar el botón y restaurar estilos si hay error
                grabarBtn.disabled = false;
                grabarBtn.classList.remove('boton-deshabilitado');
            });
        }, 'image/png');
    });

});