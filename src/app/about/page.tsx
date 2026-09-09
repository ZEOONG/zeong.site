"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

import Footer from "@/components/footer";

import styles from "@/styles/info-page.module.scss";

export default function AboutPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.content}>
        <div className={styles.heroSection}>
          <div className={styles.aboutHero}>
            <Image
              src="/zeongFace.svg"
              alt="제옹"
              width={120}
              height={120}
              className={styles.profileImage}
            />
            <div className={styles.heroText}>
              <h1 className={styles.title}>제옹 (ZEONG)</h1>
              <p className={styles.subtitle}>마인크래프트 콘텐츠 크리에이터</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>소개</h2>
          <p>
            안녕하세요! 마인크래프트를 사랑하는 콘텐츠 크리에이터 제옹입니다.
            <br />
            창의적이고 재미있는 맵, 커맨드, 리소스팩을 제작하여 많은 분들과
            공유하고 있습니다.
          </p>
          <p>
            특히 마인크래프트의 커맨드 블록 시스템을 활용한 독창적인 게임플레이
            메카닉 구현에 관심이 많으며, 플레이어들이 새로운 경험을 할 수 있도록
            다양한 콘텐츠를 개발하고 있습니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>협업 및 문의</h2>
          <p>
            콘텐츠 제작 협업이나 커스텀 의뢰에 관심이 있으시다면 언제든
            연락주세요.
            <br />
            이메일: zeong0509@gmail.com
            <br />
            유튜브 채널을 통해서도 소통 가능합니다.
          </p>
        </div>

        <div className={styles.teamSection}>
          <h2>팀</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <Image
                src="/zeongFace.svg"
                alt="제옹"
                width={80}
                height={80}
                className={styles.memberImage}
              />
              <h3>제옹</h3>
              <p>크리에이터</p>
            </div>

            <div className={styles.teamMember}>
              <Image
                src="/kongduckFace.svg"
                alt="콩덕"
                width={80}
                height={80}
                className={styles.memberImage}
              />
              <h3>핑구</h3>
              <p>개발자</p>
            </div>
          </div>
        </div>

        <div className={styles.lastUpdated}>최종 업데이트: 2026년 9월 10일</div>
      </div>

      <Footer />
    </div>
  );
}
