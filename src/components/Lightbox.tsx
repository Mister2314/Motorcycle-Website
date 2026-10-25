import { useCallback, useEffect, useRef } from "react";

export interface GalleryItem {
  img: string;
  alt: string;
  title: string;
  date: string;
}

/**
 * Accessible lightbox built on the native <dialog> element:
 * showModal() gives us focus containment + inert background for free;
 * we add Escape close (native), Arrow-key navigation and focus return.
 */
export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<Element | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null) {
      if (!dialog.open) {
        lastTrigger.current = document.activeElement;
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [index]);

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onNavigate]
  );

  const handleClose = () => {
    const trigger = lastTrigger.current;
    onClose();
    if (trigger instanceof HTMLElement) trigger.focus();
  };

  const item = index !== null ? items[index] : null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={item ? `${item.title} — image viewer` : "Image viewer"}
      onKeyDown={handleKey}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      onClose={handleClose}
    >
      {item && (
        <div className="lightbox-inner">
          <div className="lightbox-head">
            <span className="lightbox-count">
              {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" className="lightbox-close" onClick={handleClose} aria-label="Close image viewer">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
          <img src={item.img} alt={item.alt} />
          <div className="lightbox-caption">
            <span className="lightbox-kicker">{item.date}</span>
            <h3>{item.title}</h3>
          </div>
          <div className="lightbox-nav">
            <button
              type="button"
              onClick={() => onNavigate((index! - 1 + items.length) % items.length)}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onNavigate((index! + 1) % items.length)}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
          <p className="lightbox-hint" aria-hidden="true">
            ← → to browse · Esc to close
          </p>
        </div>
      )}
    </dialog>
  );
}
