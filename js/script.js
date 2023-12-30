let pokemonRepository = (function (){
    let pokemonList = [
    {name: 'Bulbasaur', height: 4, type: ['grass', 'poison']}, //POKEMON/OBJECT1
    {name: 'Charmander', height: 6, type: ['fire']}, //POKEMON/OBJECT2
    {name: 'Butterfree', height: 1, type: ['bug', 'flying']} //POKEMON/OBJECT3
]
    
    function addListItem(pokemon){
        let pokeList = document.querySelector('.pokeList');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
}

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
        }
        
}());



// for (i=0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "   ");
// }

// for (i=0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 4) {
//         document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + " - Thats a big Poekmon! "); //THIS PART OF THE CODE RUNS THROUGH ALL THE POEKMONS AND LOOKS FOR THE ONES WITH THE HEIGHT VALUE ABOVE 4
//     }
//     else {
//       document.write(pokemonList[i].name + "(height: " + pokemonList[i].height + ")" + "   ");  //THIS IS THE MESSAGE THAT IS GENERATED WHEN THE HEIGHT IS LESS THAN 4
//     }
    
// }

// pokemonList.forEach(function(pokemon) {
//     document.write(pokemon.name + ' ' + pokemon.height + ' ' + pokemon.type + "<br>")
// });

pokemonRepository.add({name:'Mew', height: 2, type:'psychic'});
// pokemonRepository.getAll();

pokemonRepository.getAll().forEach(function(pokemon) {
    // let pokeList = document.querySelector('.pokeList');
    // let listItem = document.createElement('li');
    // let button = document.createElement('button');
    // button.innerText = pokemon.name;
    // button.classList.add('button-class');
    // listItem.appendChild(button);
    // pokeList.appendChild(listItem);
    // document.write(pokemon.name + ':' + ' ' + 'height: ' + pokemon.height + ' & ' + 'type: ' + pokemon.type + "<br>")
    pokemonRepository.addListItem(pokemon);
});

