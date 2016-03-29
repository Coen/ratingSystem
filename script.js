//commentaar
var clicks = Math.ceil(9 * Math.random());
var totalScore = clicks * Math.random() * 5;
var output1 = document.getElementById('clicks');
var output2 = document.getElementById('stars');
var deSterren = document.querySelectorAll('.stars');

function kleurSter(sterNummer, procent) {
  var naam = 's' + sterNummer;
  procent = Math.min(procent, 100);
  document.getElementById(naam).style.width = procent + '%';

}

function kleurDeSterren(stars) {
  for (var i=1; i<6; i++) {
    kleurSter(i, stars * 100);
    stars--;
  }

}

function exc() {
  output1.innerHTML = clicks;
  output2.innerHTML = ((10 * totalScore / clicks) / 10).toFixed(1);
  kleurDeSterren(Math.ceil(10 * totalScore / clicks) / 10);
}

exc();

function verwerkKlik() {
  clicks ++;
  var number = this.getAttribute('data-role');
  totalScore += parseInt(number);
  exc();
}

for (var i=0; i<deSterren.length; i++) {
  deSterren[i].addEventListener('click', verwerkKlik);
}
