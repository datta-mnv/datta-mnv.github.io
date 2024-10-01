import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import Tags from '../Tags/Tags';
import { styled } from '@mui/material/styles';

const CustomTimeline = (props) => {
    const { items } = props || {};

    const GradientTimelineConnector = styled(TimelineConnector)(({ color1, color2 }) => ({
        background: `linear-gradient(135deg, ${color1}, #f6f6f6 50%, ${color2})`,
        width: '4px'
      }));

    return (
        <Timeline position="alternate">
            {items.map((item,index) => {
                const { id, date, icon, title, company, description, tags, exp_color } = item || {};
                const nextItem = items[index + 1]
                return (
                    <TimelineItem key={id}>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="textSecondary">
                            {date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: exp_color, width: 48, height: 48, border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Box sx={{ fontSize: '24px', color: '#FFFFFF' }}>
                                    {icon}
                                </Box>
                            </TimelineDot>
                            {nextItem && (<GradientTimelineConnector color1 ={item.exp_color}   color2={nextItem.exp_color}/>                         
                        )}</TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 2,
                                    background: index % 2 === 0 ? `linear-gradient(135deg, #f5f5f5 30%, ${exp_color})` : `linear-gradient(225deg, #f5f5f5 30%, ${exp_color})`,
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                    }
                                }}>
                                <Typography variant="h5" component="h1" sx={{ color: '#263238', textAlign: 'center', mb: 1, fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ textAlign: 'center', fontFamily: 'Open Sans, sans-serif', color: '#757575' }}>
                                    {company}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, fontFamily: 'Open Sans, sans-serif', color: '#424242' }}>
                                    {description}
                                </Typography>
                                <Tags id={id} tags={tags} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default CustomTimeline;
