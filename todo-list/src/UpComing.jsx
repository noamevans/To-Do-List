import React from 'react'
import './UpComing.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Padding } from '@mui/icons-material';
import  { FolderForm }  from './FolderForm';
import { List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';




export const UpComing = ({addFolder, folders, setFolders, openDialog, showCurrentList}) => {


  return (
    <div className='upComing'>
      <div className='folderTopWrapper'>
      <small className='logo1' ><b>Task Folders </b></small>
      <IconButton>
      <AddCircleOutlineIcon className='addFolder' onClick={() => openDialog("addFolder", { folderText: "" })} sx={{ color: 'white', alignContent: "start"}}/>
        </IconButton>
      </div>
            
        <div className='listwrapper' >
          <List sx={{ overflow: 'scroll', height: '35vh', width: '18vw'  }}>
          {folders.map((folder) => (
            
            <ListItem className="items" 
                      key={folder.id}  
                      onClick={() => showCurrentList(folder.folderText)} 
                      sx={{ height: '7vh',
                            borderRadius: '10px'}}>
                        
              <div>{folder.folderText}</div>
              
              <div className='deleteFolderButton'>


                <IconButton  aria-label="delete" onClick={() => openDialog("deleteFolder", { id: folder.id })} sx={{ color: 'lightgrey' }}>
                  <Tooltip title="Delete Folder" arrow placement="top">
                    <DeleteIcon />
                  </Tooltip>
                </IconButton>


              </div>

            </ListItem>

          ))}
        </List>
        </div>
    </div>
  )
}
