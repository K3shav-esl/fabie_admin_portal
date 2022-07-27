import React from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import './Login.css'
export default function Login() {
    return (
        <>
            <Box className='mainBg d-flex align-items-center justify-content-center'>
                <Box className='d-flex align-items-center justify-content-center circleBg text-center' style={{ height: "35rem", width: "35rem" }}>
                    <Container className='formBg rounded h-75 w-75'>
                        <div className='mt-4' style={{ fontSize: "3.5rem", color: '#9A6BEC' }}>
                            fabie
                        </div>
                        <Container className='pt-5'>
                            <TextField id="standard-basic" color='' className='w-75' label="Email" variant="standard" /> <br />
                            <TextField id="standard-basic" className='w-75 mt-4' label="Password" variant="standard" />
                            <Box className='pt-5 w-75 d-flex justify-content-between align-items-center' style={{margin:"auto"}}>
                                <Button variant="contained" style={{ backgroundColor: '#AD8DE6' }}>Login</Button>
                                <Button variant="contained" style={{ backgroundColor: '#AD8DE6' }}>Sign Up</Button>
                            </Box>
                        </Container>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
