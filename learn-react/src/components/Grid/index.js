import {Col, Row} from "antd";
import "./Grid.scss"
import CardItem from "../CardItem";
function Grid(){
  return(
    <>
      {/* <Row gutter={10}>
        <Col>
          <div className="box">
            Box 1
          </div>
        </Col>
        <Col>
          <div className="box">
            Box 1
          </div>
        </Col>
        <Col>
          <div className="box">
            Box 1
          </div>
        </Col>
        <Col>
          <div className="box">
            Box 1
          </div>
        </Col>
      </Row> */}

      <Row gutter={[20,20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
          <CardItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
          <CardItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
          <CardItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24} >
          <CardItem title="Box 4" />
        </Col>
      </Row>
      <Row gutter={[20,20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24} >
          <CardItem title="Box 5"  style={{height: "400px"}} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24} >
          <CardItem title="Box 5" style={{height: "400px"}} />
        </Col>
      </Row>
    </>
  )
}
export default Grid;