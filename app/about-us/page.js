"use client";
import { NavBanner } from "@/components/navigation/navBanner";
import { motion } from "framer-motion";
import { Brands } from "@/components/brands/brands";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  const coreValues = [
    {
      title: "1. Environmental Sustainability",
      description:
        "We prioritize environmental stewardship in our business decisions, implementing responsible practices that minimize our ecological footprint and preserve natural resources.",
    },
    {
      title: "2. Human Development",
      description:
        "We invest in our people's growth and potential, creating pathways for professional advancement while nurturing a culture that celebrates innovation and diverse perspectives.",
    },
    {
      title: "3. Integrity",
      description:
        "We operate with unwavering honesty and accountability, ensuring our actions consistently align with our commitment to build lasting stakeholder confidence.",
    },
    {
      title: "4. Quality Service",
      description:
        "We deliver excellence through meticulous attention to detail, continuously refining our processes to exceed expectations and provide superior value in everything we do.",
    },
  ];

  const certifications = [
    {
      title: "/images/certificate-2.png",
    },
  ];

  const fadeInDownVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -40 }, // Starting from the left
    visible: (i) => ({
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 40 }, // Starting from the right
    visible: (i) => ({
      opacity: 1,
      x: 0, // Move to original position
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
        damping: 10,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInRightVariantNo = {
    hidden: { opacity: 0, x: 40 }, // Starting from the right
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 10, delay: 0.4 },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 10, delay: 0.4 },
    },
  };

  return (
    <div>
      <NavBanner
        bgImage="/images/rva.jpg"
        title="About Us"
        description="About our company"
      />
      {/** Section 1 */}
      <section className="flex flex-wrap items-center gap-14 bg-white px-4 py-16 md:p-16 overflow-hidden">
        <motion.div
          className="lg:flex-1 mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/men-on-boat.jpg"
            alt=""
            className="w-full rounded-md"
          />
        </motion.div>

        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#282828]">
            About Geomarine
          </h1>
          <p className="text-lg py-7 leading-loose text-[#414753]">
            We are a multi – disciplinary geoscience company based in the oil
            city of Port Harcourt, Rivers State, Nigeria. Our personnel have had
            extensive experience of working in the oil and gas rich Niger Delta,
            the Northern Savannah and desert areas and offshore regions of
            Nigeria. Some have had extensive experience in the Middle East, Far
            East and the North Sea. <br /> GSL is committed to the
            implementation of the Nigerian Local Content Act in all its
            operations. To this end, it is the policy of GSL to give first
            consideration to strategies and options that maximize Nigerian input
            into its projects, be they material, technology or personnel.
          </p>
        </motion.div>
      </section>
      {/** Section 2 */}
      <section className="flex flex-wrap items-center gap-14 bg-[#092656] px-4 py-16 md:p-16">
        <div className="lg:flex-1 flex flex-col text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDownVariant}
          >
            <p className="uppercase text-lg">Values</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Our value and standards
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-14">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariant}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h2>
                <p className="text-gray-200 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          className="sticky top-48 lg:flex-1 mx-auto"
        >
          <img
            src="/images/our-standard.jpg"
            alt=""
            className="w-full rounded-md"
          />
        </motion.div>
      </section>
      {/** Section 3 */}
      <section className="flex flex-wrap items-center gap-14 bg-white px-4 py-16 md:p-16 overflow-hidden">
        <motion.div
          className="lg:flex-1 mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src="/images/vision.jpg" alt="" className="w-full rounded-md" />
        </motion.div>

        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#282828]"
          >
            Vision
          </motion.h1>
          <motion.p
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg py-4 text-[#414753]"
          >
            To be the foremost provider of innovative seismic data acquisition,
            seabed geophysics, and geotechnical engineering solutions—driven by
            a culture of continuous training, precision, and commitment to
            safety. We envision a future where our expertise empowers clients
            and supports a more sustainable, informed, and resilient world.
          </motion.p>
          <motion.h1
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl pt-4 font-bold text-[#282828]"
          >
            Mission
          </motion.h1>
          <motion.p
            variants={contentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg py-4 text-[#414753]"
          >
            At Geomarine Systems Limited, our mission is to deliver reliable,
            cutting-edge geoscience and engineering solutions by investing
            relentlessly in training—on-site, in the office, with instrument
            manufacturers, and through global tech insights. We are dedicated to
            equipping our team with the latest knowledge and tools, ensuring
            exceptional service, safety, and environmental stewardship in every
            project we undertake.
          </motion.p>
        </motion.div>
      </section>
      {/** Section 1 */}
      <section className="flex flex-wrap items-center gap-10 md:gap-14 bg-gray-100 px-4 py-16 md:p-16 overflow-hidden">
        {/* Carousel container */}
        <motion.div
          className="lg:flex-1 w-full max-w-xl mx-auto"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl block pb-7 md:hidden md:text-5xl font-bold text-[#282828]">
            Training
          </h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="rounded-md shadow-lg"
          >
            <SwiperSlide>
              <img
                src="/images/students-1.jpg"
                alt="Training 1"
                className="w-full h-auto object-cover rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/train.jpg"
                alt="Training 2"
                className="w-full h-auto object-cover rounded-md"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="lg:flex-1"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl pb-4 hidden md:block md:text-5xl font-bold text-[#282828]">
            Training
          </h1>
          <p className="text-lg  leading-loose text-[#414753]">
            Our industry continues to innovate and upgrade with new
            technologies. Additionally, global concerns about the climate and
            general environment are driving a re-work and a re-think in how we
            do our business. Yesterday's "new normal" becomes today's obsolete
            faster than we can spell the word.
          </p>{" "}
          <p className="text-lg  leading-loose text-[#414753]">
            {" "}
            At Geomarine Systems Limited, we have found the formula that keeps
            us on the quick-paced curve of ever advancing systems and ever
            evolving legal and regulatory regimes. It is training, training and
            more training. In the office. We train In the field and on the job.
            We train at the instrument makers' shops. We train, listening to the
            code developers' webcasts. We train rehearsing the basic physics and
            mathematics of the geosciences, putting the science back in
            geoscience.
          </p>
        </motion.div>
      </section>
      {/** Section 5 */}
      <Brands />
    </div>
  );
}
