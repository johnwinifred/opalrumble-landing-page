import PropTypes from 'prop-types';

const Input =({value, id, placeholder, type, className, height, label, onChange}) =>{
    return(
        <div className='text-start w-full'>
            <label htmlFor={id} className='block'>
                {label}
            </label>
            <input 
            type={type}
            value={value}
            id={id}
            className={`${height}  outline-none w-[24rem] rounded-[16px] border border-black px-4  py-[18px] text-sm`}
            placeholder={placeholder}
            onChange={onChange}
            
            />
        </div>
    )
}

Input.propTypes= {
    value: PropTypes.string.isRequired,
    height: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "email", "tel", "password"]).isRequired,
    className: PropTypes.string,
};

export default Input;