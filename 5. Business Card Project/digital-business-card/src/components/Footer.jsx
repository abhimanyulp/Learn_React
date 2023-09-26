import Github from '../media/GitHub.png'
import Instagram from '../media/Instagram.png'
import Facebook from '../media/Facebook.png'
import Twitter from '../media/Twitter.png'
export default function Footer () {
    return (
        <div className="footer">
            <ul className='list-items'>
                <li><img src={Github} alt="" /></li>
                <li><img src={Instagram} alt="" /></li>
                <li><img src={Facebook} alt="" /></li>
                <li><img src={Twitter} alt="" /></li>
            </ul>
        </div>
    )
}