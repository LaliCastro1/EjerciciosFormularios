function validateName(name) {
    const validNames = ['MasterCard', 'Visa', 'American Express'];
    return validNames.includes(name);
}

function validateCardNumber(number, name) {
    const cardPatterns = {
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'American Express': /^3[47][0-9]{13}$/
    };
    return cardPatterns[name] ? cardPatterns[name].test(number) : false;
}

function validateExpiryDate(date) {
    return /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(date);
}

function validateCVV(cvv) {
    return /^[0-9]{3}$/.test(cvv);
}

function validateForm() {
    const name = document.getElementById('card-name').value;
    const number = document.getElementById('card-number').value;
    const expiry = document.getElementById('card-expiry').value;
    const cvv = document.getElementById('card-cvv').value;

    const isNameValid = validateName(name);
    const isNumberValid = validateCardNumber(number, name);
    const isExpiryValid = validateExpiryDate(expiry);
    const isCVVValid = validateCVV(cvv);

    document.getElementById('card-name').className = isNameValid ? 'valid' : 'invalid';
    document.getElementById('card-number').className = isNumberValid ? 'valid' : 'invalid';
    document.getElementById('card-expiry').className = isExpiryValid ? 'valid' : 'invalid';
    document.getElementById('card-cvv').className = isCVVValid ? 'valid' : 'invalid';

    document.getElementById('submit-btn').disabled = !(isNameValid && isNumberValid && isExpiryValid && isCVVValid);
}

const formContainer = document.getElementById('form-container');

const formHTML = `
    <form autocomplete="off">
        <label for="card-name">Nombre de la Tarjeta:</label>
        <input type="text" id="card-name" placeholder="MasterCard, Visa, American Express" autocomplete="off">

        <label for="card-number">Número de la Tarjeta:</label>
        <input type="text" id="card-number" placeholder="Número de tarjeta" autocomplete="off">

        <label for="card-expiry">Fecha de Vencimiento (MM/AA):</label>
        <input type="text" id="card-expiry" placeholder="MM/AA" autocomplete="off">

        <label for="card-cvv">CVV:</label>
        <input type="text" id="card-cvv" placeholder="CVV" autocomplete="off">

        <button id="submit-btn" disabled>Enviar</button>
    </form>
`;

formContainer.innerHTML = formHTML;

document.getElementById('card-name').addEventListener('input', validateForm);
document.getElementById('card-number').addEventListener('input', validateForm);
document.getElementById('card-expiry').addEventListener('input', validateForm);
document.getElementById('card-cvv').addEventListener('input', validateForm);
