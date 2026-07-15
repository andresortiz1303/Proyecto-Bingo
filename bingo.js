   
let B = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let I = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let N = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

let G = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];

let O = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];


   
   let numInicial = 1;
   let  numFinal = 75;
   let balotasSacadas = [];

        // Función para sacar balotas
        function sacarBalota() {
            let numero = Math.round(Math.random() * (numFinal - numInicial) + numInicial);
            let letra;

            if (numero >= 1 && numero <= 15) letra = "B";
            else if (numero >= 16 && numero <= 30) letra = "I";
            else if (numero >= 31 && numero <= 45) letra = "N";
            else if (numero >= 46 && numero <= 60) letra = "G";
            else if (numero >= 61 && numero <= 75) letra = "O";

            document.getElementById("resultado").innerHTML = letra + numero;
            

            
            balotasSacadas.push(letra + numero);
             
            if (balotasSacadas.length > 0) {
                let balotasSacadasHTML = "<ul>";
                balotasSacadas.forEach(balota => {
                    balotasSacadasHTML +=  balota + "   ";
                });
                
                document.getElementById("balotasSacadas").innerHTML = "Balotas sacadas: " + balotasSacadasHTML;
              
            }
        }

     

        if (balotasSacadas.length === 75) {
            document.getElementById("resultado").innerHTML = "Todas las balotas han sido sacadas.";
        }
        else if (balotasSacadas.map(balota => balota.slice(1)).includes(numero.toString())) {
            sacarBalota();
        }
      
