import React from 'react';
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpg";
import HeroBgAnimation from "../../components/HeroBgAnimation/HeroBgAnimation";
import { Tilt } from "react-tilt";
import StarCanvas from "../canvas/Stars";


const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;
    
    @media(max-width: 960px){
        padding: 66px 16px;
    }

    @media(max-width: 640px){
        padding: 32px 16px;
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media(max-width: 960px){
        flex-direction: column;
    }
`;
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;

    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;

    @media (max-width: 960px) {
        order: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-contents: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const ImgWrapper = styled.div`
    border-radius: 50%;
    width: 350px; 
    height: 350px; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 640px) {
        width: 140px;
        height: 140px;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;;
    color: ${({ theme}) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme}) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.div`
    cursor: pointer;
    color: ${({ theme}) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme}) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;

    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%,
    );
    background: -moz-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%,
    );
    background: -webkit-linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%,
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;

        &:hover {
            transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1f2634,
        filter: brightness(1);
        }

        @media (max-width: 640px) {
            padding: 12px 0;
            font-size: 18px;
        }
`;

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme}) => theme.primary};

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
        object-position: center 15%;
    }
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const handleDownload = () => {
    const resumePath = "/Pramod_Dilshan_CV.pdf"; // Ensure this file is inside the 'public' folder
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Pramod_Dilshan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                        <StarCanvas/>
                    <HeroBgAnimation />

                </HeroBg>

                    <HeroInnerContainer>
                        <HeroLeftContainer>

                                <Title>
                                    Hi, I am <br /> {Bio.name}
                                </Title>
                                <TextLoop>
                            I am a
                            <Span>
                                <Typewriter 
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>

                        </TextLoop>
                    
                        <SubTitle>{Bio.description}</SubTitle>

                        
                        <ResumeButton onClick={handleDownload}>
    Check Resume
</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                    
                    <Tilt>
                        <ImgWrapper>
                            <Img src={HeroImg} alt="Pramod Dilshan" />
                        </ImgWrapper>
                    </Tilt>
                    
                    </HeroRightContainer>
                </HeroInnerContainer>
                
            </HeroContainer>
        </div>
    );
};

export default Hero