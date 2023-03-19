import './Home.css'
import Navbar from './Navbar';

function Home(){
    return(
        <div>
            <Navbar/>
        <div className="home">
            <div className="description">
                <h1>FAST SMART PHONE HOME</h1>
                <p> Web aplikacija koja pruža mogućnost povezivanja i upravljanja video nadzorom Vašeg doma, putem mobilnog uređaja koji nije u redovnoj upotrebi, postavljen je u kući, povezan sa našom aplikacijom i daje Vam uvid u stanje doma gdje god se Vi nalazili.</p>
            </div>
            <div className="home-image-container">
                <img className='main' src={require('./images/main.png')}></img>
            </div>
        </div>
        </div>
        

    )
}

export default Home;