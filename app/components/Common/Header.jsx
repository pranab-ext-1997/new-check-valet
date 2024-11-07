"use client";
import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "../../assets/images/checkvaleylogo.png";
import search from "../../assets/images/icon/search.svg";
import cart from "../../assets/images/icon/cart.svg";
import user from "../../assets/images/icon/user.svg";
import call from "../../assets/images/icon/call.svg";
import apiRequest from "../../Api/index";
import { flashmsg } from "@/app/GlobalFunction";

const Header = () => {
  const sidebarRef = useRef(null);
  const [content, setContent] = useState({
    header: null,
    headerMenu: null,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const cleanPath = (path) => (path === "/" || !path.endsWith("/")) ? path : path.slice(0, -1);
  const isActive = (path) => pathname === path;

  const fetchData = async () => {
    try {
      const [headerData, menuData] = await Promise.all([
        apiRequest("GET", `/header`),
        apiRequest("GET", `/menu/primary`)
      ]);
      setContent({
        header: headerData,
        headerMenu: Object.values(menuData),
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleNavClick = (url) => {
    router.push(url);
    setIsSidebarOpen(false);
  };

  useEffect(() => {

    fetchData();


    const handleScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);


    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <header>
      <Navbar
        bg="white"
        variant="white"
        expand="lg"
        expanded={isSidebarOpen}
        className={`fixed-top ${isSticky ? "sticky" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand onClick={() => router.push("/")}>
            {content?.header?.logo && <Image src={content?.header?.logo} alt="logo" width={150} height={50} />}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <Navbar.Collapse ref={sidebarRef} id="basic-navbar-nav">
            <Nav className="m-auto">
              {content?.headerMenu?.map((data, index) => (
                data?.title !== 'More' && data?.title !== 'The Experience' && data?.title !== 'Store' ? (
                  <Nav.Link key={index} className={isActive(cleanPath(data?.url)) && "active"} onClick={() => handleNavClick(data?.url)}>
                    {data?.title}
                  </Nav.Link>
                ) : (
                  <Nav key={index} style={{ padding: '6px 10px', fontSize: '14px' }}>
                    {data?.title}
                  </Nav>
                )
              ))}
            </Nav>
            <div className="right-side d-flex align-items-center">
              <Button onClick={() => flashmsg()}><Image src={search} alt="icon" width={24} height={24} /></Button>
              <Button onClick={() => flashmsg()}><Image src={cart} alt="icon" width={24} height={24} /></Button>
              <Button onClick={() => flashmsg()}><Image src={user} alt="icon" width={24} height={24} /></Button>
              <a href="tel:6319720797" className="d-flex align-items-center contact-btn">
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
