import React from "react";
import {useTitle} from "hookrouter";

export default function NotFoundPage() {
    useTitle('Not found');

    return(
        <div>
            Not found
        </div>
    )
}