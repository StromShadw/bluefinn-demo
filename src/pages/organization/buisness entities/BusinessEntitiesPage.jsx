import React, { useState } from 'react';
import { Layout, Table, Button, Checkbox } from 'antd';
import { PlusOutlined,DeleteOutlined,EditOutlined } from '@ant-design/icons';
import './BusinessEntitiesPage.css'

const { Header, Content } = Layout;

const dataSource = [
  {
    key: '1',
    businessEntity: 'Accounting & Financial',
    businessEntityType: 'Division',
    parentBusinessEntity: 'Finance',
    childBusinessEntities: 'Financial Accounting',
    updatedAt: '07/24/2023, 2:02 PM',
  },
  {
    key: '2',
    businessEntity: 'Accounts Maintenance Unit -WBG',
    businessEntityType: 'Department',
    parentBusinessEntity: 'Operations',
    childBusinessEntities: null,
    updatedAt: '07/24/2023, 2:06 PM',
  },
  // Add more data here
];

const columns = [
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: (_, record) => (
      <>
        <Button icon={<EditOutlined />} />
        <Button icon={<DeleteOutlined />} />
      </>
    ),
  },
  {
    title: 'Business Entity',
    dataIndex: 'businessEntity',
    key: 'businessEntity',
  },
  {
    title: 'Business Entity Type',
    dataIndex: 'businessEntityType',
    key: 'businessEntityType',
  },
  {
    title: 'Related Location',
    dataIndex: 'relatedLocation',
    key: 'relatedLocation',
  },
  {
    title: 'Parent Business Entity',
    dataIndex: 'parentBusinessEntity',
    key: 'parentBusinessEntity',
  },
  {
    title: 'Child Business Entities',
    dataIndex: 'childBusinessEntities',
    key: 'childBusinessEntities',
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

const BusinessEntitiesPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleAddEntity = () => {
    // Add entity logic
  };

  return (
    <Layout>
      <Header style={{ background: '#f5f5f5', padding: '10px 20px' }}>
        <h1>Business Entities</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAddEntity}
          style={{ float: 'right' }}
        >
          Add Business Entity
        </Button>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 10 }}
          bordered
          rowSelection={{
            selectedRowKeys,
            onChange: handleSelectChange,
          }}
        />
      </Content>
    </Layout>
  );
};

export default BusinessEntitiesPage;
;
