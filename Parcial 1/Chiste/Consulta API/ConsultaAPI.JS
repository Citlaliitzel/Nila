document.getElementById('boton').addEventListener('click',function(){
    hacerPeticion();
});

function hacerPeticion() {
///fetch("https://api.waifu.pics/sfw/waifu")
fetch("https://api.catboys.com/img")
    .then(respuesta => respuesta.json())
    .then(datos => document.getElementById('imagen').src=datos.url)
}