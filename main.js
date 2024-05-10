const img = document.querySelector('.img')
const ligarEDesligar= document.querySelector('.ligarEDesligar')
const conserto = document.querySelector('.conserto')

function estaQuebrada() {
  return img.src.indexOf('quebrada') > -1 
 }
 
 function ligarLampada() {
 if(!estaQuebrada()){
 img.src='./img/ligada.jpg';
 }
 }
 
 
 function desligarLampada() {

   if(!estaQuebrada()){
   img.src='./img/desligada.jpg';
 }
 }
 
 
 function lampadaQuebrada() {
   img.src='./img/quebrada.jpg';
 }
 

 function  verificar() {
  if(ligarEDesligar.innerText === 'Ligar'){
    ligarLampada()
    ligarEDesligar.innerText = "Desligar"
  }else if(ligarEDesligar.innerText === 'Desligar'){
    desligarLampada()
    ligarEDesligar.innerText = "Ligar"
  } if(img.src.indexOf('quebrada') > -1){
    ligarEDesligar.innerText = "Você precisa conserta a lampada dando F5"
    ligarEDesligar.classList.add('conserto2')
  }
  
 }

 ligarEDesligar.addEventListener('click', verificar)
 img.addEventListener('mouseover', ligarLampada)
 img.addEventListener('mouseout', desligarLampada)
 img.addEventListener('dblclick', lampadaQuebrada)
 

 
/*function ligarALampada() {
  return {
    img : document.querySelector('.img'),
    ligar: document.querySelector('.ligar'),
    desligar: document.querySelector('.desligar'),
    iniciar(){

      this.ligar.addEventListener('click',()=>this.ligarLampada());
      this.desligar.addEventListener('click',()=>this.desligarLampada());
     this.img.addEventListener('mouseover', ()=>this.ligarLampada());
     this.img.addEventListener("mouseout", ()=>this.desligarLampada());
     this.img.addEventListener("dblclick", ()=>this.lampadaQuebrada())
     },
     estaQuebrada(){
      return this.img.src.indexOf('quebrada') > -1 
     },
   
    ligarLampada(){
     if(!this.estaQuebrada()){
      this.img.src='./img/ligada.jpg'
    }; 
    },

    desligarLampada(){
   if(!this.estaQuebrada()){
    this.img.src='./img/desligada.jpg'
  };
    },
    lampadaQuebrada(){
      this.img.src='./img/quebrada.jpg';
     }
  }
   
}

const ligar = ligarALampada()
ligar.iniciar()
*/





