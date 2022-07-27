import { Box } from '@mui/system'
import React from 'react'
import BasePage from '../../MiscComponents/BasePage'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BarChart from '../../assets/BarChart.svg'
import Statistics from '../../assets/Statistics.svg'

export default function () {
    return (
        <>
            <BasePage>
                <Box className='mx-5 my-2'>
                    <Box style={{ fontSize: '2rem', color: '#43425D' }}>
                        Overview
                    </Box>
                    <Box className="py-3">
                        <Box className="d-flex align-items-center justify-content-between w-100">
                            <Box className="py-3 px-4" style={{ backgroundColor: "white", width: "30%" }}>
                                <Box>
                                    Total Views
                                </Box>
                                <Box className="d-flex align-items-center justify-content-between">
                                    <Box className="">
                                        <Box style={{ fontSize: '2rem', color: '#4D4F5C', fontWeight: "bold" }}>
                                            243K
                                        </Box>
                                        <Box className="" style={{ color: "#FF4141", fontWeight: 'bold' }}>
                                            <ArrowDownwardIcon /> 13.4%
                                        </Box>
                                    </Box>
                                    <Box>
                                        <img src={BarChart} alt="bar chart" />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="py-3 px-4" style={{ backgroundColor: "white", width: "30%" }}>
                                <Box>
                                    Total Views
                                </Box>
                                <Box className="d-flex align-items-center justify-content-between">
                                    <Box className="">
                                        <Box style={{ fontSize: '2rem', color: '#4D4F5C', fontWeight: "bold" }}>
                                            243K
                                        </Box>
                                        <Box className="" style={{ color: "#FF4141", fontWeight: 'bold' }}>
                                            <ArrowDownwardIcon /> 13.4%
                                        </Box>
                                    </Box>
                                    <Box>
                                        <img src={BarChart} alt="bar chart" />
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="py-3 px-4" style={{ backgroundColor: "white", width: "30%" }}>
                                <Box>
                                    Total Views
                                </Box>
                                <Box className="d-flex align-items-center justify-content-between">
                                    <Box className="">
                                        <Box style={{ fontSize: '2rem', color: '#4D4F5C', fontWeight: "bold" }}>
                                            243K
                                        </Box>
                                        <Box className="" style={{ color: "#FF4141", fontWeight: 'bold' }}>
                                            <ArrowDownwardIcon /> 13.4%
                                        </Box>
                                    </Box>
                                    <Box>
                                        <img src={BarChart} alt="bar chart" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{width:"100%"}}>
                        <img style={{width:"100%"}} className="img-fluid" src={Statistics} alt="" />
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}

