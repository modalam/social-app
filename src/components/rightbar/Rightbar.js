import './rightbar.css';
import {Users} from '../../dummyData'
import Online from '../online/Online';
export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className='rightbarWrapper'>
          <div className='birthdayContainer'>
              <img src='/assets/gift.png' alt='' className='birthdayImg' />
              <span className='birthdayText'>
              
              <b>Alam</b> and <b>2 other friends</b> have a birthday today</span>
          </div>
          <img className='rightbarAd' src='/assets/ad.png' alt=''/>
          <h4 className='rightbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
             {Users.map(u => (
                <Online key={u.id} user={u}/>
             ))}
          </ul>
        </div>
    </div>
  )
}
