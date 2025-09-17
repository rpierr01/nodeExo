async function getCharacters() {
    try {
        const response = await fetch('http://localhost:3000/data/characters.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Sélectionner l'élément où afficher les personnages
        const charactersList = document.getElementById('characters');

        // Ajouter chaque personnage à la liste
        data.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            charactersList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

// Appel de la fonction pour récupérer et afficher les données
getCharacters();