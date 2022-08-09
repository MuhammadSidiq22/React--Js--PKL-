import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Style.css';
import Pagination from 'react-bootstrap/Pagination';
import react, {useState, useEffect, Fragment} from 'react'

function Detberita() {
    const [DataDetberita, setDataDetberita] = useState(null);


    useEffect(() => {
        getDetberita();
        return () => {
            setDataDetberita(null);
        }
      }, [])

      function getDetberita(){
        const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/news?instansi_id=2').then(function (response) {
        setDataDetberita(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
    }


  return (  
    <>
    {
                    (DataDetberita != null) ?
                        <div className="container-main">
                        <div className='baner'>
                            <h1>Berita</h1>
                        </div>
                            <div className="bg container-fluid">
                            <div className="container">
                                <div className="row">
                                        <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                        </Form>
                    {
                        DataDetberita 
                        && DataDetberita.map((item, index) => {
                        return (                        
                                    <div className='col-md-6 col-sm-12'>
                                        <Card className='mt-4'>
                                            <Card.Img variant="top" src={item.image_file_data} />
                                            <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                    {item.content}
                                            </Card.Text>
                                            <Button variant="outline-success" href={`/berita/DetailBerita/${item.id}`}>Baca Selengkapnya..</Button>{' '}
                                            </Card.Body>
                                        </Card>
                                    </div>
                        )
                        })
                    }
                                    <div className="container mt-5">
                                    <Pagination>
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                    </Pagination>
                                    </div>
                                </div>
                            </div>
                </div>
      </div>: ''
    }
  
  </>
  );
}

export default Detberita;