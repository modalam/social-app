import './online.css'

export default function Online({user}) {
  return (
    <li className='rightbarFriend'>
        <div className='rightbarProfileImgContainer'>
            <img src={user.profilePicture} alt='error' className='rightbarProfileImg'/>
            <span className='rigthbarOnline'></span>
        </div>
        <span className='rightbarUsername'>{user.username}</span>
    </li>
  )
}
