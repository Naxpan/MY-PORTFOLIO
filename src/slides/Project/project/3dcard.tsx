import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../component/3Dcard/3Dcard";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  onShowDetail?: () => void;
}

export function ThreeDCardDemo({
  title,
  description,
  image,
  githubUrl,
  onShowDetail,
}: ThreeDCardDemoProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation();
  const projectGithubUrl = githubUrl ?? "https://github.com/Naxpan";

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {typeof title === "object" ? title[lang] : title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {typeof description === "object" ? description[lang] : description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-2"
        >
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            onClick={onShowDetail}
            className="px-2 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            {t("more")}
          </CardItem>
          <CardItem
            title={t("seeongithub")}
            as="a"
            href={projectGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            translateZ={20}
            translateX={40}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
