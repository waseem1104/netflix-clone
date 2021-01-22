import React from "react";


export default function Navbar(){


    return(

        <div className="header">

            <nav>

                <div className="headerLogo">
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt=""/>
                </div>

                <ul>
                    <li>Accueil</li>
                    <li>Ma liste</li>
                </ul>
            </nav>
            <div className="headerLogo">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" width="30px" height="30px" alt=""/>
            </div>
        </div>



    );
}