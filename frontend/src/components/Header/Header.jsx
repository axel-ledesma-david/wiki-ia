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
        <div className='container-header d-flex justify-content-center p-2 flex-column gap-2' id='header' >
            <div className="logo-prompt d-flex justify-content-around mt-1">
                <img src={logo} alt="logo" className='logo-wiki' />    
                <div className="prompts d-flex flex-column gap-3">
                    <div className="prompt rounded-3 bg-light d-flex align-items-center p-3">
                        <p className='text-dark text-center fw-semibold' >Imagen Generada por MidJourney</p>
                    </div>
                    <div className="prompt rounded-3 bg-light d-flex align-items-center p-3">
                        <p className='text-sm text-dark text-center fw-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mmodi repudiandae, numquam ea maiores!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header