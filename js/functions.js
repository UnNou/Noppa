document.addEventListener('DOMContentLoaded', function () {
    
    var diceDiv = document.getElementById('dice');

    diceDiv.addEventListener('click', function () {
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        var imgElement = diceDiv.querySelector('img');
        imgElement.src = './images/' + randomNumber + '.png';
    });
});
