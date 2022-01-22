// /*Ukoly - vstup a podmínky:
/* 1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru:
 a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
 b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.
*/


let jmeno = promt('Zadej své jméno')
let vek = Number(promt('Zadej své jméno'))


if(vek>=18) {
console.log('Vaše jsmeno je '+ jmeno + ' je vám '+ věk +' a tak máte právo řídit auto')
}else{
  let rozdíl = 18 - vek 
  console.log('Vaše jsmeno je '+ jmeno + ' je vám '+ věk +' a tak máte právo řídit auto')
}

/*

2)  Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Největší číslo je A: 37".​
} */

let a = Number(promt('Zadej číslo A:')) 
let b = Number(promt('Zadej číslo B:')) ]
let c = Number(promt('Zadej číslo C:')) 

if(a>b && a > c) {
console.log('Největší číslo je A: '+ a)
}else if (b > a && b > c) {
  console.log('Největší číslo je B: '+ B)
}else if (c > b && c > a) {
  console.log('Největší číslo je C: '+ c)
}else{
  console.log('Některé z čísel jsou stejné')
}

