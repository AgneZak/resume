import FooterItem from "../FooterItem";
import List from "../List";
import Link from "../Link";

import translations from "../../translations";

function Footer({ lang }) {
  return (
    <footer className="contact-content">
      {translations[lang].footer.footerContent.map((item, index) => (
        <FooterItem key={index} title={item.title}>
          <List
            liElements={item.list.map(({ text, link, index }) => {
              const Component = link ? Link : "p";

              return {
                children: (
                  <Component key={index} link={link}>
                    {text}
                  </Component>
                ),
              };
            })}
          />
        </FooterItem>
      ))}
    </footer>
  );
}

export default Footer;
