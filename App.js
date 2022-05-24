import "./App.css";
import "./Map.css";
import icon from './image/map-a.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import LoginPage from "./components/views/LoginPage/LoginPage";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import OrderPage from "./components/views/OrderPage";
import OrderData from "./data/data";
import WorkPage from "./WorkPage/work";
import { ModalBody } from "react-bootstrap";


function RendingPage() {
  const location = useLocation();
  if (location.pathname == "/") {
    return <LandingPage />;
  } else {
    return <></>;
  }
}



function Home() {
 

  return ( 
    
    
      

    <>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="register">Register</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
          <Nav.Link href="map">
            <img
             
              src={icon}
              width="30"
              height="30"
            />
            Map
          </Nav.Link>
          <Nav.Link href="orderpage">OrderPage</Nav.Link>
          <Nav.Link href="work">WorkPage</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <hr />
      <RendingPage />
      <Outlet />
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>  
    </div>
  );

}

function Map() {
  return (
    <div>
      <h1>map</h1>
     <>
     <h2 className="Map">
     </h2>
     </>
    </div>
  );

}

// function Work() {

//   return (
//     <div>
//       <body>
      
//       </body>
        
      
//     </div>
//   );
    
// }


export default function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="orderpage" element={<OrderPage data={OrderData} />} />
            <Route path="map" element={<Map />} />
            <Route path="work" element={<WorkPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}



