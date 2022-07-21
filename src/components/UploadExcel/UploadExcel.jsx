import * as XLSX from 'xlsx/xlsx.mjs';
import { useState } from 'react';
import { Button } from '@mui/material';
import { addMultipleQuestions } from '../../api/QuestionRequests';

const UploadExcel = () => {
    const [fileName, setFileName] = useState(null)
    const [fileParse, setFileParse] = useState(null)

    const handleFile = async () => {
        // console.log(e.target.files[0])
        if (fileParse) {
            const file = fileParse.target.files[0];
            setFileName(file.name)
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            // console.log(workbook.Sheets)

            const worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsonData = XLSX.utils.sheet_to_json(worksheet)

            const finalList = jsonData.map(question => {
                const { answer_1, answer_2, answer_3, answer_4, chapter } = question;
                const tempPoss = [answer_1,
                    answer_2,
                    answer_3,
                    answer_4];

                const solvedTempPoss = tempPoss.map(poss => ({ answer: poss }));
                return {
                    ...question,
                    chapter: `Chapter ` + chapter,
                    question_possibilities: solvedTempPoss
                }
            });
            console.log(finalList);
            addMultipleQuestions({ listOfQuestions: finalList })
            setFileName(null);
            setFileParse(null);
        } else {
            console.log("Error when uploading excel file")
        }
    }

    return (
        <div style={{ 'margin-top': '20px' }}>
            {fileName && (<p>File Name: <span>{fileName}</span></p>)}
            <input type="file" onChange={(e) => setFileParse(e)} />
            <Button
                disabled={fileParse ? false : true}
                variant="contained"
                children="Submit"
                onClick={handleFile}
            />
        </div>

    );
}

export default UploadExcel;