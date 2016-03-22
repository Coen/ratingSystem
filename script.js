//commentaar
function kleurSter(sterNummer, procent) {
  var naam = 's' + sterNummer;
  procent = Math.min(procent, 100);
  document.getElementById(naam).style.width = procent+'%';

}

kleurSter(3,50);

function kleurDeSterren(waardering) {
  for (var i = 2; i < 6; i++) {
    kleurSter(i,waardering);
    waardering --;
  }

}
