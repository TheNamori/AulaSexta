function  exibeData(){
  document.getElementById('demo').innerHTML = Date();
}

function exibir(part1){
  if(part1 == false){
    document.getElementById('minhaDiv').style.display='none';
    document.getElementById('btnEsconde').style.display='none';
    document.getElementById('btnMostra').style.display='inline';
  }
  else{
    document.getElementById('minhaDiv').style.display='inline';
    document.getElementById('btnEsconde').style.display='inline';
    document.getElementById('btnMostra').style.display='none';
  }
}
