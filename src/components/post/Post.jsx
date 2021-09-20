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
                   <span className="postDate">5 minutes ago</span>
                   </div>
                   <div className="postTopRight">
                    <MoreVert/>
                   </div>
               </div>
               </div>
                <div className="postCenter">
                    <span className="postText">Hey ! its my first post ;)</span>
                    <img className="postImg" src="/assets/post/picture1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="postImg" src="/assets/post/picture1.jpg" alt=""/>  
                    <img className="postImg" src="/assets/post/picture1.jpg" alt=""/> 
                    </div>
                    <div className="postBottomRight"></div>
                </div>
           </div>
        </div>
    )
}
