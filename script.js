function validarEmail (e) {

    const emailInput = document.getElementById('email').value.trim();

    if(emailInput === "" || !emailInput.includes('@')){

        alert('preencha o campo corretamente');
        console.log('Incorreto');
     
    } else {
    alert('Enviado');
    console.log('Enviado');

    }
}
