import React from "react";

const Location = ({ address, mapsUrl, phone, hours }) => {
  const isEmbedUrl = (url) => typeof url === 'string' && url.includes('www.google.com/maps/embed');

  return (
    <section id="location" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <h3 className="text-white font-semibold text-xl mb-3">Visit Us</h3>
            <p className="text-white/80">
              {address || "Share the exact address and I'll pin it here."}
            </p>
            {phone && (
              <p className="mt-2 text-white/80">
                Phone: <a href={`tel:${phone}`} className="text-amber-400">{phone}</a>
              </p>
            )}
            {hours && (
              <div className="mt-4 text-white/70 text-sm whitespace-pre-line">{hours}</div>
            )}
            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-amber-500/30"
              >
                Open in Google Maps
              </a>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[350px] bg-black/20 grid place-items-center text-white/70">
            {mapsUrl && isEmbedUrl(mapsUrl) ? (
              <iframe
                title="Google Map"
                src={mapsUrl}
                className="w-full h-full min-h-[350px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="p-6 text-center">
                <div className="text-lg font-medium mb-2">Map preview</div>
                <p className="text-sm text-white/60">Share the full Google Maps embed link to show the live map here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
