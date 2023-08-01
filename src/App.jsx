import React, { useState, useEffect, useRef } from "react";
import reactLogo from './assets/react.svg'
import { AiOutlineDown, AiOutlineUp, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import viteLogo from '/vite.svg'
import { useTable } from "react-table";
import { CiMap, CiPhone, CiMail } from 'react-icons/ci';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCustomers().then(setData);
  }, []);

  const AddCustomerHandler = (name, surname, email, phone_number) => {
    createCustomer({ name, surname, email, phone_number }).then(() => {
      fetchCustomers().then(setData);
    });
  };

  const deleteCustomerHandler = (customerId) => {
    deleteCustomer(customerId)
      .then(() => {
        fetchCustomers().then(setData);
      })
  };

  const refs = Array.from({ length: 35 }, () => useRef(null));

  const isInViewport = useIsInViewport(refs);

  return (
    <>
      <Navbar/>
      <div id='home' className='container'>
        <a href='#about'>
          <div className='overlay'>
            <div className='border'>
              <p className='bigfont'>Łukasz Harkot</p>
            </div>
            <div className='test'>
              <p className='smallfont' style={{fontFamily: 'monospace'}}>Scroll Down</p><AiOutlineDown/>
            </div>
          </div>
        </a>  
      </div>
      {/* About Me */}
      <div id='about' style={{ height: '910px', width: '100%', backgroundColor: 'white', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{position: 'relative', width: '1200px', height: '800px'}}>
          <div style={{position: 'absolute', top: '15%', left: '5%'}}>
            <img src="/site/IMG_3570.png" alt="XD Placeholder" />
          </div>
          <div style={{ display: 'flex',position: 'absolute', top: '10%', left: '8%' }}>
            <div ref={refs[0]} style={{display: 'flex'}}>
              <div className={`slideInleft ${isInViewport[0] ? 'animated' : ''}`} style={{ animationDuration: '0.75s', backgroundColor: 'black', width:' 170px', height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
                <h1 style={{color: 'white'}}>About</h1>
              </div>
              <div className={`slideInleft ${isInViewport[0] ? 'animated' : ''}`} style={{ height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
                <h1 style={{color: 'black', padding: '0 6px'}}>Me</h1>
              </div>
            </div>
            <div ref={refs[1]} className={`slideInright ${isInViewport[1] ? 'animated' : ''}`} style={{position: 'absolute', backgroundColor: 'black', height: '450px', width: '700px', justifyContent: 'center', alignItems:'center', display: 'flex', top: '120%', left: '140%'}}>
              <div style={{height: '350px', width: '600px'}}>
                <p ref={refs[2]} className={`slideInbottom ${isInViewport[2] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>I am currently studying Social Informatics at AGH University of Science and Technology in Cracow. I am planning a career as a web developer. In my free time I like to refine my passions. One of which is web development. <br/><br/>Nie wiem co tu napisać, siemano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '90px', width: '100%', backgroundColor: 'black', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}></div>
      {/* Frontend */}
      <div id='frontend' style={{ height: '1050px', width: '100%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
        <div style={{position: 'relative', width: '1200px', height: '900px'}}>
          <div ref={refs[10]} className={`slideInbottom ${isInViewport[10] ? 'animated' : ''}`} style={{backgroundColor: 'black', width:' 250px', height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex', top:'2%', left: '40%', position: 'absolute'}}>
            <h1 style={{color: '#d9d9d3'}}>Frontend</h1>
          </div>
          <div ref={refs[11]} className={`slideInbottom ${isInViewport[11] ? 'animated' : ''}`} style={{position: 'absolute', top: '10%', left: '41.5%'}}>
            <h1 style={{fontSize: '25px'}}>React + JavaScript</h1>
          </div>
          <div ref={refs[12]} className={`slideInbottom ${isInViewport[12] ? 'animated' : ''}`} style={{backgroundColor: 'black', height: '630px', width: '500px', position:'absolute', top: '22%', left: '5%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <div style={{height: '530px', width: '400px'}}>
              <p ref={refs[13]} className={`slideInbottom ${isInViewport[13] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>
                <strong>React </strong>is a JavaScript library for building user interfaces<br/><br/>
                The key features are:<br/>
                <br/><li><strong>Declarative:</strong> <br/>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. 
                <br/>Declarative views make your code more predictable and easier to debug.</li>
                <br/><li><strong>Component-Based:</strong> <br/>Build encapsulated components that manage their own state, then compose them to make complex UIs. 
                <br/>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</li>
                <br/><li><strong>Learn Once, Write Anywhere:</strong> We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. 
                <br/>React can also render on the server using Node and power mobile apps using React Native.</li></p>
            </div>
          </div>
          <div ref={refs[14]} className={`slideInbottomVisable ${isInViewport[14] ? 'animated' : ''}`} style={{border: '16px solid', borderColor:'#d9d9d3',backgroundColor:'#d9d9d3', height: '420px', width: '600px', position:'absolute', top:'29%', left: '45%'}}></div>
          <div ref={refs[15]} className={`slideInbottom ${isInViewport[15] ? 'animated' : ''}`} style={{position: 'absolute', top: '29%', right: '11%'}}>
            <img src="/site/react.png" alt="React" width={'505px'}/>
          </div>
          <div ref={refs[16]} className={`slideInbottom ${isInViewport[16] ? 'animated' : ''}`} style={{position: 'absolute', top: '54%', right: '12%'}}>
            <img src="/site/javascript.png" alt="JavaScript" width={'475px'}/>
          </div>
        </div>
      </div>
      {/* Backend */}
      <div id='backend' style={{ height: '1000px', width: '100%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
        <div style={{position: 'relative', width: '1200px', height: '900px'}}>
          <div ref={refs[3]} className={`slideInbottom ${isInViewport[3] ? 'animated' : ''}`} style={{backgroundColor: 'black', width:' 250px', height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex', top:'6%', right: '40%', position: 'absolute'}}>
            <h1 style={{color: '#d9d9d3'}}>Backend</h1>
          </div>
          <div ref={refs[4]} className={`slideInbottom ${isInViewport[4] ? 'animated' : ''}`} style={{animationDuration: '1s' ,position: 'absolute', top: '14%', right: '47%'}}>
            <h1 style={{fontSize: '25px'}}>FastAPI</h1>
          </div>
          <div ref={refs[5]} className={`slideInbottom ${isInViewport[5] ? 'animated' : ''}`} style={{backgroundColor: 'black', height: '615px', width: '500px', position:'absolute', top: '25%', right: '5%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <div style={{height: '515px', width: '400px'}}>
              <p ref={refs[6]} className={`slideInbottom ${isInViewport[6] ? 'animated' : ''}`} style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>
                <strong>FastAPI</strong> is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.<br/><br/>
                The key features are:<br/>
                <li><strong>Fast:</strong> Very high performance, on par with NodeJS and Go (thanks to Starlette and Pydantic). One of the fastest Python frameworks available.</li>
                <li><strong>Fast to code:</strong> Increase the speed to develop features by about 200% to 300%. *</li>
                <li><strong>Fewer bugs:</strong> Reduce about 40% of human (developer) induced errors.</li>
                <li><strong>Intuitive:</strong> Great editor support. Completion everywhere. Less time debugging.</li>
                <li><strong>Easy:</strong> Designed to be easy to use and learn. Less time reading docs.</li>
                <li><strong>Short:</strong> Minimize code duplication. Multiple features from each parameter declaration. Fewer bugs.</li>
                <li><strong>Robust:</strong> Get production-ready code. With automatic interactive documentation.</li>
                <li><strong>Standards-based:</strong> Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.</li><br/>
                <b>And that is what I am using today!</b></p>
            </div>
          </div>
          <div ref={refs[7]} className={`slideInbottomVisable ${isInViewport[7] ? 'animated' : ''}`} style={{opacity: '1' , border: '16px solid', borderColor:'#d9d9d3',backgroundColor:'#d9d9d3', height: '420px', width: '600px', position:'absolute', top:'32%', right: '45%'}}></div>
          <div ref={refs[8]} className={`slideInbottom ${isInViewport[8] ? 'animated' : ''}`} style={{position: 'absolute', top: '31%', left: '12%'}}>
            <img src="/site/python.png" alt="Python" width={'450px'}/>
          </div>
          <div ref={refs[9]} className={`slideInbottom ${isInViewport[9] ? 'animated' : ''}`} style={{position: 'absolute', top: '55%', left: '12%'}}>
            <img src="/site/fastapi.png" alt="FastApi" width={'450px'}/>
          </div>
        </div>
      </div>
      {/* Combination */}
      <div id='combination' style={{ height: '1500px', width: '100%', justifyContent: 'center', alignItems:'center', display: 'flex',backgroundColor: 'white', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}>
        <div style={{position: 'relative', width: '1200px', height: '1400px'}}>
          <div ref={refs[17]} className={`appear ${isInViewport[17] ? 'animated' : ''}`} style={{backgroundColor: 'black', width:' 365px', height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex', top:'6%', left: '34%', position: 'absolute'}}>
            <h1 style={{color: 'white'}}>Combination</h1>
          </div>
          <div ref={refs[18]} className={`appear ${isInViewport[18] ? 'animated' : ''}`} style={{position: 'absolute', top: '11%', left: '42%'}}>
            <h1 style={{fontSize: '25px'}}>React + FastApi</h1>
          </div>
          <div ref={refs[19]} className={`appear ${isInViewport[19] ? 'animated' : ''}`} style={{backgroundColor: 'white', height: '292px', width: '692px', position:'absolute', top: '18%', right: '5%', justifyContent: 'center', alignItems:'center', display: 'flex', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border: '4px solid', borderRadius: '20px'}}>
            <div style={{ height: '200px', width: '500px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
              <AddCustomerForm onAdd={AddCustomerHandler}/>
            </div>
          </div>
          <div ref={refs[20]} className={`appearDelayed ${isInViewport[20] ? 'animated' : ''}`} style={{backgroundColor: 'black', height: '300px', width: '350px', position:'absolute', top: '18%', left: '5%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Add Customer</p>
          </div>
          <div ref={refs[21]} className={`appear ${isInViewport[21] ? 'animated' : ''}`} style={{backgroundColor: 'white', height: '492px', width: '692px', position:'absolute', top: '41.5%', left: '5%', justifyContent: 'center', alignItems:'center', display: 'flex', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', border: '4px solid', borderColor: '#262626', borderRadius: '20px'}}>
            <div style={{ height: '492px', width: '692px', justifyContent: 'center', alignItems:'center', display: 'flex',}}>
              <MyTable data={data}  onDelete={deleteCustomerHandler}/>
            </div>
          </div>
          <div ref={refs[22]} className={`appearDelayed ${isInViewport[22] ? 'animated' : ''}`} style={{backgroundColor: 'black', height: '500px', width: '350px', position:'absolute', top: '41.5%', right: '5%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Get and inline edit</p>
          </div>
          <div ref={refs[23]} className={`appearDelayed ${isInViewport[23] ? 'animated' : ''}`} style={{backgroundColor: 'black', height: '240px', width: '1080px', position:'absolute', top: '79.5%', right: '5%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
            <p style={{fontFamily: 'monospace', color: '#b3b3b3', textAlign: 'justify'}}>Here text fix essa</p>
          </div>
        </div>
      </div>
      <div style={{ height: '90px', width: '100%', backgroundColor: 'black', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}></div>
      {/* Contact */}
      <div id='contact' style={{ height: '850px', width: '100%', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
        <div style={{position: 'relative', width: '1200px', height: '700px'}}>
            <div ref={refs[24]} className={`appear ${isInViewport[24] ? 'animated' : ''}`} style={{ position: 'absolute', top: '11%', left: '37%' , backgroundColor: 'black', width:' 210px', height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
              <h1 style={{color: 'white'}}>Contact</h1>
            </div>
            <div ref={refs[25]} className={`appear ${isInViewport[25] ? 'animated' : ''}`} style={{ position: 'absolute', top: '11%', left: '54.5%' ,height: '80px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
              <h1 style={{color: 'black', padding: '0 6px'}}>Me</h1>
            </div>
            <div style={{position:'relative', top: '200px', left:'0', right:'0', margin: '0 auto', width: '600px', height: '450px'}}>
              <div style={{position:'absolute', top: '20px', left: '0px', display: "flex", justifyContent: 'space-around', alignItems:'center', width: '560px'}}>
                <div ref={refs[26]} className={`appearDelayed ${isInViewport[26] ? 'animated' : ''}`} style={{position:'absolute', top: '10px', left: '100px'}}>
                  <CiMap fontSize={'85px'}/>
                </div>
                <div>
                  <p ref={refs[27]} className={`appearDelayed ${isInViewport[27] ? 'animated' : ''}`} style={{position:'absolute', top: '0px', left: '350px', fontFamily: 'monospace', fontSize:'20px'}}><strong>ADDRESS</strong></p>
                  <p ref={refs[28]} className={`appearMoreDelayed ${isInViewport[28] ? 'animated' : ''}`} style={{position:'absolute', top: '40px', left: '350px',fontFamily: 'monospace', fontSize:'15px'}}>Cracow, Poland</p>
                </div>
              </div>
              <div style={{position:'absolute', top: '150px', left: '0px', display: "flex", justifyContent: 'space-around', alignItems:'center', width: '560px'}}>
                <div ref={refs[29]} className={`appear ${isInViewport[29] ? 'animated' : ''}`} style={{position:'absolute', top: '10px', left: '100px'}}>
                  <CiPhone fontSize={'85px'}/>
                </div>
                <div>
                  <p ref={refs[30]} className={`appearDelayed ${isInViewport[30] ? 'animated' : ''}`} style={{position:'absolute', top: '0px', left: '350px', fontFamily: 'monospace', fontSize:'20px'}}><strong>PHONE NUMBER</strong></p>
                  <p ref={refs[31]} className={`appear ${isInViewport[31] ? 'animated' : ''}`} style={{position:'absolute', top: '40px', left: '350px',fontFamily: 'monospace', fontSize:'15px'}}>+48 796 248 ***</p>
                </div>
              </div>
              <div style={{position:'absolute', top: '300px', left: '0px', display: "flex", justifyContent: 'space-around', alignItems:'center', width: '560px'}}>
                <div ref={refs[32]} className={`appearMoreDelayed ${isInViewport[32] ? 'animated' : ''}`} style={{position:'absolute', top: '10px', left: '100px'}}>
                  <CiMail fontSize={'85px'}/>
                </div>
                <div>
                  <p ref={refs[33]} className={`appear ${isInViewport[33] ? 'animated' : ''}`} style={{position:'absolute', top: '0px', left: '350px', fontFamily: 'monospace', fontSize:'20px'}}><strong>EMAIL</strong></p>
                  <p ref={refs[34]} className={`appearMoreDelayed ${isInViewport[34] ? 'animated' : ''}`}style={{position:'absolute', top: '40px', left: '350px',fontFamily: 'monospace', fontSize:'15px'}}>lukasz.harkot22@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* End */}
      <div style={{ height: '160px', width: '100%', backgroundColor: 'black', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', position: 'relative', justifyContent: 'center', alignItems:'center', display: 'flex' }}>
        <p className="created-by" style={{fontFamily: 'monospace', position:'absolute', bottom: '2%', right: '0.5%'}}>© 2023 Łukasz Harkot. All Rights Reserved.</p>
        <div style={{height: '50px', width:'200px', justifyContent: 'center', alignItems:'center', display: 'flex'}}>
          <a href='https://www.facebook.com/lukas.harkot/'><AiFillFacebook className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
          <a href='https://www.linkedin.com/'><AiFillLinkedin className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
          <a href='https://twitter.com/'><AiFillTwitterSquare className='end' style={{fontSize:'40px', padding:'0 5px'}}/></a>
        </div>
        <a href='#home'><div className='upclick' style={{ height: '50px', width: '50px', position: 'absolute', bottom: '84%', right:'0', left:'0', margin:'0 auto', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', justifyContent: 'center', alignItems:'center', display: 'flex' }}><AiOutlineUp style={{fontSize: '23px'}}/></div></a>
      </div>
    </>
  );
}

function useIsInViewport(refs) {
  const [isIntersecting, setIsIntersecting] = useState(refs.map(() => false));

  useEffect(() => {
    const observers = refs.map((ref, index) =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting((prev) => {
            const newIsIntersecting = [...prev];
            newIsIntersecting[index] = true;
            return newIsIntersecting;
          });
          // Once it becomes visible, disconnect the observer to prevent further updates
          observers[index].disconnect();
        }
      })
    );

    refs.forEach((ref, index) => observers[index].observe(ref.current));

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refs]);

  return isIntersecting;
}

const Navbar = () => {
  const [scrolledSection, setScrolledSection] = useState('');
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const homeOffset = document.getElementById('home').offsetTop;
    const aboutOffset = document.getElementById('about').offsetTop - 61;
    const frontendOffset = document.getElementById('frontend').offsetTop - 61;
    const backendOffset = document.getElementById('backend').offsetTop - 61;
    const combinationOffset = document.getElementById('combination').offsetTop - 61;
    const contactOffset = document.getElementById('contact').offsetTop - 61;

    const scrollPosition = window.scrollY;

    if (scrollPosition < aboutOffset) {
      setScrolledSection('home');
    } else if (scrollPosition >= aboutOffset && scrollPosition < frontendOffset) {
      setScrolledSection('about');
    } else if (scrollPosition >= frontendOffset && scrollPosition < backendOffset) {
      setScrolledSection('frontend');
    } else if (scrollPosition >= backendOffset && scrollPosition < combinationOffset) {
      setScrolledSection('backend');
    } else if (scrollPosition >= combinationOffset && scrollPosition < contactOffset) {
      setScrolledSection('combination');
    } else {
      setScrolledSection('contact');
    }

    if (scrolledSection === 'about' || scrolledSection === 'combination') {
      setWhiteBackground(true);
    } else {
      setWhiteBackground(false);
    }

    const isScrolled = scrollPosition > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolledSection]);

  return (
    <nav className={`navbar ${whiteBackground ? 'white-bg' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <a href='/' style={{justifyContent:'center', alignItems:'center',display:'flex'}}>
      <div className="logo-container">
        {/* Add your logo here */}
        <div className={`logo ${scrolled ? 'scrolled' : ''}`}>
              <p className='bigfont' style={{fontSize: '14px'}}>Łukasz Harkot</p>
        </div>
      </div>
      </a>
      <ul className={`nav-links ${scrolled ? 'scrolled' : ''}`} style={{fontFamily: 'monospace'}}>
        <li className={scrolledSection === 'home' ? 'active' : ''}>
          <a href='#home'>HOME</a>
        </li>
        <li className={scrolledSection === 'about' ? 'active' : ''}>
          <a href='#about'>ABOUT ME</a>
        </li>
        <li className={scrolledSection === 'frontend' ? 'active' : ''}>
          <a href='#frontend'>FRONTEND</a>
        </li>
        <li className={scrolledSection === 'backend' ? 'active' : ''}>
          <a href='#backend'>BACKEND</a>
        </li>
        <li className={scrolledSection === 'combination' ? 'active' : ''}>
          <a href='#combination'>COMBINATION</a>
        </li>
        <li className={scrolledSection === 'contact' ? 'active' : ''}>
          <a href='#contact'>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export const AddCustomerForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const onSubmitHandler = (e) => {
      e.preventDefault();
      onAdd(name, surname, email, phone_number);
      setName("");
      setSurname("");
      setEmail("");
      setPhone_number("");
  };

  return (
      <form onSubmit={onSubmitHandler}>
          <Input
              placeholder = "Name"
              style={{width: '450px', padding: '10px 5px 10px', borderRadius:'7px', fontFamily: 'monospace', color: 'black', marginBottom: '5px'}}
              value = {name}
              onChange = {(e) => setName(e.currentTarget.value)}
          />
          <Input
              placeholder = "Surname"
              style={{ width: '450px', padding: '10px 5px 10px', borderRadius:'7px', fontFamily: 'monospace', color: 'black', marginBottom: '5px'}}
              value = {surname}
              onChange = {(e) => setSurname(e.currentTarget.value)}
          />
          <Input
              placeholder = "Email"
              style={{ width: '450px', padding: '10px 5px 10px', borderRadius:'7px', fontFamily: 'monospace', color: 'black', marginBottom: '5px'}}
              value = {email}
              onChange = {(e) => setEmail(e.currentTarget.value)}
          />
          <Input
              placeholder = "Phone number"
              style={{ width: '450px', padding: '10px 5px 10px', borderRadius:'7px', fontFamily: 'monospace', color: 'black', marginBottom: '15px'}}
              value = {phone_number}
              onChange = {(e) => setPhone_number(e.currentTarget.value)}
          />
          <Button type="submit">Add</Button>      
      </form>
  )
}

function MyTable({data, onDelete}) {

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        width: "50px",
      },
      {
        Header: "Surname",
        accessor: "surname",
        width: "50px",
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: " ",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{ height: "492px", width: '692px', overflow: "auto", borderRadius: '9px'}}>
      <table
        {...getTableProps()}
        style={{ fontSize: "11px", tableLayout: "fixed", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    padding: "16px", // Adjust the padding as needed
                    margin: "0", // Adjust the margin as needed
                    textAlign: 'center',
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      padding: "15px", // Adjust the padding as needed
                      margin: "0", // Adjust the margin as needed
                      color: 'black',
                      textAlign: 'center',
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const Input = ({ type, placeholder, value, onChange, ...restProps }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
};

const Button = ({ type, children, ...restProps }) => {
  return (
    <button type={type} {...restProps}>
      {children}
    </button>
  );
};

const fetchCustomers = () =>
    fetch("http://127.0.0.1:8000/customers").then((res) => res.json());

const createCustomer = ({ name, surname, email, phone_number }) =>
    fetch("http://127.0.0.1:8000/customers", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            phone_number: phone_number,
        }),
    }).then((res) => res.json());

export default App

