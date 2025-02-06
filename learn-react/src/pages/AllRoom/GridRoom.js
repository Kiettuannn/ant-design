import { Row, Col, Card, Badge} from "antd"

function GridRoom(props){
  const {rooms} = props;
  return(
    <>
      <Row gutter={[20, 20]}>
          {rooms.map((item) => (
            <Col span={12} key={item.id}>
              <Card title={item.name}>
                <p>Quantity bed: <strong>{item.quantityBed}</strong></p>
                <p>Max people: <strong>{item.maxPeople}</strong></p>
                <p>
                  {item.status ? (
                    <Badge status="success" text="Room available" />
                  ) : (
                    <Badge status="error" text="Fully booked" />
                  )}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
    </>
  )
}
export default GridRoom;