import './footer.css'
import Logo_footer from '../../assets/LOGO_footer.svg';

export default function Footer() {

    return (
       <footer>
        <div>
        <img src={Logo_footer} alt="logo de kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
       </footer>
            )
}
