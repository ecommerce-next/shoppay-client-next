import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styles from "./styles.module.scss";
import Row from "./Row";


const CollapsibleTable = ({rows}) => {
    console.log("rows", rows);

    return (
        <TableContainer component={Paper}>
            <Typography
                sx={{flex: "1 1 100%"}}
                variant="h6"
                paddingX="5px"
                id="tableTitle"
                component="div"
            >
                Orders
            </Typography>

            <Table aria-label="collapsible table" className={styles.table}>
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell>Order</TableCell>
                        <TableCell align="right">Payment Method</TableCell>
                        <TableCell align="right">Paid</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Coupon</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row._id} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CollapsibleTable;
