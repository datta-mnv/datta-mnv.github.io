import {
    SiPython,
    SiPowerbi,
    SiRstudioide,
    SiPowershell,
    SiTensorflow,
    SiPytorch,
    SiKeras,
    SiScikitlearn,
    SiTableau,
    SiMicrosoftazure
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import React from "react";

const skillsConfig = {
    programmingSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiRstudioide size={50}/>,
            text: "R"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaJava size={50}/>,
            text: "Java"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <TbSql size={50}/>,
            text: "SQL"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPowershell size={50}/>,
            text: "Shell"
        }
        
    ],
    machineLearning: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit learn"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "TensorFlow"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "Pytorch"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiKeras size={50}/>,
            text: "Keras"
        }
    ],
    biSkills: [
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Scikit learn"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        }
    ],
    cloudSkills: [
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <FaAws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        }
    ]
}

export default skillsConfig
