"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBack, MdEmail, MdOndemandVideo, MdSend } from "react-icons/md";

import Footer from "@/components/footer";

import styles from "@/styles/info-page.module.scss";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleBackClick = () => {
    router.back();
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.content}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>문의하기</h1>
          <p className={styles.subtitle}>궁금한 점이나 문의사항을 남겨주세요</p>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h2>연락처 정보</h2>
            <div className={styles.contactItem}>
              <MdEmail className={styles.contactIcon} />
              <div>
                <h3>이메일</h3>
                <p>zeong0509@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <MdOndemandVideo className={styles.contactIcon} />
              <div>
                <h3>유튜브</h3>
                <p>제옹 채널에서 댓글로도 문의 가능합니다</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2>문의 양식</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject">문의 유형</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="map">맵 관련 문의</option>
                  <option value="command">커맨드 관련 문의</option>
                  <option value="resource">리소스팩 관련 문의</option>
                  <option value="bug">버그 신고</option>
                  <option value="suggestion">제안사항</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">문의 내용</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="문의 내용을 자세히 입력해주세요"
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "전송 중..."
                ) : (
                  <>
                    <MdSend className={styles.sendIcon} />
                    문의 전송
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변
                  드리겠습니다.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
