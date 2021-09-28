import{useEffect, useState} from "react";
import "./feed.css"
import Post from "../post/Post"
import Share from "../share/Share"
import axios from "axios"

export default function Feed() {
    const[posts,setPosts]= useState([])
    const[text,setText]=useState("");
    useEffect(()=>{
        axios.get("")
    },[])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {/*Posts.map((p)=>(
                    <Post key={p.id} post={p}/>
                ))*/}
            </div>
        </div>
    );
}
