import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from '@mui/system';
import { Box, TextField } from '@mui/material';
import AdminImg from '../assets/Avatar.png'

function NavBar() {
    return (
        <>
            <Box className='d-flex align-items-center justify-content-between w-100 py-2' style={{ backgroundColor: 'white', color: '#CACED5' }}>
                <Box className='d-flex align-items-center justify-content-between mx-5 h-100'>
                    <SearchIcon className='' style={{ marginRight: '-2rem', zIndex: '2' }} />
                    <input type="text" id='searchInput' className='input-group-text' placeholder='Search transactions, invoice or help' style={{ backgroundColor: 'white', border: 'none', width: '20rem' }} />
                </Box>
                <Box className='d-flex align-items-center justify-content-between h-100 px-3'>
                    <QuestionAnswerIcon className='mx-2'/>
                    <NotificationsIcon className='mx-2'/>
                    <Box className='nav-item-dropdown h-100 px-2' style={{borderLeft:'1px solid #CACED5'}}>
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin Nazim
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </Box>
                    <Box className='h-75 p-1'>
                        <img className='img-fluid' src={AdminImg} alt="" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default NavBar