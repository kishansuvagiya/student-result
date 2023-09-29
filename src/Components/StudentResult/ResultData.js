import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, editData } from '../Store/ResultSlice';

function ResultData() {
    const data = useSelector(state => state.result.data)
    const dispatch = useDispatch()

    const deleteElement = (index) => {
        dispatch(deleteData(index))
    }

    const editElement = (list, index) => {
        dispatch(editData({ list: list, id: index }))
    }

    return (
        <div>
            <div className=" mt-4 ">
                <div className="table-responsive">
                <table className='table table-striped table-bordered table-hover text-center'>
                    <thead className="table-dark">
                        <tr >
                            <th >No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th >Physics</th>
                            <th >Chemistry</th>
                            <th >Biology</th>
                            <th >English</th>
                            <th >Maths</th>
                            <th >Sum</th>
                            <th >Percentage</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((list, inx) => {
                                return (
                                    <tr className='border'>
                                        <td >{inx + 1}</td>
                                        <td>{list.FirstName}</td>
                                        <td>{list.LastName}</td>
                                        <td >{list.physics}</td>
                                        <td >{list.chemistry}</td>
                                        <td >{list.biology}</td>
                                        <td >{list.English}</td>
                                        <td >{list.maths}</td>
                                        <th >{Number(list.physics) + Number(list.chemistry) + Number(list.biology) + Number(list.English) + Number(list.maths)}</th>
                                        <th >{(Number(list.physics) + Number(list.chemistry) + Number(list.biology) + Number(list.English) + Number(list.maths)) / 5}</th>
                                        <td>
                                            <IconButton size='small' onClick={() => editElement(list, inx)}><EditSharpIcon color='primary' fontSize='small'/></IconButton>
                                        </td>
                                        <td>
                                            <IconButton size='small' onClick={() => deleteElement(inx)}><DeleteIcon color='error' fontSize='small'/></IconButton>
                                        </td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ResultData