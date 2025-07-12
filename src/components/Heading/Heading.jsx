import classNames from "classnames";
import css from "./Heading.module.css";

const Heading = (props) => {
  const { level, className, children, ...rest } = props;

  const Tag = `h${level}`;

  const classes = classNames(css.root, className);

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export default Heading;
