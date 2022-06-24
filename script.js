//declaration des variables globales
const ecranElt = document.querySelector(".ecran");
let affichage = ""; // on stocke l'affichage
let operation = null;  // ons tocke l'operation
let precedent = 0; //stcke la valeur précedente de l'ecran
let touche = document.querySelectorAll(".boutton");
for (let touch of touche) {
    touch.addEventListener("click", gererTouches);
}
function gererTouches(){
    let touch = this.innerText; // recupere le texte a l 'interieur de la tocuhe cliquée
    if(parseFloat(touch) >= 0){
         affichage = (affichage === "") ?  touch.toString() : affichage + touch.toString(); //se met en texte si ecran est vide 
            ecranElt.innerText = affichage;
        }
            else{
                switch(touch){
                    case "AC": // réinitialiser l'ecran
                        precedent = 0;
                        affichage = "";
                        operation = null;
                        ecranElt.innerText = 0;                
                        break;
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                        //on calcule la valeur resultat de l'etape precedente
                         precedent = (precedent === 0) ? parseFloat (affichage) : 
                         calculer(precedent, parseFloat(affichage), operation);
                         // on met a jour l'ecran
                         ecranElt.innerText = precedent;
                         // on stocke l'operation
                         operation = touch;
                         // on reinitialise la variable d'affichage
                         affichage = "";
                        break;
                    case "=":
                         //on calcule la valeur resultat de l'etape precedente
                         precedent = (precedent === 0) ? parseFloat (affichage) : 
                         calculer(precedent, parseFloat(affichage), operation);
                         // on met a jour l'ecran
                         ecranElt.innerText = precedent;
                        // on stocke le resultat dans la variable d'affichage
                         affichage = precedent;
                         precedent = 0;
                         break;
                         

                }
            }
        }    

        function calculer (nb1, nb2, operation){
            nb1=parseFloat(nb1);
            nb2=parseFloat(nb2);
            if(operation === "+") return nb1 + nb2;
            if(operation === "-") return nb1 - nb2;
            if(operation === "*") return nb1 * nb2;
            if(operation === "/") return nb1 / nb2;

        }

        