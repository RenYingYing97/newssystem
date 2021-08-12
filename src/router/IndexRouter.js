import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../views/login/Login';
import { NewsSandBox } from '../views/sandbox/NewsSandBox';

export const IndexRouter = () => {
    return (
        <HashRouter>
            {/* swith标签表示只匹配一个，不再往下匹配 */}
            <Switch> 
                <Route path="/login" component={Login} />
                <Route path="/" component={NewsSandBox} />
                {/* 等价于 */}
                {/* <Route path="/" render={() => {
                   return localStorage.getItem('token')? 
                    <NewsSandBox/>:
                    <Login/>
                }}/> */}
            </Switch>
        </HashRouter>

    )
}
