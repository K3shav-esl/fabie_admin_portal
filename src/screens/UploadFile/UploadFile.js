import { Box } from '@mui/system'
import React from 'react'
import BasePage from '../../MiscComponents/BasePage'
export default function UploadFile() {
    return (
        <>
            <BasePage>
                <Box style={{ backgroundColor: 'white', width: '90%', height: "80vh", padding: '1.5rem 1.5rem', margin: "2.5rem auto", borderRadius: "2px" }}>
                    <Box style={{ fontSize: '1.5rem', color: '#4D4F5C' }}>
                        Upload
                    </Box>
                    <Box style={{backgroundColor:""}}>
                        <input type="file" name="" id="" />
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}
