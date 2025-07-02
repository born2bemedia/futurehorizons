"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import { useTranslations } from "next-intl";
import { excludedCountries } from "@/utils/excludedCountries";

function OrderPopup() {
  const t = useTranslations("form");
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();
  const countryCode = useCountryCode();

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("requiredError")),
    lastName: Yup.string().required(t("requiredError")),
    email: Yup.string().email(t("emailError")).required(t("requiredError")),
    phone: Yup.string().required(t("requiredError")),
    company: Yup.string().required(t("requiredError")),
    website: Yup.string().required(t("requiredError")),
    message: Yup.string().required(t("requiredError")),
    budget: Yup.string().required(t("requiredError")),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    budget: "",
    service: `${serviceValue} Request`,
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      service: `${serviceValue} Request`,
    };

    console.log("Form values being submitted: ", valuesWithService);

    try {
      const response = await fetch("/api/emails/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
      });

      if (response.ok) {
        setTimeout(() => {
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
    <div className={`request-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
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
                      <h2 className="service-title">
                        {serviceValue} {t("request")}
                      </h2>

                      <Form>
                        <Field
                          type="hidden"
                          name="service"
                          value={`${serviceValue} Request`}
                        />
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
                            excludeCountries={excludedCountries}
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        <div>
                          <Field
                            name="company"
                            type="text"
                            placeholder={t("company")}
                            className={
                              touched.company && errors.company ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="company"
                            component="div"
                            className="error"
                          />
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
                            name="budget"
                            type="text"
                            placeholder={t("budget")}
                            className={
                              touched.budget && errors.budget ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="budget"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="message"
                            type="text"
                            placeholder={t("message")}
                            className={
                              touched.message && errors.message ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="message"
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

export default OrderPopup;
