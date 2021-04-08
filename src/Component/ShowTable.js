import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApi, Delete, Edit } from '../Action/PassengerApi';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Input from './Input';
export const ShowTable = () => {

    const dispatch = useDispatch();
    const apiData = useSelector(state => state.ReducerFunction.data.data)
    const page = useSelector(state => state.ReducerFunction.totalPages)
    console.log(page, "akkkkkkkkkkkkkkkkkk")
    const [data, setData] = useState([]);
    // const [show, setShow] = useState(false);
    // console.log("apidata", apiData.ReducerFunction.data);
    const [showdata, setShowData] = useState(false)

    // console.log("viassssss", apiData.ReducerFunction.data)
    useEffect(() => {
        dispatch(getApi(1))
        getApi();
    }, [])
    const handleperpage = (i, j) => {
        dispatch(getApi(j))
    }
    console.log("API DATA FROM FUNCTION ", apiData);
    useEffect(() => {
        if (apiData) {
            setData(apiData);
        }
        else {

            setData([])
        }
    }, [apiData])
    return (
        <>
            {
                showdata ? null : <div>
                    <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>NUMBER</TableCell>
                                    <TableCell align="right">NAME</TableCell>
                                    <TableCell align="right">TRIPS</TableCell>
                                    <TableCell align="right">__V</TableCell>
                                    <TableCell align="right">__ID</TableCell>
                                    <TableCell align="right">AIRLINE_COUNTRY</TableCell>
                                    <TableCell align="right">AIRLINE_ESTABLISHED</TableCell>
                                    <TableCell align="right">AIRLINE_HEAD_QUATERS</TableCell>
                                    <TableCell align="right">AIRLINE_ID</TableCell>
                                    <TableCell align="right">AIRLINE_LOGO</TableCell>
                                    <TableCell align="right">AIRLINE_NAME</TableCell>
                                    <TableCell align="right">AIRLINE_SLOGAN</TableCell>
                                    <TableCell align="right">AIRLINE_WEBSITE</TableCell>
                                    <TableCell align="right">ACTION</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((i, j) => {
                                    return (<TableRow>
                                        <TableCell>{j + 1}</TableCell>
                                        <TableCell>{i.name}</TableCell>
                                        <TableCell>{i.trips}</TableCell>
                                        <TableCell>{i.__v}</TableCell>
                                        <TableCell>{i._id}</TableCell>
                                        <TableCell>{i.airline.country}</TableCell>
                                        <TableCell>{i.airline.established}</TableCell>
                                        <TableCell>{i.airline.head_quaters}</TableCell>
                                        <TableCell>{i.airline.id}</TableCell>
                                        <TableCell><img src={i.airline.logo}></img></TableCell>
                                        <TableCell>{i.airline.name}</TableCell>
                                        <TableCell>{i.airline.slogan}</TableCell>
                                        <TableCell>{i.airline.website}</TableCell>
                                        <TableCell><Button onClick={() => dispatch(Delete(i._id))} variant="contained" color="primary">
                                            Delete
                                 </Button></TableCell>
                                 
                                    </TableRow>)

                                })}

                            </TableBody>

                        </Table>

                    </TableContainer>


                    <Pagination count={page} onChange={handleperpage}></Pagination>


                </div>
            }

            {showdata ?  <Input setShowData = {setShowData}/>  : null }
        </>
    )
}

export default ShowTable;

