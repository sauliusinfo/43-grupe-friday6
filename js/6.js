console.clear();
console.log(`
6. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, 
Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. 
Rasti geriausiai besimokantį ir blogiausiai.
`);

let pazymiai=[];

for (let i=0; i<30; i++) {
  pazymiai.push(Math.floor(Math.random() * 10) + 1);
}
console.log(pazymiai);

let geriauBesimokantys=0, blogiauBesimokantys=0;
for (let mok=0; mok<=pazymiai.length; mok++) {
    // console.log(pazymiai[mok]);
    if (pazymiai[mok] >= 7) {
        geriauBesimokantys++;
    } else {
        blogiauBesimokantys++;
    }
}

console.log(`Geriausiai besimokantys: ${geriauBesimokantys} Blogiausiai besimokantys: ${blogiauBesimokantys}`);
