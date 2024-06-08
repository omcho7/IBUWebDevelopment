import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MyCard = ({ icon, title, description }) => (
  <Card className="my-card" sx={{ maxWidth: 345, minHeight: 280 }}>
    <CardContent>
      {icon}
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default MyCard;