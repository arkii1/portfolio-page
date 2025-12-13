export default function Button({ text, onClick, classes = '', type = 'primary'}:
    {
        text: string,
        classes?: string,
        onClick: () => void,
        type?: 'primary' | 'secondary'
    }
) {

  const typeClasses =
    type === "primary"
      ? "bg-accent hover:bg-accent/90 "
      : "bg-primary border-accenttwo border-solid border-2 hover:bg-accenttwo/90";

  return (
    <button type="button" onClick={onClick} className={`rounded-md px-s py-2xs text-sm font-semibold hover:cursor-pointer ${typeClasses} ${classes}`}>
      {text}
    </button>
  );
}
