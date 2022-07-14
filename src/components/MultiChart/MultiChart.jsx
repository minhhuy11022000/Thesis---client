import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
// import { studentRecordByClass } from '../../data/Result';
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { studentRecordByClass } from "../../data/Result";

const MultiChart = ({ subject }) => {
    // const classResult = useSelector(state => state?.results);
    // const studentRecordByClass = classResult.listAvgScore;
    // console.log(litsData);
    // const resultData = {
    //     labels: studentRecordByClass.result.map(record => record.quiz_name),
    //     datasets: [
    //         {
    //             label: "Average score",
    //             data: studentRecordByClass.result.map(record => record.avg),
    //             backgroundColor: [
    //                 "rgba(75, 192, 192, 1)",
    //                 "#ecF0F1",
    //                 "#50AF95",
    //                 "#f3ba2f",
    //                 "#2a71d0",
    //             ],
    //         }
    //     ]
    // }
    return (
        <div>
            <Typography align="center" variant='h3'>{subject}</Typography>
            {
                studentRecordByClass.map(classData => {
                    return (
                        <div className="chart-item" style={{ width: 400, margin: 'auto', display: 'inline-block' }}>
                            <Typography align="center" variant='h4'>{classData?.class_code}</Typography>
                            <Typography align="center" variant='h5'>Wednesday</Typography>
                            <Typography align="center" variant='h5'>Semester 1 - 2022</Typography>
                            <Bar data={{
                                labels: classData?.result.map(record => record.quiz_name),
                                datasets: [
                                    {
                                        label: "Average score",
                                        data: classData?.result.map(record => record.avg),
                                        backgroundColor: [
                                            "rgba(75, 192, 192, 1)",
                                            "#ecF0F1",
                                            "#50AF95",
                                            "#f3ba2f",
                                            "#2a71d0",
                                        ],
                                    }
                                ]
                            }} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default MultiChart;