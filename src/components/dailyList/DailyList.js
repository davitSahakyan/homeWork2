import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";


export default function DailyList ({data}) {
    return(
        <div>
            <h2 className="headerTitle">Daily info for {data[0].state} <Button variant="contained" onClick={() => window.location.reload()}> go back</Button></h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Total cases</TableCell>
                            <TableCell align="right">New Cases</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                            <TableCell align="right">New Deaths</TableCell>
                            <TableCell align="right">Total Recovered</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.hash}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.total ? row.total : "N/A"}</TableCell>
                                <TableCell align="right" className={row.totalTestResultsIncrease ? "green" : ""}>{row.totalTestResultsIncrease > 0 ? "+ " + row.totalTestResultsIncrease : "N/A"}</TableCell>
                                <TableCell align="right">{row.death ? row.death : "N/A" }</TableCell>
                                <TableCell align="right" className={row.deathIncrease > 0 ? "red" : ""}>{row.deathIncrease > 0 ? "+ " + row.deathIncrease : "N/A"}</TableCell>
                                <TableCell align="right">{row.recovered ? row.recovered : "N/A"}</TableCell>
                                <TableCell align="right">{row.checkTimeEt ? row.checkTimeEt : "N/A"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}