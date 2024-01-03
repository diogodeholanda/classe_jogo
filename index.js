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