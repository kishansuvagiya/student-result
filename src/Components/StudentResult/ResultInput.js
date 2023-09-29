import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';
import PublishIcon from '@mui/icons-material/Publish';
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateData, clearAllData } from '../Store/ResultSlice';
import { red } from '@mui/material/colors';
import ClearAllIcon from '@mui/icons-material/ClearAll';

const validationSchema = Yup.object({
    FirstName: Yup.string()
        .min(3, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required Field'),
    LastName: Yup.string()
        .min(3, 'Too Short!')
        .required('Required Field'),
    physics: Yup.number()
        .max(100, 'Invalid mark!')
        .required('Required Field'),
    chemistry: Yup.number()
        .max(100, 'Invalid mark!')
        .required('Required Field'),
    biology: Yup.number()
        .max(100, 'Invalid mark!')
        .required('Required Field'),
    English: Yup.number()
        .max(100, 'Invalid mark!')
        .required('Required Field'),
    maths: Yup.number()
        .max(100, 'Invalid mark!')
        .required('Required Field'),
});


function ResultInput() {
    const dispatch = useDispatch()
    const initialValues = useSelector(state => state.result.initialValues)
    const editId = useSelector(state => state.result.editID)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            if (editId >= 0) {
                dispatch(updateData(values))
            }
            else {
                dispatch(addData(values))
            }
            action.resetForm()

        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 ">
                        <TextField
                            fullWidth
                            id="FirstName"
                            name="FirstName"
                            label="Enter First Name"
                            value={formik.values.FirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
                            helperText={formik.touched.FirstName && formik.errors.FirstName}
                        />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <TextField
                            fullWidth
                            id="LastName"
                            name="LastName"
                            label="Enter Last Name"
                            value={formik.values.LastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.LastName && Boolean(formik.errors.LastName)}
                            helperText={formik.touched.LastName && formik.errors.LastName}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12 mt-4">
                        <TextField
                            fullWidth
                            type='number'
                            id="physics"
                            name="physics"
                            label="Enter Physics Marks"
                            value={formik.values.physics}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.physics && Boolean(formik.errors.physics)}
                            helperText={formik.touched.physics && formik.errors.physics}
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <TextField
                            fullWidth
                            type='number'
                            id="chemistry"
                            name="chemistry"
                            label="Enter chemistry Marks"
                            value={formik.values.chemistry}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.chemistry && Boolean(formik.errors.chemistry)}
                            helperText={formik.touched.chemistry && formik.errors.chemistry}
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <TextField
                            fullWidth
                            type='number'
                            id="biology"
                            name="biology"
                            label="Enter biology Marks"
                            value={formik.values.biology}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.biology && Boolean(formik.errors.biology)}
                            helperText={formik.touched.biology && formik.errors.biology}
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <TextField
                            fullWidth
                            type='number'
                            id="English"
                            name="English"
                            label="Enter English Marks"
                            value={formik.values.English}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.English && Boolean(formik.errors.English)}
                            helperText={formik.touched.English && formik.errors.English}
                        />
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <TextField
                            fullWidth
                            type='number'
                            id="maths"
                            name="maths"
                            label="Enter maths Marks"
                            value={formik.values.maths}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.maths && Boolean(formik.errors.maths)}
                            helperText={formik.touched.maths && formik.errors.maths}
                        />
                    </div>
                </div>
                {editId >= 0 ?
                    <Button style={{backgroundColor: '#00b8d4'}} variant='contained' className='mt-4' type="submit" endIcon={<UpdateIcon />}>Update</Button> :
                    <>
                        <Button style={{backgroundColor: '#1b5e20'}} variant='contained' className='mt-4' type="submit" endIcon={<PublishIcon />}>Submit</Button>
                        
                        <Button style={{backgroundColor: '#afb42b'}} variant='contained' className='mt-4 ms-4' onClick={() => dispatch(clearAllData())} endIcon={<ClearAllIcon />}>Clear all</Button>
                    </>
                }
            </form>
        </div>
    )
}

export default ResultInput