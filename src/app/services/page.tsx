"use client";

import { useRouter } from "next/navigation";
import { MdArrowBack, MdCode, MdExtension, MdMap } from "react-icons/md";

import Footer from "@/components/footer";

import styles from "@/styles/info-page.module.scss";

export default function ServicesPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const services = [
    {
      icon: <MdMap className={styles.serviceIcon} />,
      title: "마인크래프트 맵",
      description:
        "창의적이고 재미있는 커스텀 맵을 제작하여 제공합니다. 어드벤처, 퍼즐, 서바이벌 등 다양한 장르의 맵을 경험해보세요.",
      features: ["어드벤처 맵", "퍼즐 맵", "서바이벌 맵", "미니게임 맵"],
    },
    {
      icon: <MdCode className={styles.serviceIcon} />,
      title: "커맨드 블록",
      description:
        "복잡한 기능을 구현하는 커맨드 블록 시스템을 제작합니다. 마인크래프트의 한계를 넘어선 새로운 경험을 제공합니다.",
      features: [
        "자동화 시스템",
        "미니게임 기능",
        "특수 이벤트",
        "커스텀 메카닉",
      ],
    },
    {
      icon: <MdExtension className={styles.serviceIcon} />,
      title: "리소스팩",
      description:
        "게임의 시각적 경험을 향상시키는 리소스팩을 제작합니다. 텍스처, 사운드, 모델 등을 개선하여 몰입도를 높입니다.",
      features: ["텍스처 개선", "사운드팩", "3D 모델", "UI 개선"],
    },
  ];

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.content}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>모든 서비스</h1>
          <p className={styles.subtitle}>제옹이의 마인크래프트 콘텐츠 서비스</p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceFeatures}>
                <h4>주요 기능</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2>서비스 특징</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h3>높은 품질</h3>
              <p>
                모든 콘텐츠는 철저한 테스트를 거쳐 안정성과 재미를 보장합니다.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3>지속적 업데이트</h3>
              <p>
                마인크래프트 업데이트에 맞춰 콘텐츠를 지속적으로 개선합니다.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3>커뮤니티 소통</h3>
              <p>유튜브와 이메일을 통해 사용자 피드백을 적극 수렴합니다.</p>
            </div>
            <div className={styles.featureItem}>
              <h3>배포</h3>
              <p>모든 콘텐츠는 개인 사용자에게 배포합니다!</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>이용 방법</h2>
          <div className={styles.stepsList}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>콘텐츠 선택</h3>
                <p>홈페이지에서 원하는 맵, 커맨드, 리소스팩을 선택하세요.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>다운로드</h3>
                <p>상세 페이지에서 다운로드 버튼을 클릭하여 파일을 받으세요.</p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>설치 및 실행</h3>
                <p>제공된 설치 가이드에 따라 마인크래프트에 적용하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
