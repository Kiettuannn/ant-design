import { Menu } from 'antd';
import { DashboardOutlined,CustomerServiceOutlined, AppstoreOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';
import "./MenuBar.scss"
const items = [
  {
    label: "Dashboard",
    icon: <DashboardOutlined style={
      {
        fontSize:20
      }
    }/>,
    key: 1,
    children: [
      {
        key: "/",
        label: <Link className="menu__sub-item" to="/">Default</Link>
      }
    ]
  },
  {
    label: "Services",
    icon: <CustomerServiceOutlined style={
      {
        fontSize:20
      }
    }/>,
    key: 2,
    children: [
      {
        key: "/book-room",
        label: <Link className="menu__sub-item" to="/book-room">Book room</Link>
      }
    ]
  },
  {
    label: "Management",
    icon: <AppstoreOutlined style={{
      fontSize: 20
    }} />,
    children :[
      {
        key: "/create-room",
        label: <Link className="menu__sub-item" to="/create-room">Create room</Link>
      }
    ],
    key: 3
  },
  {
    label: "Menu 4"
  },
  {
    label: "Menu 5"
  },

];
function MenuBar() {
  return (
    <Menu
      style={{
        fontSize:25
      }}
      defaultSelectedKeys={["/"]}
      defaultOpenKeys={['1']}
      mode="inline"
      items={items}
    />
  )
}
export default MenuBar;