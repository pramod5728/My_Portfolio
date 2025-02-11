import React, {useState} from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "3d-portfolio-website/src/components/cards/ProjectCard.jsx";  // Adjust the path if necessary


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    padding: 0px 16px;
    position: relative;
    z-index: 1;
    align-items: center;
    background: ${({ theme }) => theme.bg}; /* Ensure it uses the theme background */
    color: ${({ theme }) => theme.text_primary};
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size:52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;


const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;
    display: flex;
    gap: 8px;
    

    @media (max-width: 768px){
    font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px; /* Consistent padding */
    border-radius: 6px;
    cursor: pointer;
  text-align: center; /* Centers text */
  display: flex; /* Ensure proper alignment */
  align-items: center; /* Vertically center text */
  justify-content: center; /* Horizontally center text */
  transition: background 0.3s ease, transform 0.2s ease; /* Smooth transitions */

    &:hover {
    background: ${({ theme }) => theme.primary + "20"}; /* Hover background */
        }

    ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + "20"}; /* Active state background */
    border: 2px solid ${theme.primary}; /* Optional border for active state */
    `}

  /* Ensure consistent size regardless of state */
    border: ${({ active, theme }) =>
    active ? `2px solid ${theme.primary}` : "2px solid transparent"};
  box-sizing: border-box; /* Ensures padding and border are included in size */

    @media (max-width: 768px) {
    padding: 6px 12px; /* Adjust for smaller screens */
    font-size: 12px; /* Smaller text size */
    }
`;


const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
  align-self: stretch; /* Ensures it stretches to the container's height */
  margin: 0 8px; /* Adds spacing between the buttons */
  display: block; /* Ensures it behaves like a block element */
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;


const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container id="Projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}>
                        I have  worked on a wide range of projects. Here are some of my projects.
                </Desc>

                <ToggleButtonGroup>
                    <ToggleButton
                        active= {toggle==="all"}
                        onClick={() => setToggle("all")}>ALL
                    </ToggleButton>

                    <Divider />

                    <ToggleButton 
                        active={toggle === "web app"}
                        onClick={() => setToggle("web app")}>WEB APP"S
                    </ToggleButton>

                    <Divider />

                    <ToggleButton 
                        active={toggle === "machine learning"}
                        onClick={() => setToggle("machine learning")}>MACHINE LEARNING
                    </ToggleButton>

                </ToggleButtonGroup>

                <CardContainer>
                    {toggle === "all" && 
                        projects.map((project) => <ProjectCard  project={project}/>)}
                        {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard  project={project}/>
                        ))}  
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;