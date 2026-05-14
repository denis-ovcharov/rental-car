'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.string().required('Booking date is required'),
  comment: Yup.string(),
});

export default function BookingForm() {
  return (
    <div className="bg-white rounded-[10px] p-8 w-full border border-gray-light">
      <h3 className="font-semibold text-lg mb-1">Book your car now</h3>
      <p className="text-gray text-sm mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: '', email: '', date: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
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
              name="date"
              type="date"
              placeholder="Booking date"
              className="w-full h-[48px] bg-input rounded-[12px] px-4 outline-none"
            />
            <ErrorMessage
              name="date"
              component="p"
              className="text-red-500 text-xs mt-1"
            />
          </div>

          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className="w-full h-[56px] bg-input rounded-[12px] px-4 py-3 outline-none resize-none"
          />

          <button
            type="submit"
            className="w-[156px] h-[44px] bg-button hover:bg-button-hover text-white rounded-[12px] self-center mt-2"
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
