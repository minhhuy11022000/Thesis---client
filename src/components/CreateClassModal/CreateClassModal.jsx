import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CreateClassModal.scss';
import { createNewClass } from '../../api/ClassRequests';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    'overflow-y': 'scroll'
};

const CreateClassModal = ({ openCreateClass, setOpenCreateClass, lecturerId }) => {
    const [className, setClassName] = useState('');
    const [subject, setSubject] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [section, setSection] = useState('');
    const [room, setRoom] = useState('');
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setOpenCreateClass(false);
    }

    const handleSubmiteCreateClass = () => {
        const newClass = {
            class_name: className,
            section: `Semester ` + section,
            day_of_week: dayOfWeek,
            room: room,
            subject: subject,
            lecturer_id: lecturerId
        }
        console.log(newClass)
        createNewClass(newClass, dispatch);
        setOpenCreateClass(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openCreateClass}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openCreateClass}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Adding New Class
                    </Typography>
                    <form className='add_class_form' autoComplete='off'>
                        <TextField
                            className='form_element'
                            required
                            label="Class Name"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Semester"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Day Of Week"
                            value={dayOfWeek}
                            onChange={(e) => setDayOfWeek(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <TextField
                            className='form_element'
                            required
                            label="Room"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <Button
                            className='form_element'
                            variant='contained'
                            onClick={handleSubmiteCreateClass}
                        >
                            Create
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
}

export default CreateClassModal;