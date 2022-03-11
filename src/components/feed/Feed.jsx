import{useContext,useEffect, useState} from "react";
import "./feed.css"
import Post from "../post/Post"
import Share from "../share/Share"
import axios from "axios"

export default function Feed({username}) {
    const[posts,setPosts]= useState([]);
    
   
    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res = username? await axios.get("posts/profile/"+ username) : await axios.get("posts/timeline/613b1efb5add40cf955f94cc");
        setPosts(res.data);
    };
        fetchPosts();
    },[username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
               { (!username || username === username.username) && <Share/>}
                {posts.map((p)=>(
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    );
}
