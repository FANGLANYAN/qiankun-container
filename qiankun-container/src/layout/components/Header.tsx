import React from 'react'
import './header.scss'
import {getUrserLogin} from '../../api/user'
export default function Header(props:any) {
  const {show} = props
  const handleLogin = ()=>{
    getUrserLogin({
      userName:'123',
      password:'123'
  }).then((res:any)=>{
    console.log(res);
  })
  }
  return (
    <div id='header' className='flex row-between col-center'>
     <div className="header-left flex col-center">
     <div className="header-left-menu" onClick={()=>show()}>munu展示</div>
     <div className="header-left-brade">面包屑</div>
     <div className="header-left-brade" onClick={handleLogin}>点我登录</div>
     </div>
     <div className="header-right flex col-center"  onClick={()=>show(false)}>
        <div className="header-right-info">fly</div>
        <div className="header-right-actions">退出登录</div>
     </div>
      </div>
  )
}
