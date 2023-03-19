import Navbar from "./Navbar";
import './Cameras.css'

const Cameras = () =>{
    return(
        <div className="cameras">
            <Navbar/>
            <div className="video-grid"></div>
            <div className="btn-container">
                <div className="btn">SHOW CAMERAS</div>
                <div className="btn">ADD CAMERA</div>
            </div>
        </div>
        
    );

}

export default Cameras;