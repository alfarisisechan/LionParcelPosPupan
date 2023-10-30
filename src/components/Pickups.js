import { Container,Col, Row, Image } from "react-bootstrap";
import courier from '../assets/courier.png';

function Pickups() {
 return(
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b91727" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,229.3C685.7,267,754,277,823,272C891.4,267,960,245,1029,218.7C1097.1,192,1166,160,1234,138.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    <Container className="mt-4">
        <Row>
            <Col md={6}>
                <Image src={courier} style={{width: '100%', height: 'auto'}} />
            </Col>
            <Col md={6}>
            <h1 className="text-center fw-bold mt-5">FREE PICKUP SE-JAKSEL</h1>
                <div className="row justify-content-center text-center">
                    <Col>                    
                    <p className="mt-2">Gratis pickup tanpa minimum pengiriman dan berat paket, Kirim paket dari Jakarta Selatan sebanyak apapun tanpa takut dengan biaya pengiriman, hemat seluruh pengiriman paket anda dengan Lion Parcel POS Pupan.
                    ke alamat penerima.</p>
                    </Col>
                </div>
            </Col>
        </Row>
        </Container>
        <svg style={{marginTop: '-30px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b91727" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,229.3C685.7,267,754,277,823,272C891.4,267,960,245,1029,218.7C1097.1,192,1166,160,1234,138.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
    </>
 );
}
export default Pickups;