const you = Math.ceil(Math.random()*6);
console.log("io", you)

const bot = Math.ceil(Math.random()*6);
console.log("pc", bot)

if(you > bot){
  alert("Hai vinto tu")
  location.reload()
}else if(you === bot){
  alert("pareggio")
  location.reload()
}else{
  alert("Ha vinto il Pc")
  location.reload()
}
