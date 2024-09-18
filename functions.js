document.getElementById('dice').addEventListener('click', function() {
    // Arvotaan luku väliltä 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Määritellään kuva arvotun luvun perusteella
    var imagePath = 'img/' + randomNumber + '.png';

    // kuva img-elementille
    document.getElementById('diceImage').src = imagePath;
});
