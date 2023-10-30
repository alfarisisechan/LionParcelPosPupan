import { Image } from "react-bootstrap";
import banner from '../assets/banner1.png';
function Banners() {
    return(
        <>
        <Image src={banner} style={{width: '100%', height: 'auto'}} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#b91727" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,229.3C685.7,267,754,277,823,272C891.4,267,960,245,1029,218.7C1097.1,192,1166,160,1234,138.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        </>
    );
}
export default Banners;