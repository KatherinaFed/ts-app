import { Button, Box, Modal, Typography, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import GlobalContext from '../../context/GlobalContext';
import { IFormValues } from '../../models/models';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { addEvent } from '../../store/event/eventSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EventModal = () => {
  const { setShowEventModal, showEventModal, daySelected } =
    useContext(GlobalContext);
  const dispatch = useAppDispatch();

  const handleOpen = () => setShowEventModal(true);
  const handleClose = () => setShowEventModal(false);

  const initialValues: IFormValues = {
    id: 0,
    day: 0,
    title: '',
    description: '',
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const calendarEvent = {
        id: Date.now(),
        day: daySelected.valueOf(),
        title: values.title,
        description: values.description,
      };

      dispatch(addEvent(calendarEvent));
      setShowEventModal(false);
    },
  });

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={showEventModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Button onClick={handleClose}>X</Button>
            <p>{daySelected.format('dddd, MMMM DD')}</p>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Title of event:
            </Typography>
            <TextField
              id="title"
              variant="filled"
              size="small"
              onChange={handleChange}
              value={values.title}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description:
            </Typography>
            <TextField
              id="description"
              variant="filled"
              size="small"
              onChange={handleChange}
              value={values.description}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EventModal;
