'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image
            className="rounded-full"
            height="45"
            width="45"
            alt="avatar"
            src={src || '/images/placeholder.png'}
        />
    )
};

export default Avatar
