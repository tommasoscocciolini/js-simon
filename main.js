$(document).ready(function () {
  var numeriRandom = [];
  var numerimemorizzati = [];
  var arraystampa = [];

  // var numeri = $("#numeri");

 //genero numeri
  for (var i = 0; i < 5; i++) {
    numeriRandom[i] = getRandomInt(10, 100)
  }
  console.log(numeriRandom);
  $("#numeri").text(numeriRandom) //stampo numeri

  setTimeout(function () { //ritardo apparizione cerchio orologio
    $('#count').parent().css("display", "flex");
  },1000);

  var count = 1; //creo contatore secondi
  var id = setInterval(function () {
    $('#count').text(count);
    count++;
    if (count==31) {
      count=0;
    }
  },1000);

  //timer 30sec di num visibili
  var timer = setTimeout(function () {
    $("#numeri").hide();
    $("#message").text("...attendi e memorizza...");
  }, 30000) //3sec per comodità/prova


  // timer 30sec senza numeri +
  // inserisco numeri che ricordo
  setTimeout(function () {
    $("#message").text(" ");
    for (var i = 0; i < 5; i++) {
      numerimemorizzati[i] = parseInt(prompt("Inserisci i numeri che ricordi: "))
    }

    var resultArray = controlloNumeri(numerimemorizzati, numeriRandom, arraystampa)
    console.log(resultArray);
    $("#myNums").text("Numeri Validi: " +resultArray+" Punteggio: "+ resultArray.length +"/5")
    $("#message").text("RISULTATO");
    $('#count').parent().hide()
  }, 60000)
});



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

function controlloNumeri(ar1, ar2, ar3){
  for (var i = 0; i < ar1.length; i++) {
    if (ar2.includes(ar1[i])) {
      ar3.push(ar1[i]);
    }
  }
  return ar3;
}
