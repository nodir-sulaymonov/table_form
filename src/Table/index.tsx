import React, {FC, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './TableModule.css'
import useGetUsers from './HTTPrequst';

const TableComponent: FC = () => {
    const [isLoading, users] = useGetUsers('https://5ede19ffe36dd000166c7f2a.mockapi.io/v1/user/');
    const [todo, setTodo] = useState(null);
    console.log(isLoading)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        let id = event.target.dataset.id;
        setTodo(id)
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row: any) => (
                        <React.Fragment key={row.id}>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                    <button data-id={row.id} onClick={handleClick} className="addColumn">+</button>
                                </TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                            </TableRow>
                            {row.id === todo && (
                                <TableRow>
                                    <TableCell>
                                        <input className="inputRoot"
                                               placeholder="Name"/>
                                    </TableCell>
                                    <TableCell>
                                        <input className="inputRoot"
                                               placeholder="Location"/>
                                    </TableCell>
                                    <TableCell>
                                        <input className="inputRoot"
                                               placeholder="email@rmail.com"/>
                                    </TableCell>
                                    <TableCell>
                                        <input className="inputRoot"
                                               placeholder="Phone number"/>
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableComponent;
