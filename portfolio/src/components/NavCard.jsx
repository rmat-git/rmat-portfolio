export default function NavCard({ label, number, href, variant = "dark" }) {
  const variantClass = {
    dark: "nav-card nav-card--dark",
    mid: "nav-card nav-card--mid",
    light: "nav-card nav-card--light",
  }[variant];

  const isNumberTop = variant === "mid";

  return (
    <a href={href} className={variantClass}>
      <span className="nav-card__top">
        {isNumberTop ? number : label}
      </span>
      <span className="nav-card__bottom">
        {isNumberTop ? label : number}
      </span>
    </a>
  );
}