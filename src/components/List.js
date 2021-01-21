import React, {useEffect, useState} from "react";


export default function List(){

    let [data,setData] = useState([]);

    useEffect(() => {

        let lastCalled = true;
        const fetchData = () => {

            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9ff6e361fc1fbea15bf2ca71d852badc&language=fr&with_genres=27&sort_by=popularity.desc`)
                .then((response) => response.json())
                .then((data) => lastCalled && setData(data.results))
                .catch((e) => console.error(e));

        };

        fetchData();
        return () => {
            lastCalled = false;
        };

    },[]);




    return(

        <div className="row">

            <h2>Film Horreur</h2>

            <div className="list">
                {data?.map( ({title,backdrop_path}) => (

                    <div key={title}>
                        <img className="listElements" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
                    </div>


                ))}

            </div>
    </div>
    );


}