//this button is used on the analytics page(GraphPage.js)
import { Box, Container } from '@mui/material'
import React from 'react'

export default function WideButton(props) {
  return (
    <>
      <Container className='d-flex align-items-center  w-100 py-2 my-1' style={{backgroundColor:'#AD8DE6', color:'#413E90'}}>
        <Box className=''>
          {props.element}
        </Box>
        <Box className='mx-2'>
          {props.text}
        </Box>
      </Container>
    </>
  )
}
