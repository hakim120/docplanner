import logo from './logo.svg';
import './App.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import {Card} from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
function App() {
  return (
    <div className="App">
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home"> Docplanner Group</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    
    <Nav>

      <Nav.Link href="#deets" > About us</Nav.Link>
      <Nav.Link href="#deets">career</Nav.Link>
      <Nav.Link  href="#memes">Departement</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <h1>Making the healthcare experience more human</h1>
    <div id="conteneur">
   <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
   <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
    </div>
    <br></br>
    <div class="container">
<div class="row">
<div class="col-md-4">

<Card border="primary" style={{ width: '18rem',height:'20rem' }}>
    <Card.Header>For patients</Card.Header>
    <Card.Body>
     
      <Card.Text>
      Find a doctor, book a visit and solve any health-related doubt
      </Card.Text>
    </Card.Body>
  </Card>
</div>

<div class="col-md-4">

<Card border="dark" style={{ width: '18rem',height:'20rem' }}  >
    <Card.Header>For doctors</Card.Header>
    <Card.Body>
      
      <Card.Text>
      Save time managing visits and cut no-shows by half
      </Card.Text>
    </Card.Body>
  </Card>
</div>
<div class="col-md-4">

<Card border="primary" style={{ width: '18rem',height:'20rem' }}>
    <Card.Header>For clinics</Card.Header>
    <Card.Body>
     
      <Card.Text>
      Deliver an exceptional patient experience in your clinic
      </Card.Text>
    </Card.Body>
  </Card>
</div>
</div>
    </div>
    <br></br>

<div class="row">
  <div class="col-md-2">
  </div>
  <div class="col-md-2">
    <h4>We are a global company
with local culture</h4>
  </div>

<div class="col-md-8 cc">
  <ul><li>znanyLekarz</li></ul>
  <ul><li>Doctorilia</li></ul>
  <ul><li>MioDlette</li></ul>
  <ul><li>Doctortavimu</li></ul>
  <ul><li>Doctor</li></ul>

</div>
</div>
<br></br>
<div class="container2 py-5">

<div class= "row">
  <div class="col-md-6">
    <h4>
    The world's biggest
healthcare platform

    </h4>
    <p>We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.</p>
  </div>
  <div class="col-md-6">
    <div class="kaka">
    <Card border="dark" style={{ width: '18rem',height:'20rem' }} id ="simplon1" >
    <Card.Header>Leader in 12 countries</Card.Header>
    <Card.Body>
      
      <Card.Text>
      Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem',height:'20rem' }}  >
    <Card.Header>4.8 million appointments</Card.Header>
    <Card.Body>
      
      <Card.Text>
      booked last month
      </Card.Text>
    </Card.Body>
  </Card>


    </div>
    <div class="cc">
    <Card border="dark" style={{ width: '18rem',height:'20rem' }} id="simplon2" >
    <Card.Header>61.9 mln unique patients</Card.Header>
    <Card.Body>
      
      <Card.Text>
      visit our websites each month
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="dark" style={{ width: '18rem',height:'20rem' }}  >
    <Card.Header>92.5k active doctors</Card.Header>
    <Card.Body>
      
      <Card.Text>
      trust our solutions
      </Card.Text>
    </Card.Body>
  </Card>


    </div>
    
   </div>


</div>
    
</div>
<h4 class="bb text-align-center">Improve the lives of millions. Change yours forever
</h4>
<p>More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</p>
<br></br>
<div class="container">
<div class="row">
<div class="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.docplanner.com/images/warsaw.png" />
  <Card.Body>
    <Card.Title>Rome</Card.Title>
   
    <Button variant="primary">See opingin</Button>
  </Card.Body>
</Card>
</div>
<div class="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.docplanner.com/images/barcelona.png" />
  <Card.Body>
    <Card.Title>Bologne</Card.Title>
    
    <Button variant="primary">See opingin</Button>
  </Card.Body>
</Card>
</div>
<div class="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.docplanner.com/images/istanbul.png" />
  <Card.Body>
    <Card.Title>Curibtia</Card.Title>
    
    <Button variant="primary">See opingin</Button>
  </Card.Body>
</Card>
</div>
</div>
</div>
</div>
  );
}

export default App;
