const btnSi = document.querySelector("#btn1");
const btnNo = document.querySelector("#btn2");

btnSi.addEventListener('click',() => {
    Swal.fire({
        title: 'Te presto!',
        text: 'Y no me devuelvas hermanito TE QUIERO!',
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