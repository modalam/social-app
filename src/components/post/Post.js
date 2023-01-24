import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData';

export default function Post({post}) {
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img src={Users.filter((t) => t.id === post.userId)[0].profilePicture} alt='' className='postProfileImg' />
                    <span className='postUsername'>{Users.filter((val) => val.id === post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVertIcon />
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img src={post.photo} alt='' className='postImg'/>
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img src="/assets/like.png" alt='' className='likeIcon'/>
                    <img src="/assets/heart.png" alt='' className='likeIcon'/>
                    <span className='postLikeCounter'>{post.like} people like it</span>
                </div>
                <div className='postBottomLeft'>
                    <span className='postCommentTest'>{post.comment} comments</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}