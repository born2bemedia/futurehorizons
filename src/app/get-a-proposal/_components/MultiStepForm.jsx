// pages/multistep-form.js
"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";

const StepOne = ({ next }) => (
  <>
    <div className="top">
      <h5>
        <span>01</span> / 03
      </h5>
      <h4>Choose Your Challenge</h4>
      <p>Select all issues you experience in marketing!</p>
    </div>
    <div className="step">
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Converting leads into customers"
          />
          <span>
            <span>
              <b>1.</b> Converting leads into customers
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Poor Marketing strategy"
          />
          <span>
            <span>
              <b>2.</b> Poor Marketing strategy
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Engagement on social media"
          />
          <span>
            <span>
              <b>3.</b> Engagement on social media
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Analytics and measurement"
          />
          <span>
            <span>
              <b>4.</b> Analytics and measurement
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Target audience and their needs"
          />
          <span>
            <span>
              <b>5.</b> Target audience and their needs
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="Low Customer retention"
          />
          <span>
            <span>
              <b>6.</b> Low Customer retention
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field
            type="checkbox"
            name="challenges"
            value="High advertising costs"
          />
          <span>
            <span>
              <b>7.</b> High advertising costs
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="challenges" value="Other" />
          <span>
            <span>
              <b>8.</b> Other
            </span>
          </span>
        </label>
      </div>
      <button className="orange-button" type="button" onClick={next}>
        Next
      </button>
    </div>
  </>
);

const StepTwo = ({ next, prev }) => (
  <>
    <div className="top">
      <h5>
        <span>02</span> / 03
      </h5>
      <h4>What are your goals?</h4>
      <p>Select all that apply!</p>
    </div>
    <div className="step">
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Market Reach" />
          <span>
            <span>
              <b>1.</b> Market Reach
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="ROI optimisation" />
          <span>
            <span>
              <b>2.</b> ROI optimisation
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Online Reputation" />
          <span>
            <span>
              <b>3.</b> Online Reputation
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Customer Retention" />
          <span>
            <span>
              <b>4.</b> Customer Retention
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Ranking in Search" />
          <span>
            <span>
              <b>5.</b> Ranking in Search
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Lead Generation" />
          <span>
            <span>
              <b>6.</b> Lead Generation
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Website Traffic" />
          <span>
            <span>
              <b>7.</b> Website Traffic
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Brand Awareness" />
          <span>
            <span>
              <b>8.</b> Brand Awareness
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Conversion Rates" />
          <span>
            <span>
              <b>9.</b> Conversion Rates
            </span>
          </span>
        </label>
      </div>
      <div>
        <label>
          <Field type="checkbox" name="goals" value="Social Media Engagement" />
          <span>
            <span>
              <b>10.</b> Social Media Engagement
            </span>
          </span>
        </label>
      </div>
      <button className="orange-button" type="button" onClick={next}>
        Next
      </button>
    </div>
  </>
);

const StepThree = ({ prev, country, touched, errors, setFieldValue }) => (
  <>
    <div className="top">
      <h5>
        <span>03</span> / 03
      </h5>
      <h4>Share Your Data</h4>
      <p>So we can craft a really genius marketing plan for you!</p>
    </div>
    <div className="step">
      <div>
        <Field
          name="firstName"
          type="text"
          placeholder="First name"
          className={touched.firstName && errors.firstName ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="firstName" component="div" />
      </div>
      <div>
        <Field
          name="lastName"
          type="text"
          placeholder="Last name"
          className={touched.lastName && errors.lastName ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="lastName" component="div" />
      </div>
      <div>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          className={touched.email && errors.email ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="email" component="div" />
      </div>
      <div>
        <PhoneInput
          country={country}
          value=""
          onChange={(value) => setFieldValue("phone", value)}
          placeholder="Your phone"
          className={touched.phone && errors.phone ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="phone" component="span" />
      </div>
      <div>
        <Field
          name="company"
          type="text"
          placeholder="Company name"
          className={touched.company && errors.company ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="company" component="div" />
      </div>
      <div>
        <Field
          name="website"
          type="text"
          placeholder="Company website"
          className={touched.website && errors.website ? "invalid" : ""}
        />
        <ErrorMessage className="error" name="website" component="div" />
      </div>

      <button className="orange-button" type="submit">
        Submit
      </button>
    </div>
  </>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const countryCode = useCountryCode();

  const initialValues = {
    challenges: [],
    goals: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    company: "",
  };

  const validationSchema = [
    Yup.object().shape({
      challenges: Yup.array().min(1, "Please select at least one challenge"),
    }),
    Yup.object().shape({
      goals: Yup.array().min(1, "Please select at least one goal"),
    }),
    Yup.object().shape({
      firstName: Yup.string().required("The field is required."),
      lastName: Yup.string().required("The field is required."),
      email: Yup.string()
        .email("Please provide a valid email address.")
        .required("The field is required."),
      phone: Yup.string().required("The field is required."),
      website: Yup.string()
        .url("Please provide a valid company website address.")
        .required("The field is required."),
      company: Yup.string().required("The field is required."),
    }),
  ];

  const handleNext = (values, actions) => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    console.log(values);
    setStep(4);
  };

  return (
    <div className="proposal-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[step - 1]}
        onSubmit={step === 3 ? handleSubmit : handleNext}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            {step === 1 && <StepOne next={() => handleNext(values)} />}
            {step === 2 && (
              <StepTwo next={() => handleNext(values)} prev={handlePrev} />
            )}
            {step === 3 && (
              <StepThree
                prev={handlePrev}
                country={countryCode}
                touched={touched}
                errors={errors}
                setFieldValue={setFieldValue}
              />
            )}
            {step === 4 && (
              <div className="thanks">
                <h4>Thank you!</h4>
                <p>
                  We've received your request for a custom
                  <br /> marketing solution. Our team will contact you soon.
                </p>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
