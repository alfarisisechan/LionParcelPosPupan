import { Col, Container, Row } from "react-bootstrap";
function Locations() {
 return(
    <div style={{width: '100%', height: 'auto', backgroundColor: '#b91727'}}>
        <Container>
            <br></br><br></br><br></br>
            <h1 className="text-center fw-bold text-white mb-5">LOKASI KAMI</h1>
            <Row>
                <Col md={12}>
                <iframe title="maps" className="d-flex justify-content-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4635846358008!2d106.77036636953561!3d-6.282871466556553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f140f52cb6c9%3A0xa90c76dae99782ed!2sLion%20Parcel%20Pupan%20Pondok%20Pinang!5e0!3m2!1sid!2sid!4v1698655658804!5m2!1sid!2sid" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
            <br></br><br></br><br></br>
        </Container>
    </div>
 );
}
export default Locations;