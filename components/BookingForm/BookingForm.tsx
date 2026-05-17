'use client';

import { createBookingRequest } from '@/lib/api/clientApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

type BookingFormProps = {
  carId: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

export default function BookingForm({ carId }: BookingFormProps) {
  const handleSubmit = async (
    values: { name: string; email: string; comment: string },
    { resetForm }: { resetForm: () => void },
  ) => {
    try {
      await createBookingRequest(carId, values);
      toast.success('Booking request sent successfully!');
      resetForm();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-[10px] p-8 w-full border border-gray-light">
      <h3 className="font-semibold text-lg mb-1">Book your car now</h3>
      <p className="text-gray text-sm mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: '', email: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className="w-full h-[48px] bg-input rounded-[12px] px-4 outline-none"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className="w-full h-[48px] bg-input rounded-[12px] px-4 outline-none"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment*"
              className="w-full h-[56px] bg-input rounded-[12px] px-4 py-3 outline-none resize-none"
            />
            <ErrorMessage
              name="comment"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full h-[44px] bg-button hover:bg-button-hover text-white rounded-[12px] self-center mt-2"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
