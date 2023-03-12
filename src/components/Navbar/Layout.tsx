import React, { PropsWithChildren } from "react";
import {Layout, Menu} from 'antd'
import type { MenuProps } from 'antd';
import {
    HomeOutlined,
    BellOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
import SignoutBTN from "./Signout";
import NavHeader from "./NavHeader";
import { useRouter } from "next/router";
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getHead(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      label,
      children,
    } as MenuItem;
}

function getChild(
    label: React.ReactNode,
    key: React.Key,
): MenuItem {
    return {
        label,
        key,
    } as MenuItem;
}

const items: MenuItem[] = [
    getHead('Dashboard', 'sub1', <HomeOutlined />, [
        getChild('Equipment', 'Equipment'),
        getChild('Metrics', 'Metrics'),
        getChild('Report', 'Report'),
    ]),
    getHead('Updates', 'Updates', <BellOutlined />),
    getHead('Manage Users', 'sub2', <UserOutlined />, [
        getChild('Current Staff', 'Current Staff'),
        getChild('Add/Remove Roles', 'Roles'),
    ]),
    getHead('Settings', '7', <SettingOutlined />),
]  

function NavLayout(props: PropsWithChildren) {
    const router = useRouter();
    function nav(nav: string) {        
        router.push(`/Dashboard/${nav}`)
        console.log(`/Dashboard/${nav}`)
    }
    return (  
        <>
            <Layout style={{ minHeight: '100vh'}}>
                <Sider style={{backgroundColor: "#004C9B"}} width={300}>                     
                    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}> 
                        <div>
                            <NavHeader />
                            <Menu onClick={({key}) => nav(key)} mode="inline" items={items}/>
                        </div>
                        <SignoutBTN />  
                    </ div>
                </Sider>
                {props.children}
            </Layout>
        </>
    );
}

export default NavLayout;
