import './List.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from "react";
import DailyList from "../dailyList/DailyList";


export default function List ({data, onStateClick}) {

    function handleOnStateClick(stateName) {
        onStateClick(stateName)
    }

    return(
        <TableContainer component={Paper}>
            <h2 className="headerTitle">Click on state name to open daily info about state</h2>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>State</TableCell>
                        <TableCell align="right">Total cases</TableCell>
                        <TableCell align="right">New Cases</TableCell>
                        <TableCell align="right">Total Deaths</TableCell>
                        <TableCell align="right">New Deaths</TableCell>
                        <TableCell align="right">Total Recovered</TableCell>
                        {
                           data[0].checkTimeEt ? <TableCell align="right">Date</TableCell>  : null
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.hash}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className="stateName" onClick={() => handleOnStateClick(row.state)}>{row.state}</TableCell>
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
    )
}