import React from "react";

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd41a78fff5mshde572d67cc3e5b7p116af3jsn097e60ac0605',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

export default async function getAllJuegos(setListaJuegos){
    return fetch(url,options)
        .then(response => {
            const data = response.json();
            return data;
        }).then(json => {
            setListaJuegos(json);
        });
}