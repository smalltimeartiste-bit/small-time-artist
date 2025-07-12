import classNames from "classnames";
import css from './SectionContainer.module.css';

const Section = (props) => {
  const { className, children, label, ...rest } = props;

  const classes = classNames(css.root, className);

  return <section className={classes} aria-label={label} {...rest}>{children}</section>;
};

export default Section;
