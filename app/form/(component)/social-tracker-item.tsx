import { FormModel } from '@/model/form-model';
import Image from 'next/image';
import React from 'react';
import ImagePlaceholder from '../../../public/image/img-placeholder.jpg';
import { format } from 'date-fns';

type SocialTrackerItemProps = {
    data: FormModel;
};

export const SocialTrackerItem = ({ data }: SocialTrackerItemProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                border: '1px solid black',
                borderRadius: '6px',
                paddingInline: '16px',
                paddingBlock: '10px',
            }}
        >
            {/* row container */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    width: '100%',
                }}
            >
                {/* column container */}
                <div
                    style={{
                        display: 'flex',
                        gap: '6px',
                        flexDirection: 'column',
                        alignItems: 'start',
                        flex: 1,
                    }}
                >
                    <span>{data.name}</span>
                    <span>{data.place === '' ? '-' : data.place}</span>
                    <span>
                        {format(new Date(data.dateOfBirth), 'dd MMMM yyyy')}
                    </span>
                </div>
                <Image
                    style={{ width: '100px', height: '100px' }}
                    src={ImagePlaceholder}
                    alt={`${data.name}-image-placeholder`}
                />
            </div>
            <div
                style={{
                    height: '1px',
                    width: '100%',
                    marginBlock: '12px',
                    backgroundColor: 'gray',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <span style={{ flex: 1 }}>Status</span>
                <span>{data.status}</span>
            </div>
        </div>
    );
};
