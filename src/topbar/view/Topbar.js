import {Affix, Row, Col, Divider} from 'antd';
import React, {Component} from 'react';
import {Link} from "react-keeper";
import {inject} from 'mobx-react'

@inject(["rootStore"])
class Topbar extends Component {
    render() {
        const user = this.props.rootStore.userStore.user;
        if (user.hasLogin === true)
            return (
                <Affix>
                    <Row className="Topbar" type="flex" align="middle" style={{background: '#000044'}}>
                        <Col span={6} push={4}>
                            <text style={{color: '#fff'}}>(｡･∀･)ﾉﾞ嗨，欢迎光临！</text>
                            <Link to="/">龙卷风书店</Link>
                            <Divider type="vertical"/>
                            <text style={{color: '#fff'}}>你好！{user.nickname}</text>
                        </Col>
                        <Col span={6} push={10}>
                            <Divider type="vertical"/>
                            <Link to="/myzone">个人信息</Link>
                            <Divider type="vertical"/>
                            <Link to="/shoppingcart">我的购物车</Link>
                        </Col>
                    </Row>
                </Affix>
            );
        else
            return (
                <Affix>
                    <Row className="Topbar" type="flex" align="middle" style={{background: '#000044'}}>
                        <Col span={6} push={4}>
                            <text style={{color: '#fff'}}>(｡･∀･)ﾉﾞ嗨，欢迎光临！</text>
                            <Link to="/">龙卷风书店</Link>
                            <Divider type="vertical"/>
                            <Link to="/login">登陆</Link>
                            <Divider type="vertical"/>
                            <Link to="/register">注册</Link>
                        </Col>
                    </Row>
                </Affix>
            )
    }
}

export default Topbar;