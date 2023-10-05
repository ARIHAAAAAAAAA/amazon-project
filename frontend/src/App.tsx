import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProduct } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand>amazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>cart</a>
            <a href="/signIn" className='nav-link'>sign in</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Row>
          {sampleProduct.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
              <img src={product.image} alt={product.name} className='product-image' />
              <h2>{product.name}</h2>
              <p>${product.price}</p>

            </Col>
          ))}
        </Row>
        </Container>
      
      </main>
      <footer>
        <div className='text-center'>ALL right reserved</div>
        
      </footer>
    </div>
  )
}

export default App
