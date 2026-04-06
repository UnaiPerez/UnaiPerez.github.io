
import '../Styles/Contacto.css'
import { FaGithub, FaInstagram  } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaSquareXTwitter } from "react-icons/fa6";
import Messi from '../assets/contacto.png'

function Contacto() {
    return(
        <>
            <div className='contacto' id='contacto'>
                <h2 className='contacto_titulo'>Contacto</h2>

                <div className='link_img'>
                    <div className='contacto_container'>
                        <a href="mailto:unaiperezmonje@gmail.com" className='contacto_item'>
                            <MdEmail size={30}></MdEmail>
                            <p>unaiperezmonje@gmail.com</p>
                        </a>

                        <a href="https://github.com/UnaiPerez" className='contacto_item'>
                            <FaGithub size={30}></FaGithub>
                            <p>UnaiPerez</p>
                        </a>

                        <a href="https://www.instagram.com/unaiiperez_" className='contacto_item'>
                            <FaInstagram size={30}></FaInstagram>
                            <p>unaiiperez_</p>
                        </a>

                        <a href="https://x.com/unaii_perez" className='contacto_item'>
                            <FaSquareXTwitter size={30}></FaSquareXTwitter>
                            <p>unaii_perez</p>
                        </a>
                    </div>

                    <img src={Messi} alt="messi" className='imagen_contacto' />
                    
                </div>
                
            </div>
        </>
    )
    
}

export default Contacto