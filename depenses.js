// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];
const depenses = depensesSemaine;

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((total, montant) => total + montant, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  return depenses.filter((montant) => montant > 2000);
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

const calculerMaximum = trouverMaximum;

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log("dépenses initiales avant le tri :", depenses);
const depensesTriees = [...depenses].sort((a, b) => a - b);
console.log("dépenses originales après le tri de la copie :", depenses);
console.log("dépenses triées :", depensesTriees);

const total = calculerTotal(depenses);
const moyenne = calculerMoyenne(depenses);
const maximum = calculerMaximum(depenses);
const grossesDepenses = filtrerGrossesDepenses(depenses);

console.log("total :", total, "FCFA");
console.log("moyenne :", moyenne, "FCFA/jour");
console.log("dépense maximale :", maximum, "FCFA");
console.log("dépenses supérieures à 2000 FCFA :", grossesDepenses);

console.log(`
===== BILAN DES DÉPENSES DE LA SEMAINE =====
Total : ${total} FCFA
Moyenne par jour : ${moyenne.toFixed(2)} FCFA
Dépenses supérieures à 2000 FCFA : ${grossesDepenses.join(", ")} FCFA
Dépense maximale : ${maximum} FCFA
Copie triée par ordre croissant : ${depensesTriees.join(", ")}
`);