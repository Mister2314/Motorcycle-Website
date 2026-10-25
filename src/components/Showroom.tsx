import { useMemo, useState } from "react";

/* 3 colourways applied via CSS filter duotone on the bike image */
const COLOURWAYS = [
  { id: "racing-red", name: "Racing Red", filter: "sepia(1) saturate(8) hue-rotate(-50deg)", accent: "#D40000" },
  { id: "carbon-black", name: "Carbon Black", filter: "grayscale(1) contrast(1.2) brightness(0.4)", accent: "#FFFFFF" },
  { id: "signal-white", name: "Signal White", filter: "grayscale(1) invert(1) contrast(1.5)", accent: "#D40000" },
] as const;

const ACCESSORIES = [
  { id: "heated-grips", label: "Heated Grips", price: 189 },
  { id: "tank-bag", label: "Tank Bag (15 L)", price: 279 },
  { id: "exhaust", label: "Full Exhaust System", price: 949 },
] as const;

const SPECS = [
  { row: "Engine", std: "899 cc inline-4", corsa: "998 cc inline-4", scrambler: "899 cc inline-4" },
  { row: "Power", std: "120 hp @ 10,500 rpm", corsa: "155 hp @ 12,500 rpm", scrambler: "105 hp @ 9,500 rpm" },
  { row: "Torque", std: "92 Nm @ 8,000 rpm", corsa: "104 Nm @ 10,000 rpm", scrambler: "88 Nm @ 7,500 rpm" },
  { row: "Weight (wet)", std: "212 kg", corsa: "198 kg", scrambler: "205 kg" },
  { row: "Seat height", std: "820 mm", corsa: "830 mm", scrambler: "845 mm" },
  { row: "Fuel capacity", std: "17 L", corsa: "16 L", scrambler: "18 L" },
  { row: "Front suspension", std: "41 mm USD", corsa: "43 mm USD (Öhlins)", scrambler: "41 mm USD" },
  { row: "Rear suspension", std: "Monoshock (link)", corsa: "Monoshock (Öhlins)", scrambler: "Monoshock (link)" },
  { row: "Brakes (F/R)", std: "2×320 mm / 240 mm", corsa: "2×320 mm (Brembo) / 220 mm", scrambler: "2×310 mm / 240 mm" },
  { row: "MSRP (est.)", std: "$13,499", corsa: "$17,999", scrambler: "$14,499" },
] as const;

export default function Showroom() {
  const [colour, setColour] = useState<string>(COLOURWAYS[0].id);
  const [addons, setAddons] = useState<Record<string, boolean>>({});
  const [model, setModel] = useState<"std" | "corsa" | "scrambler">("std");

  const activeColour = useMemo(() => COLOURWAYS.find((c) => c.id === colour)!, [colour]);
  const accessoryTotal = useMemo(
    () => ACCESSORIES.filter((a) => addons[a.id]).reduce((s, a) => s + a.price, 0),
    [addons]
  );
  const basePrice = model === "std" ? 13499 : model === "corsa" ? 17999 : 14499;
  const total = basePrice + accessoryTotal;

  const handleAddon = (id: string) => {
    setAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="showroom" className="showroom" aria-labelledby="showroom-title">
      <div className="showroom-inner">
        <header className="showroom-header">
          <h2 id="showroom-title" data-reveal>
            SHOWROOM
          </h2>
          <p data-reveal className="showroom-lead">
            Configure your Grand Prix 900 — live build sheet updates as you pick.
          </p>
        </header>

        {/* CONFIGURATOR */}
        <div className="configurator" data-reveal>
          <div className="config-visual">
            <div
              className="bike-preview"
              style={{ filter: activeColour.filter }}
              role="img"
              aria-label={`Grand Prix 900 in ${activeColour.name}`}
            >
              <img src="/assets/img/port-img-3.jpg" alt="" />
            </div>
            <div className="colour-swatch-row" role="radiogroup" aria-label="Colourway">
              {COLOURWAYS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="radio"
                  aria-checked={c.id === colour}
                  className={`swatch ${c.id === colour ? "active" : ""}`}
                  onClick={() => setColour(c.id)}
                  aria-label={c.name}
                  style={{ "--swatch-accent": c.accent } as React.CSSProperties}
                >
                  <span className="swatch-dot" />
                </button>
              ))}
            </div>
          </div>

          <div className="config-panel">
            <fieldset className="config-section">
              <legend>Colourway</legend>
              <p className="config-value">{activeColour.name}</p>
            </fieldset>

            <fieldset className="config-section">
              <legend>Accessories</legend>
              <ul className="addon-list">
                {ACCESSORIES.map((a) => (
                  <li key={a.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={!!addons[a.id]}
                        onChange={() => handleAddon(a.id)}
                      />
                      <span className="addon-label">{a.label}</span>
                      <span className="addon-price">+ ${a.price}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>

            <div className="build-sheet" aria-live="polite">
              <dl>
                <dt>Base model (900 {model.toUpperCase()})</dt>
                <dd>${basePrice.toLocaleString()}</dd>
                {accessoryTotal > 0 && (
                  <>
                    <dt>Accessories</dt>
                    <dd>+ ${accessoryTotal.toLocaleString()}</dd>
                  </>
                )}
                <dt className="total-row">Total</dt>
                <dd className="total-row">${total.toLocaleString()}</dd>
              </dl>
              <button
                type="button"
                className="cta-primary"
                onClick={() => {
                  const anchor = document.getElementById("book");
                  anchor?.scrollIntoView({ behavior: "smooth" });
                  anchor?.querySelector("input")?.focus();
                }}
              >
                BOOK A TEST RIDE
              </button>
            </div>
          </div>
        </div>

        {/* SPEC COMPARISON */}
        <div className="spec-compare" data-reveal>
          <h3>SPEC COMPARISON</h3>
          <div className="model-tabs" role="tablist" aria-label="Select model for highlight">
            <button role="tab" aria-selected={model === "std"} onClick={() => setModel("std")}>STANDARD 900</button>
            <button role="tab" aria-selected={model === "corsa"} onClick={() => setModel("corsa")}>CORSA R</button>
            <button role="tab" aria-selected={model === "scrambler"} onClick={() => setModel("scrambler")}>SCRAMBLER</button>
          </div>

          <div className="spec-table-wrap" role="region" aria-label="Specification table" tabIndex={0}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col">SPECIFICATION</th>
                  <th scope="col">STANDARD 900</th>
                  <th scope="col">CORSA R</th>
                  <th scope="col">SCRAMBLER</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((s) => (
                  <tr key={s.row}>
                    <th scope="row">{s.row}</th>
                    <td className={model === "std" ? "highlight" : ""}>{s.std}</td>
                    <td className={model === "corsa" ? "highlight" : ""}>{s.corsa}</td>
                    <td className={model === "scrambler" ? "highlight" : ""}>{s.scrambler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="spec-legend">
            Highlighted column = selected model. All figures are indicative for the Grand Prix lineup.
          </p>
        </div>
      </div>
    </section>
  );
}