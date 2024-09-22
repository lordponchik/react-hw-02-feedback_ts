interface ISection {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: ISection) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
