import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <div>
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="girl-removebg-preview.png"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            I'm Bhavya A, currently immersed in my Bachelor's journey in Artificial Intelligence and Data Science at Kumaraguru College of Technology. My passion lies in the realm of AI and ML projects, where I find myself constantly exploring and pushing boundaries. Alongside, I harbor a deep interest in frontend development, relishing the creative aspect of crafting user experiences.
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey has honed not only my technical prowess but also my leadership and teamwork skills. Having led various projects and collaborated in diverse teams, I understand the importance of effective communication, coordination, and delegation.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
            With a relentless drive for learning and innovation, I aspire to harness these skills to make a tangible impact in the tech world. Excited about the opportunities ahead, I am eager to contribute, grow, and leave a lasting mark in these dynamic fields.
            </ScrollAnimation>
            <br/>
           <h1 className="SectionTitle">Skill Set</h1>
          <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
    </div>
   
   
    
  );
}

export default About;
