import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Keysight from '../assets/img/kslogo.png';
import Integem from '../assets/img/intelogo.png';
import UCSC from '../assets/img/ucsc.png';

const experiences = [
  {
    title: "Artificial Intelligence Researcher",
    company: "Keysight Technologies",
    date: "Jan 2024 - Present",
    description: "Developed a Generative AI system for OpenTAP using Azure AI Studio, and OpenAI's GPT, saving test engineers 75% time with tailored Azure databases for Retrieval-Augmented Generation and automated testing protocols for high accuracy and reliability across devices.",
    icon: Keysight,
    backgroundColor: "#e9ecef",
  },
  {
    title: "AR & AI Project Intern",
    company: "Integem Inc",
    date: "June 2022 - August, 2023",
    description: "Designed projects using Python to demonstrate concepts in Artificial Intelligence and Augmented Reality, and mentored junior interns to improve their skill sets.",
    icon: Integem,
    backgroundColor: "#e9ecef",
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "UC Santa Cruz",
    date: "Sept 2020 - June 2024",
    description: "Graduated with honors, where I studied Software Engineering, Artificial Intelligence, Machine Learning, Data Structures & Algorithms.",
    icon: UCSC,
    backgroundColor: "#f9f9f9",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="experience-timeline" id="experience">
      <h2>My Experience</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            icon={<img src={experience.icon} alt="icon" style={{ width: '100%', height: '100%' }} />}
            iconStyle={{ background: experience.backgroundColor, color: '#fff', borderRadius: '50%' }}
            contentStyle={{ background: '#fff', color: '#333' }}
            contentArrowStyle={{ borderRight: `7px solid ${experience.backgroundColor}` }}
            dateClassName="date-white"
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
