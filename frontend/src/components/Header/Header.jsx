import React from 'react'
import '../Header/Header.css'
import background1 from '../../assets/Background1.png'
import background2 from '../../assets/background2.jpg'
import logo from '../../assets/LOGO.svg'


const Header = () => {


    const images = [background1, background2]
    

    setInterval(() => {
        const image = images.shift()
        document.querySelector('.container-header').style.backgroundImage = `url(${image})`
        images.push(image)
    }, 60000)

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