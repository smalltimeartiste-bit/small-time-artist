import classNames from "classnames";
import css from './MainContainer.module.css';

const MainContainer = (props) => {
    const {
        children,
        className,
        ...rest
    } = props;

    const classes = classNames(css.root, className);
    return (
        <main className={classes} {...rest}>
            {children}
        </main>
    )
}

export default MainContainer