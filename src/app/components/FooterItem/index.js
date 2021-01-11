import "./index.css";

function FooterItem({title, children}) {
  return (
    <section>
      <span>{title}</span>
      {children}
    </section>
  );
}

export default FooterItem;
