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
import { joinNewClass } from '../../api/ClassRequests';

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

const JoinClassModal = ({ openJoinClass, setOpenJoinClass, studentId }) => {
    const [classCode, setClassCode] = useState('');;
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setOpenJoinClass(false);
    }

    const handleSubmiteJoinClass = () => {
        const newClass = {
            class_code: classCode
        }
        joinNewClass(newClass, studentId, dispatch);
        setOpenJoinClass(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openJoinClass}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openJoinClass}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Joining New Class
                    </Typography>
                    <form className='add_class_form' autoComplete='off'>
                        <TextField
                            className='form_element'
                            required
                            label="Class Code"
                            value={classCode}
                            onChange={(e) => setClassCode(e.target.value)}
                        />

                        <Button
                            className='form_element'
                            variant='contained'
                            onClick={handleSubmiteJoinClass}
                        >
                            Join
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
}

export default JoinClassModal;