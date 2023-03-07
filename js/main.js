const button = document.getElementById('button');
const result = document.getElementById('result')
button.addEventListener( 'click' , function(){
    for (i = 0; i < 5; i++){
       const numeroRandomico = generateRandomNumber(1, 100);
       
       result.innerHTML += ' ' + numeroRandomico;
    }
    
})



function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    return number;
}


  




