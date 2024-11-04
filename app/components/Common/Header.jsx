"use client";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { usePathname, useRouter } from 'next/navigation'
import Image from "next/image";
import logo from "../../assets/images/checkvaleylogo.png";
import search from "../../assets/images/icon/search.svg";
import cart from "../../assets/images/icon/cart.svg";
import user from "../../assets/images/icon/user.svg";
import call from "../../assets/images/icon/call.svg";
import apiRequest from "../../Api/index";

const Header = () => {
  const [content, setContent] = useState({
    header: null,
    headerMenu: null,
  });

  const [isSticky, setIsSticky] = useState(false); 

  const router = useRouter();

  const cleanPath = (path) => {
    if (path === "/") {
      return path; 
    }
    

    if ( path.endsWith("/")) {
      return path.slice(0, -1); 
    }
  
    return path; 
  };

  const isActive = (path) => usePathname() === path;
  

  const Headerdata = async () => {
    try {
      const data = await apiRequest("GET", `/header`);
      setContent((cont) => ({
        ...cont,
        header: data,
      }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  function convertObjectToArray(obj) {
    return Object.values(obj);
  }

  const headerMenu = async () => {
    try {
      const data = await apiRequest("GET", `/menu/primary`);
      const outputArray = convertObjectToArray(data);
      setContent((cont) => ({
        ...cont,
        headerMenu: outputArray,
      }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    Headerdata();
    headerMenu();
  }, []);

  return (
    <header>
      <Navbar
        bg="white"
        variant="white"
        expand="lg"
        className={`fixed-top ${isSticky ? "sticky" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand onClick={() => router.push("/")}>
            {
              content?.header?.logo && <Image src={content?.header?.logo} alt="logo" className="App-logo" width={150} height={50} />
            }
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {content?.headerMenu?.map((data, index) => (
                (data?.title !== 'More' && data?.title !== 'The Experience' && data?.title !== 'Store') ? (
                  <Nav.Link key={index} className={isActive(cleanPath(data?.url)) &&"active"}  onClick={() => router.push(data?.url)}>
                    {data?.title}
                
                  </Nav.Link>
                ) : (
                  <Nav key={index} style={{ padding: '6px 10px', fontSize:'14px' }}>
                    {data?.title}
                  </Nav>
                )
              ))}
            </Nav>
            <div className="right-side d-flex align-items-center">
              <Button>
                <Image src={search} alt="icon" width={24} height={24} />
              </Button>
              <Button>
                <Image src={cart} alt="icon" width={24} height={24} />
              </Button>
              <Button>
                <Image src={user} alt="icon" width={24} height={24} />
              </Button>
              <a
                href="tel:6319720797"
                className="d-flex align-items-center contact-btn"
              >
                <Image src={call} alt="icon" className="me-2" width={24} height={24} />
                {content?.header?.phone}
              </a>
            </div>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
