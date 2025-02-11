import React from "react";
import styled from "styled-components";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: relative;
`;

const FooterWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
`;

const Nav = styled.nav`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.text_primary};
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.text_primary};
    }
`;

const Copyright = styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.soft2};
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Pramod Dilshan</Logo>
                <Nav>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experience</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href="https://facebook.com/yourprofile" target="_blank">
                        <FaFacebook />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://www.linkedin.com/in/pramod-dilshan-104911334/" target="_blank">
                        <FaLinkedin />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://github.com/pramod5728" target="_blank">
                        <FaGithub />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://instagram.com/yourprofile" target="_blank">
                        <FaInstagram />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2025 Pramod Dilshan. All rights reserved.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
