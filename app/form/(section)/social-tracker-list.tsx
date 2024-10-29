import { FormModel } from '@/model/form-model';
import React from 'react';
import { SocialTrackerItem } from '../(component)/social-tracker-item';

type SocialTrackerProps = {
    socialTracker: FormModel[];
};

export const SocialTrackerList = ({ socialTracker }: SocialTrackerProps) => {
    if (socialTracker.length === 0) {
        return <span style={{ marginTop: '16px' }}>No Data</span>;
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                width: '100%',
                gap: '12px',
                marginTop: '16px',
            }}
        >
            {socialTracker.map((item, index) => {
                return <SocialTrackerItem data={item} key={index} />;
            })}
        </div>
    );
};
