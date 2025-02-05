import { Button, Form, Input, InputNumber, Select, Switch } from "antd";
const {Option} = Select;
function CreateRoom() {
  const handleSubmit = (e) => {
    console.log(e);
  }

  const rules = [{
    required: true,
    message: "mandatory"
  }]
  
  return (
    <>
      <h2>Create new room</h2>
      <Form layout="vertical" name="create-room" onFinish={handleSubmit}>

        <Form.Item
          label="Name"
          name="name"
          rules={rules}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Quantity bed"
          name="quantityBed"
          rules={rules}>
          <InputNumber min={1}/>
        </Form.Item>

        <Form.Item
          label="Max people"
          name="maxPeople"
          rules={rules}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={rules}>
          <Input.TextArea maxLength={100} showCount />
        </Form.Item>

        <Form.Item
          label="services"
          name="services"
          rules={rules}>
          <Select mode="multiple" allowClear style={{
            width: "50%"
          }}>
            <Option value="Wifi">Wifi</Option>
            <Option value="Buffet">Buffet</Option>
          </Select>
        </Form.Item>

        <Form.Item valuePropName="checked" name="status" label="Status">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            + New
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default CreateRoom;
