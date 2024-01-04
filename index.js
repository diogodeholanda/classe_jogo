class heroi
{
   construtor(nome,idade,tipo,ataque)
   {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
      this.ataque = ataque
   }

   let heroijogo = new heroi ("Rocket","20","ninja","")

   escrever()
   {
      console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
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
      return this.ataque
   }

}







let contador = 0

let resultado = rankearSaldo(100,10)
let nivelFinal = rankearNivel(resultado)

function rankearSaldo(vitorias,derrotas)
{
   let saldo = vitorias-derrotas
   return saldo
}

function rankearNivel(rankearSaldo)
{
   let saldo = rankearSaldo
   let nivel = ""

   if (saldo <10)
   {
       nivel = "Ferro"
   }
   else if (saldo>10 && saldo<21)
   {
      nivel = "Bronze"
   }
   else if (saldo>20 && saldo<51)
   {
      nivel = "Prata"
   }
   else if (saldo>50 && saldo<81)
   {
      nivel = "Ouro"
   }
   else if (saldo>80 && saldo<91)
   {
      nivel = "Diamante"
   }
   else if (saldo>90 && saldo<101)
   {
      nivel = "Lendário"
   }
   else if (saldo>100)
   {
      nivel = "Imortal"
   }
   
   return nivel
}
   
do{
   console.log("O Herói tem saldo de " + resultado +" está no nível de " +nivelFinal)
   contador++
} while (contador <1)