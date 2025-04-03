let herois = [
 {nome: "Reyna", xp: 900},
    {nome:  "Phoenix", xp: 1.001 || 2000},
    {nome:  "Sova", xp: 2.001 || 5.000},
    {nome:  "Cypher", xp: 5.001 || 7.000},
    {nome: "Killjoy", xp: 7.000 || 8.000},
    {nome: "Sage", xp: 8.001 || 9.000},
    {nome:  "Sova", xp: 9.001 || 10.000},
    {nome: "Skye", xp: 10.001 },
];


if (xp < 1.000) {
    nivel = "Ferro"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 2.000) {
    nivel = "Bronze"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 5.000) {
    nivel = "Prata"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 7.000) { 
    nivel = "Ouro"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 8.000) {
    nivel = "Platina"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 9.000) {
    nivel = "Diamante"
    console.log("XP baixo, continue jogando!");
}
else if (xp <= 10.000) {
    nivel = "Imortal"
    console.log("XP baixo, continue jogando!");
}
else if (xp >= 10.001) {
    nivel = "Radiante"
    console.log("XP baixo, continue jogando!");
}
console.log ("O herói de nome" + {heroisnome5} + " está no nível" + {nivel5} + "!")
console.log("O herói de nome Sage está no nível Diamante!");