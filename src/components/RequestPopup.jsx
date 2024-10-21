"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import { useTranslations } from "next-intl";

function RequestPopup() {
  const t = useTranslations("form");
  const { requestPopupDisplay, setRequestPopupDisplay, serviceValue } =
    usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("requiredError")),
    lastName: Yup.string().required(t("requiredError")),
    email: Yup.string().email(t("emailError")).required(t("requiredError")),
    phone: Yup.string().required(t("requiredError")),
    website: Yup.string().required(t("requiredError")),
    your_challenge: Yup.string().required(t("requiredError")),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    your_challenge: "",
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(JSON.stringify(values));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`request-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <img
                src="/images/closePopup.svg"
                className="popup-close"
                alt="popup-close"
                onClick={() => closePopup(resetForm)}
              />
              <div>
                <div className="request-form">
                  {status && status.success ? (
                    <div className="success-message">
                      <h2>{t("Thanks.title")}</h2>
                      <span>{t("Thanks.text")}</span>
                    </div>
                  ) : (
                    <>
                      <h2 className="service-title">{t("requestTitle")}</h2>

                      <Form>
                        <div>
                          <Field
                            name="firstName"
                            type="text"
                            placeholder={t("firstName")}
                            className={
                              touched.firstName && errors.firstName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="lastName"
                            type="text"
                            placeholder={t("lastName")}
                            className={
                              touched.lastName && errors.lastName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder={t("email")}
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <PhoneInput
                            country={countryCode}
                            value=""
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder={t("phone")}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        <div>
                          <Field
                            name="website"
                            type="text"
                            placeholder={t("website")}
                            className={
                              touched.website && errors.website ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="website"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="your_challenge"
                            type="text"
                            placeholder={t("challenge")}
                            className={
                              touched.your_challenge && errors.your_challenge
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="your_challenge"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="orange-button"
                          disabled={isSubmitting}
                        >
                          {t("submit")}
                        </button>
                      </Form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestPopup;
