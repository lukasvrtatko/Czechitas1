/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()
*/



function VypisMatematickeOperace[x,y]{
  let soucet = x + y
  let rozdíl = Math.abs(x - y)
  let násobek = x * y
  let podíl= x / y

console.log('Soucet: ' + soucet +
' Rozdíl: ' + rozdíl+
' Násobek: ' + násobek +
' Podíl: ' + podíl
)
}

function spoctiObsahObdelniku(x,y){
  let vyseldek = x * y 

  return vysledek
}

let x = Number(promt('Zadej X:'))
let y = Number(promt('Zadej Y:'))

vypisMatematickeOperace(x,y)
//A:
console.log('Obsah obdelniku je:' + spoctiObsahObdelniku(x,y))
//B:
let matOperce =spoctiO,bsahObdelniku(x,y) + spoctiObsahObdelniku(18,15)
console.log(VypisMatematickeOperace)

let obsahObdelniku = spoctiObsahObdelniku(x,y) // ->


/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.
*/


function jePrvocislo(x) {
  if(x % 2 === 1) {
    return('Je liché - ')
  }else{
    return('Je sudé - ')
  }
}

let cislo = jePrvocislo(Number(promt('Zadej cislo:')))
console.log(cislo)