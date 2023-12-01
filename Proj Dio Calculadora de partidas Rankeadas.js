let ranks = ["Zero", "Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let rank
let levelHero
let wins = 0
let loses = 0

function sumRank(a, b) {
    rank = a - b
    return rank
}

sumRank(wins, loses)

switch (true) {
    case rank <= 10:
        levelHero = ranks[1]
        break
    case rank <= 20:
        levelHero = ranks[2]
        break
    case rank <= 50:
        levelHero = ranks[3]
        break
    case rank <= 80:
        levelHero = ranks[4]
        break
    case rank <= 90:
        levelHero = ranks[5]
        break
    case rank <= 100:
        levelHero = ranks[6]
        break
    case rank > 100:
        levelHero = ranks[7]
        break
    default:
        levelHero = ranks[0]
        break
}

console.log(
   `O Herói tem de saldo de ${rank} está no nível de ${levelHero}`
)
