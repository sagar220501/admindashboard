import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './Admin.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem,faCubes,faUsers,faCircleDot,faUser,faCaretDown,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'; 
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
 import  ProgressBar  from 'react-bootstrap/ProgressBar';
import BellIcon from './logo'
import BellIcon2 from './chaticon';
import logo from './images/Navbar_Logo (1).png';
import img1 from './images/download.jpg'
import img2 from './images/ronaldo.jpg'
import img3 from './images/virat.jpg'
import img4 from './images/hazard.jpg'
import img5 from './images/neymar.jpg'
import CardTextIcon from './cardText';




const AdminPage = () => {

  const [state,setState]=useState({
    options: {
      chart: {
        id: "basic-bar"
      },

      animations: {
        enabled: true, 
      },
      xaxis: {
        categories: [2006,2007,2008,2009,2010,2011,2012],
      },
      colors: ['#FFA500', '#BA55D3'], 
    },
    series: [
      {
        name: "series-1",
        data: [92,65,38,65,38,65,92],
        
      },
      {
        name: "series-2",
        data: [90,62,34,62,34,62,90]
      },
    ],
  });
  const [lineChartData, setLineChartData] = useState({
    options: {
      chart: {
        id: 'basic-line',
      },
      xaxis: {
        categories: [2006,2007,2008,2009,2010,2011,2012],
      },
      colors: ['#FFA500', '#BA55D3'],
    },
    series: [
      {
        name: 'series-1',
        data: [45, 68, 45, 68, 45, 68,100],
      },
      {
        name: 'series-2',
        data: [85, 62, 40, 62, 40, 62,45],
      },
    ],
  });
  

  

  return (
<>
<Navbar expand="lg" className="bg-body-tertiary sticky-top" style={{ backgroundImage: 'linear-gradient(to right, #de6262, #ffb88c)' }}>
      <Container fluid>
        <img src={logo} alt="my logo" style={{ height: '25px' }} />
        <CardTextIcon />
        <Navbar.Brand href="#" style={{ paddingLeft: '20px', color: 'white' }}>Dreams Technologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />

          {/* Responsive Form for Small, Medium, and Large screens */}
          <Form className="d-flex light" style={{ backgroundColor: 'transparent', color: 'white' }}>
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="me-2 light"
              aria-label="Search"
              style={{ backgroundColor: '#f48383', borderRadius: '25px', width: '10em', height: '3em', color: 'white' }}
            />

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-1 my-lg-0 light" style={{ maxHeight: '100px', color: 'white' }} navbarScroll>
                <NavDropdown title="English" id="navbarScrollingDropdown" style={{ maxHeight: '100px', color: 'white' }}>
                  <NavDropdown.Item href="#action3">Hindi</NavDropdown.Item>
                  
                </NavDropdown>

                <BellIcon className="me-auto my-2 my-lg-0 px-3" style={{ maxHeight: '100px', paddingInline: '20px' }} />
                <BellIcon2 className="me-auto my-2 my-lg-0 px-3" style={{ paddingLeft: '2px' }} />

                <img src={img1} alt="my logo" style={{ height: '25px', width: '30px', borderRadius: '50%', marginTop: '8px', position: 'relative', left: '5px' }} />
                <NavDropdown title="Admin" id="navbarScrollingDropdown" className="dropdown-menu-end" style={{ color: 'white'}} >Admin
                
                
                 
                 
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="admin-page">
      <h1 style={{marginLeft:"0.5em",color:"orange",marginTop:"0.7em",fontSize:"2em"}}>Welcome Admin!</h1>
     
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <span className="rounded-icon"><FontAwesomeIcon icon={faCubes} /></span>
            <p className="card-number" style={{fontWeight:"bold"}}>112</p>
           
          </div>
          <p className='card-text' style={{fontWeight:"bold"}}>Projects</p>
        </div>
        <div className="card">
          <div className="card-content">
            <span className="rounded-icon">$</span>
            <p className="card-number">44</p>
          
          </div>
          <p className='card-text' style={{fontWeight:"bold"}}>Clients</p>
        </div>
        <div className="card">
          <div className="card-content">
          <span className="rounded-icon"><FontAwesomeIcon icon={faGem} /></span>
            <p className="card-number">37</p>
           
          </div>
          <p className='card-text' style={{fontWeight:"bold"}}>Tasks</p>
        </div>
        <div className="card">
          <div className="card-content">
            <span className="rounded-icon"><FontAwesomeIcon icon={faUsers} /></span>
            <p className="card-number">218</p>
            
          </div>
          <p className='card-text' style={{fontWeight:"bold"}}>Employees</p>
        </div>
      </div>



    
</div>


<div className="charts-container">
      <div className="chart">
        {/* First Chart component */}
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="680"
        />
      </div>

      <div className="chart">
        {/* Second Chart component */}
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="680"
        />
      </div>
    </div>
            


<div className="block-container">
  <div className="block">
    <div className="block-content">
      <div className='text-container'>
      <p className="block-text">New Employees</p>
      <p className='block-numberr'>11</p>
      <ProgressBar now={70} variant="warning" />
      <p className='block-texttt'>overall employees <span style={{color:"gray"}}>218</span></p>
    </div>
  <div className='number-container'>
    <p className='block-number'>+10%</p>
  </div>
  </div>
  </div>
  <div className="block">
    <div className="block-content">
    <div className='text-container'>
      <p className="block-text">Earnings</p>
      <p className='block-numberr'>$1,42,300</p>
      <ProgressBar now={70} variant="warning" />
      <p className='block-texttt'>previous month <span style={{color:"gray"}}>$1,15,852</span></p>
      </div>
      <div className='number-container'>
      <p className="block-number">+12.5%</p>
    </div>
  </div>
  </div>
  <div className="block">
    <div className="block-content">
    <div className='text-container'>
      <p className="block-text">Expenses</p>
      <p className='block-numberr'>$8,500</p>
      <ProgressBar now={70} variant="warning" />
      <p className='block-texttt'>previous month <span style={{color:"gray"}}>$7,500</span></p>
      </div>
      <div className='number-container'>
      <p className="block-number">-2.8%</p>
    </div>
    </div>
  </div>
  <div className="block">
    <div className="block-content">
    <div className='text-container'>
      <p className="block-text">Profit</p>
      <p className='block-numberr'>$1,12,00</p>
      <ProgressBar now={70} variant="warning" />
      <p className='block-texttt'>previous month <span style={{color:"gray"}}>$1,42,000</span></p>
      </div>
      <div className='number-container'>
      <p className="block-number">-75%</p>
    </div>
    </div>
  </div>
</div>



 <div className="new-block-container">
    <div className="new-block">
      <div className="new-block-header">
        <h2>Statistics</h2>
      </div>
      <div className="new-card">
      <div className="card-content">
      <p className="card-text-left">Today Leave</p>
        <div className="card-text-right">
          <p>4/65</p>
        </div>
        </div>
        <div className="progress-bar-container">
        
          <div className="progresss-bar">
          <div className="progresss-bar-inner"></div>
          </div>
        </div>
      </div>

      <div className="new-card">
      <div className="card-content">
      <p className="card-text-left">Pending Invoice</p>
        <div className="card-text-right">
          <p>15/92</p>
        </div>
        </div>
        <div className="progress-bar-container">
        
          <div className="progresss-bar">
          <div className="progresss-bar-inner2"></div>
          </div>
        </div>
      </div>

      <div className="new-card">
      <div className="card-content">
      <p className="card-text-left">Completed projects</p>
        <div className="card-text-right">
          <p>85/112</p>
        </div>
        </div>
        <div className="progress-bar-container">
        
          <div className="progresss-bar">
          <div className="progresss-bar-inner3"></div>
          </div>
        </div>
      </div>

      <div className="new-card">
      <div className="card-content">
      <p className="card-text-left">Open Tickets</p>
        <div className="card-text-right">
          <p>190/212</p>
        </div>
        </div>
        <div className="progress-bar-container">
        
          <div className="progresss-bar">
          <div className="progresss-bar-inner4"></div>
          </div>
        </div>
      </div>
      <div className="new-card">
      <div className="card-content">
      <p className="card-text-left">Closed Tickets</p>
        <div className="card-text-right">
          <p>22/212</p>
        </div>
        </div>
        <div className="progress-bar-container">
        
          <div className="progresss-bar">
          <div className="progresss-bar-inner5"></div>
          </div>
        </div>
      </div>

    </div>
    
    <div className="new-block">
    <div className="new-block-header">
        <h2>Task Statistics</h2>
      </div>
     
      <div className="small-block total-tasks">
        <p>Total tasks</p>
        <h3>385</h3>
    </div>
    <div className="small-block overdue-tasks">
        <p>Overdue tasks</p>
        <h3>19</h3>
    </div>
    <div className="progressss-bar">
        <div className="progress purple-bar" style={{ width: '30%',backgroundColor:"purple",borderRadius:"0" }}>30%</div>
        <div className="progress yellow-bar" style={{ width: '22%',backgroundColor:"orange" ,borderRadius:"0"}}>22%</div>
        <div className="progress green-bar" style={{ width: '24%' ,backgroundColor:"green",borderRadius:"0"}}>24%</div>
        <div className="progress red-bar" style={{ width: '21%' ,backgroundColor:"red",borderRadius:"0"}}>21%</div>
        <div className="progress blue-bar" style={{ width: '10%',backgroundColor:"blue" ,borderRadius:"0"}}>10%</div>
      </div>
   
      <div className="completed-tasks">
        <div className="completed-icon">
          <span className="icon"><FontAwesomeIcon icon={faCircleDot} /></span>
          <span className="completed-text">Completed tasks</span>
        </div>
        <div className="completed-count">
          <span>166</span>
        </div>
      </div>

      <div className="completed-tasks">
        <div className="completed-icon">
          <span className="icon2"><FontAwesomeIcon icon={faCircleDot} /></span>
          <span className="completed-text">Inprogress tasks</span>
        </div>
        <div className="completed-count">
          <span>115</span>
        </div>
      </div>

      <div className="completed-tasks">
        <div className="completed-icon">
          <span className="icon3"><FontAwesomeIcon icon={faCircleDot} /></span>
          <span className="completed-text">Onhold tasks</span>
        </div>
        <div className="completed-count">
          <span>31</span>
        </div>
      </div>

      <div className="completed-tasks">
        <div className="completed-icon">
          <span className="icon4"><FontAwesomeIcon icon={faCircleDot} /></span>
          <span className="completed-text">Pending tasks</span>
        </div>
        <div className="completed-count">
          <span>47</span>
        </div>
      </div>
      <div className="completed-tasks">
        <div className="completed-icon">
          <span className="icon5"><FontAwesomeIcon icon={faCircleDot} /></span>
          <span className="completed-text">Review tasks</span>
        </div>
        <div className="completed-count">
          <span>5</span>
        </div>
      </div>

    </div>
    <div className="new-block">
    <div className="new-block-header">
        <h2>Today Absent<span className='absent-number'>5</span></h2>
      </div>
      <div className="different-block">
      <div className="different-block-content">
        <FontAwesomeIcon icon={faUser} className="person-icon" style={{color:"white",padding:"5px",border:"1px solid gray",borderRadius:"1em 1em",backgroundColor:"gray"}}/>
        <span className="person-name">Leonel Messi</span>
      </div>
      <div className="additional-text">
        <p>4 Dec 2023</p>
      </div>
      <div className="leave-pending">
        <span className="leave-date">Leave date</span>
        <span className="pending-text">Pending</span>
      </div>
    </div>

    <div className="different-block2">
      <div className="different-block-content">
        <FontAwesomeIcon icon={faUser} className="person-icon" style={{color:"white",padding:"5px",border:"1px solid gray",borderRadius:"1em 1em",backgroundColor:"gray"}}/>
        <span className="person-name">Cristiano Ronaldo</span>
      </div>
      <div className="additional-text">
        <p>4 Dec 2023</p>
      </div>
      <div className="leave-pending">
        <span className="leave-date">Leave date</span>
        <span className="pending-text2">Approved</span>
      </div>
    </div>

    <div className="different-block2">
      <div className="different-block-content">
        <FontAwesomeIcon icon={faUser} className="person-icon" style={{color:"white",padding:"5px",border:"1px solid gray",borderRadius:"1em 1em",backgroundColor:"gray"}}/>
        <span className="person-name">Virat Kohli</span>
      </div>
      <div className="additional-text">
        <p>4 Dec 2023</p>
      </div>
      <div className="leave-pending">
        <span className="leave-date">Leave date</span>
        <span className="pending-text2">Approved</span>
      </div>
    </div>
<div className='load-more'>
 <button className='load-more-button'>Load more</button>
</div>
    </div>
  </div>


<div className="invoices-block-container">
  
    <div className="invoices-block-one">
      <div className="invoices-block-header">
        <h5>Invoices</h5>
      </div>
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Invoices ID</th>
            <th>Client</th>
            <th>Due Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="light-gray-background">
            <td>#inv-0001</td>
            <td>Global Technologies</td>
            <td>11 Mar 2023</td>
            <td>$380</td>
            <td>Partially Paid</td>
          </tr>
       
          <tr className="light-gray-background">
      
            <td>#inv-0002</td>
            <td>Delta infotech</td>
            <td>8 Feb 2023</td>
            <td>$500</td>
            <td>Paid</td>
          </tr>
          <tr className="light-gray-background">
           
            <td>#inv-0003</td>
            <td>Crem inc</td>
            <td>23 Nov 2023</td>
            <td>$60</td>
            <td>Unpiad</td>
          </tr>
          <tr className='light-gray-background'>
           <td colSpan={5} style={{textAlign:"center",fontWeight:"600"}}>
            View all invoices
           </td>
          </tr>
      
        </tbody>
      </table>
    </div>

  
    <div className="invoices-block-two">
    <div className="invoices-block-header">
        <h5>Payemnts</h5>
      </div>
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Invoices ID</th>
            <th>Client</th>
            <th>Payment Type</th>
            <th>Paid Date</th>
            <th>Paid Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="light-gray-background">
            <td>#inv-0001</td>
            <td>Global Technologies</td>
            <td>Paypal</td>
            <td>11 Mar 2023</td>
            <td>$380</td>
          </tr>
         
          <tr className="light-gray-background">
        
            <td>#inv-0002</td>
            <td>Delta infotech</td>
            <td>Paypal</td>
            <td>8 Feb 2023</td>
            <td>$500</td>
          </tr>
          <tr className="light-gray-background">
      
            <td>#inv-0003</td>
            <td>Crem inc</td>
            <td>Paypal</td>
            <td>23 Nov 2023</td>
            <td>$60</td>
          </tr>
          <tr className='light-gray-background'>
           <td colSpan={5} style={{textAlign:"center",fontWeight:"600"}}>
            View all invoices
           </td>
          </tr>
         
        </tbody>
      </table>


    </div>



  </div>

  <div className="invoices-block-container">
  
    <div className="invoices-block-one">
      <div className="invoices-block-header">
        <h5>Clients</h5>
      </div>
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="light-gray-background">
            <td className='cell-container'>
              <img src={img1} alt='profile'/>
              <span>Leo Messi</span>
            </td>
            <td>Leomessi@gmail.com</td>
            <td><FontAwesomeIcon icon={faCircleDot} style={{color:"green",fontSize:"15px"}} />Active<span style={{marginLeft:"3px"}}><FontAwesomeIcon icon={faCaretDown} /></span></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
           
          </tr>
        
          <tr className="light-gray-background">
            
            <td className='cell-container'>
              <img src={img2} alt='profile'/>
              <span>Cristiano Ronaldo</span>
            </td>
            <td>ronaldo7@gmail.com</td>
            <td><FontAwesomeIcon icon={faCircleDot} style={{color:"red",fontSize:"15px"}} />Inactive<span style={{marginLeft:"3px"}}><FontAwesomeIcon icon={faCaretDown} /></span></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
          <tr className="light-gray-background">
        
            <td className='cell-container'>
              <img src={img3} alt='profile'/>
              <span>Virat Kohli</span>
            </td>
            <td>Vkohli18@gmail.com</td>
            <td><FontAwesomeIcon icon={faCircleDot} style={{color:"green",fontSize:"15px"}} />Active<span style={{marginLeft:"3px"}}><FontAwesomeIcon icon={faCaretDown} /></span></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
         
          </tr>
          <tr className="light-gray-background">
          
            <td className='cell-container'>
              <img src={img4} alt='profile'/>
              <span>Eden Hazard</span>
            </td>
            <td>Edenhazard@gmail.com</td>
            <td><FontAwesomeIcon icon={faCircleDot} style={{color:"red",fontSize:"15px"}} />Inactive<span style={{marginLeft:"3px"}}><FontAwesomeIcon icon={faCaretDown} /></span></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
         
          </tr><tr className="light-gray-background">
        
            <td className='cell-container'>
              <img src={img5} alt='profile'/>
              <span>Neymar jr</span>
            </td>
            <td>Neymarjr11@gmail.com</td>
            <td><FontAwesomeIcon icon={faCircleDot} style={{color:"green",fontSize:"15px"}} />Active<span style={{marginLeft:"3px"}}><FontAwesomeIcon icon={faCaretDown} /></span></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
         
          </tr>
          <tr className='light-gray-background'>
           <td colSpan={5} style={{textAlign:"center",fontWeight:"600"}}>
            View all Clients
           </td>
          </tr>
         
        </tbody>
      </table>
    </div>


    <div className="invoices-block-two">
    <div className="invoices-block-header">
        <h5>Payemnts</h5>
      </div>
      <table className="invoices-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Progress</th>
            <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          <tr className="light-gray-background">
            <td>Office Management
            <div style={{ fontSize: '12px', fontWeight:"bold" }}>1 <span style={{color:"gray"}}>open task,</span> 9 <span style={{color:"gray"}}>tasks completed</span></div>
            </td>
            <td> <ProgressBar now={70} variant="warning" style={{height:"5px"}} /></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
        
          <tr className="light-gray-background">
            <td>Project Management
            <div style={{ fontSize: '12px', fontWeight:"bold" }}>2 <span style={{color:"gray"}}>open task,</span> 6 <span style={{color:"gray"}}>tasks completed</span></div>
            </td>
            <td> <ProgressBar now={20} variant="warning" style={{height:"5px"}} /></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
          <tr className="light-gray-background">
            <td>Video Calling APP
            <div style={{ fontSize: '12px', fontWeight:"bold" }}>3 <span style={{color:"gray"}}>open task,</span> 3 <span style={{color:"gray"}}>tasks completed</span></div>
            </td>
            <td> <ProgressBar now={50} variant="warning" style={{height:"5px"}} /></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
          <tr className="light-gray-background">
            <td>Hospital Administration
            <div style={{ fontSize: '12px', fontWeight:"bold" }}>12 <span style={{color:"gray"}}>open task,</span> 4 <span style={{color:"gray"}}>tasks completed</span></div>
            </td>
            <td> <ProgressBar now={90} variant="warning" style={{height:"5px"}} /></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
          <tr className="light-gray-background">
            <td>Digital Marketplace
            <div style={{ fontSize: '12px', fontWeight:"bold" }}>7 <span style={{color:"gray"}}>open task,</span> 14 <span style={{color:"gray"}}>tasks completed</span></div>
            </td>
            <td> <ProgressBar now={100} variant="warning" style={{height:"5px"}} /></td>
            <td><FontAwesomeIcon icon={faEllipsisVertical} /></td>
          
          </tr>
          <tr className='light-gray-background'>
           <td colSpan={5} style={{textAlign:"center",fontWeight:"600"}}>
            View all projects
           </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  </div>
</>
     
  );
};

export default AdminPage;
