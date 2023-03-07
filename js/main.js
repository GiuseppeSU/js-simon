const button = document.getElementById('button');
const result = document.getElementById('result')
button.addEventListener('click', function () {
    let numberRandom = [];
    let numberUser = [];
    for (let i = 0; i < 5; i++) {
        const numeroRandomico = generateRandomNumber(1, 100);
        numberRandom.push(numeroRandomico);

        result.innerHTML += ' ' + numeroRandomico;
    }
    setTimeout(function () {
        result.innerHTML = '';

        setTimeout(function () {

            for (let i = 0; i < 5; i++) {
                let utente = parseInt(prompt('inserisci il primo numero'));
                numberUser.push(utente);
            }

            document.getElementById('win').innerHTML = 'Hai vinto';

            for (let i = 0; i < 5; i++) {
                numberRandom.includes(numberUser[i]);

                if (!numberRandom.includes(numberUser[i])) {
                    document.getElementById('win').innerHTML = 'Hai perso';
                }
            }
        }, 3000)
    }, 30000)
})



function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    return number;
}











