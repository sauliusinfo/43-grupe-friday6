console.clear();
console.log(`
4. Parašykite programą, kuri suskaičiuotų, kiek duotas skaičius num turi lyginių ir nelyginių skaitmenų. 
@param {number} num             @example: 63258 => "3 skaičiai lyginiai, 2 nelyginiai" 
`);

const num=0;
let numMas=[];

function progz(num) {

    numMas = num.toString().split('').map(Number);
    // console.log(numMas);

    let skLyginis=0, skNelyginis=0;
    for (let i=0; i<numMas.length; i++) {
        // console.log(numMas[i]);
        if (numMas[i] % 2 == 0) {
            skLyginis++;
        } else {
            skNelyginis++;
        }

    }
    const text = skLyginis + ' skaiciai lyginai, ' + skNelyginis + ' nelyginiai';

    return text;
}

console.log(progz(63258));
