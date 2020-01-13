import React, {Component} from 'react'
import helixtemplate from '../../images/helixtemplate.jpg'
import olishellhelix from '../../images/olishellhelix.jpeg'
import olishellhelix1liter from '../../images/olishellhelix1liter.jpg'
import {Container, Row, Col} from 'reactstrap'
export default class ProductPages extends Component {
    render() {
        return (
            <Container className="mt-4 mb-4">
                
                <h1 className="text-center mt-4 mb-4">
                    <b>
                    SHELL HELIX
                    </b>
                </h1>
                <img className="text-center mb-4" src={helixtemplate} alt={helixtemplate} width="100%"/>
                <Row>
                    <Col md="12">
                    <p>
                        Selama lebih dari 40 tahun, Shell akhirnya berhasil mengembangkan teknologi pelumas yang terbuat dari gas alam. Teknologi yang bernama PurePlus ini pun dimasukkan ke dalam pelumas Shell Helix Ultra dan dikombinasikan dengan Active Cleansing Technology.

Dengan perpaduan yang saling melengkapi ini, pelumas Shell Helix Ultra with PurePlus Technology pun dapat menjaga sekaligus membersihkan mesin kendaraan seperti aru keluar dari pabrik.
                        </p>
                    </Col>
                    <Col md="12">
                
                </Col>
                    <Col sm="4">
                        <img src={olishellhelix} alt={olishellhelix} width="100%"/>
                        <img className="mt-4" src={olishellhelix1liter} alt={olishellhelix1liter} width="100%"/>
                    </Col>
                    <Col sm="8">
                        <h3 className="text-center mt-4" >Why Use Shell helix?</h3>
                        <p> 
                            Kenapa memakai oli ini dan apa saja keunggulan dari pelumas terbaru dari Shell ini.</p>
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
                </Row>
            </Container>
        )
    }
}