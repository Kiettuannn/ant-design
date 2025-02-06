import { Outlet} from "react-router-dom";
import "./LayoutDefault.scss";
import { Layout,Button } from 'antd';
import logo from "../../../src/images/logo.png";
import logo_sub from "../../../src/images/logo-fold.png"
import {SearchOutlined, MenuUnfoldOutlined,MenuFoldOutlined} from "@ant-design/icons"
import { useState } from "react";
import Notify from "../../components/Notify";
import MenuBar from "../../MenuBar";
const { Sider, Content, Footer } = Layout;

function LayoutDefault() {
  const [collapse,setcollapse] = useState(false);
  const handleCollapse = () =>{
    setcollapse(!collapse);
  }
  // console.log(collapse);

  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div className={"header__logo " + (collapse && "header__logo--collapsed")}>
            <img src={collapse ? logo_sub : logo} alt="Logo"></img>
          </div>
          <div className="header__nav">
            <div className="header__nav__left">
              <Button onClick={handleCollapse} className="header__collapse" icon={ collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
              </Button>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav__right">
              <Notify />
            </div>
          </div>
        </header>
        <Layout className="body">
          <Sider  collapsed={collapse} width="20%" className={`body__sider${collapse ? '--collapsed' : ''}`}>
            <MenuBar/>
          </Sider>
          <Content className="body__content" >
            <Outlet />
          </Content>
        </Layout>
        <Footer className="footer" >Copy right @KietKlat</Footer>
      </Layout>
    </>
  )
}
export default LayoutDefault;