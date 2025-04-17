import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "CUSTOMER NAME",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div className="flex">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className=" mr-2 rounded-2xl h-[20px] aspect-square"
        ></img>
        {text}
      </div>
    ),
  },
  {
    title: "COMPANY",
    dataIndex: "email",
    key: "age",
  },
  {
    title: "ORDER VALUE",
    dataIndex: "spending",
    key: "address",
  },
  {
    title: "ORDER DATE",
    dataIndex: "joinDate",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    render: (status) => {
      if (status === "New") {
        return <Tag color="blue">{status}</Tag>;
      }
      if (status === "Active") {
        return <Tag color="green">{status}</Tag>;
      }
      if (status === "In progress") {
        return <Tag color="orange">{status}</Tag>;
      }
      if (status === "Completed") {
        return <Tag color="cyan">{status}</Tag>;
      }
    },
  },
  {
    title: "",
    key: "tags",
    dataIndex: "tags",
    render: () => {
      <EditOutlined />;
    },
  },
  {
    title: "",
    key: "",
    render: (_, record) => <EditOutlined onClick={() => handleEdit(record)} />,
  },
];

function handleEdit(record) {
  console.log(record);
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

function DataTable() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/customerTable")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Table
        key={(record) => record.id}
        columns={columns}
        dataSource={data}
        rowSelection={Object.assign({ type: "checkbox" }, rowSelection)}
        pagination={{
          pageSize: 6,
        }}
      />
      {data && (
        <div className="mt-2 text-gray-600 text-md">{data.length} results</div>
      )}
    </div>
  );
}

export default DataTable;
