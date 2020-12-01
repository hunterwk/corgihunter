import React from "react";
import corgi from "./assets/comingsooncorgi.png";

function Construction() {
    return (
        <div className="py-8 px-8 max-w-sm mx-auto bg-white">
            <img className="block mx-auto rounded-full" src ={corgi} alt="coming soon"/>
            <p className="text-lg text-indigo">
                Page is currently under construction.
            </p>
        </div>
    )
}

export default Construction;