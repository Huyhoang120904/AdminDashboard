import React, { useState, useEffect } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs"; // Import dayjs for date handling

const DataModal = ({ isModalOpen, handleClose, modalData }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  // Fetch data from API and reset form fields when modalData changes
  useEffect(() => {
    if (modalData?.id) {
      fetch(`http://localhost:3000/customerTable/${modalData?.id}`)
        .then((response) => response.json())
        .then((data) => {
          const joinDate = data.joinDate ? dayjs(data.joinDate) : null;

          form.setFieldsValue({
            name: data.name,
            company: data.company,
            spending: data.spending,
            joinDate: joinDate,
            status: data.status,
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [modalData?.id, form]);

  const handleOk = () => {
    setLoading(true);

    form
      .validateFields()
      .then((values) => {
        console.log(values);

        fetch(`http://localhost:3000/customerTable/${modalData?.id}`, {
          method: "PUT",
          body: JSON.stringify(values),
        });

        setLoading(false);
        handleClose();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        setLoading(false);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    handleClose();
  };

  return (
    <Modal
      open={isModalOpen}
      title="Customer Edit"
      footer={null}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input customer's name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item label="Company" name="company">
          <Input placeholder="Company" />
        </Form.Item>

        <Form.Item
          label="Order Value"
          name="spending"
          rules={[{ required: true, message: "Please input order value!" }]}
        >
          <Input placeholder="Order Value" />
        </Form.Item>

        <Form.Item
          label="Order date"
          name="joinDate"
          rules={[{ required: true, message: "Please input order date" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select status!" }]}
        >
          <Select
            style={{ width: "100%" }}
            options={[
              { value: "New", label: "New" },
              { value: "In Progress", label: "In Progress" },
              { value: "Completed", label: "Completed" },
              { value: "Active", label: "Active" },
            ]}
          />
        </Form.Item>

        <Form.Item className="flex justify-end gap-2">
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>

          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DataModal;
