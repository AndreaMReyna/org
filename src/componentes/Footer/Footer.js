import "./Footer.css"

const Footer = ( ) => {
    return  <footer className='footer'>
    <div className='redes'>
               <a href='https://smmd.org.mx/'>
            <img src="/img/website.png" alt='website' />
        </a>
        <a href='https://www.facebook.com/SMMDanza/?fref=ts'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.instagram.com/SMMDanza/'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img className = "logo" src='/img/logo-footer.png' alt='org' />
    <strong>Desarrollado por Andrea Martínez Reyna</strong>

</footer>

}

export default Footer