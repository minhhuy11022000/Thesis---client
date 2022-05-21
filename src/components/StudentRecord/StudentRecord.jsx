import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'


function createData(name, quiz1, quiz2, quiz3, quiz4, quiz5) {
    return { name, quiz1, quiz2, quiz3, quiz4, quiz5 };
}

const rows = [
    createData('ITITIU18011', 70, 60, 25, 80, 90, 100),
    createData('ITITIU17012', 50, 55, 100, 70, 90, 40),
    createData('ITITIU18199', 80, 85, 10, 60, 80, 50),
    createData('ITITIU20121', 40, 15, 30, 80, 50, 50),
    createData('ITITIU20001', 75, 20, 60, 80, 70, 80),
];

const StudentRecord = ({ listStudentScore }) => {


    console.log(listStudentScore);

    const pendingRequestListScore = useSelector(state => state.results.pending);

    if (pendingRequestListScore) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Student ID</TableCell>
                        {listStudentScore.list_score[0].results.map(record => {
                            return (
                                <TableCell key={record._id} align='right'>{record.quiz_name}</TableCell>
                            )
                        })}
                        {/* <TableCell align="right">Quiz 1</TableCell>
                        <TableCell align="right">Quiz 2</TableCell>
                        <TableCell align="right">Quiz 3</TableCell>
                        <TableCell align="right">Quiz 4</TableCell>
                        <TableCell align="right">Quiz 5</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.quiz1}</TableCell>
                            <TableCell align="right">{row.quiz2}</TableCell>
                            <TableCell align="right">{row.quiz3}</TableCell>
                            <TableCell align="right">{row.quiz4}</TableCell>
                            <TableCell align="right">{row.quiz5}</TableCell>
                        </TableRow>
                    ))} */}
                    {listStudentScore.list_score.map(row => {
                        return (
                            <TableRow
                                key={row.student_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope='row'>{row.student_id}</TableCell>
                                {row.results.map(record => (
                                    <TableCell key={record._id} align='right'>
                                        {record.grade}
                                    </TableCell>
                                ))}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StudentRecord;