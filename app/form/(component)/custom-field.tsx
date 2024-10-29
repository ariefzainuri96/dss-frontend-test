import React, { ComponentPropsWithoutRef } from 'react';

type CustomFieldProps = {
    label: string;
    errorMessage?: string;
} & ComponentPropsWithoutRef<'input'>;

export const CustomField = ({
    label,
    errorMessage,
    ...props
}: CustomFieldProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '2px',
                }}
            >
                <label htmlFor={props.id}>{label}</label>
                <input
                    style={{
                        border: '1px solid black',
                        borderRadius: '4px',
                        padding: '10px',
                    }}
                    {...props}
                />
            </div>
            {errorMessage && (
                <span
                    style={{
                        fontSize: '12px',
                        marginTop: '2px',
                        color: 'red',
                        alignSelf: 'end',
                    }}
                >
                    {errorMessage}
                </span>
            )}
        </div>
    );
};
