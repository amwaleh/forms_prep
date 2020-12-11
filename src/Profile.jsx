import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Image from "material-ui-image";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  table: {
    Width: 300
  },
  large: {
    width: "100px",
    height: "100px"
  }
});

export default function DenseTable(props) {
  const classes = useStyles();
  const userDetails = props.user?.toJSON();
  console.log(userDetails);

  return (
    <Container maxwidth="lg">
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
            <TableCell>
              {userDetails?.photoUrl ? (
                <Image
                  src={userDetails?.photoUrl || ""}
                  onClick={() => console.log("onClick")}
                  aspectRatio={16 / 9}
                  disableSpinner
                />
              ):  <Avatar
              alt="profile"
              src="/broken-image.jpg"
              className={classes.large}
            >
              {userDetails.email[0].toUpperCase()}
            </Avatar>}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Email
            </TableCell>
            <TableCell align="center">{userDetails.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell align="center">{userDetails.displayName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Phone
            </TableCell>
            <TableCell align="center">{userDetails.phoneNumber}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Container >
  );
}
