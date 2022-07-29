import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import BasePage from '../../MiscComponents/BasePage'
import UploadImg from '../../assets/upload.png'
import { Button } from '@mui/material'

export default function UploadFile(props) {

    const [FileList, setFileList] = useState([])

    const fileDrop = (e) =>{
        const newFile = e.target.files[0]
        if (newFile) {
            const updateList = [...FileList, newFile]
            setFileList(updateList)
            props.onFileChange(updateList)
        }
    }
    const wrapperRef = useRef(null)
    const onDragEnter = () => wrapperRef.current.style.add({opacity:"0.6"})
    const onDragExit= () => wrapperRef.current.style.remove({opacity:"0.6"})
    const onDragDrop= () => wrapperRef.current.style.remove({opacity:"0.6"})
    return (
        <>
            <BasePage>
                <Box style={{ backgroundColor: 'white', width: '90%', height: "80vh", padding: '1.5rem 1.5rem', margin: "2.5rem auto", borderRadius: "2px" }}>
                    <Box style={{ fontSize: '1.5rem', color: '#4D4F5C' }}>
                        Upload
                    </Box>
                    <Box
                        ref={wrapperRef}
                        onDragEnter = {onDragEnter}
                        onDragExit = {onDragExit}
                        onDragDrop = {onDragDrop}
                        className='rounded d-flex align-items-center flex-column justify-content-center' style={{ backgroundColor: "#F0F2F8", height: "90%", width: "100%", marginTop: "1rem" }}>
                        <img src={UploadImg} alt="" />
                        <Button className="mt-2" variant="contained" style={{ backgroundColor: "#3B86FF", borderRadius: "3px", border: "none", outline: 'none', color: "white", padding: "0.7rem 4rem", pointer: "cursor", position: "relative" }}> Choose File
                            <input style={{ position: "absolute", top: "0", left: "0", height: "100%", overflow: "hidden", opacity: "0" }} type="file" name="" id="" />
                        </Button>
                    </Box>
                </Box>
            </BasePage>
        </>
    )
}

