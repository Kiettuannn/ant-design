import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons"
import { deleteRoom } from "../../services/roomServices";

function DeleteRoom(props) {
  const { record,onReload} = props;

  const handleDelete = async () => {
    const response = await deleteRoom(record.id);
    if(response){
      onReload();
      alert("Delete successfully");
    }
    else{
      alert("Delete unsuccessfully");
    }
  }
  return (
    <>
      <Popconfirm onConfirm={handleDelete}>
        <Button icon={<DeleteOutlined />} danger />
      </Popconfirm>
    </>
  )
}
export default DeleteRoom;