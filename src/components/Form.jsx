import successIcon from "../assets/images/icon-success-check.svg";
import { useForm } from "react-hook-form";
import { useRef } from "react";

function Form() {
  const dialogRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    dialogRef.current.showModal();
  }

  return (
    <main className="grid min-h-dvh place-items-center bg-green-200">
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
        className="animate-fade-out open:animate-fade-in mt-8 rounded-xl bg-grey-900 p-6 text-white outline-none transition-[display] duration-1000 backdrop:opacity-0"
      >
        <div className="mb-2 flex items-center gap-2">
          <img src={successIcon} alt="Success" />
          <h1 className="text-xl font-bold">Message Sent!</h1>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </dialog>

      <form
        noValidate
        action="/"
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto my-8 w-[90%] max-w-[600px] space-y-6 rounded-xl bg-white p-6 sm:p-10"
      >
        <h1 className="text-2xl font-bold">Contact Us</h1>

        <div id="name" className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="first-name">
              First Name <span className="text-green-600">*</span>
            </label>
            <input
              type="text"
              id="first-name"
              className={`block w-full rounded-md border p-2 ${
                errors.firstName
                  ? "border-red outline-red"
                  : "border-grey-900 outline-green-600"
              }`}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter a valid name",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be less than 20 characters",
                },
              })}
            />
            <p className="text-red">{errors.firstName?.message}</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="last-name">
              Last Name <span className="text-green-600">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              className={`block w-full rounded-md border border-grey-900 p-2 ${
                errors.lastName
                  ? "border-red outline-red"
                  : "border-grey-900 outline-green-600"
              }`}
              {...register("lastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Please enter a valid name",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be less than 20 characters",
                },
              })}
            />
            <p className="text-red">{errors.lastName?.message}</p>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`block w-full rounded-md border border-grey-900 p-2 ${
              errors.email
                ? "border-red outline-red"
                : "border-grey-900 outline-green-600"
            }`}
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          <p className="text-red">{errors.email?.message}</p>
        </div>

        <fieldset className="space-y-2">
          <legend>
            Query Type <span className="text-green-600">*</span>
          </legend>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <label
              htmlFor="general-enquiry"
              className="flex items-center gap-2 rounded-md border border-grey-900 py-2 pl-4 hover:cursor-pointer has-[:checked]:border-2 has-[:checked]:border-green-600 has-[:checked]:bg-green-200"
            >
              <input
                type="radio"
                id="general-enquiry"
                value="general enquiry"
                className="size-4 checked:accent-green-600"
                {...register("queryType", {
                  required: {
                    value: true,
                    message: "Please select a query type",
                  },
                })}
              />
              General Enquiry
            </label>

            <label
              htmlFor="support-request"
              className="flex items-center gap-2 rounded-md border border-grey-900 py-2 pl-4 hover:cursor-pointer has-[:checked]:border-2 has-[:checked]:border-green-600 has-[:checked]:bg-green-200"
            >
              <input
                type="radio"
                id="support-request"
                value="support request"
                className="size-4 checked:accent-green-600"
                {...register("queryType", {
                  required: {
                    value: true,
                    message: "Please select a query type",
                  },
                })}
              />
              Support Request
            </label>
          </div>

          <p className="text-red">{errors.queryType?.message}</p>
        </fieldset>

        <div className="space-y-2">
          <label htmlFor="message">
            Message <span className="text-green-600">*</span>
          </label>
          <textarea
            id="message"
            className={`block w-full rounded-md border border-grey-900 p-2 ${
              errors.message
                ? "border-red outline-red"
                : "border-grey-900 outline-green-600"
            }`}
            {...register("message", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          <p className="text-red">{errors.message?.message}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="consent"
              value="consent"
              className="size-4 checked:accent-green-600 hover:cursor-pointer"
              {...register("consent", {
                required: {
                  value: true,
                  message:
                    "To submit this form, please consent to being contacted",
                },
              })}
            />
            <label htmlFor="consent" className="hover:cursor-pointer">
              I consent to being contacted by the team{" "}
              <span className="text-green-600">*</span>
            </label>
          </div>
          <p className="text-red">{errors.consent?.message}</p>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-green-600 py-2 font-bold text-white hover:bg-[#095d4d] active:bg-[#07463a]"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Form;
