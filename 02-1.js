document.getElementById('cislo').addEventListener('change',abs)

document.getElementById('cislo').addEventListener('keydown', 
  function (e){
    if (e.which == 13){
      e.preventDefault()
    }
    abs()
})

function abs(){
  let temp = document.getElementById('cislo').value *1;
  if(temp<0){
    temp = -temp;
  }

  document.getElementById('vystup').innerHTML = temp
}

abs()

//////////////////////////
//Kvadratická fce
/////////////////////////

/*
document.getElementById('kvClen').addEventListener('change',abs)

document.getElementById('kvClen').addEventListener('keydown', 
  function (e){
    if (e.which == 13){
      e.preventDefault()
    }
  main()
})document.getElementById('kvClen').addEventListener('change',abs)

document.getElementById('cislo').addEventListener('keydown', 
  function (e){
    if (e.which == 13){
      e.preventDefault()
    }
    main()
})document.getElementById('cislo').addEventListener('change',abs)

document.getElementById('cislo').addEventListener('keydown', 
  function (e){
    if (e.which == 13){
      e.preventDefault()
    }
    main()
})
*/
//Pomocné funkce
////////////////////////

function loadValues(){
  kv = document.getElementById("x").value *1;
  lin = document.getElementById('linClen').value *1;
  ab = document.getElementById('absClen').value *1;
  console.log(kv,lin,abs)
}

function diskrim (a, b, c){
  let D = b**2 - 4*a*c
  return(D)
}

//Hlavní funkce
////////////////////////
function main(){
  loadValues(); //načte hodnoty
  const diskriminant = diskrim(kv, lin, ab);
  if(diskriminant>0){
    console.log((-lin + diskriminant**0.5)/(2*kv))
    if (round(diskriminant,1)===diskriminant){
      document.getElementById("vysledek").innerHTML = "x<sub>1</sub> = " + (-lin + diskriminant**0.5)/(2*kv) + "   x<sub>2</sub> = " + (-lin - diskriminant**0.5)/(2*kv)
    }
    else{
      document.getElementById("vysledek").innerHTML = "\( x_1 = \frac{-" + lin + "+ \sqrt{" + diskriminant +"}}{"+ 2*a +"}\)"  +  "   \( x_1 = \frac{-" + lin + "- \sqrt{" + diskriminant +"}}{"+ 2*a +"}\)";
      //zápis x v latexu x_1=\frac{-b + \sqrt{D}}{2a}
    }
  }
  if(diskriminant === 0){
    let x = -lin/2*kv;
    console.log(round(x,4));
    if(round(x)===x){
      document.getElementById("vysledek").innerHTML = "x = " + x;
    }
    else{

      document.getElementById("vysledek").innerHTML = "\(x = \frac{" + -lin + "}{" + 2*kv + "}\)";
    }
  }
  if(diskriminant < 0){
    console.log("nemá řešení");

    document.getElementById("vysledek").innerHTML = " rce nemá reálné řešení";
  }
}

let kv;
let lin;
let ab;

//Běžící program
///////////////////////
main()

