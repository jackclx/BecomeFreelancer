import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ExperienceCard } from "./ExperienceCard";
import lucas4 from '../../images/lucas4.png';
import lucas5 from '../../images/lucas5.png';
import lucas6 from '../../images/lucas6.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const ProfileExperiences = () => {
    const projects = [
        {
            title: "Collaboration with Mothership",
            description: "Lucas is a talented singer and guitarist known for his captivating performances.",
            imgUrl: lucas4,
            url: "https://www.instagram.com/mothershipsg/reel/C7y2bhGBOP2/"
        },
        {
            title: "Live Performance",
            description: "Lucas performs at various venues, captivating the audience with his soulful music.",
            imgUrl: lucas5,
            url: "https://www.instagram.com/mothershipsg/reel/C7y2bhGBOP2/"
        },
        {
            title: "Studio Recording",
            description: "Studio Recording: Lucas records his music in professional studios to ensure the best quality for his fans.",
            imgUrl: lucas6,
            url: "https://www.instagram.com/mothershipsg/reel/C7y2bhGBOP2/"
        },

    ];

    return (
        <section className="project" id="ProfileExperiences">
            <h2>Experiences</h2>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ExperienceCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Container>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
