import clsx from 'clsx';
import { Formik } from 'formik';

import { Button } from '@/components/Elements/Button';

export const Form = (props: any) => {
	const { children, initialValues, onSubmit, schema } = props;
	const handleSubmit = (values: any, actions: any) => {
		onSubmit(values, actions);
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
			{(formikProps: any) => {
				const { handleSubmit, isSubmitting } = formikProps;
				return (
					<form onSubmit={handleSubmit} className={clsx('max-w-3xl mx-auto')}>
						<div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
							{children}
						</div>
						<div className="pt-5">
							<div className="flex justify-end">
								<Button type="submit" isLoading={isSubmitting}>
									Submit
								</Button>
							</div>
						</div>
					</form>
				);
			}}
		</Formik>
	);
};
