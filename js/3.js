console.clear();
console.log(`
3. Parašykite  funkcija  kuri  paskaičiuotų  atstumą  tarp  dviejų  taškų koordinačių sistemoje. 
Parametrai 4 perduodami skaičiai x1, y1, x2, y2. 
@param {number} x1          @example:
@param {number} y1          (0,0) (0,1) => 1
@param {number} x2          (0,0) (1,0) => 1
@param {number} y2          (-5,0) (10,-10) => 18.027756377319946
`)

const x1=0, y1=0, x2=0, y2=0;
function atstumas(x1,y1,x2,y2) {
    let a = Math.abs(x1) + Math.abs(x2);
    let b = Math.abs(y1) + Math.abs(y2);
    let c = Math.sqrt(a**2 + b**2);
    return c;
}

// pirmojo tasko koordinates:
const x01=-5, y01=0;

// antrojo tasko koordinates:
const x02=10, y02=-10;

console.log(`Atstumas tarp (${x01},${y01}) ir (${x02},${y02}) yra :`, atstumas(x01,y01,x02,y02));