class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.definirAtaque()
    }

    definirAtaque() {
        switch(this.tipo) { 
            case "Mago":
                this.ataque = ["magia"]
                break
            
            case "Guerreiro":
                this.ataque = ["espada"]
                break

            case "Monge":
                this.ataque = ["artes marciais"]
                break

            default:
                this.ataque = ["shuriken"]
                break
        }
    }

    ataqueDoHeroi(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let heroi = new Hero("Davies", 19, "Guerreiro")

heroi.ataqueDoHeroi()
