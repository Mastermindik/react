import { Navbar, Nav, Container, ListGroup } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (<>
    <Navbar  bg="dark" variant="dark">
      <Navbar.Brand href='#'>
        <img src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}React Budget
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Lorem</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <div className='d-flex'>
    <nav className='navigation bg-secondary'>
      <ListGroup >
        <ListGroup.Item variant='dark'>
          <Link className='nav-link text-dark p-0' to={"/addIncomes"}>Додати доходи</Link>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <Link className='nav-link text-dark p-0' to={"/history"}>Переглянути історію</Link>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <Link className='nav-link text-dark p-0' to={"/options"}>Переглянути статистику</Link>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <Link className='nav-link text-dark p-0' to={"/statistic"}>Налаштування</Link>
        </ListGroup.Item>
        <ListGroup.Item variant='dark'>
          <Link className='nav-link text-dark p-0'>Вийти</Link>
        </ListGroup.Item>
      </ListGroup>
    </nav>
    <Outlet />
    </div>
  </>
  );
}

export default App;
