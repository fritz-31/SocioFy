import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
    return (
        <div>
           <div className="post">
           <div className="postWrapper">
               <div className="postTop">
                   <div className="postTopLeft">
                       <img className="postProfileImg" src="/assets/person/picture1.jpg" alt=""/>
                   <span className="postUserName"> Ritwik Srivastava</span>
                   <span className="postDate"> 5 minutes ago</span>
                   </div>
                   <div className="postTopRight">
                    <MoreVert/>
                   </div>
               </div>
               </div>
                <div className="postCenter">
                    <span className="postText">Hey ! its my first post ;)</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt=""/>  
                    <img className="likeIcon" src="/assets/heart.png" alt=""/> 
                    <span className="postLikeCounter">69 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 comments</span>
                    </div>
                </div>
           </div>
        </div>
    )
}
