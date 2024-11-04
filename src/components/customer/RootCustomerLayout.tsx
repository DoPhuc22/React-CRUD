"use client"

import { Col, Row } from "antd"
import { ReactNode } from "react"
import Navbar from "./Navbar"

const RootCustomerLayout = ({children} : {children: ReactNode}) => {
    return(
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between py-8 px-40 text-black bg-white">
                {<Row gutter={[24, 24]}>
                    <Col span={24}>{children}</Col>
                </Row>}
            </main>
        </>
    )
}

export default RootCustomerLayout