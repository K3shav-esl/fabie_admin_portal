import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import BasePage from '../../MiscComponents/BasePage'
function NewCategory() {
    return (
        <>
            <BasePage>
                <Box className='text-center' style={{ backgroundColor: 'white', width: '90%', height: "80vh", padding: '1.5rem 15rem', paddingTop: "8rem", margin: "2.5rem auto", borderRadius: "2px" }}>
                    <Box className='d-flex align-items-center justify-content-between my-5'>
                        <Typography variant='body1'>Category</Typography>
                        <TextField style={{ width: "500px" }} id="outlined-basic" label="Outlined" variant="outlined" />
                    </Box>
                    <Box className='d-flex align-items-center justify-content-between my-5'>
                        <Typography variant='body1'>Sub Category</Typography>
                        <TextField style={{ width: "500px" }} id="outlined-basic" label="Outlined" variant="outlined" />
                    </Box>
                    <Button variant="contained" style={{ backgroundColor: "#AD8DE6", width: "6rem", borderRadius: "2px" }}>Save</Button>
                </Box>
            </BasePage>
        </>
    )
}

export default NewCategory