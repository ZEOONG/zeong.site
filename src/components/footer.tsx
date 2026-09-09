import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <Link href="/contact">문의하기</Link>
          <Link href="/services">모든 서비스</Link>
          <Link href="/about">소개</Link>
        </div>
        <div className={styles.Creator}>
          <Image
            src="/zeongFace.svg"
            alt=""
            width={40}
            height={40}
            className={styles.Lowlogo}
          />
          <Image
            src="/kongduckFace.svg"
            alt=""
            width={40}
            height={40}
            className={styles.Lowlogo}
          />
        </div>

        <div className={styles.bigline} />
        <div className={styles.footerInfo}>
          <p>
            E-mail : zeong0509@gmail.com <br />
            <a href="https://www.minecraft.net/ko-kr">마인크래프트</a>는{" "}
            <a href="https://www.minecraft.net/ko-kr/usage-guidelines">
              Mojang AB
            </a>
            의 상표이며, 이 사이트는 Mojang과 관련이 없습니다.
          </p>
        </div>
        <p className={styles.infop2}>&copy; 2025 ZEONG. All rights reserved.</p>
      </div>
    </footer>
  );
}
