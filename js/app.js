var calculadora=  {

  init: function () {
    self= this
    this.asignarEvento()
    this.asignarEventos()

  },
  escribe: function(num) {
    if (e==0) {
      pantalla.textContent = num;
      e=1
    }else if(pantalla.textContent[0]!="-" && pantalla.textContent.length<8) {
      pantalla.textContent = pantalla.textContent + num;
    }else if(pantalla.textContent[0]=="-" && pantalla.textContent.length<9) {
      pantalla.textContent = pantalla.textContent + num;
    }
    lista=[]
    for (var i = 0; i < pantalla.textContent.length; i++) {
      lista.push(pantalla.textContent[i])

    }
  },
  operacion:function(){


    if (d==0 ) {
      oldNum=pantalla.textContent
    }
    self.resultado()
    pantalla.textContent=""
  },

  resultado: function(){
    d=1;
    if (c==1) {
      theNum=pantalla.textContent
    }
    switch (b) {
      case 1:
      if (oldNum!=0 && theNum!="") {
        resulta= parseFloat(oldNum) + parseFloat(theNum);
        oldNum=resulta
        resulta=0
        theNum =""
      }
      c=1
      break;
      case 2:
      if (oldNum!=0 && theNum!="") {
        resulta= parseFloat(oldNum) - parseFloat(theNum);
        oldNum=resulta
        resulta=0
        theNum =""
      }
      c=1
      break;
      case 3:
      if (oldNum!=0 && theNum!="") {
        resulta= parseFloat(oldNum) * parseFloat(theNum);
        oldNum=resulta
        resulta=0
        theNum =""
      }
      c=1
      break;
      case 4:
      if (oldNum!=0 && theNum!="" ) {
        resulta= parseFloat(oldNum) / parseFloat(theNum);
        oldNum=resulta
        resulta=0
        theNum =""
      }
      c=1
      break;
      default:

    }
  },


  asignarEvento: function() {
    var funcion = this.eventoOTecla;
    lista=[];
    pantalla = document.getElementById('display')
    document.getElementById('0').onmousedown= funcion;
    document.getElementById('1').onmousedown= funcion;
    document.getElementById('2').onmousedown= funcion;
    document.getElementById('3').onmousedown= funcion;
    document.getElementById('4').onmousedown= funcion;
    document.getElementById('5').onmousedown= funcion;
    document.getElementById('6').onmousedown= funcion;
    document.getElementById('7').onmousedown= funcion;
    document.getElementById('8').onmousedown= funcion;
    document.getElementById('9').onmousedown= funcion;
    document.getElementById('dividido').onmousedown= funcion;
    document.getElementById('mas').onmousedown= funcion;
    document.getElementById('menos').onmousedown= funcion;
    document.getElementById('por').onmousedown= funcion;
    document.getElementById('punto').onmousedown= funcion;
    document.getElementById('on').onmousedown= funcion;
    document.getElementById('igual').onmousedown= funcion;
    document.getElementById('sign').onmousedown= funcion;
    document.getElementById('raiz').onmousedown= funcion;
    oldNum=0
    theNum=""
    resulta=0
    c=0
    d=0
    e=0

  },
  asignarEventos: function() {
    var funcion = this.eventoTecla;
    document.getElementById('0').onmouseup= funcion;
    document.getElementById('1').onmouseup= funcion;
    document.getElementById('2').onmouseup= funcion;
    document.getElementById('3').onmouseup= funcion;
    document.getElementById('4').onmouseup= funcion;
    document.getElementById('5').onmouseup= funcion;
    document.getElementById('6').onmouseup= funcion;
    document.getElementById('7').onmouseup= funcion;
    document.getElementById('8').onmouseup= funcion;
    document.getElementById('9').onmouseup= funcion;
    document.getElementById('dividido').onmouseup= funcion;
    document.getElementById('mas').onmouseup= funcion;
    document.getElementById('menos').onmouseup= funcion;
    document.getElementById('por').onmouseup= funcion;
    document.getElementById('punto').onmouseup= funcion;
    document.getElementById('on').onmouseup= funcion;
    document.getElementById('igual').onmouseup= funcion;
    document.getElementById('sign').onmouseup= funcion;
    document.getElementById('raiz').onmouseup= funcion;

  },


  eventoOTecla: function (event) {
    var seleccion = event.currentTarget.id;

    switch (seleccion) {

      case "0":
      document.getElementById('0').style.padding="1px";
      a = 0;
      if (pantalla.textContent!="-" && pantalla.textContent!=0) {
        self.escribe(a)
      }else if (pantalla.textContent[1]=="0") {
        self.escribe(a)
      }
      if(pantalla.textContent==""){
        self.escribe(a)
      }

      break;

      case "1":
      document.getElementById('1').style.padding="1px";
      a = 1;
      self.escribe(a)
      break;

      case "2":
      document.getElementById('2').style.padding="1px";
      a = 2;
      self.escribe(a)
      break;

      case "3":
      document.getElementById('3').style.padding="1px";
      a = 3;
      self.escribe(a)
      break;

      case "4":
      document.getElementById('4').style.padding="1px";
      a = 4;
      self.escribe(a)
      break;

      case "5":
      document.getElementById('5').style.padding="1px";
      a = 5;
      self.escribe(a)
      break;

      case "6":
      document.getElementById('6').style.padding="1px";
      a = 6;
      self.escribe(a)
      break;

      case "7":
      document.getElementById('7').style.padding="1px";
      a = 7;
      self.escribe(a)
      break;

      case "8":
      document.getElementById('8').style.padding="1px";
      a = 8;
      self.escribe(a)
      break;

      case "9":
      document.getElementById('9').style.padding="1px";
      a = 9;
      self.escribe(a)
      break;

      case "mas":
      document.getElementById('mas').style.padding="1px";
      b =1;
      self.operacion();
      break;

      case "menos":
      document.getElementById('menos').style.padding="1px";
      b =2;
      self.operacion();
      break;

      case "por":
      document.getElementById('por').style.padding="1px";
      b =3;
      self.operacion();
      break;

      case "dividido":
      document.getElementById('dividido').style.padding="1px";
      b =4;
      self.operacion();
      break;

      case "punto":
      document.getElementById('punto').style.padding="1px";
      var h;
      for (var i = 0; i < pantalla.textContent.length; i++) {
        pantalla.textContent[i]
        if (pantalla.textContent[i]==".") {
          h=1;
          break;
        }
      }
      if (h!=1) {
        a = ".";
        self.escribe(a)
      }
      break;

      case "igual":
      var x=0;
      document.getElementById('igual').style.padding="1px";
      self.resultado()
      pantalla.textContent=oldNum
      if (pantalla.textContent.length>7) {
        lista=[]
        if (pantalla.textContent[0]!="-") {
          x=8;
        }else {
          x=9;
        }
        for (var i = 0; i < pantalla.textContent.length; i++) {
          if (i<x) {
            lista.push(pantalla.textContent[i])
          }else {
            break;
          }
        }
        pantalla.textContent=lista.join("")

      }


      if(oldNum==0){
        e=0;
      }
      c=0;
      break;

      case "on":
      document.getElementById('on').style.padding="1px";
      pantalla.innerHTML = '0';
      oldNum=0;
      theNum="";
      resulta=0;
      c=0;
      d=0;
      e=0;
      lista=[]
      break;

      case "sign":
      document.getElementById('sign').style.padding="1px";
      if (pantalla.textContent[0]==0) {
        a = "";
        self.escribe(a)
        e=1;
      }
      if (lista[0]!="-" && e==1) {
        lista.unshift("-")
        pantalla.textContent=lista.join("")
      }else {
        lista[0]=""
        pantalla.textContent=lista.join("")
      }
      break;

      case "raiz":
      document.getElementById('raiz').style.padding="1px";
      break;

      default:

    }

  },
  eventoTecla: function (event) {
    var seleccion = event.currentTarget.id;
    switch (seleccion) {

      case "0":
      document.getElementById('0').style.padding="0px";
      break;

      case "1":
      document.getElementById('1').style.padding="0px";
      break;

      case "2":
      document.getElementById('2').style.padding="0px";
      break;

      case "3":
      document.getElementById('3').style.padding="0px";

      break;

      case "4":
      document.getElementById('4').style.padding="0px";
      break;

      case "5":
      document.getElementById('5').style.padding="0px";
      break;

      case "6":
      document.getElementById('6').style.padding="0px";
      break;

      case "7":
      document.getElementById('7').style.padding="0px";
      break;

      case "8":
      document.getElementById('8').style.padding="0px";
      break;

      case "9":
      document.getElementById('9').style.padding="0px";
      break;

      case "mas":
      document.getElementById('mas').style.padding="0px";
      break;

      case "menos":
      document.getElementById('menos').style.padding="0px";
      break;

      case "por":
      document.getElementById('por').style.padding="0px";
      break;

      case "dividido":
      document.getElementById('dividido').style.padding="0px";
      break;

      case "punto":
      document.getElementById('punto').style.padding="0px";
      break;

      case "igual":
      document.getElementById('igual').style.padding="0px";
      break;

      case "on":
      document.getElementById('on').style.padding="0px";
      break;

      case "sign":
      document.getElementById('sign').style.padding="0px";
      break;

      case "raiz":
      document.getElementById('raiz').style.padding="0px";
      break;

      default:

    }

  }

}


calculadora.init()
