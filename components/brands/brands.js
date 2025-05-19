import { motion } from "framer-motion";
export function Brands() {
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

  const brands = [
    {
      title: "Chevron",
      brands: "/brands/chevron.jpg",
    },
    {
      title: "Exxonmobil",
      brands: "/brands/exxonmobil.jpg",
    },
    {
      title: "Napims",
      brands: "/brands/napims.jpg",
    },
    {
      title: "Oando",
      brands: "/brands/oando.jpg",
    },
    {
      title: "Addax",
      brands: "/brands/addax.jpg",
    },
    {
      title: "Conoil",
      brands: "/brands/conoil.jpg",
    },

    {
      title: "Sinopec",
      brands: "/brands/sinotech.jpg",
    },
    {
      title: "MTS",
      brands: "/brands/mts.jpg",
    },
    {
      title: "Nitgel",
      brands: "/brands/nitgel.jpg",
    },
    {
      title: "Ibom Solutions",
      brands: "/brands/logo-2.png",
    },
    {
      title: "Seplat",
      brands: "/brands/logo-1.jpg",
    },
  ];

  return (
    <section className="flex flex-wrap items-center gap-14 bg-[#092656] px-4 py-16 md:p-16 overflow-hidden">
      <div className="flex-1 flex flex-col text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDownVariant}
        >
          <p className="uppercase text-lg">Our clients</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            We're trusted by Top Organizations
          </h1>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-14 mt-14">
          {brands.map((value, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              variants={fadeInUpVariant}
              className="text-[#282828] mx-auto"
            >
              <img
                src={value.brands}
                alt={value.title}
                className="rounded-md w-40"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
