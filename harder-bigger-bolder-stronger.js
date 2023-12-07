export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;
        const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        letter.textContent = randomLetter;
        const fontSize = 11 + (i / 119) * (130 - 11);
        const fontWeight = i < 40 ? 300 : (i < 80 ? 400 : 600);
        letter.style.fontSize = `${fontSize}px`;
        letter.style.fontWeight = fontWeight;

        document.getElementsByTagName("body")[0].appendChild(letter);
    }
}