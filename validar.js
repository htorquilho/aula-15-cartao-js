function validarEnvio() {
    event.preventDefault(); //evita o envio do formulário
    
    if (numero.value !== 19) {
        numero.classList.add('is-invalid');
    }

    if (titular.value === '') {
        titular.classList.add('is-invalid');
    }

    if(mes.value === '') {
        mes.classList.add('is-invalid');
    }

    if(ano.value === '') {
        ano.classList.add('is-invalid');
    }

    if (cvv.value !== 3) {
        cvv.classList.add('is-invalid');
    }

    if (cpf.value === '') {
        cpf.classList.add('is-invalid');
    }
}

function alterarNumero() {
    numero.classList.remove('is-invalid');

    if (numero.value.length === 19) {
        numero.classList.add('is-valid');
    }

    card_numero.innerHTML = numero.value
}

function alterarCVV() {
    cvv.classList.remove('is-invalid');

    let ultimoDigito = cvv.value.substr(-1); //pegando a última letra/número

    if (isNaN(ultimoDigito)) {
        let quantidade = cvv.value.length;
        let resultado = cvv.value.substr(0, quantidade - 1);

        cvv.value = resultado;
    }

    if (cvv.value.length === 3) {
        cvv.classList.add('is-valid');
    }
}

function alterarTitular() {
    titular.classList.remove('is-invalid');
}

function alterarMes() {
    mes.classList.remove('is-invalid');
}

function alterarAno() {
    ano.classList.remove('is-invalid');
}

function alterarCpf() {
    cpf.classList.remove('is-invalid');

    let ultimoDigito = cpf.value.substr(-1);

    if (isNaN(ultimoDigito)) {
        let quantidade = cpf.value.length;
        let resultado = cpf.substr(0, quantidade - 1);

        cpf.value = resultado;
    }

    if (cpf.value.length === 11) {
        cpf.classList.add('is-valid');
    }
}
