import s from "./MyPost.module.css";
import React from "react";

export type MyPostType = {
    message: string;
}
export const MyPost = (props: MyPostType) => {
    return <div className={s.item}>
        <img
            src='https://mobimg.b-cdn.net/v3/fetch/a3/a3b4e5ed83e97a654d4831cccb1d7e6a.jpeg'/>
        {props.message}
        <div>
            <span>Like</span>
        </div>
    </div>
}