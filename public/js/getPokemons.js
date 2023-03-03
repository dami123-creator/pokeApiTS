export default function getPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon/', $pokeBox = document.getElementById('poke-box'), fragment = document.createDocumentFragment();
    fetch(url)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            const $figure = document.createElement('figure'), $img = document.createElement('img'), $figcaption = document.createElement('figcaption'), $namePokemon = document.createTextNode(pokemon.name);
            $img.setAttribute('alt', pokemon.name);
            $img.setAttribute('title', pokemon.url);
            fetch(pokemon.url)
                .then(res => res.json())
                .then((res) => {
                $img.setAttribute('src', res.sprites.front_default);
            });
            $figcaption.appendChild($namePokemon);
            $figure.appendChild($img);
            $figure.appendChild($figcaption);
            fragment.appendChild($figure);
            console.log(pokemon);
        });
        $pokeBox.appendChild(fragment);
    });
}
