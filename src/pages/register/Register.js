import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <h3 className='loginLogo'>ModzamSocial</h3>
                <span className='loginDesc'>Connect with friends and the world around you on ModzamSocial</span>
            </div>
            <div className='loginRight'>
                <div className='loginBox'>
                    <input type='text' placeholder='UserName' className='loginInput'/>
                    <input type='email' placeholder='Email' className='loginInput'/>
                    <input type='password' placeholder='Password' className='loginInput'/>
                    <input type='password' placeholder='Password Confirm' className='loginInput'/>
                    <button className='loginButton'>Sign Up</button>
                    <button className='loginRegisterButton'>Log Into Account</button>
                </div>
            </div>
        </div> 
    </div>
  )
}
