import { GALLERY, type GalleryItem } from "../data/gallery";

export default function BoxSection({
  sectionClass,
  items,
  startIndex = 1,
  id,
  onOpen,
}: {
  sectionClass: string;
  items: GalleryItem[];
  startIndex?: number;
  id?: string;
  onOpen: (i: number) => void;
}) {
  return (
    <section className={sectionClass} id={id} aria-label="Catalogue">
      {items.map((item, i) => {
        const plate = String(startIndex + i).padStart(2, "0");
        return (
          <button
            type="button"
            className="box"
            key={item.img}
            data-reveal
            data-reveal-delay={(i % 3) * 70}
            onClick={() => onOpen(GALLERY.indexOf(item))}
            aria-label={`View ${item.title}, ${item.date}, in the image viewer`}
          >
            <div className="images">
              <img src={item.img} alt="" loading="lazy" decoding="async" />
              <div className="stamp" aria-hidden="true" />
              <div className="spec-strip" aria-hidden="true">
                <span>CAT. {plate}</span>
                <span>GRAND PRIX</span>
              </div>
              <span className="expand-hint" aria-hidden="true">
                VIEW
              </span>
            </div>
            <div className="box-texts">
              <span className="box-index" aria-hidden="true">
                {plate}
              </span>
              <div className="box-meta">
                <span>{item.date.toUpperCase()}</span>
                <h4>{item.title.toUpperCase()}</h4>
              </div>
            </div>
          </button>
        );
      })}
    </section>
  );
}
