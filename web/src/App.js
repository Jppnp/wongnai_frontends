import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';




function App() {
  const [keyword, setKeyword] = useState('')
  
  const queryParams = new URLSearchParams(window.location.search);
  let key = queryParams.get('keyword');
  
  useEffect( () =>{
    console.log(key)
    if (key == null){
      setKeyword('')
    }else{
      setKeyword(key)
    }
    
  }, [key])
  function setDafault () {
    setKeyword('')
    window.location.href = window.location.protocol+ "//" + window.location.host;
  }
  return (
    <div className="App">
      <Header setKeyword={setKeyword}/>
      {key && <div className='d-flex justify-content-center'>
        <p style={{marginTop : 12 , marginRight : 5}}>หมวดหมู่ :</p> 
        <button style={{fontSize : 16, margin : 5}} className='btn btn-outline-primary' onClick={setDafault}>{key}</button>
        </div>}
      <Content keyword={keyword}/>
    </div>
  );
}

export default App;
