import { Button, Col, Dropdown, Row, Space, Tooltip, Typography } from "antd";
import Search from "antd/es/input/Search";
import Link from "next/link";
import { Bars3Icon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import type { MenuProps } from 'antd';

const Navbar = () => {
    const handleMouseEnter = (itemKey: string) => {
        console.log(`Hovering over ${itemKey}`);
    };

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Tooltip title="This is item 1">
                    <Link href={"/Item1"} onMouseEnter={() => handleMouseEnter('1')}>Item 1</Link>
                </Tooltip>
            ),
        },
        {
            key: '2',
            label: 'Item 2',
        },
        {
            key: '3',
            label: 'Item 3',
        },
    ];

    return (
        <>
            <Row 
                align="middle"
                justify="space-between"
                className="px-6 md:px-16 lg:px-40 py-4 shadow bg-slate-100"
            >
                <Col xs={24} md={8}>
                    <Link href="/customer" className="text-2xl text-black font-semibold">Genuine</Link>
                </Col>
                <Col xs={24} md={7} className="my-3 ">
                    <Search placeholder="Search here..." />
                </Col>
                <Col xs={24} md={8} className="flex justify-end lg:space-x-3">
                    <Button href="/cart">
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span className="hidden md:inline">Cart ( 0 )</span>
                    </Button>
                    <Button href="/favorites">
                        <HeartIcon className="h-5 w-5" />
                    </Button>
                    <Button href="/profile">
                        <UserCircleIcon className="h-5 w-5" />
                    </Button>
                </Col>
            </Row>
            
            <Row 
                align="middle"
                className="px-6 md:px-16 lg:px-40 py-4 shadow bg-white"
            >
                <Col xs={24} md={7}>
                    <Button>
                        <Bars3Icon className="h-5 w-5" />
                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ['3'],
                            }}
                        >
                            <Typography.Link>
                                <Space className="text-black">All Categories</Space>
                            </Typography.Link>
                        </Dropdown>
                    </Button>
                </Col>
                <Col xs={24} md={10}>
                    <div className="flex space-x-3 mt-2">
                    <Link href="/home" className="text-black">
                        <Typography.Title level={5}>Home</Typography.Title>
                    </Link>
                    <Link href="/home" className="text-black">
                        <Typography.Title level={5}>Products</Typography.Title>
                    </Link>
                    <Link href="/home" className="text-black">
                        <Typography.Title level={5}>About</Typography.Title>
                    </Link>
                    </div>
                </Col>
                <Col xs={24} md={7} className="flex justify-end space-x-3">
                    <div className="text-black">Contact: (+84) 123-456-789</div>
                </Col>
            </Row>
        </>
    );
};

export default Navbar;
