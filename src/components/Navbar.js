import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';

import icon from "../images/cryptohub-logo-removebg-preview.png";
import './navbar.css'

const HomeSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5578 5.53423C12.6873 4.69887 11.3127 4.69887 10.4422 5.53423L5.81574 9.97357C5.70239 10.0823 5.62614 10.224 5.5978 10.3785C5.04367 13.4004 5.00277 16.494 5.47681 19.5295L5.58933 20.25H8.56579V14.0387C8.56579 13.6244 8.90158 13.2887 9.31579 13.2887H14.6842C15.0984 13.2887 15.4342 13.6244 15.4342 14.0387V20.25H18.4107L18.5232 19.5295C18.9972 16.494 18.9563 13.4004 18.4022 10.3785C18.3739 10.224 18.2976 10.0823 18.1843 9.97357L13.5578 5.53423ZM9.40363 4.45191C10.8546 3.05965 13.1454 3.05965 14.5964 4.45191L19.2228 8.89125C19.5634 9.21804 19.7925 9.64373 19.8776 10.108C20.4621 13.2956 20.5053 16.559 20.0052 19.7609L19.8245 20.9184C19.7497 21.3971 19.3374 21.75 18.8529 21.75H14.6842C14.27 21.75 13.9342 21.4142 13.9342 21V14.7887H10.0658V21C10.0658 21.4142 9.73 21.75 9.31579 21.75H5.14706C4.66258 21.75 4.25029 21.3971 4.17554 20.9184L3.99478 19.7609C3.49473 16.559 3.53788 13.2956 4.12241 10.108C4.20754 9.64373 4.43662 9.21804 4.77719 8.89125L9.40363 4.45191Z" fill="white"/>
    </svg>
);
const HomeIcon = props => <Icon component={ HomeSvg }{...props}/>

const BankSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4151 2.39511C11.7962 2.27797 12.2038 2.27797 12.5849 2.39511L15.5706 3.31277C17.1283 3.79152 18.6075 4.49538 19.9616 5.40203C21.0147 6.10722 20.5155 7.74997 19.2481 7.74997H4.75191C3.48446 7.74997 2.98526 6.10722 4.03841 5.40204C5.39244 4.49538 6.87174 3.79152 8.42938 3.31277L11.4151 2.39511ZM12.1442 3.82891C12.0502 3.80003 11.9498 3.80003 11.8558 3.82891L8.87006 4.74658C7.68925 5.1095 6.55791 5.61454 5.50069 6.24997H18.4993C17.4421 5.61454 16.3107 5.1095 15.1299 4.74658L12.1442 3.82891Z" fill="white"/>
    <path d="M4.25 21C4.25 20.5858 4.58579 20.25 5 20.25H19C19.4142 20.25 19.75 20.5858 19.75 21C19.75 21.4142 19.4142 21.75 19 21.75H5C4.58579 21.75 4.25 21.4142 4.25 21Z" fill="white"/>
    <path d="M6.25 17C6.25 17.4142 6.58579 17.75 7 17.75C7.41421 17.75 7.75 17.4142 7.75 17V11C7.75 10.5858 7.41421 10.25 7 10.25C6.58579 10.25 6.25 10.5858 6.25 11V17Z" fill="white"/>
    <path d="M12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V11C11.25 10.5858 11.5858 10.25 12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V17C12.75 17.4142 12.4142 17.75 12 17.75Z" fill="white"/>
    <path d="M16.25 17C16.25 17.4142 16.5858 17.75 17 17.75C17.4142 17.75 17.75 17.4142 17.75 17V11C17.75 10.5858 17.4142 10.25 17 10.25C16.5858 10.25 16.25 10.5858 16.25 11V17Z" fill="white"/>
    </svg>
);
const BankIcon = props => <Icon component={ BankSvg }{...props}/>

const PulseSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.23967 4.87594C8.18246 4.53491 7.8995 4.27719 7.55462 4.25201C7.20974 4.22683 6.89234 4.4407 6.7862 4.76981L4.69627 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H5.24242C5.56795 12.75 5.8563 12.54 5.95622 12.2302L7.26937 8.15859L9.10882 19.1241C9.16679 19.4697 9.45634 19.7291 9.8062 19.7488C10.1561 19.7686 10.473 19.5434 10.5695 19.2066L12.999 10.7266L14.2789 15.2061C14.3613 15.4947 14.608 15.7064 14.9059 15.7441C15.2037 15.7818 15.4954 15.6382 15.6471 15.3791L17.1874 12.75H18.3535C18.68 13.9043 19.7412 14.75 21 14.75C22.5188 14.75 23.75 13.5188 23.75 12C23.75 10.4812 22.5188 9.25002 21 9.25002C19.7412 9.25002 18.68 10.0958 18.3535 11.25H16.7576C16.4913 11.25 16.245 11.3912 16.1105 11.6209L15.2394 13.1078L13.7211 7.79398C13.6292 7.4721 13.335 7.25014 13.0003 7.25002C12.6655 7.24989 12.3712 7.47164 12.279 7.79345L10.04 15.6084L8.23967 4.87594ZM19.75 12C19.75 11.3097 20.3096 10.75 21 10.75C21.6904 10.75 22.25 11.3097 22.25 12C22.25 12.6904 21.6904 13.25 21 13.25C20.3096 13.25 19.75 12.6904 19.75 12Z" fill="white"/>
    </svg>
);
const GraphIcon = props => <Icon component={ PulseSvg }{...props}/>

const GlobeSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.955 2.04511C19.2478 2.338 19.2478 2.81288 18.955 3.10577L18.4045 3.65622C21.6935 7.4873 21.5235 13.2652 17.8943 16.8944C16.1813 18.6074 13.9897 19.5497 11.75 19.7214V21.2501H13.5C13.9142 21.2501 14.25 21.5859 14.25 22.0001C14.25 22.4143 13.9142 22.7501 13.5 22.7501H8.5C8.08579 22.7501 7.75 22.4143 7.75 22.0001C7.75 21.5859 8.08579 21.2501 8.5 21.2501H10.25V19.7214C8.24373 19.5675 6.27594 18.7952 4.65616 17.4046L4.10571 17.9551C3.81282 18.2479 3.33794 18.2479 3.04505 17.9551C2.75216 17.6622 2.75216 17.1873 3.04505 16.8944L3.75216 16.1873C4.24759 15.6918 5.01746 15.7172 5.49977 16.1494C7.06174 17.5492 9.02922 18.2494 10.997 18.2501H11H11.0032C13.1135 18.2492 15.2236 17.4438 16.8336 15.8337C19.9465 12.7208 20.0518 7.73859 17.1493 4.49983C16.7171 4.01752 16.6917 3.24765 17.1872 2.75222L17.8943 2.04511C18.1872 1.75222 18.6621 1.75222 18.955 2.04511Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 10C4.25 6.27208 7.27208 3.25 11 3.25C14.7279 3.25 17.75 6.27208 17.75 10C17.75 13.7279 14.7279 16.75 11 16.75C7.27208 16.75 4.25 13.7279 4.25 10ZM11 4.75C8.1005 4.75 5.75 7.1005 5.75 10C5.75 10.3348 5.78135 10.6623 5.84126 10.9798C6.25258 10.5312 6.84345 10.25 7.5 10.25C8.74264 10.25 9.75 11.2574 9.75 12.5C9.75 13.4223 9.19501 14.2151 8.40076 14.5624C9.16712 15 10.0544 15.25 11 15.25C13.5434 15.25 15.6643 13.4414 16.147 11.0402C15.4784 12.0694 14.3187 12.75 13 12.75C10.9289 12.75 9.25 11.0711 9.25 9C9.25 6.92893 10.9289 5.25 13 5.25C13.0865 5.25 13.1723 5.25293 13.2573 5.25869C12.5735 4.93256 11.8081 4.75 11 4.75ZM10.75 9C10.75 7.75736 11.7574 6.75 13 6.75C14.2426 6.75 15.25 7.75736 15.25 9C15.25 10.2426 14.2426 11.25 13 11.25C11.7574 11.25 10.75 10.2426 10.75 9ZM7.5 11.75C7.08579 11.75 6.75 12.0858 6.75 12.5C6.75 12.9142 7.08579 13.25 7.5 13.25C7.91421 13.25 8.25 12.9142 8.25 12.5C8.25 12.0858 7.91421 11.75 7.5 11.75Z" fill="white"/>
    </svg>
);
const GlobeIcon = props => <Icon component={ GlobeSvg }{...props}/>

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoHub</Link>
                </Typography.Title>
            </div>
            {/* <Button className="menu-control-container"></Button> */}
            <Menu className="cryptoHubMenu" theme="dark">
                <Menu.Item icon={<HomeIcon className="menuIcon"/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<BankIcon className="menuIcon"/>}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<GraphIcon className="menuIcon"/>}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<GlobeIcon className="menuIcon"/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
