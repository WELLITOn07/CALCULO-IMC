escopo();

function escopo () {
    const res = document.querySelector ('.resultado');
    res.addEventListener ('submit',resultado);
};

function resultado (evento) {
    evento.preventDefault();
    const tela_resultado = document.getElementById ('tela_resultado');
    const pesoHTML = document.getElementById ('peso');
    let peso = Number(pesoHTML.value);
    const alturaHTML = document.getElementById ('altura');
    let altura = Number(alturaHTML.value);
    let IMC = peso / (altura * 2);

    if (peso == 0 || altura == 0) {
        window.alert('Necessário adicionar os valores ou usar ponto (.) na altura, exp: 1.80')    
    } else if (IMC <= 18.5) {
        tela_resultado.innerHTML = `Seu IMC: ${IMC.toFixed(1)} </br> <span>MAGREZA</span>`
    } else if (IMC <= 24.9) {
        tela_resultado.innerHTML = `Seu IMC: ${IMC.toFixed(1)} </br> <span>NORMAL</span>`
    } else if (IMC <= 29.9) {
        tela_resultado.innerHTML = `Seu IMC: ${IMC.toFixed(1)} </br> <span>SOBREPESO</span>`
    } else if (IMC <= 39.9) {
        tela_resultado.innerHTML = `Seu IMC: ${IMC.toFixed(1)} </br> <span>OBESIDADE</span>`
    } else if (IMC >= 40 ) {
        tela_resultado.innerHTML = `Seu IMC: ${IMC.toFixed(1)} </br> <span>OBESIDADE-GRAVE</span>`
    }; 
    
    limparInput ();

    function limparInput () {
        pesoHTML.value = "";
        alturaHTML.value = "";
    };
};