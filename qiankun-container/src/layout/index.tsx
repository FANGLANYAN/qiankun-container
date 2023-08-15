import React, { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import './index.scss'
export default function Layout() {
  const [showMenu,setShowMune] = useState(false)
  const handleHideMenu = (e:any)=>{
    setShowMune(false)
  }
  return (
    <div id="layout" className='flex-col'>
      <Header show={()=>setShowMune(!showMenu)}/>
      <div className="content flex">
        <div className="menu" style={showMenu?{}:{display:'none'}}>
           <Menu /> 
        </div>
        {/* 微前端框架中嵌入的是完整的子应用，为了有更宽广的展示区域，把menu设置为动态展示的slide */}
        <div id='container' onClick={handleHideMenu}></div>
      </div>
    </div>
  )
}
