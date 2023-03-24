const entrada= require("readline-sync");
let conta: number = parseFloat(entrada.question("insira o numero da sua conta: "));
let senha: number = parseFloat(entrada.question("qual sua senha?: "));
let saldo:number = 1000
let servico: number = 123



if(senha == 47477225809){

    console.log("Seu saldo é de: ", +saldo);
    let servico: number = parseFloat(entrada.question("escolha um dos servicos: 1-saque 2-deposito 3-sair: "));
    if(servico == 1){
        let senha: number = parseFloat(entrada.question("confirme sua senha: "));
        if(senha ==47477225809){
            let valor: number = parseFloat(entrada.question("quanto deseja sacar?: "));
            console.log("saque concluido, seu atual saldo é de: ",+ saldo-valor )

            if(valor>1000){
                console.log("VALOR INVALIDO");
            }
            
            
            }
            
            
        }
         
        
    }
    else if( senha != 47477225809)
    console.log("senha errada")


    
if(servico == 2){
    let senha2: number = parseFloat(entrada.question("confirme sua senha: "));
    if(senha2==47477225809){
        let deposito: number = parseFloat(entrada.question("quanto deseja depositar?: "));
        console.log("deposito realizado, seu atual saldo é de: ", + saldo+deposito)
         }
   
   else if(senha2 != 47477225809){
    console.log("senha incorreta")
   }     
}

if(servico == 3){
    let sair = entrada.question("tem certeza?")
    if(sair = "sim")
    console.log("ok")
}
    
    


    












