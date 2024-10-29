import { FormModel, FormModelSchema } from '@/model/form-model';
import { useRef, useState, useMemo } from 'react';

const initialForm: FormModel = {
    name: '',
    dateOfBirth: '',
    status: '',
    place: '',
};

export default function useSocialTracker() {
    const formRef: React.RefObject<HTMLFormElement> = useRef(null);
    const [socialTracker, setSocialTracker] = useState<FormModel[]>([]);
    const [hideData, setHideData] = useState<boolean>(false);
    const [form, setForm] = useState<FormModel>(initialForm);

    const onlineOfflineErrorMessage = useMemo(() => {
        return form.errors?.find((element) => element.name.includes('status'))
            ?.message;
    }, [form]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log('Form => ', form);

        const validation = FormModelSchema.safeParse(form);

        if (!validation.success) {
            const { errors } = validation.error;

            console.log(`validation => ${errors}`);

            setForm((prev) => ({
                ...prev,
                errors: errors.map((element) => {
                    return {
                        message: element.message,
                        name: element.path,
                    };
                }),
            }));
            return;
        }

        setSocialTracker((prev) => [...prev, form]);

        setForm(initialForm);
        formRef.current?.reset();
    }

    return {
        form,
        handleSubmit,
        socialTracker,
        setForm,
        setHideData,
        hideData,
        onlineOfflineErrorMessage,
        formRef,
        setSocialTracker,
    };
}
