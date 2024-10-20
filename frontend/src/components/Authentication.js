import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Authentication = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 text-purple-600 inline shadow-lg mb-1 bg-amber-400 rounded-full"
        >
          <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
          />
        </svg>

        <Link to="/" className={`${theme.text} font-semibold ml-1`}>
          becomeIngenious
        </Link>
      </div>

      <div className="mx-auto md:mx-0">
        {user && (
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-5 mt-3 me-1 ${theme.text}`}
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            <p
              className={`${theme.text2} text-xl me-5 mt-1 font-bold tracking-wider font-poppins`}
            >
              {user.user.username}
            </p>
            <button
              onClick={handleClick}
              className="border-0 bg-green-500 text-gray-200 font-bold me-3 rounded-2xl py-2 px-3 text-xs uppercase hover:scale-110 hover:bg-green-700"
            >
              Log out
            </button>
          </div>
        )}

        {!user && (
          <div className="">
            <Link to="/login" className={`${theme.text} btn`}>
              Log in
            </Link>
            <Link to="/signup" className={`${theme.text} btn ml-3`}>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authentication;
