import React from 'react';
import {
  Box,
  Button,
  CardMedia,
  Checkbox,
  Fade,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseRounded from '@mui/icons-material/CloseRounded';
import Constants from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

export default function WishlistModal(props) {
  const navigate = useNavigate();
  return (
    <Modal
      open={props.openModal}
      onClose={() => props.onCloseModal}
      aria-labelledby="Sign Up"
      aria-describedby="Sign Up"
      closeAfterTransition
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: 420,
          width: 420,
          bgcolor: 'common.white',
          boxShadow: 24,
          p: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <IconButton
          onClick={props.onCloseModal}
          sx={{ position: 'absolute', right: 5, top: 5 }}
          size="large"
          aria-label="search"
          color="primary.dark"
        >
          <CloseRounded />
        </IconButton>
        <CardMedia
          component="img"
          height={250}
          width={250}
          image={props.item.img}
          alt="Image Title"
          sx={{ marginTop: 2 }}
        />
        <Typography
          variant="h6"
          color={'primary.dark'}
          component="div"
          sx={{
            marginTop: 2,
            fontWeight: 'bold',
          }}
        >
          {props.item.title}
        </Typography>
        <Typography
          variant="body2"
          color={'primary.main'}
          component="div"
          sx={{
            marginTop: 1,
            fontWeight: 'bold',
          }}
        >
          {Constants.addedToWishlistText}
        </Typography>
        <Button
          onClick={() => {
            props.onCloseModal();
            navigate('/wishlists');
          }}
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            marginTop: 2,
            marginBottom: 2,
            '&:hover': {
              backgroundColor: 'common.white',
              color: 'common.black',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'secondary.main',
            },
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'common.black',
            backgroundColor: 'common.black',
          }}
        >
          {Constants.viewWishListText}
        </Button>
      </Box>
    </Modal>
  );
}
