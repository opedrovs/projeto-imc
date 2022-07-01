// ESCOPO GLOBAL / MUDAR

let resultado = document.querySelector('.resultado');

function verificaAltura(valor) {
    if(!isNaN(parseFloat(valor)) && isFinite(valor)) {
        return true;
    }
    resultado.classList.remove('valido');
    resultado.classList.add('invalido');
    resultado.innerHTML = '<p>Altura inválido!</p>';
    return false;
}

function verificaPeso(valor) {
    if(!isNaN(parseFloat(valor)) && isFinite(valor)) {
        return true;
    }
    resultado.classList.remove('valido');
    resultado.classList.add('invalido');
    resultado.innerHTML = '<p>Peso inválido!</p>';
    return false;
}

document.addEventListener('click', e => {
    const el = e.target;

    let altura = document.querySelector('#altura');
    let peso = document.querySelector('#peso');
    
    if(el.classList.contains('calcular')) {
        if(verificaAltura(altura.value) && verificaPeso(peso.value)) {
            altura = (Number(altura.value)).toFixed(2);
            peso = (Number(peso.value)).toFixed(2);
            let imc = (peso / (altura ** 2)).toFixed(2);
            let classif = '';
    
            if(imc < 18.5) {
                classif = 'Abaixo do peso';
            } else if (imc <= 24.9) {
                classif = 'Peso normal';
            } else if (imc <= 29.9) {
                classif = 'Obesidade grau 1';
            } else if (imc <= 39.9) {
                classif = 'Obesidade grau 2';
            } else {
                classif = 'Obesidade grau 3';
            }
    
            resultado.classList.remove('invalido');
            resultado.classList.add('valido');
            resultado.innerHTML = `<p>Com o peso <strong>${peso}</strong> Kg e altura <strong>${altura}</strong> cm, o seu IMC é de <strong>${imc}</strong>, a sua classificação é <strong>${classif}</strong>.</p>`;
        }
    }

    if(el.classList.contains('limpar')) {
        resultado.classList.remove('invalido');
        resultado.classList.remove('valido');
        altura.value = '';
        peso.value = '';
        resultado.innerHTML = '';
    }
});

