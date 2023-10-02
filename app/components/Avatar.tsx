'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            className="rounded-full"
            height="50"
            width="50"
            alt="avatar"
            src='/images/placeholder.png'
        />
    )
};

export default Avatar
