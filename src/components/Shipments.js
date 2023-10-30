import { Container,Col,Card } from "react-bootstrap";
import bosspack from '../assets/bosspack.png';
import regpack from '../assets/regpack.png';
import jagopack from '../assets/jagopack.png';
import interpack from '../assets/interpack.png';
import bigpack from '../assets/bigpack.png';
import otopack150 from '../assets/otopack150.png';
import otopack250 from '../assets/otopack250.png';

function Shipments() {
    return(
        <div style={{width: '100%', height: 'auto', backgroundColor: '#b91727'}}>
        <Container>
            <br></br><br></br><br></br>
            <h1 className="text-center fw-bold text-white mb-5">JENIS PENGIRIMAN</h1>
            <Container className="text-center">
                <div className="row d-flex justify-content-evenly p-3">
                    <Col md="3" xs="12">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem' }}>
                        <Card.Img variant="top" src={bosspack} />
                        <Card.Title className="text-center"> Pengiriman Prioritas </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                             Pengiriman prioritas dengan keuntungan ekstra dan keistimewaan layanan. 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={regpack} />
                        <Card.Title className="text-center"> Pengiriman Reguler </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Solusi kirim paket andal dan efisien ke seluruh Indonesia, paket telat sehari PASTI ongkir diganti. 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={jagopack} />
                        <Card.Title className="text-center"> Pengiriman Termurah </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Jagonya kirim paket murah ke 40.000 wilayah Indonesia, paket telat sehari PASTI ongkir diganti. 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={interpack} />
                        <Card.Title className="text-center"> Pengiriman Internasional </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Pengiriman paket dan dokumen dari Indonesia ke luar negeri dengan harga yang terjangkau.   
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={bigpack} />
                        <Card.Title className="text-center"> Pengiriman Paket Besar </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Pengiriman paket mulai dari 10 kg dengan harga yang lebih hemat. 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={otopack150} />
                        <Card.Title className="text-center"> Pengiriman Otomotif </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Pengiriman motor 150cc ke seluruh kota di Indonesia dengan harga terjangkau & aman 
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md="3">                    
                    <Card className="shadow-lg p-2 mb-5 bg-body rounded" style={{ width: '16rem', height: '25rem'  }}>
                        <Card.Img variant="top" src={otopack250} />
                        <Card.Title className="text-center"> Pengiriman Otomotif </Card.Title>
                            <Card.Text className="p-2 text-center lh-base" style={{textAlign: 'justify', textJustify: 'inter-word'}}>
                            Pengiriman motor 150cc sampai 250cc ke seluruh kota di Indonesia dengan harga terjangkau & aman 
                            </Card.Text>
                        </Card>
                    </Col>
                </div>
                </Container>
        </Container>
        </div>
    );
}

export default Shipments;