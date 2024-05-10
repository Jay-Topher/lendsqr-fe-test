import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { User } from "@/utils/types";
import { Paper, Table } from "@mui/material";
import { pxToRem } from "@/utils";
import StatusChip from "@/components/StatusChip";
import DotMenu from "@/assets/icons/dot-menu.svg?react";
import FilterPopover from "@/components/FilterPopover";
import FilterForm from "@/components/FilterForm";
import TableActions from "@/components/TableActions";

const createData = (user: User) => {
  return {
    id: user.id,
    name: `${user.name.first} ${user.name.last}`,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    dateJoined: user.dateJoined,
    organization: user.organization.name,
    status: user.status,
  };
};

interface UsersTableProps {
  users: User[];
}
// eslint-disable-next-line react-refresh/only-export-components
export const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];
const UsersTable = ({ users }: UsersTableProps) => {
  const rows = users.map((user) => createData(user));
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className="box-shadow"
      sx={{ px: 1 }}
    >
      <Table aria-label="users">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: pxToRem(12),
                border: 0,
              },
            }}
          >
            {tableHeaders.map((header) => (
              <TableCell key={header}>
                {header}{" "}
                <FilterPopover>
                  <FilterForm />
                </FilterPopover>
              </TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length ? (
            rows.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>{user.organization}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.dateJoined}</TableCell>
                <TableCell>
                  <StatusChip status={user.status} />
                </TableCell>
                <TableCell align="right">
                  <FilterPopover Icon={DotMenu}>
                    <TableActions id={user.id} />
                  </FilterPopover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell colSpan={7} align="center">
                No users available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
