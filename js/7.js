console.clear();
console.log(`
7. Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. 
Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. 
Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. 
Viso monetų N skaičius“.
`);

const monetos=[5, 2, 1]; // monetu nominalai
const skMonetos=[0, 0, 0] // pradinis monetų sk.
let n=0; // suma kueria reikia iskeisti
let N=0; // monetu kiekis;

function keitykla(n) {
    
    for (let i=0; i<monetos.length; i++) {
        while (n >= monetos[i]) {
            n -= monetos[i];
            skMonetos[i]++;
        }
    }
    
    let N = "Norint gauti " + n + " sumą litais, mums reikės ";
    for (let i = 0; i < monetos.length; i++) {
        if (skMonetos[i] > 0) {
            N += skMonetos[i] + " monetų po " + monetos[i] + " litą/-us, ";
        }
    }
    N += "viso monetų " + skMonetos.reduce((a, b) => a + b);
    
    return N;
}

console.log(keitykla(100));
