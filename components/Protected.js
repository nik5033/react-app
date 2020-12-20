import React from "react";
import {navigate} from 'hookrouter';

export default function Profile_Protect({component: Component}) {
    const [Auth, setAuth] = React.useState(true);
    const [New, setNew] = React.useState(true);


    const IsAuth = () => {
        if(New) {
            fetch('/api/user/check', {
                method: "GET",
            })
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    console.log("1: " + data.IsAuth)
                    setAuth(data.IsAuth);
                })

            setNew(!New)
        }
    }

    return(
        <div>
            {IsAuth()}
            {Auth ? <Component /> : navigate('auth')}
        </div>
    )
}