import profile_pic from '../pic.jpeg'
export default function Info () {
    return (
        <div className="info">
            <img src={profile_pic} alt="" width='100%' border-top-left-radius='20px' />
            <h2>Abhimanyu</h2>
            <h6 className='title'>Full Stack Developer</h6>
            <p>https://abhimanyulp.github.io/</p>
            <div>
                <button>Email</button>
                <a target="_blank" href="https://www.linkedin.com/in/abhimanyulp/"><button className='linkedin' >LinkedIn</button></a>
            </div>
        </div>
    )
}