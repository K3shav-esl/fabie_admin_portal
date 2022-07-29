import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BasePage from '../../MiscComponents/BasePage'

function Invoice() {
    return (
        <>
            <BasePage>
                <Box className='mx-5 my-2' style={{ height: "100%" }}>
                    <Box style={{ fontSize: '2rem', color: '#43425D' }}>
                        Add Template
                    </Box>
                    <Box className="py-3 px-4 mt-2" style={{ backgroundColor: "white" }}>
                        <Box>
                            <Box className="d-flex align-items center justify-content-between pb-3" style={{ borderBottom: "2px solid #F1F1F3" }}>
                                <Box style={{ color: "#43425D" }}>
                                    <Typography variant="h5" className="pb-2" >Arun Kumar</Typography>
                                    <Typography>Melbourne, Australia</Typography>
                                    <Typography>P: 999999999</Typography>
                                </Box>
                                <Box style={{ textAlign: "right" }}>
                                    <Typography variant='h5' className="mb-3" style={{ color: "#43425D" }}>Invoice</Typography>
                                    <Button style={{ margiTop: "auto", backgroundColor: "#43425D" }} variant='contained'>Print</Button>
                                </Box>
                            </Box>
                            <Box className="" style={{ color: "#43425D" }}>
                                <Box className="" style={{ marginLeft: "auto", maxWidth: "max-content" }}>
                                    <Typography variant="body1"><span><b>Order Date:</b></span> 15 July, 2022</Typography>
                                    <Typography><span><b>Order Status:</b></span> <Button variant="contained" disabled style={{ backgroundColor: "#FFCA83", borderRadius: "2rem" }}>Pending</Button> </Typography>
                                    <Typography><span><b>Order ID:</b></span> #111111</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="pt-2">
                            <Box style={{ color: "#4D4F5C" }}>
                                <Row className="py-2" style={{ color: "#A3A6B4", backgroundColor: "#F5F6FA", textTransform: "uppercase", fontWeight: "bold" }}>
                                    <Col md={2}> # </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                                <Row className="py-2">
                                    <Col md={2}> 1 </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                                <Row className="py-2">
                                    <Col md={2}> 2 </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                                <Row className="py-2">
                                    <Col md={2}> 3 </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                                <Row className="py-2">
                                    <Col md={2}> 4 </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                                <Row className="py-2">
                                    <Col md={2}> 5 </Col>  <Col md={3}>Item</Col>  <Col md={3}>Description</Col>  <Col md={2}>Quantity</Col>  <Col md={2}> Price </Col>
                                </Row>
                            </Box>
                            <Box style={{color:"#4D4F5C", marginLeft: "auto", maxWidth: "max-content" }}>
                                <Typography variant="body2"><span><b>Sub Total:</b></span> 9200</Typography>
                                <Typography variant="body2"><span><b>SGST:</b></span> 12.9%</Typography>
                                <Typography variant="body2"><span><b>CGST:</b></span> 12.9%</Typography>
                                <Typography variant="h5" style={{fontWeight:'bold', padding:"0.5rem 0"}}> RS. 9930.00</Typography>
                                <Button variant="contained" style={{backgroundColor:"#6155CD", padding:"0.5rem 4rem"}}>Submit</Button>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}

export default Invoice