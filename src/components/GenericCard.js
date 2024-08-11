import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function GenericCard({ image, title, text, buttonText, onButtonClick , showRemove = false, onRemoveClick }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onButtonClick}>
          {buttonText}
        </Button>
        {showRemove &&
          <IconButton size="small" color="primary" variant='outlined' onClick={onRemoveClick}>
            <DeleteIcon />
          </IconButton>
        }
      </CardActions>
    </Card>
  );
}

export default GenericCard;
