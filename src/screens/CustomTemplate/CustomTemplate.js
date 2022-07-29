import { Box } from '@mui/system'
import React from 'react'
import BasePage from '../../MiscComponents/BasePage'

function CustomTemplate() {
    return (
        <>
            <BasePage>
                <Box className='mx-5 my-2' style={{ height: "100%" }}>
                    <Box style={{ fontSize: '2rem', color: '#43425D' }}>
                        Add Template
                    </Box>
                    <Box style={{ backgroundColor: "white", height: "80%" }} className='p-1 h-100'>

                    </Box>
                </Box>
            </BasePage>
        </>
    )
}

export default CustomTemplate