import React, {useEffect, useState} from "react";


export default function List({url,title}){

    let [data,setData] = useState([]);

    useEffect(() => {

        let lastCalled = true;
        const fetchData = () => {

            fetch(`${url}`)
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

        <div className="">

            <h2 className="row">{title}</h2>

            <div className="list">
                {data?.map( ({id,backdrop_path}) => (

                    <div key={id}>
                        <img className="listElements" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
                    </div>


                ))}

            </div>
    </div>
    );


}