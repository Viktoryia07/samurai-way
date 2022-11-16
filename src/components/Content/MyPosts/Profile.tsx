import React from "react";
import s from './MyPosts.module.css'
import {MyPosts} from "./MyPosts";

export const Profile = () => {
    return (<>
        <div>
            <img
                src='data:image/jpeg;base64,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'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </>);
}
