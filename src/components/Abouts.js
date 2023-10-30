import { Container,Col } from "react-bootstrap";

function Abouts() {
    return(
        <>
        <Container>
            <h1 className="text-center fw-bold mt-5">LION PARCEL POS PUPAN</h1>
                <div className="row justify-content-center">
                    <Col md="6">                    
                    <p className="text-center mt-2">Merupakan penyedia jasa pengiriman paket dan dokumen secara menyeluruh 
                    (door to door), mulai dari pengambilan di alamat pengirim hingga pengantaran 
                    ke alamat penerima.</p>
                    </Col>
                </div>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b91727" fill-opacity="1" d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,112C480,128,549,192,617,229.3C685.7,267,754,277,823,272C891.4,267,960,245,1029,218.7C1097.1,192,1166,160,1234,138.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </>
    );
}

export default Abouts;