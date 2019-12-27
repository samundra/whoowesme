import React, { FormEvent } from 'react';
import { Icon, Form, Input, Button, DatePicker, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import moment from 'moment';
import TextArea from 'antd/lib/input/TextArea';
import { RouteComponentProps } from 'react-router-dom';

type Props = FormComponentProps & RouteComponentProps;

const AddNewEntry: React.FunctionComponent<Props> = props => {
  const { form, history } = props;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        console.log({ values });

        // Todo: Make API call to save this
        // For now lets take to listing page only
        history.push('/transactions/list'); // We don't have this page yet.
      }
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const { getFieldDecorator } = form;

  function onChange(date: moment.Moment | null, dateString: string): void {
    console.log(date, dateString);
  }

  const { Option } = Select;

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item
        label="Choose date"
        extra="Pick date on which transaction occured."
      >
        {getFieldDecorator('date')(<DatePicker onChange={onChange} />)}
      </Form.Item>
      <Form.Item label="Category">
        {getFieldDecorator('category')(
          <Select placeholder="Choose expense category" mode="multiple">
            <Option value="personal">Personal</Option>
            <Option value="gym">Gym</Option>
            <Option value="spotify">Spotify</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item label="Enter amount" extra="Application currency is in THB.">
        {getFieldDecorator('amount')(<Input addonBefore={`THB (฿)`} />)}
      </Form.Item>
      <Form.Item label="Description" extra="What is this amount about ?">
        {getFieldDecorator('description')(<TextArea rows={3} />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          <Icon type="save" theme="filled" /> Add Entry
        </Button>
      </Form.Item>
    </Form>
  );
};

const AddNewEntryForm = Form.create({ name: 'login_form' })(AddNewEntry);

export default AddNewEntryForm;
