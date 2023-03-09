import Head from "next/head";
import {Layout, Menu} from 'antd'
import type { MenuProps } from 'antd';
import {
    HomeOutlined,
    BellOutlined,
    UserOutlined,
    SettingOutlined
} from '@ant-design/icons';
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

function nav(nav: string):void {
    //const router = useRouter();
    //router.push(`${nav}`)
    console.log(nav)
}

const items: MenuItem[] = [
    getHead('Dashboard', 'sub1', <HomeOutlined />, [
        getChild('Equipment', '1'),
        getChild('Metrics', '2'),
        getChild('Report', '3'),
    ]),
    getHead('Updates', '4', <BellOutlined />),
    getHead('Manage Users', 'sub2', <UserOutlined />, [
        getChild('Current Staff', '5'),
        getChild('Add/Remove Roles', '6'),
    ]),
    getHead('Settings', '7', <SettingOutlined />),
]  

function Dashboard() {
    return (  
        <>
            <Head>
                <title>TMU REC | Dashboard</title>
            </Head>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={300}> 
                    <Menu onClick={({key}) => nav(key)} mode="inline" items={items}/>
                </Sider>
            </Layout>
        </>
    );
}

export default Dashboard;