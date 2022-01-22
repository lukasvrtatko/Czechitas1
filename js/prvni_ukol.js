/*
ZADANI:
Úkol - proměnné a operátory
1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".
*/

let jmeno = 'Lukáš';
let vek = 22;
let vaha = 91; // v kg
let vyska = 1.9; // v m

let bmi = vaha / (vyska * vyska);

console.log(bmi);

console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    'let, vážím ' +
    vaha +
    'kg,  měřím ' +
    vyska +
    'm a moje BMI je ' +
    bmi
);
let bmi = Math.round (25.207756232686982)
