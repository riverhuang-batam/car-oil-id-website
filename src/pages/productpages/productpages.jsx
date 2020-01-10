import React, {Component} from 'react'
import olishellhelix from '../../images/olishellhelix.jpeg'
import olimobil1liter from '../../images/olimobil1liter.jpg'
import olimobil4liter from '../../images/olimobil4liter.jpg'
import olicastrolmagnatec from '../../images/olicastrolmagnatec.png'
import olicastrolgtx4liter from '../../images/olicastrolgtx4liter.jpg'
import olishellhelix1liter from '../../images/olishellhelix1liter.jpg'
import {Container, Row, Col} from 'reactstrap'
export default class ProductPages extends Component {
    render() {
        return (
            <Container className="mt-4 mb-4">
                <Row>
                    <Col md="12">
                <h3 className="text-center">Shell Helix</h3>
                </Col>
                    <Col sm="4">
                        <img src={olishellhelix} alt={olishellhelix} width="100%"/>
                        <img className="mt-4" src={olishellhelix1liter} alt={olishellhelix1liter} width="100%"/>
                    </Col>
                    <Col sm="8">
                        
                        <p>
                            1. Tingkat penguapan rendah
                        </p>
                        <p>
                            Pelumas terbaru Shell ini memiliki titik penguapan yang rendah saat berada di
                            kondisi suhu panas ekstrem. Hal ini membuat pengguna tak perlu sering-sering
                            menambahkan oli karena oli yang berkurang.
                        </p>
                        <p>
                            2. Bekerja baik pada kondisi suhu rendah
                        </p>
                        <p>
                            Suhu yang rendah menyebabkan pelumas menjadi membeku, berbeda dengan Shell Helix
                            Ultra with PurePlus Technology bentuk pelumas tetap encer. Hal ini memudahkan
                            pengguna untuk menyalakan kendaraan meski berada di lingkungan dingin.
                        </p>
                        <p>
                            3. Membersihkan mesin
                        </p>
                        <p>
                            Perpaduan teknologi PurePlus dengan teknologi Active Cleansing memberikan
                            perlindungan mesin melawan kerak dan endapan hasil pembakaran.
                        </p>
                        <p>
                            4. Perlindungan terhadap korosi
                        </p>
                        <p>
                            Dengan adanya teknologi Active Cleansing, pelumas Shell dapat memberi
                            perlindungan terhadap korosi yang mampu membuat masa hidup mesin menjadi lebih
                            panjang dan mengurangi biaya perawatan.
                        </p>
                        <p>
                            5. Hemat bahan bakar
                        </p>
                        <p>
                            Menurut uji coba oleh Shell, dengan menggunakan pelumas terbarunya efisiensi
                            bahan bakar mencapai tiga persen.
                        </p>
                    </Col>
                    <Col sm="8">
                        <h3>Oli Mobil</h3>

                    </Col>
                    <Col sm="4">
                        <img src={olimobil4liter} alt={olimobil4liter} width="100%" height="180px"/>
                        <img className="mt-4" src={olimobil1liter} alt={olimobil1liter} width="100%"/>
                    </Col>
                    <Col sm="4">
                        <img src={olicastrolmagnatec} alt={olicastrolmagnatec} width="55%"/>
                        <img className="mt-4" src={olicastrolgtx4liter} alt={olicastrolgtx4liter} width="45%"/>
                    </Col>
                    <Col sm="8">
                        <h3>Oli Castrol</h3>
                        <p>siapa yang tidak kenal dengan castrol ya? oli castrol juga salah satu oli mobil yang terbaik juga paling populer di Indonesia</p>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}