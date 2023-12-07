function generateLetters() {
    const lettersContainer = document.getElementById('letters-container');

    for (let i = 0; i < 120; i++) {
        const letter = document.createElement('div');
        letter.classList.add('letter');

        // Random uppercase letter
        const randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        letter.textContent = randomLetter;

        // Calculate style properties based on index
        const fontSize = 11 + (i / 119) * (130 - 11);
        const fontWeight = i < 40 ? 300 : (i < 80 ? 400 : 600);

        letter.style.fontSize = `${fontSize}px`;
        letter.style.fontWeight = fontWeight;

        lettersContainer.appendChild(letter);
    }
}
export {generateLetters};