import { Box, Button } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BasePage from '../../MiscComponents/BasePage'
import Image9 from '../../assets/Image9.png'
import Image3 from "../../assets/Image3.png"

export default function SelectTemplate() {
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
                            <Col md={9} className='d-flex align-items-center justify-content-center h-100 mt-4 pb-4'>
                                <Box className='w-50 text-center' style={{backgroundColor:"#F2F2F2", height:"32rem"}}>
                                    <img className='img-fluid w-75' src={Image9} alt="" />
                                </Box>
                                <Box className='w-50 h-100 text-center'>
                                    <img className='img-fluid w-75' src={Image3} alt="" />
                                </Box>
                            </Col>
                        </Row>
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}
