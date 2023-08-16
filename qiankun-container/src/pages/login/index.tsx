import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
//导入dispatch钩子
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { Dispatch } from "redux";
import { handleLogin } from "../../store/user/actions";
import "./index.scss";
export default function Login() {
  const dispatch: Dispatch<any> = useDispatch();
  //导入导航和参数查询
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const redirect = search.getAll("redirect")[0] || "/home"; //获取到登录页面的上一个页面，实现登录成功之后的回跳,没有上一个页面就跳转到首页

  //定义回调fn

  const callback = () => {
    navigate(redirect);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(handleLogin(values, callback));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    userName?: string;
    password?: string;
    // remember?: string;
  };
  return (
    <div id="login" className="flex col-center row-end">
      <div className="loginBox flex-col col-center">
        <div className="title">欢迎来到Fly管理系统</div>
        <p className="changeRegister">切换注册</p>
        <div className="content border radius14 flexcc">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 400 }}
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="用户名"
              name="userName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="密码"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
