import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SideNav from './SideNav';
import {Col, Row} from 'react-bootstrap'
import NavBar from './NavBar';
import './BasePage.css'

export default function BasePage(props) {
    return (
        <>
            <Box style={{ width: "100vw", hieght: '100vh' }}>
                <Box>
                    <Row style={{width:'100vw', height:"100vh"}}>
                        <SideNav />
                        <Col className='rightCol h-100 px-0'>
                            <NavBar />
                            <Box>
                                {props.children}
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Box>
        </>
    )
}
