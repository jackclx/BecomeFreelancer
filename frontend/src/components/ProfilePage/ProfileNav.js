import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

export const ProfileNav = () => {
    const [activeLink, setActiveLink] = useState('ProfileAbout');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav-custom">
                        <Nav.Link as={Link} smooth to="#ProfileAbout" className={activeLink === 'ProfileAbout' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ProfileAbout')}>About</Nav.Link>
                        <Nav.Link as={Link} smooth to="#ProfileExperiences" className={activeLink === 'ProfileExperiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ProfileExperiences')}>Experiences</Nav.Link>
                        <Nav.Link as={Link} smooth to="#ProfilePricing" className={activeLink === 'ProfilePricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ProfilePricing')}>Pricing</Nav.Link>
                        <Nav.Link as={Link} smooth to="#ProfileReviews" className={activeLink === 'ProfileReviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ProfileReviews')}>Reviews</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}