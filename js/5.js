console.clear();
console.log(`
5. Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, 
skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai. 
Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. 
Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes. 
`);

const kaina=23, xSiena=0, ySiena=0; 

function statyba(xSiena,ySiena) {
    
    let plotasSiena=xSiena*ySiena;
    let plotasSienaPlius=plotasSiena;//+plotasSiena*0.05;
    let plyteliuKiekis=Math.round(plotasSienaPlius/1.5);
    let plyteliuKaina=plyteliuKiekis*1.5*23;
    
    return plyteliuKaina;
}
console.log('Remontui reikalinga pinigų suma: ', statyba(1,1));
