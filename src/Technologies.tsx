import React from "react";

export function Technologies(props: any) {
        return ( <div>
            <h3>Technologies</h3>
            <TechnologiesList/>
        </div>);
}

function TechnologiesList(props: any) {
    return <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
    </ul>
}





