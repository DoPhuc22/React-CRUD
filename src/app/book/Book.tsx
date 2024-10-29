'use client'
import { Button, Col, Modal, notification, Row, Space, Table, TableProps, Tag, Typography } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import {IModalConfig, IDataType} from "./interface";
import {ExclamationCircleFilled} from "@ant-design/icons";
import {deleteBooks, getBooks} from "./api";
import BookModal from "@/components/book/BookModal";

const { Title } = Typography;

const ModalType = {
  CREATE: "create",
  UPDATE: "update"
};

export default function Crud() {
  const [modalConfig, setModalConfig] = useState<IModalConfig>({
    type: "",
    data: null,
  });
  const [loading, setLoading] = useState(false);
  const[data, setData] = useState<[]>([]);

  const openModal = (type: string, data?: IDataType) => {
    setModalConfig({
      type: type,
      data: data || null,
    })
  }

  const closeModal = () => {
    setModalConfig({
      type: "",
      data: null,
    })
  }

  const handleDelete = (id: string) =>{
    Modal.confirm({
      title: 'Delete confirm',
      icon: <ExclamationCircleFilled/>,
      content: 'Are you sure to delete this book?',
      cancelText: 'Close',
      okText: "Confirm",
      maskClosable: true,
      onOk(){
        try{
          deleteBooks(id).then(() => {
            handleReload();
            notification.success({
              message: "Delete success!"
            }
            )
          })
        }catch(e){
          console.log(e)
        }
      },
      onCancel(){
        console.log('Cancel')
      } 
    });
  }

  const handleReload = () =>{
    handleRequest();
  }

  const handleRequest = useCallback(() => {
    setLoading(true);
    getBooks()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [setLoading, setData])
  useEffect(() => {
    handleRequest();
  }, [handleRequest])

  const columns: TableProps<IDataType>['columns'] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên sách",
      dataIndex: "bookName",
      key: "bookName"
    },
    {
      title: "Tên tác giả",
      dataIndex: "author",
      key: "author"
    },
    {
      title: "Ngày xuất bản",
      dataIndex: "release_day",
      key: "release_day"
    },
    {
      title: "Giá sách",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Số trang",
      dataIndex: "page",
      key: "page"
    },
    {
      title: "Ngôn ngữ",
      dataIndex: "language",
      key: "language"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, {status}) =>(status === "inStock" ? "Còn hàng" : "Hết hàng"),
    },
    {
      title: "Đánh giá",
      dataIndex: "judge",
      key: "judge",
      render: (_, {publisher}) =>{
            switch(publisher){
              case "kimdong":
                return "Kim Dong";
              case "thanhnien":
                return "Thanh Nien";
              case "tuoitre":
                return "Tuoi Tre";
            }
          }
    },
    {
      title: "Thao tác",
      key: "action",
      align: "center",
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => {
            openModal(ModalType.UPDATE, record);
          }}>Sửa</Button>
          <Button type="primary" danger onClick={() => {
            handleDelete(record.id)
          }}>Xóa</Button>
        </Space>
      ),
    }

  ];

  return (
    <>
      <Row justify="space-between" align="bottom">
        <Col>
          <Title level={3}><p className="text-white">Danh sách các cuốn sách hay nhất thế giới</p></Title>
        </Col>
        <Col>
          <Button type="primary"
            onClick={() => {openModal(ModalType.CREATE);
            }}
            style={{marginBottom: 8}}
            >
            Thêm sách ➕
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} rowKey={record => record?.id} loading={loading} pagination={{pageSize: 5}}/>
        {modalConfig.type && (
          <BookModal
            open
            onClose={closeModal}  
            formType={modalConfig.type === "create" ? "create" : "update"}
            data={modalConfig.data}
            handleReload={handleReload}
          />
        )}
    </>
  );
}
