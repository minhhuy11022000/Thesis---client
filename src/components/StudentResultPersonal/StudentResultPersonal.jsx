import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './StudentResultPersonal.scss'

const StudentResultPersonal = ({ subject, studentId }) => {

    const pendingRequestListScore = useSelector(state => state.results.pending);
    const personalScore = useSelector(state => state.results?.studentPersonalScore.grade)
    const avgScore = useSelector(state => state.results?.studentPersonalScore.avg_score)
    const errorRequestScore = useSelector(state => state.results.error);

    const handleAvgScoreColor = (avgScore > 80) ? 'green' : (avgScore > 50) ? 'yellow' : 'red'

    if (pendingRequestListScore) {
        return (
            <Box textAlign='center' >
                <CircularProgress color='inherit' />
            </Box >
        )
    }

    if (errorRequestScore) {
        return (
            <Typography align="center" variant='h3'>You don't take any quiz in this class</Typography>
        )
    }
    return (
        <div>
            <Typography align="center" variant='h3'>{subject}</Typography>
            <Typography align="center" variant='h4'>Student ID: {studentId}</Typography>
            <div className="personal_score_table" >
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 300 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* {listStudentScore.list_score[0].results.map(record => {
                            return (
                                <TableCell key={record._id} align='right'>{record.quiz_name}</TableCell>
                            )
                        })} */}
                                <TableCell align="center">Quiz Number</TableCell>
                                <TableCell align="center">Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {(!personalScore) ? null : (
                                personalScore?.map(quiz => {
                                    return (
                                        <TableRow
                                            key={quiz?.quiz_name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">{quiz?.quiz_name}</TableCell>
                                            <TableCell align="center">{quiz?.grade}</TableCell>
                                        </TableRow>
                                    )
                            )} */}
                            {personalScore?.map(quiz => {
                                return (
                                    <TableRow
                                        key={quiz?.quiz_name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{quiz?.quiz_name}</TableCell>
                                        <TableCell align="center">{quiz?.grade}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="avg_score_display" style={{ textAlign: 'center' }}>
                <Typography variant='caption' align="center">Your current average score: <span className={`avg_score ${handleAvgScoreColor}`}>{avgScore}</span></Typography>
            </div>
        </div >
    );
}

export default StudentResultPersonal;