let pokemonRepository = (function (){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon';
//     {name: 'Bulbasaur', height: 4, type: ['grass', 'poison']}, //POKEMON/OBJECT1
//     {name: 'Charmander', height: 6, type: ['fire']}, //POKEMON/OBJECT2
//     {name: 'Butterfree', height: 1, type: ['bug', 'flying']} //POKEMON/OBJECT3
// ]
    
    function showDetails(pokemon){
        console.log(pokemon);
    }

    function addListItem(pokemon){
        let pokeList = document.querySelector('.pokeList');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
        button.addEventListener('click', () => showDetails(pokemon));
}

    function add(pokemon){
        if (
            typeof pokemon === "object" && "name" in pokemon
        ) {
        pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct")
        }
    }

    function getAll() {
        return pokemonList;
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
        return response.json();
        }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
            name: item.name,
            detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
        });
        }).catch(function (e) {
        console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
        return response.json();
        }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        }).catch(function (e) {
        console.error(e);
        });
    }
    
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        loadList: loadList,
        getAll: getAll,
        addListItem: addListItem,
        loadDetails: loadDetails,
        showDetails: showDetails
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

// pokemonRepository.add({name:'Mew', height: 2, type:'psychic'});
// // pokemonRepository.getAll();

pokemonRepository.loadList().then(function() {
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
});
