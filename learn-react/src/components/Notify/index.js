import { Badge, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import "./Notify.scss"
function Notify(){
  const items = [
    {
      label:<div className="notify__item">
        <div className="notify__item--icon">
          <BellOutlined />
        </div>
        <div className="notify__item__content">
          <div className="notify__item__title">
            Item 1
          </div>
          <div className="notify__item__time">
            8 minutes
          </div>
        </div>
      </div>,
      key: "0",
    },
    {
      label: "1nd",
      key: '1',
    },
    {
      label: "2nd",
      key: '2',
    },
    {
      label: '3nd',
      key: '3',
    },
    {
      label: '4nd',
      key: '4',
    },
    {
      label: '5nd',
      key: '5',
    },
    {
      label: '6nd',
      key: '6',
    },
    {
      label: '7nd',
      key: '7',
    },
    {
      label: '8nd',
      key: '8',
    },
  ];
  return(
    <>
      <Dropdown menu={{
        items,
        }}
        trigger={["click"]}
        dropdownRender={(menu) => (
          <>
            <div className="notify__dropdown">
              <div className="notify__header">
                <div className="notify__header--title">
                <BellOutlined/> <span>Notification</span>
                </div>
                <Button className="notify__header--viewAll" type="link">View All</Button>
              </div>
              <div className="notify__body">
                {menu}
              </div>
            </div>
          </>
        )}>
          <Badge dot>
            <Button type="text" icon={<BellOutlined/>} className="Button-notify"></Button>
          </Badge>
      </Dropdown>
    </>
  )
}
export default Notify;