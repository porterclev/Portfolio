import Lang from "./Lang";
const Langs = ({ langs }) => {
  return (
    <>
      {langs.map((lang) => (
        // <Lang key={lang.id} lang={lang} onClick={onClick} />
        <Lang key={lang.id} lang={lang} />
      ))}
    </>
  );
};

export default Langs;
