//📁📁
import { useState } from 'react';
import './App.css';
import File from './File';
import explorer from './folderData';
import useFile from './useFile';

function App() {

  const [insertNode]=useFile({explorer});
  const [updatedfile,setUpdatedFile]=useState(explorer);
  
  const fileUpdater=({})=>{
   const ifile=insertNode()

   setUpdatedFile();
  }
  return (
    <div className="App">
     <File fl= {explorer} fileUpdater={fileUpdater} />
    </div>
  );
}

export default App;
