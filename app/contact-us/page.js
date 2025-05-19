"use client";

import { NavBanner } from "@/components/navigation/navBanner";

export default function Page() {
  return (
    <div>
      <NavBanner
        bgImage="/images/boat.jpg"
        title="Contact Us"
        description="We are always here for you."
      />

      <section className="bg-white px-4 lg:px-16 pt-20 pb-10 text-slate-800 flex justify-center">
        <div className="bg-white p-4 md:p-8 border-2 shadow-md border-blue-700 rounded-lg max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-8 text-center text-slate-900">
            Get in Touch
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-xl">Address:</strong>
              <br />
              Geomarine Systems Limited, <br />
              234B Iyowuna Drive, Peter Odili Rd, Off Trans-Amadi,
              Port-Harcourt, Rivers State, Nigeria.
            </p>

            <p>
              <strong className="text-xl">Telephone Contacts:</strong>
              <br />–{" "}
              <a
                href="tel:+2347039278982"
                className="text-blue-600 hover:underline"
              >
                +234 (0)703 927 8982
              </a>
              <br />–{" "}
              <a
                href="tel:+2348037900029"
                className="text-blue-600 hover:underline"
              >
                +234 (0)803 790 0029
              </a>
            </p>

            <p>
              <strong className="text-xl">Email:</strong>
              <br />
              <a
                href="mailto:mail@geomarinesystems.net"
                className="text-blue-600 hover:underline"
              >
                mail@geomarinesystems.net
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
