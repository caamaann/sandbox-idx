import { Button } from "react-bootstrap";

const Index = ({
  title,
  disabled,
  size,
  color = "primary",
  variant,
  type,
  onClick,
  className,
}) => {
  let variants = variant ? variant + "-" : "";
  return (
    <Button
      className={`my-2 ${className || ""}`}
      style={
        color === "primary" || color === "secondary" ? { color: "#fff" } : {}
      }
      disabled={disabled}
      variant={variants + color}
      size={size}
      type={type}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default Index;
