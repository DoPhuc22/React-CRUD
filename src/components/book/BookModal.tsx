import React, {useEffect, useRef, useState} from "react";
import { IDataType } from "@/app/book/interface";
import { Col, DatePicker, Form, FormProps, Input, Modal, notification, Row, Select, Switch, Typography } from "antd"
import dayjs from "dayjs";
import { createBooks, updateBooks } from "@/app/book/api";
import type { InputRef } from "antd";

const {Text} = Typography;
const {Option} = Select;



type Props = {
  open: boolean;
  onClose: () => void;
  formType: "create" | "update";
  data: IDataType | null;
  handleReload: () => void
}

type FieldType = {
  bookName?: string;
  author?: string;
  release_day?: string;
  price?: string;
  description?: string;
  page?: string;
  language?: string;
  status?: string;
  publisher?: [],
}

const validateMessages = {
  required: "Please enter ${label}!",
  types: {
    email: "${label} not valid!",
    number: "${label} not valid!"
  }
}

const BookModal = ({open, onClose, formType, data, handleReload}: Props) => {

  const [form] = Form.useForm();
  const data2 = {
    ...data,
    release_day: dayjs(data?.release_day),
  }

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  }

  const handleSubmit = () => {
    try{
      form.validateFields().then((value) => {
        value.release_day = dayjs(value.release_day).format("DD-MM-YYYY")
        const payload = {
          bookName: value.bookName,
          author: value.author,
          release_day: value.release_day || null,
          price: value.price,
          description: value.description || null,
          page: value.page,
          language: value.language,
          status: value.status || null,
          publisher: value.publisher || null,
        }
        form.resetFields();
      if(formType === "create"){
        createBooks(payload).then(r => {
          console.log(r);
          handleReload();
          onClose();
          notification.success({
            message: "Add a new book successfully"
          });
        });
      }else{
        updateBooks(data?.id, payload).then(r => {
          handleReload();
          onClose();
          notification.success({
            message: "Update a book successfully"
          })
        })
      }
    }
    )
    }catch(e){
      console.log(e);
    }
  }

  const inputRef = useRef<InputRef>(null);
  const [input, setInput] = useState(true);

  const sharedProps = {
    style: { width: "100%" },
    defaultValue: 'Write here!',
    ref: inputRef,
  };

    return(
      <>
        <Modal
            title="Form nhập thông tin cuốn sách"
            style={{top: 20}}
            open={open}
            onCancel={onClose}
            cancelText="Thoát"
            okText={formType === "create" ? "Thêm Sách" : "Cập nhật Sách"}
            width={1000}
            okButtonProps={{
              htmlType: "submit",
              onClick: () => form.submit(),
            }}
          >
            <Form 
              initialValues={data2}
              form={form}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              validateMessages={validateMessages}
            >
              <Row>
                <Col span={24}>
                  <Text type="secondary">Thông tin cuốn sách</Text>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item<FieldType> label="Tên sách" name="bookName" rules={[{required: true}]}>
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item<FieldType> label="Tên tác giả" name="author" rules={[{required: true}]}>
                    <Input/>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item<FieldType> label="Ngày xuất bản" name="release_day">
                    <DatePicker format={("DD-MM-YYYY")} placeholder=""></DatePicker>
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item label="Giá sách" name="price" rules={[{required: true}]}>
                    <Input required addonBefore="$"/>
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item label="Nhà cung cấp" name="publisher">
                    <Select onChange={() => {
                    }} allowClear>
                      <Option value="kimdong">Kim Đồng</Option>
                      <Option value="thanhnien">Thanh niên</Option>
                      <Option value="tuoitre">Tuổi trẻ</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Trạng thái" name="status" rules={[{required: true}]}>
                    <Select onChange={() => {
                    }} allowClear>
                      <Option value="inStock">Còn hàng</Option>
                      <Option value="outOfStock">Hết hàng</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Mô tả" name="description">
                    <Switch checked={input}
                            checkedChildren="Input"
                            unCheckedChildren="TextArea"
                            onChange={() => {
                              setInput(!input)
                            }}
                    ></Switch>
                    <br />
                    {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Ngôn ngữ" name="language" rules={[{required: true}]}>
                    <Select onChange={() => {
                    }} allowClear>
                      <Option value="vietnamese">Tiếng Việt</Option>
                      <Option value="english">Tiếng Anh</Option>
                      <Option value="chinese">Tiếng Trung</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
        </Modal>  
      </>
    )
  }

export default BookModal;

