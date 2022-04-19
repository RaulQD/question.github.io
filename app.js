const btnSi = document.querySelector("#btn1");
const btnNo = document.querySelector("#btn2");

btnSi.addEventListener('click',() => {
    Swal.fire({
        title: 'Esta bien!',
        text: 'Vamos a tirar!',
        icon:'success',
    })
})

btnNo.addEventListener('mouseover',() => {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btnNo.style.setProperty('top',randomY + '%');
    btnNo.style.setProperty('left',randomX + '%');
    btnNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})