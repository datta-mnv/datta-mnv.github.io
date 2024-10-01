import React from 'react'
import { FaTractor } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { GiSpades } from "react-icons/gi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Naga Manda</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "An Open Source Contributor"
    ],
    about: {
        start: "A results-oriented Data Scientist and Machine Learning Engineer with a proven track record of success and a Master's degree in Statistics and Data Science, bring over 5 years of comprehensive expertise in leveraging data-driven insights to propel business objectives. My proficiency spans the entire data science lifecycle, from data preprocessing and exploratory analysis to advanced model development and deployment. With a solid foundation in statistical methods and a commitment to continuous learning, excel in translating complex datasets into actionable strategies. Eager to contribute my analytical prowess and strategic thinking to drive innovation and deliver tangible value to the organization.",
        exit: ""
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Data Scientist",
            company: "CNH Industrial",
            description: "",
            date: "2023-Present",
            icon: <FaTractor/>,
            tags: ["ml", "mlops", "python", "azure", "llm", "automl"],
            exp_color: '#A31719'
        },
        {
            id: "work-3",
            title: "Machine Learning Engineer",
            company: "Caterpillar",
            description: "",
            date: "2022-2023",
            icon: <GiGears/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"],
            exp_color: '#FFC633'
        },
        {
            id: "work-2",
            title: "MS in Statistics & Data Science",
            company: "University of Houston",
            description: "",
            date: "2021-2022",
            icon: <FaUserGraduate/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"],
            exp_color: '#C0162B'
        },
        {
            id: "work-1",
            title: "Associate Consultant",
            company: "Capgemini | McDonald's",
            description: "",
            date: "2018-2021",
            icon: <GiSpades/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"],
            exp_color: '#0965A0'
        },
        {
            id: "work-0",
            title: "BE in Computer Science & Engineering",
            company: "Sathyabama University",
            description: "",
            date: "2014-2018",
            icon: <GiGraduateCap/>,
            tags: [],
            exp_color: '#771431'
        }
    ]
}


export default homeConfig