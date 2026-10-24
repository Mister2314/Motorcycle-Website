interface Box {
  img: string;
  date: string;
  title: string;
}

const ALT_TEXT: Record<string, string> = {
  "port-img-1.jpg": "Logos & Motors — motorcycle brand graphics",
  "port-img-2.jpg": "Motorsport category shoot — rider on track",
  "port-img-3.jpg": "Ready to Race — racing motorcycle detail",
  "port-img-4.jpg": "Supercross season — rider mid-jump",
  "port-img-5.jpg": "Women of Motocross — rider portrait",
  "port-img-6.jpg": "SE Gear spotlight — riding equipment",
  "port-img-7.jpg": "MTB spotlight — mountain bike on dirt",
  "port-img-8.jpg": "Warehouse review — gear storage",
  "port-img-9.jpg": "MotoGP San Marino — race circuit scene",
};

export default function BoxSection({
  sectionClass,
  boxes,
  startIndex = 1,
  id,
}: {
  sectionClass: string;
  boxes: Box[];
  startIndex?: number;
  id?: string;
}) {
  return (
    <section className={sectionClass} id={id} aria-label="Catalogue">
      {boxes.map((box, i) => {
        const index = String(startIndex + i).padStart(2, "0");
        const alt = ALT_TEXT[box.img.split("/").pop() ?? ""] ?? box.title;
        return (
          <a
            href="#grid"
            className="box"
            key={box.img}
            aria-label={`${box.title} — ${box.date}`}
            data-reveal
            data-reveal-delay={(i % 3) * 70}
            onClick={(e) => e.preventDefault()}
          >
            <div className="images">
              <img src={box.img} alt={alt} loading="lazy" decoding="async" />
              <div className="stamp" aria-hidden="true" />
              <div className="spec-strip" aria-hidden="true">
                <span>CAT. {box.date.split(" ")[1]}</span>
                <span>GRAND PRIX</span>
              </div>
            </div>
            <div className="box-texts">
              <span className="box-index">{index}</span>
              <div className="box-meta">
                <span>{box.date}</span>
                <h4>{box.title}</h4>
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
}
