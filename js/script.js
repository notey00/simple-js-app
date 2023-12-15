let pokemonList = [
    {name: 'bulbasaur', height: 4, type: ['grass', 'poison']}, //POKEMON/OBJECT1
    {name: 'charmander', height: 6, type: ['fire']}, //POKEMON/OBJECT2
    {name: 'butterfree', height: 1, type: ['bug', 'flying']} //POKEMON/OBJECT3
];

// for (i=0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "   ");
// }

for (i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 4) {
        document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + " - Thats a big Poekmon! "); //THIS PART OF THE CODE RUNS THROUGH ALL THE POEKMONS AND LOOKS FOR THE ONES WITH THE HEIGHT VALUE ABOVE 4
    }
    else {
      document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "   ");  //THIS IS THE MESSAGE THAT IS GENERATED WHEN THE HEIGHT IS LESS THAN 4
    }
    
}

