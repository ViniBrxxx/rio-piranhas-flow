import { useEffect } from "react";
import truck from "@/assets/truck.jpg";

export const VideoSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container-tight text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Conheça a Rio Piranhas</span>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-balance sm:text-4xl">
          Veja por dentro do nosso <span className="text-primary">centro de distribuição</span>
        </h2>

        <div className="mx-auto mt-8 max-w-3xl">
          <div id="ifr_69c6ee157141a7eb85a52811_wrapper" style={{ margin: "0 auto", width: "100%" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }} id="ifr_69c6ee157141a7eb85a52811_aspect">
              <iframe
                frameBorder="0"
                allowFullScreen
                src="about:blank"
                id="ifr_69c6ee157141a7eb85a52811"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "1.5rem",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                }}
                referrerPolicy="origin"
                onLoad={function() {
                  if (this.onload !== null) {
                    this.onload = null;
                    this.src = "https://scripts.converteai.net/0b256e8c-1ea0-49a1-a6c2-4aa9d6840568/players/69c6ee157141a7eb85a52811/v4/embed.html" + (location.search || "?") + "&vl=" + encodeURIComponent(location.href);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
