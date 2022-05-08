import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.scss';

interface User {
  username: string,
  password: string,
}

const login: React.FC<{}> = () => {
  const handleSubmit = (user:User) => {
    const {username, password} = user
    console.log(username, password)
  }
  return (
    <div className="login">
      <header className="login-header">
        <h1>后台管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登陆</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, whitespace: true, message: '用户名必须输入' }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, whitespace: true, message: '密码必须输入' }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}
export default login