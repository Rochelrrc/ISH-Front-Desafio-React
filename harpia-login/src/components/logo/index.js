import './styles.css';
import LogoIcon from "../../assets/Harpia-login.png";

export default function Logo() {
    return (
        <div className='container-logo'>

            <img src={LogoIcon} alt="Logotipo do projeto Harpia" />

        </div>
    )
}