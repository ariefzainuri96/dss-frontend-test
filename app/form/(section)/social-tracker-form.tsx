import { Dispatch, RefObject, SetStateAction } from 'react';
import { CustomField } from '../(component)/custom-field';
import { FormModel } from '@/model/form-model';

type SocialTrackerFormProps = {
    store: {
        form: FormModel;
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
        socialTracker: FormModel[];
        setForm: React.Dispatch<React.SetStateAction<FormModel>>;
        setHideData: Dispatch<SetStateAction<boolean>>;
        hideData: boolean;
        onlineOfflineErrorMessage: string | undefined;
        formRef: RefObject<HTMLFormElement>;
        setSocialTracker: Dispatch<SetStateAction<FormModel[]>>;
    };
};

export const SocialTrackerForm = ({ store }: SocialTrackerFormProps) => {
    return (
        <form
            onSubmit={store.handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '10px',
            }}
            ref={store.formRef}
        >
            <CustomField
                label='Name: '
                type='text'
                id='name'
                name='name'
                errorMessage={
                    store.form.errors?.find((element) =>
                        element.name.includes('name')
                    )?.message
                }
                value={store.form.name}
                onChange={(e) => {
                    store.setForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }));
                }}
            />
            <CustomField
                label='Date of Birth: '
                type='date'
                name='dateOfBirth'
                id='dateOfBirth'
                errorMessage={
                    store.form.errors?.find((element) =>
                        element.name.includes('dateOfBirth')
                    )?.message
                }
                value={store.form.dateOfBirth}
                onChange={(e) => {
                    store.setForm((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                    }));
                }}
            />
            <CustomField
                label='Place: '
                id='place'
                type='text'
                name='place'
                value={store.form.place}
                onChange={(e) => {
                    store.setForm((prev) => ({
                        ...prev,
                        place: e.target.value,
                    }));
                }}
            />
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <CustomField
                    label='Online'
                    type='radio'
                    name='online'
                    id='online'
                    checked={store.form.status === 'Online'}
                    radioGroup={store.form.status}
                    value='Online'
                    onChange={(e) => {
                        store.setForm((prev) => ({
                            ...prev,
                            status: e.target.value,
                        }));
                    }}
                />
                <CustomField
                    label='Offline'
                    type='radio'
                    name='offline'
                    id='offline'
                    checked={store.form.status === 'Offline'}
                    radioGroup={store.form.status}
                    value={'Offline'}
                    onChange={(e) => {
                        store.setForm((prev) => ({
                            ...prev,
                            status: e.target.value,
                        }));
                    }}
                />
            </div>
            {store.onlineOfflineErrorMessage && (
                <span
                    style={{ color: 'red', marginTop: '2px', fontSize: '12px' }}
                >
                    {store.onlineOfflineErrorMessage}
                </span>
            )}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflowX: 'auto',
                    marginTop: '10px',
                    gap: '10px',
                }}
            >
                <button type='submit'>Add Data</button>
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        store.setHideData((prev) => !prev);
                    }}
                >
                    {store.hideData ? 'Show' : 'Hide'} Data
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        store.setSocialTracker([]);
                    }}
                >
                    Clean Data
                </button>
            </div>
        </form>
    );
};
