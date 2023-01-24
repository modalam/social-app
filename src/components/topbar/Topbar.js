import './topbar.css';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from '@mui/icons-material/Chat';
import Notifications from '@mui/icons-material/Notifications';
export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>ModzamSocial</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <Search />
                <input placeholder='Search for friend, post or video' className='searchInput'/>
            </div>
        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <Person/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIconItem'>
                    <Chat/>
                    <span className='topbarIconBadge'>4</span>
                </div>
                <div className='topbarIconItem'>
                    <Notifications/>
                    <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <img className='topbarImg' src='/assets/person/1.jpeg' alt=''/>
        </div>
    </div>
  )
}