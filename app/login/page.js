import HeaderLogo from "../_components/layouts/HeaderLogo";

export default function Login() {
  const error = false;
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-100/50 flex-col">
        <form
          //   onSubmit={handleSubmit(handelSubmitFun)}
          className="md:w-[400px] w-[100%] border shadow p-[30px] bg-white rounded-[10px]"
        >
          {error && (
            <div className="bg-red-500 p-2 text-white mb-[10px] rounded-[5px]">
              {error instanceof Error
                ? error.message
                : "An unknown error occurred"}
            </div>
          )}
          {/* {isLoading && <FormSpinner />} */}

          <div className="flex justify-center items-center mb-[30px]">
            {/* <img src={logo} alt="" className="w-[120px]" /> */}
            <HeaderLogo />
          </div>
          <div className="flex justify-center items-start flex-col mb-3">
            <label className="font-semibold text-gray-600" htmlFor="UserEmail">
              User Email
            </label>
            <input
              className="border p-2 w-[100%] rounded-md text-gray-500 text-[18px]"
              type="email"
              id="UserEmail"
            //   {...register("userEmail", { required: "This Email Is Required" })}
            />
            {/* {errors.userEmail && (
              <span className="text-red-500">{errors.userEmail.message}</span>
            )} */}
          </div>
          <div className="flex justify-center items-start flex-col mb-3">
            <label
              className="font-semibold text-gray-600"
              htmlFor="UserPassword"
            >
              User Password
            </label>
            <input
              className="border p-2 w-[100%] rounded-md text-gray-500 text-[18px]"
              type="password"
              id="UserPassword"
            //   {...register("userPassword", {
            //     required: "This Password Is Required",
            //   })}
            />
            {/* {errors.userPassword && (
              <span className="text-red-500">
                {errors.userPassword.message}
              </span>
            )} */}
          </div>

          <button
            type="submit"
            className="border p-2 my-[20px] w-[100%] rounded-md text-white bg-black spinnerHoverColor duration-150 text-[18px]"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
