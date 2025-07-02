// pages/multistep-form.js
"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";

const StepOne = ({ next }) => {
  const t = useTranslations("proposal");
  return (
    <>
      <div className="top">
        <h5>
          <span>01</span> / 03
        </h5>
        <h4>{t("steps.step1.title")}</h4>
        <p>{t("steps.step1.subtitle")}</p>
      </div>
      <div className="step">
        {[
          "steps.step1.options.option1",
          "steps.step1.options.option2",
          "steps.step1.options.option3",
          "steps.step1.options.option4",
          "steps.step1.options.option5",
          "steps.step1.options.option6",
          "steps.step1.options.option7",
          "steps.step1.options.option8",
        ].map((option, index) => (
          <div key={index}>
            <label>
              <Field type="checkbox" name="challenges" value={t(`${option}`)} />
              <span>
                <span>
                  <b>{index + 1}.</b> {t(`${option}`)}
                </span>
              </span>
            </label>
          </div>
        ))}
        <button className="orange-button" type="button" onClick={next}>
          {t("steps.step1.next")}
        </button>
      </div>
    </>
  );
};

const StepTwo = ({ next, prev }) => {
  const t = useTranslations("proposal");
  return (
    <>
      <div className="top">
        <h5>
          <span>02</span> / 03
        </h5>
        <h4>{t("steps.step2.title")}</h4>
        <p>{t("steps.step2.subtitle")}</p>
      </div>
      <div className="step">
        {[
          "steps.step2.options.goal1",
          "steps.step2.options.goal2",
          "steps.step2.options.goal3",
          "steps.step2.options.goal4",
          "steps.step2.options.goal5",
          "steps.step2.options.goal6",
          "steps.step2.options.goal7",
          "steps.step2.options.goal8",
          "steps.step2.options.goal9",
          "steps.step2.options.goal10",
        ].map((goal, index) => (
          <div key={index}>
            <label>
              <Field type="checkbox" name="goals" value={t(`${goal}`)} />
              <span>
                <span>
                  <b>{index + 1}.</b> {t(`${goal}`)}
                </span>
              </span>
            </label>
          </div>
        ))}
        <button className="orange-button" type="button" onClick={next}>
          {t("steps.step2.next")}
        </button>
        <button className="orange-button" type="button" onClick={prev}>
          {t("steps.step2.prev")}
        </button>
      </div>
    </>
  );
};

const StepThree = ({ prev, country, touched, errors, setFieldValue }) => {
  const t = useTranslations("proposal");
  return (
    <>
      <div className="top">
        <h5>
          <span>03</span> / 03
        </h5>
        <h4>{t("steps.step3.title")}</h4>
        <p>{t("steps.step3.subtitle")}</p>
      </div>
      <div className="step">
        <div>
          <Field
            name="firstName" 
            type="text"
            placeholder={t("steps.step3.fields.firstName")}
            className={touched.firstName && errors.firstName ? "invalid" : ""}
          />
          <ErrorMessage className="error" name="firstName" component="div" />
        </div>

        {/* Last Name Field */}
        <div>
          <Field
            name="lastName"
            type="text"
            placeholder={t("steps.step3.fields.lastName")}
            className={touched.lastName && errors.lastName ? "invalid" : ""}
          />
          <ErrorMessage className="error" name="lastName" component="div" />
        </div>

        {/* Email Field */}
        <div>
          <Field
            name="email"
            type="email"
            placeholder={t("steps.step3.fields.email")}
            className={touched.email && errors.email ? "invalid" : ""}
          />
          <ErrorMessage className="error" name="email" component="div" />
        </div>

        {/* Phone Field */}
        <div>
          <PhoneInput
            country={country}
            value=""
            onChange={(value) => setFieldValue("phone", value)}
            placeholder={t("steps.step3.fields.phone")}
            className={touched.phone && errors.phone ? "invalid" : ""}
            excludeCountries={excludedCountries}
          />
          <ErrorMessage className="error" name="phone" component="span" />
        </div>

        {/* Company Field */}
        <div>
          <Field
            name="company"
            type="text"
            placeholder={t("steps.step3.fields.company")}
            className={touched.company && errors.company ? "invalid" : ""}
          />
          <ErrorMessage className="error" name="company" component="div" />
        </div>

        {/* Website Field */}
        <div>
          <Field
            name="website"
            type="text"
            placeholder={t("steps.step3.fields.website")}
            className={touched.website && errors.website ? "invalid" : ""}
          />
          <ErrorMessage className="error" name="website" component="div" />
        </div>

        <button className="orange-button" type="submit">
          {t("steps.step3.submit")}
        </button>
        <button className="orange-button" type="button" onClick={prev}>
          {t("steps.step3.prev")}
        </button>
      </div>
    </>
  );
};


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const countryCode = useCountryCode();
  const t = useTranslations("proposal");

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
      challenges: Yup.array().min(1, t("steps.step1.validation")),
    }),
    Yup.object().shape({
      goals: Yup.array().min(1, t("steps.step2.validation")),
    }),
    Yup.object().shape({
      firstName: Yup.string().required(t("steps.step3.validation.firstName")),
      lastName: Yup.string().required(t("steps.step3.validation.lastName")),
      email: Yup.string()
        .email(t("steps.step3.validation.emailInvalid"))
        .required(t("steps.step3.validation.emailRequired")),
      phone: Yup.string().required(t("steps.step3.validation.phone")),
      website: Yup.string()
        .url(t("steps.step3.validation.websiteInvalid"))
        .required(t("steps.step3.validation.websiteRequired")),
      company: Yup.string().required(t("steps.step3.validation.company")),
    }),
  ];

  const handleNext = (values, actions) => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
        setStep(4);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
    }
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
                <h4>{t("steps.thankYou.message")}</h4>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
