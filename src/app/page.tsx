'use client'

import {Button} from "antd";
import Link from "next/link";
import Image from "next/image";

export default function Homepage(){
  return(
    <html lang="en">
      <body>
        <div>
        <Link href={'book'}>
          <Button type="primary" danger size="large">Click here to admin</Button>
        </Link>
        <Link href={'customer'}>
          <Button type="primary" size="large">Click here to customer</Button>
        </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="https://nextjs.org/icons/next.svg"
          width={1000}
          height={760}
          className="dark:invert"
          alt="Screenshots of the dashboard project showing desktop version"
          priority
        />
      </div>
      </body>
    </html>
  );
}
