import "./Button.css"
import PropTypes from 'prop-types';

const Button = ({buttonContent}) => {
    return (
        <button className="" content={buttonContent } />
    );
}

Button.propTypes = {
    buttonContent: PropTypes.string.isRequired,
};

export default Button
