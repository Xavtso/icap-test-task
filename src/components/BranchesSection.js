import "../styles/BranchesSection/BranchesSection.css";
import Quotely from "../Quotely.jpg";
import Crm from "../crm.png";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import QuoteComponent from "./quote";
import Card from "./Card";

const BranchesSection = function () {
  const cardsData = [
    {
      id: 1,
      imgSrc: Quotely,
      title: "Quotely Wallpapers",
      description:
        "Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.",
      appUrl: "https://quotely.app/",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
    {
      id: 2,
      imgSrc: Crm,
      title: "Super Easy CRM",
      description:
        "Super Easy CRM: Plattform zur Rationalisierung von Verkaufs- und Kundendienstprozessen.",
      appUrl: "https://apps.apple.com/ua/app/super-easy-crm/id6447245139",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
    {
      id: 3,
      imgSrc: "https://icapgroupgmbh.com/crm.png",
      title: "MonoLite",
      description:
        "Less functionality clone of the famoust ukrainian online-bank - MonoBank",
      appUrl: "https://mono-lite.netlify.app/",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
    {
      id: 4,
      imgSrc: "https://icapgroupgmbh.com/crm.png",
      title: "Lorem ipsum dolor",
      description:
        "Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.",
      appUrl: "https://mono-lite.netlify.app/",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
    {
      id: 5,
      imgSrc: "https://icapgroupgmbh.com/crm.png",
      title: "Lorem ipsum dolor 1",
      description:
        "Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.",
      appUrl: "https://mono-lite.netlify.app/",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
    {
      id: 6,
      imgSrc: "https://icapgroupgmbh.com/crm.png",
      title: "Lorem ipsum dolor 2",
      description:
        "Inspirierende Hintergrundbilder-App: Quotely. Große Auswahl an Zitaten, Hintergrundbildern von Stars und Naturfotos.",
      appUrl: "https://mono-lite.netlify.app/",
      learnMore:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium interdum nisi, vitae dictum velit tincidunt ut. Duis ultrices sapien vitae mauris varius, vitae viverra urna pharetra. Vivamus eget sapien vehicula, ullamcorper quam sit amet, mattis tortor. Sed sed nisi aliquet, consectetur tortor sed, rhoncus dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur velit tortor, vehicula sit amet odio at, convallis tempus nisi. Cras auctor aliquet nibh, in vulputate nunc volutpat id. Donec a tincidunt ex, vel pellentesque risus. Nunc eleifend ex mi, id euismod quam semper rhoncus.",
    },
  ];


  return (
    <section id="branches" className="section-branches">
      <h1 className="branches-title">Our Projects</h1>
      <ScrollingCarousel>
        {cardsData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </ScrollingCarousel>
      <QuoteComponent />


    </section>
  );
};

export default BranchesSection;
