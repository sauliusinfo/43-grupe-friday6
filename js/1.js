console.clear();
console.log(`
1. Mokinys pradėjo spręsti namų darbus, kai elektroninis laikrodis rodė h1 valandų ir min1 minučių, 
o baigė, kai buvo h2 valandų ir min2 minučių. Parašykite programą, pagal kurią būtų randama, kiek 
laiko (valandų ir minučių) mokinys sprendė uždavinius. (Laikykite, kad mokinys uždavinius sprendė mažiau kaip parą).
`);

const h1=0, min1=0, laikasPradzia=0;
const h2=0, min2=0, laikasPabaiga=0;

function laikas(h1,min1,h2,min2) {
    let laikasPradziaMin=h1*60+min1;
    let laikasPabaigaMin=h2*60+min2;
    let laikasSugaisoMin=laikasPabaigaMin-laikasPradziaMin;

    let val = Math.floor(laikasSugaisoMin / 60);
    let min = laikasSugaisoMin % 60;

    let text = val + 'val.' + min + 'min.';
    return text;
}

// kiek rodo laikrodis:
const valandos1=13, minutes1=10;

// kada baigė spresti kiek rodo laikrodis:
const valandos2=13, minutes2=34;

console.log(`Mokinys sprendė uždavinius:`, laikas(valandos1,minutes1,valandos2,minutes2));
