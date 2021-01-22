import './App.css';
import List from "./components/List";
import Navbar from "./components/Navbar";
import React from "react";

function App() {

    const requests =
        {


            "Trending": {
                name: "Tendances actuelles",
                url: "https://api.themoviedb.org/3/trending/all/week?api_key=9ff6e361fc1fbea15bf2ca71d852badc"

            },

            "Horror": {
                name: "Film d'horreur",
                url: "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=fr&api_key=9ff6e361fc1fbea15bf2ca71d852badc"

            },

            "Action": {
                name: "Film d'action",
                url: "https://api.themoviedb.org/3/discover/movie?with_genres=28&language=fr&api_key=9ff6e361fc1fbea15bf2ca71d852badc"

            },

            "Documentary": {
                name: "Documentaire",
                url: "https://api.themoviedb.org/3/discover/movie?with_genres=99&language=fr&api_key=9ff6e361fc1fbea15bf2ca71d852badc"

            },



        };

  return (
    <div className="">

        <Navbar/>
        <List url={requests.Trending.url} title={requests.Trending.name} />
        <List url={requests.Horror.url} title={requests.Horror.name} />
        <List url={requests.Action.url} title={requests.Action.name} />
        <List url={requests.Documentary.url} title={requests.Documentary.name} />


    </div>
  );
}

export default App;
