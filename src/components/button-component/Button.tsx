import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="btn-main" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
