import Link from 'next/link';
import React from 'react';

type ItemMenuProps = {
    content: string;
    type: 'content' | 'link';
    style?: React.CSSProperties;
    href?: string;
};

export const ItemMenu = ({
    content,
    href = '/',
    style,
    type,
}: ItemMenuProps) => {
    const fullStyle: React.CSSProperties = {
        border: '1px solid black',
        borderRadius: type === 'link' ? '6px' : '0px',
        paddingBlock: type === 'link' ? '6px' : '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    if (type === 'link') {
        return (
            <Link style={{ ...style, ...fullStyle }} href={href}>
                {content}
            </Link>
        );
    }

    return (
        <div
            style={{
                ...style,
                ...fullStyle,
            }}
        >
            {content}
        </div>
    );
};
