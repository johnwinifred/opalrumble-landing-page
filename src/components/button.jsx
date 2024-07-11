import Proptypes from "prop-types";



const Button = ({ type, title, textcolor, className, onClick, disabled, }) => {
  return (
    < button
      type={type}
      onClick={() => onClick()}
      disabled={disabled}
      className={`block rounded-[16px] ${className} bg-[#007300] px-6 py-3 font-medium ${textcolor} transform  hover:scale-95 transition-transform duration-300`}
      >
        {title}
    </button>
  );
};

Button.propTypes = {
  type: Proptypes.string,
  title: Proptypes.string,
  className: Proptypes.string,
  onClick: Proptypes.func,
  disabled: Proptypes.bool,
  
};
export default Button;
