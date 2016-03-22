//commentaar
var aantalKliks = Math.ceil( 5*Math.random());
var totaalScore = aantalKliks*Math.random()*5;
var uitvoerAantal = document.getElementById('aantal');
var uitvoerWaardering = document.getElementById('waardering');
var sterrenKleur = Math.ceil(10*totaalScore/aantalKliks)/10;
var deSterren = document.querySelectorAll('geen');

function kleurSter(sterNummer, procent) {
  var naam = 's' + sterNummer;
  procent = Math.min(procent, 100);
  document.getElementById(naam).style.width = procent+'%';

}

kleurSter(3,50);

function kleurDeSterren(waardering) {
  for (var i = 2; i < 6; i++) {
    kleurSter(i,waardering*100);
    waardering --;
  }

}
function uitvoeren(){
    uitvoerAantal.innerHTML = aantalKliks;
    uitvoerWaardering.innerHTML = sterrenKleur;
    kleurDeSterren(sterrenKleur);
}
uitvoeren();

function verwerkKlik(){
  aantalKliks ++;

  var nummertje = this.getAttribute('data-role');
  totaalScore += parseInt(nummertje);
  uitvoeren();
}

for(var i=0; i<deSterren.length; i++);{
    deSterren[i].addEventListener('click', verwerkKlik);
}
