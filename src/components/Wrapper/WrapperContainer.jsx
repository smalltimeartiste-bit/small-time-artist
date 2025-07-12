import classNames from "classnames";
import css from './WrapperContainer.module.css';

const WrapperContainer = props => {
    const {children, className, ...rest} = props;

    const classes = classNames(css.root, className);
    
    return (
        <div className={classes} {...rest}>{children}</div>
    )
};


export default WrapperContainer;