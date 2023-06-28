import React from 'react'
import '../Header/Header.css'
import background1 from '../../assets/pexels-czapp-árpád-16103344.jpg'
import background2 from '../../assets/background2.jpg'
import logo from '../../assets/LOGO.svg'


const Header = () => {


    const images = [background1, background2]
    

    setInterval(() => {
        const image = images.shift()
        document.querySelector('.container-header').style.backgroundImage = `linear-gradient(rgba(84, 84, 122, 0.322), rgba(110, 110, 158, 0.267), rgba(125, 125, 160, 0.26)), url(${image})`
        images.push(image)
    }, 20000)

    return (
        <div className='container-header d-flex justify-content-center p-1 flex-column' id='header' >
            <div className="logo-prompt d-flex justify-content-around align-items-center mt-1">
                <img src={logo} alt="logo" className='logo-wiki' />    
            </div>
            <div>
                <h1 className='h1'>Bienvenidos</h1>
                <p className='p'>WIKI-IA una enciclopedia libre y colaborativa, todos los temas de tu interes en un solo lugar. </p>
            </div>
           
        </div>
        
    )
}

export default Header