import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => {
    return (
        <section id="skills">
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#000', py: 2 }}>
                    <strong>Programming Skills</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.programmingSkills} />
                    </Box>

            </Box>

            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6  }}>
                <Typography variant="h3" component="h1" sx={{ color: '#000', py: 2 }}>
                    <strong>Machine/Deep Learning Frameworks</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.machineLearning} />
                    </Box>
            </Box>

            <div style={{ display: 'flex' }}>
      <div style={{ width: '50%'}}>
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 , mr: 3 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#000', py: 2 }}>
                    <strong>Data Visualization</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.biSkills} />
                    </Box>
            </Box>
      </div>
      <div style={{ width: '50%'}}>
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6, ml:3  }}>
                <Typography variant="h3" component="h1" sx={{ color: '#000', py: 2 }}>
                    <strong>Cloud</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.cloudSkills} />
                    </Box>
            </Box>
      </div>
    </div>

            

            
        </section>
    );
}

export default Skills;

