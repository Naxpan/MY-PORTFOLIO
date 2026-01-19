import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { ThreeDCardDemo } from "../../slides/Project/project/3dcard";
import { useTranslation } from "react-i18next";

export const HeroParallax = ({
  products,
  onShowDetail,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    fullData?: any;
  }[];
  onShowDetail?: (project: any) => void;
}) => {
  const firstRow = products.slice(2, 6);
  const secondRow = products.slice(0, 4);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div
      ref={ref}
      className="h-[300vh] sm:h-[310vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard3D
              product={product}
              translate={translateX}
              onShowDetail={onShowDetail}
              key={`${
                typeof product.title === "object"
                  ? product.title[lang]
                  : product.title
              }-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, index) => (
            <ProductCard3D
              product={product}
              translate={translateXReverse}
              onShowDetail={onShowDetail}
              key={`${
                typeof product.title === "object"
                  ? product.title[lang]
                  : product.title
              }-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {t("pjtitle")}
        <br /> {t("pjcontent")}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {t("pjp3")}
      </p>
    </div>
  );
};

// Component mới kết hợp 3D Card với animation
export const ProductCard3D = ({
  product,
  translate,
  onShowDetail,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
    fullData?: any;
  };
  translate: MotionValue<number>;
  onShowDetail?: (project: any) => void;
}) => {
  const handleShowDetail = () => {
    if (onShowDetail && product.fullData) {
      onShowDetail(product.fullData);
    }
  };

  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="shrink-0"
    >
      <ThreeDCardDemo
        title={product.title}
        description={product.description}
        image={product.thumbnail}
        onShowDetail={handleShowDetail}
      />
    </motion.div>
  );
};
