let nomeDoHeroi = "Davies"
let xpDoHeroi = 0
let nivel = ["Zero","Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let nivelHeroi

switch (true) {
    case xpDoHeroi <= 1000:
        nivelHeroi = nivel[1]
        break
    case xpDoHeroi <= 2000:
        nivelHeroi = nivel[2]
        break
    case xpDoHeroi <= 5000:
        nivelHeroi = nivel[3]
        break
    case xpDoHeroi <= 7000:
        nivelHeroi = nivel[4]
        break
    case xpDoHeroi <= 8000:
        nivelHeroi = nivel[5]
        break
    case xpDoHeroi <= 9000:
        nivelHeroi = nivel[6]
        break
    case xpDoHeroi <= 10000:
        nivelHeroi = nivel[7]
        break
    case xpDoHeroi > 10000:
        nivelHeroi = nivel[8]
        break
    default:
        nivelHeroi = nivel[0]
        break

}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelHeroi)