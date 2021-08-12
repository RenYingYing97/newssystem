import React from 'react'
import { Route, Switch } from 'react-router'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from "../sandbox/home/Home";
import UserList from "../sandbox/user-manage/UserList";
import RoleList from "../sandbox/right-manage/RoleList";
import RightList from "../sandbox/right-manage/RightList";
import NoPermission from "../sandbox/nopermission/NoPermission";
import { Redirect } from 'react-router-dom';
export const NewsSandBox = () => {
    return (
        <div>
            {/* 侧边栏 */}
            <SideMenu></SideMenu>
            {/* 顶部导航栏 */}
            <TopHeader></TopHeader>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/user-manage/list" component={UserList} />
                <Route path="/right-manage/role/list" component={RoleList} />
                <Route path="/right-manage/right/list" component={RightList} />
                {/* exact 精准匹配 */}
                <Redirect from="/" to="/home" exact/>
                {/* 最后是如果没有匹配到任何的路由，则进入此路由 */}
                <Route path="*" component={NoPermission}/>
            </Switch>
        </div>
    )
}
