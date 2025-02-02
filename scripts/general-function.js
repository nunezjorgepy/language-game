function change_language(language) {
    let language_instructions = document.querySelector('.instruction-text');

    if (language === 'spanish') {
        language_instructions.innerHTML = `
        Tenes que encontrar la palabra escondida. Cada guión bajo representa una letra. Presionar una letra cuenta como
        una oportunidad. Si la letra esta en la palabra, será reemplazada. Caso contrario, perderás una oprtunidad.
        `
    } else if (language === 'english') {
        language_instructions.innerHTML = `
        You get a hidden word and you have to guess which word it is. 
        Every underscore represnts a letter. Pressing a letter counts as a guess. 
        If the letter is in the word, it will be replaced. If not, you will loose a guess.
        `
    }
}