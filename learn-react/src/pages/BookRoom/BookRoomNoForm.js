import { Input, Row, Col, Button, Checkbox, Space,DatePicker, Select } from "antd";
import { useState } from "react";
import { bookRoom } from "../../services/roomServices";
const { RangePicker } = DatePicker;
function BookRoomNoForm(){

  const [data,setData] = useState({
    time:"14 hour"
  });

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    }
    setData(object);
  }

  const handelChangeCheckBox = (e) => {
    const object = {
      ...data,
      services: e
    }
    setData(object);
  }

  const handleChangeDate = (date,dateString) =>{
    const object = {
      ...data,
      date: dateString
    }
    setData(object);
  }
  const optionsTime = [];
  for(let i = 7; i <= 24 ; i++){
    let hour = i >= 10 ? `${i} hour` : `0${i} hour`;
    optionsTime.push({
      value: hour,
      label: hour
    })
  }

  const handleChangeSelect = (e) =>{
    const object = {
      ...data,
      time: e
    }
    setData(object);
  }
  
  const handleSubmit =  async () =>{
    const response = await bookRoom(data);
    if(response){
      alert("Reserve room successfully!");
    }
    else{
      alert("Please reserve later!");
    }
  }
  
  return(
    <>
      <h2>Reserve Room</h2>
      <Row gutter={[20,20]}>
        <Col span={24}>
          <p>Name</p>
          <Input name="fullName" placeholder="Example: Vo Tuan Kiet" onChange={handleChangeInput}></Input>
        </Col>
        <Col span={12}>
          <p>Contact</p>
          <Input name="phone" placeholder="Example: 0123456789" onChange={handleChangeInput}></Input>
        </Col>
        <Col span={12}>
          <p>Email</p>
          <Input name="email" placeholder="Example: kietkolat@gmail.com" onChange={handleChangeInput}></Input>
        </Col>
        <Col span={24}>
          <p>Additional Service</p>
          <Checkbox.Group onChange={handelChangeCheckBox}>
            <Space direction="vertical">
              <Checkbox value="Hire motobike">Hire motobike</Checkbox>
              <Checkbox value="Buffet">Buffet</Checkbox>
              <Checkbox value="Place orders">Place orders</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
        <Col span={12}>
          <p>Select day</p>
          <RangePicker format="DD/MM/YYYY" onChange={handleChangeDate}/>
        </Col>
        <Col span={12}>
          <p>Check in time</p>
          <Select onChange={handleChangeSelect} style={
            {
              width: "50%"
            }
          } defaultValue={data.time} options={optionsTime}/>
        </Col>
        <Col span={24}>
          <Button type="primary" onClick={handleSubmit}>Reserve room</Button>
        </Col>
      </Row>
    </>
  )
}
export default BookRoomNoForm;