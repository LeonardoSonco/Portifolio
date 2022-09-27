
    const typedTextSpan = document.querySelector(".identificacao__paragrafo");

    const textArray = ["Desenvolvimento Web", "Esportes", "Otimização","Pesquisa"];
    const typingDelay = 80;
    const erasingDelay = 80;
    const newTextDelay = 800; // Atraso entre o texto atual e o próximo
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
         
            typedTextSpan.innerHTML += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
          
            typedTextSpan.innerHTML = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 50);
        }
    }

    document.addEventListener("DOMContentLoaded", () => { // No DOM inicia o efeito
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });


