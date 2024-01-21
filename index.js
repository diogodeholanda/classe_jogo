class heroi
{
   constructor(nome, idade, tipo, ataque)
   {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
      this.ataque = ataque
   }
   
   atacar()
   {
      if (this.tipo == "mago")
      {
         this.ataque = "magia"
      }
      else if (this.tipo == "guerreiro")
      {
          this.ataque = "espada"
      }
      else if (this.tipo == "monge")
      {
          this.ataque = "artes marciais"
      }
      else if (this.tipo == "ninja")
      {
         this.ataque = "shuriken"
      }
      console.log(`atacou usando ${this.ataque}`)
   }
   
   escrever()
   {
      console.log(`O Herói do tipo ${this.tipo}`)
   }
}   

let heroidojogo = new heroi ("Rocket",20,"ninja",)

let contador = 0

do{
   heroidojogo.escrever()
   heroidojogo.atacar()
   contador++
} while (contador <1)