import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'


function login() {
  const [pageTitle] = useState('laoer536-关于页面') //因为加入了unplugin-auto-import 所以不用在手动导入
  const navigate = useNavigate()
  const goAboutPage = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>{pageTitle}</h1>
      {/* <button onClick={() => user.changeNum()}>点击使用mobx改变数字</button> */}
      <Button type="primary" onClick={goAboutPage}>跳转login</Button>

    </div>
  )
}

export default login
