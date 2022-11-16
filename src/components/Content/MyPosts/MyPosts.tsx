import s from "./MyPosts.module.css";
import React from "react";
import {MyPost} from "./Post/MyPost";

export const MyPosts = () => {
    return <div>
    <div>
        my post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
      <div className={s.posts}></div>
        <MyPost message='Hello! How are you?'/>
        <MyPost message='Hi, I am fine, thank you'/>
    </div>
    </div>
}