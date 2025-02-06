import { Badge, Table, Tag } from "antd";
import DeleteRoom from "./DeleteRoom";

function TableRoom(props){
  const {rooms,onReload} = props;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity bed",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "Max people",
      dataIndex: "maxPeople",
      key: "maxPeople",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_,record) => {
        return(
          <>
            {record.status ? (
              <Tag color="success">Room available</Tag>
            ) : (
              <Tag color="error">Not vacacy</Tag>
            )}
          </>
        );
      }
    },
    {
      title:"Action",
      key: "action",
      render: (_,record) =>{
        return(
          <>
            <DeleteRoom record={record} onReload={onReload} />
          </>
        );
      }
    }
  ]
 
  return(
    <>
      <Table dataSource={rooms} columns={columns} key={rooms.id} rowKey="id"/>
    </>
  )
}
export default TableRoom;