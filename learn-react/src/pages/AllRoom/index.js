import { useEffect, useState } from "react"
import { getAllRoom } from "../../services/roomServices"
import {Button} from "antd"
import GridRoom from "./GridRoom";
import TableRoom from "./TableRoom";
function AllRoom() {

  const [rooms, setRooms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  const fetchApi = async () => {
    const result = await getAllRoom();
    setRooms(result.reverse());
  }

  useEffect(() => {
    fetchApi();
  }, [])
  
  const handleReload = () => {
    fetchApi();
  }
  return (
    <>
      <Button onClick={() => setIsGrid(!isGrid)}>Grid/Table</Button>
      {isGrid ? (
        <GridRoom rooms={rooms}/>
      ) : (
        <TableRoom rooms={rooms} onReload={handleReload}/>
      )}
    </>
  )
}
export default AllRoom;