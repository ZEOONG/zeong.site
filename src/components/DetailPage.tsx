"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBack, MdDownload } from "react-icons/md";

import Footer from "@/components/footer";
import cardDataList from "@/data/cardData.json";

import styles from "@/styles/detail.module.scss";

interface DetailPageProps {
  id: string;
}
function convertToEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
  );
  if (videoIdMatch) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
}

export default function DetailPage({ id }: DetailPageProps) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const cardData = cardDataList.find((card) => card.id === id);

  if (!cardData) {
    return (
      <div className={styles.container}>
        <h1>게임팩을 찾을 수 없습니다.</h1>
        <button onClick={() => router.back()} className={styles.backButton}>
          <MdArrowBack />
        </button>
      </div>
    );
  }

  const handleDownloadClick = () => {
    setIsClicked(true);
    console.log("다운로드됨");

    if (cardData.downloadUrl) {
      window.open(cardData.downloadUrl, "_blank");
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.detailContent}>
        <div className={styles.heroSection}>
          <Image
            src={cardData.titleImage}
            alt={cardData.content.title}
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroTitle}>{cardData.overlay.title}</h1>
            <p className={styles.heroSubtitle}>{cardData.overlay.subtitle}</p>
          </div>
          <button
            onClick={handleDownloadClick}
            className={`${styles.downloadButton} ${isClicked ? styles.clicked : ""}`}
          >
            <MdDownload className={styles.downloadIcon} />
            <span className={styles.downloadText}>다운로드</span>
          </button>
        </div>

        {cardData.links.some((link) => link.alt === "youtube") && (
          <div className={styles.contentSection}>
            <div className={styles.videoContainer}>
              {cardData.links
                .filter((link) => link.alt === "youtube")
                .map((link, index) => (
                  <div key={index} className={styles.videoWrapper}>
                    <iframe
                      src={convertToEmbedUrl(link.href)}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className={styles.youtubeIframe}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}

        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>게임팩 소개</h2>
          <p className={styles.description}>
            {cardData.content.detailedDescription ||
              cardData.content.description}
          </p>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>상세 정보</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>버전</span>
              <select
                className={styles.versionSelect}
                defaultValue={cardData.info.defaultVersion}
              >
                {cardData.info.versionOptions.map((version) => (
                  <option value={version} key={version}>
                    {version}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>장르</span>
              <span className={styles.tag}>{cardData.info.genre}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>자료 · 형식</span>
              <span className={styles.tag}>{cardData.info.type}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>다운로드수</span>
              <span className={styles.infoValue}>
                {cardData.info.downloads.toLocaleString()}
              </span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>업로드 날짜</span>
              <span className={styles.infoValue}>{cardData.info.date}</span>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>설치 방법</h2>
          <p className={styles.description}>
            1. 다운로드 버튼을 클릭하여 게임팩 파일을 다운로드합니다.
            <br />
            2. 마인크래프트를 실행하고 해당 버전({cardData.info.defaultVersion}
            )으로 설정합니다.
            <br />
            3. 다운로드한 파일을 마인크래프트 saves 폴더에 압축 해제합니다.
            <br />
            4. 마인크래프트에서 싱글플레이 {">"} 월드 선택 {">"} 플레이!
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>주의사항</h2>
          <p className={styles.description}>
            • 이 게임팩은 {cardData.info.defaultVersion} 버전에서 최적화되어
            있습니다.
            <br />
            • 다른 모드와 함께 사용할 경우 오류가 발생할 수 있습니다.
            <br />
            • 게임팩 관련 문의사항은 유튜브 댓글 또는 이메일로 연락해주세요.
            <br />• 개인적인 용도로만 사용해주시고, 재배포는 금지합니다.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
