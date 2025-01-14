import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#118B50",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function WardsTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          width: "100%",
          minWidth: { sm: "100%", md: 300 }, // Full width on small devices, 350px on larger
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Wards</StyledTableCell>
            <StyledTableCell align="right">Town/Village</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              1
            </StyledTableCell>
            <StyledTableCell align="right">Ogwa</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              2
            </StyledTableCell>
            <StyledTableCell align="right">Ujiogba/Ebute</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              3
            </StyledTableCell>
            <StyledTableCell align="right">Egoro/Idoa</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              4
            </StyledTableCell>
            <StyledTableCell align="right">Eguare/Emaudo</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              5
            </StyledTableCell>
            <StyledTableCell align="right">
              Ihimhudumu/Ugiemen, Ido-ebo/Uke
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              6
            </StyledTableCell>
            <StyledTableCell align="right">Iruekpen</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              7
            </StyledTableCell>
            <StyledTableCell align="right">Ukpenu/Emuhi</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              8
            </StyledTableCell>
            <StyledTableCell align="right">Urohi</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              9
            </StyledTableCell>
            <StyledTableCell align="right">Uhiele</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              10
            </StyledTableCell>
            <StyledTableCell align="right">Ileh</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
