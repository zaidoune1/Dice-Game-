# Dice-Game-


1. **Display of Dice**: The application displays dice and their current values.

2. **Rolling the Dice**: Users can roll the dice to obtain new random values.

3. **Score Calculation**: The game automatically calculates the player's score based on the values of the dice.

4. **Turn Management**: The game manages player turns, alternating between players after each roll.

5. **Winner Display**: The game displays the winning player with the highest score.

6. **Game Reset**: Users can reset the game to start a new round.

## Project Tasks

To build this project, the following tasks were completed:

1. Set up a new React project using Create React App.

2. Created a main component (`Dice`) responsible for the overall game display.

3. Created a component (`Die`) to display a die and its value.

4. Managed the state of the dice in the `Die` component using the `useState` hook.

5. Implemented the dice rolling functionality by generating new random values for the dice in the `Die` component.

6. Calculated the player's score based on the values of the dice and updated the score in the `Die` component.

7. Implemented turn management by using a state variable to track the current player (Player 1 or Player 2) in the `Die` component.

8. Alternated between players after each dice roll by updating the current player's state in the `Die` component.

9. Determined the winning player by comparing the scores of both players and displayed the result in the `Die` component.

10. Added a reset button to reset the game by resetting the dice values, scores, and selecting a random starting player.

The game uses images of dice to display the scores and is developed using advanced React concepts such as functional components and hooks (useState, useEffect). Additionally, CSS styles have been added to enhance the visual appeal of the game.

Good luck with your creation of the dice game!
Vous pouvez ajouter ce contenu dans un fichier nommé "README.md" à la racine de votre projet sur GitHub pour expliquer les caractéristiques et les tâches accomplies dans votre projet. Assurez-vous de personnaliser le README en fonction des détails spécifiques de votre projet.




User
si tu peut me le traduire en francais
ChatGPT
Bien sûr, voici la traduction en français du fichier README :

markdown
Copy code
# Jeu de Dés

Il s'agit d'une application web simple qui simule un jeu de dés avec les fonctionnalités suivantes :

1. **Affichage des Dés** : L'application affiche des dés et leurs valeurs actuelles.

2. **Lancer les Dés** : Les utilisateurs peuvent lancer les dés pour obtenir de nouvelles valeurs aléatoires.

3. **Calcul du Score** : Le jeu calcule automatiquement le score du joueur en fonction des valeurs des dés.

4. **Gestion des Tours** : Le jeu gère les tours des joueurs, en alternant entre les joueurs après chaque lancer.

5. **Affichage du Gagnant** : Le jeu affiche le joueur gagnant avec le score le plus élevé.

6. **Réinitialisation du Jeu** : Les utilisateurs peuvent réinitialiser le jeu pour commencer une nouvelle partie.

## Tâches du Projet

Pour construire ce projet, les tâches suivantes ont été accomplies :

1. Configuration d'un nouveau projet React en utilisant Create React App.

2. Création d'un composant principal (`Dice`) responsable de l'affichage global du jeu.

3. Création d'un composant (`Die`) pour afficher un dé et sa valeur.

4. Gestion de l'état des dés dans le composant `Die` en utilisant le hook `useState`.

5. Implémentation de la fonctionnalité de lancer les dés en générant de nouvelles valeurs aléatoires pour les dés dans le composant `Die`.

6. Calcul du score du joueur en utilisant les valeurs des dés et mise à jour du score dans le composant `Die`.

8. Mise en place de la gestion des tours des joueurs en utilisant une variable d'état pour suivre le joueur actuel (Joueur 1 ou Joueur 2) dans le composant `Die`.

9. Alternance entre les joueurs après chaque lancer de dés en mettant à jour la variable d'état du joueur actuel dans le composant `Die`.

10. Détermination du joueur gagnant en comparant les scores des deux joueurs et affichage du résultat dans le composant `Die`.

11. Ajout d'un bouton de réinitialisation pour remettre à zéro les valeurs des dés, les scores et choisir aléatoirement le joueur de départ.

## Instructions pour l'utilisation du projet

Pour consulter et exécuter ce projet localement, suivez ces étapes simples :

### Clonez le projet sur votre ordinateur en utilisant la commande Git suivante :

git clone https://github.com/votre-utilisateur/votre-projet.git
Installez les dépendances en accédant au répertoire du projet et en exécutant la commande suivante :

bash
Copy code
npm install
Démarrer le serveur de développement en utilisant la commande :

bash
Copy code
npm start
Une fois le serveur de développement démarré, ouvrez un navigateur Web et accédez à votre url local comme (l'URL http://localhost:3000) pour voir le projet en cours d'exécution en local.

Si vous avez des questions ou des commentaires, n'hésitez pas à les partager
