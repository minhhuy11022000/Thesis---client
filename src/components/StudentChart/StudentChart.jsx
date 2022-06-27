import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import { studentRecordByClass } from '../../data/Result';
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const StudentChart = () => {
    const classResult = useSelector(state => state?.results);
    const studentRecordByClass = classResult.listAvgScore;
    // console.log(studentRecordByClass);
    const resultData = {
        labels: studentRecordByClass.result.map(record => record.quiz_name),
        datasets: [
            {
                label: "Average score",
                data: studentRecordByClass.result.map(record => record.avg),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecF0F1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
            }
        ]
    }
    return (
        <div style={{ width: 700, margin: 'auto' }}>
            <Typography align="center" variant='h3'>{studentRecordByClass.subject}</Typography>
            <Bar data={resultData} />
        </div>
    );
}

export default StudentChart;