import { Box } from '@mui/material'
import React from 'react'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PaletteIcon from '@mui/icons-material/Palette';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Col } from 'react-bootstrap'
import WideButton from './WideButton'

function SideNav() {
    return (
        <>
            <Col className='leftCol h-100 text-center' md={2} style={{paddingRight:'0'}}>
                <div style={{ fontSize: "4rem", color: '#9A6BEC' }}>
                    fabie
                </div>
                <Box className='d-flex align-items-center justify-content-center flex-column w-100' >
                    <WideButton element={<LeaderboardIcon />} text="Dashboard" />
                    <WideButton element={<ReceiptIcon />} text="Orders" />
                    <WideButton element={<PhotoAlbumIcon />} text="Theme & Template" />
                    <WideButton element={<PaletteIcon />} text="Charachters & assets" />
                    <WideButton element={<PersonOutlineIcon />} text="Customers" />
                    <WideButton element={<QuestionAnswerIcon />} text="Chat Room" />
                    <WideButton element={<CalendarMonthIcon />} text="Orders" />
                    <WideButton element={<LanguageIcon />} text="Other Pages" />
                    <WideButton element={<SettingsIcon />} text="Settings" />
                </Box>
            </Col>

        </>
    )
}

export default SideNav