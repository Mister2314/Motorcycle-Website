interface Box {
  img: string;
  date: string;
  title: string;
}

export default function BoxSection({
  sectionClass,
  boxes,
}: {
  sectionClass: string;
  boxes: Box[];
}) {
  return (
    <section className={sectionClass}>
      {boxes.map((box) => (
        <div data-aos="fade-up" className="box" key={box.img}>
          <div className="images">
            <img src={box.img} alt="" />
          </div>
          <div data-aos="fade-right" className="box-texts">
            <span>{box.date}</span>
            <h4>{box.title}</h4>
          </div>
        </div>
      ))}
    </section>
  );
}
