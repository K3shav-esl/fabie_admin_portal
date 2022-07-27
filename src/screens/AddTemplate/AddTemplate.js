import { Box, Button } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BasePage from '../../MiscComponents/BasePage'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'
import Image4 from '../../assets/Image4.png'

function AddTemplate() {
    return (
        <>
            <BasePage>
                <Box className='mx-5 my-2' style={{ height: "100%" }}>
                    <Box style={{ fontSize: '2rem', color: '#43425D' }}>
                        Add Template
                    </Box>
                    <Box style={{ backgroundColor: "white", height: "80%" }} className='p-1 h-100' >
                        <Row className='h-100'>
                            <Col className='d-flex align-items-center justify-content-center flex-column h-100' md={3}>
                                <Box className='py-3 w-100 text-center' style={{ borderBottom: '2px solid #F1F1F3' }}>
                                    <Button variant="contained" style={{ backgroundColor: "#6155CD" }}>
                                        New Category
                                    </Button>
                                </Box>
                                <Box className='w-100 mt-2'>
                                    <Box style={{ color: '#3B86FF', fontWeight: 'bold' }} className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>ALL</Box>
                                        <Box>155</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Father's Day</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Valentine's Day</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Daddy & Daughters</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Sweet Sisters</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Lovely Family</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Friends of Fun</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Working for Fun</Box>
                                        <Box>2</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Diwali</Box>
                                        <Box>8</Box>
                                    </Box>
                                    <Box className="d-flex align-items-center justify-content-between px-4 py-2 w-100">
                                        <Box>Newly Married</Box>
                                        <Box>2</Box>
                                    </Box>
                                </Box>
                            </Col>
                            <Col className='d-flex align-items-center flex-column justify-content-between h-100 mt-4'>
                                <Box className='d-flex align-items-center justify-content-between w-100 px-5'>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image1} alt="" />
                                    </Box>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image3} alt="" />
                                    </Box>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image2} alt="" />
                                    </Box>

                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image4} alt="" />
                                    </Box>
                                </Box>
                                <Box className='d-flex align-items-center justify-content-between w-100 px-5' style={{ height: '20rem' }}>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image1} alt="" />
                                    </Box>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image2} alt="" />
                                    </Box>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image3} alt="" />
                                    </Box>
                                    <Box className='h-75'>
                                        <img className='img-fluid' style={{ width: '100%', height: "250px" }} src={Image4} alt="" />
                                    </Box>
                                </Box>
                            </Col>
                        </Row>
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}

export default AddTemplate