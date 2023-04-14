console.clear();
console.log(`
2. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999. 
Armstongo skaičiaus pvz ABC = A3+ B3+ C3 (visų atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.) 
`);

const skNuo=0, skIki=0;

function armstrong(skNuo, skIki) {

    let sk=0, skArmstrongo=[];
    for (let i=skNuo; i<=skIki; i++) {
        // sk.push(i);
        sk=i.toString().split('').map(Number);
        if (i == sk[0]**3 + sk[1]**3 + sk[2]**3) {
            // console.log('Armstrongo sk yra:', i);
            skArmstrongo.push(i);
        }
        // console.log(sk);
    }

    return skArmstrongo;
}
console.log(`Armstrongo skaičiai yra: `, armstrong(100, 999));