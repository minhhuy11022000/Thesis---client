import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useNavigate } from 'react-router-dom';

const SelectTypeField = ({ type, setType }) => {

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Select Type</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={type}
                label="Type"
                onChange={handleChange}
            >
                <MenuItem value="Table">Table</MenuItem>
                <MenuItem value="BarChart">Bar Chart</MenuItem>
                <MenuItem value="PieChart">Pie Chart</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectTypeField;