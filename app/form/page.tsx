'use client';

import { SocialTrackerForm } from './(section)/social-tracker-form';
import { SocialTrackerList } from './(section)/social-tracker-list';
import useSocialTracker from './(hooks)/use-social-tracker';

const FormPage = () => {
    const store = useSocialTracker();

    return (
        <div style={{ height: '100%', width: '100%', overflowY: 'auto' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    padding: '16px',
                }}
            >
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Social Tracker
                </h1>
                <span
                    style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        marginTop: '10px',
                    }}
                >
                    Please Input Data:
                </span>
                <SocialTrackerForm store={store} />
                {!store.hideData && (
                    <SocialTrackerList socialTracker={store.socialTracker} />
                )}
            </div>
        </div>
    );
};

export default FormPage;
