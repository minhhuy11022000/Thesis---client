import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

const SelectField = ({ subject, setSubject, subjectList }) => {
    // const subjectList = useSelector(
    //     (state) => state.joinedClasses.allClasses?.classes?.subjectList
    // );

    // const [subject, setSubject] = React.useState(subjectList[0]);

    const handleChange = (event) => {
        setSubject(event.target.value);
    };

    console.log(subjectList)
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Subject</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={subject}
                label="Age"
                onChange={handleChange}
            >
                {subjectList.map(currentSubject => <MenuItem key={currentSubject} value={currentSubject}>{currentSubject}</MenuItem>)}
                {/* <MenuItem value="OOP">OOP</MenuItem>
                <MenuItem value="OOAD">OOAD</MenuItem>
                <MenuItem value="WAD">WAD</MenuItem> */}
            </Select>
        </FormControl>
    );
}

export default SelectField;