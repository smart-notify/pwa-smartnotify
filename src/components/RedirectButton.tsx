import global from "../css-modules/Global.module.css";

interface RedirectButtonProps {
  to: string;
}

function RedirectButton({ to }: RedirectButtonProps) {
  const handleClick = () => {
    window.location.href = `/${to}`;
  };

  return (
    <button className={global.button} onClick={handleClick}>
      OK
    </button>
  );
}

export default RedirectButton;
