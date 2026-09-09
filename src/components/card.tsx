"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/card.module.scss";

interface LinkType {
  href: string;
  icon: string;
  alt: string;
}

interface InfoType {
  versionOptions: string[];
  defaultVersion: string;
  genre: string;
  type: string;
  downloads: number;
  date: string;
}

interface CardData {
  id: string;
  titleImage: string;
  overlay: {
    title: string;
    subtitle: string;
  };
  content: {
    title: string;
    description: string;
  };
  links: LinkType[];
  info: InfoType;
  downloadUrl?: string;
}

export default function Card({ data }: { data: CardData }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/detail/${data.id}`);
  };

  return (
    <div className={styles.CardContainer}>
      <div
        className={styles.CardContainerInLine}
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.ImageContainer}>
          <Image
            src={data.titleImage}
            alt=""
            width={1920}
            height={1080}
            className={styles.TitleImage}
          />
          <div className={styles.ImageOverlay}>
            <h2 className={styles.OverlayTitle}>{data.overlay.title}</h2>
            <p className={styles.OverlaySubtitle}>{data.overlay.subtitle}</p>
          </div>
        </div>
        <div className={styles.CardContent}>
          <div className={styles.InCardLayout}>
            <div className={styles.WritingLayout}>
              <h1>{data.content.title}</h1>
              <p>{data.content.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.OutInfoContainer}>
        <div className={styles.OutInfoContainerTop}>
          <div className={styles.infoItem}>
            <span className={styles.label}>버전</span>
            <div className={styles.tags}>
              <select
                className={styles.tagSelect}
                defaultValue={data.info.defaultVersion}
                onClick={(e) => e.stopPropagation()}
              >
                {data.info.versionOptions.map((version) => (
                  <option value={version} key={version}>
                    {version}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>장르</span>
            <div className={styles.tags}>
              <span className={styles.tag}>{data.info.genre}</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>자료 · 형식</span>
            <div className={styles.tags}>
              <span className={styles.tag}>{data.info.type}</span>
            </div>
          </div>
        </div>
        {/* <div className={styles.OutInfoContainerBottom}>
          <div className={styles.infoItem}>
            <span className={styles.label}>다운로드수</span>
            <span className={styles.value}>{data.info.downloads}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.date}>{data.info.date}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
