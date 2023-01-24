import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
       <div className='shareWrapper'>
            <div className='shareTop'>
                <img className='shareProfileImg' src='/assets/person/1.jpeg' alt=''/>
                <input type='text' placeholder="What's in your mind modzam?" className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMediaIcon htmlColor='tomato'
                        className='shareIcon' />
                        <span className='shareOptionText'>Video or Video</span>
                    </div>
                    <div className='shareOption'>
                        <LabelIcon className='shareIcon' htmlColor='blue' />
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        <LocationOnIcon className='shareIcon' htmlColor='green' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        <EmojiEmotionsIcon  className='shareIcon' htmlColor='red' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
       </div>
    </div>
  )
}
