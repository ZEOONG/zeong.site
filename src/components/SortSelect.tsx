"use client";

import styles from "@/styles/home.module.scss";

interface SortSelectProps {
  sortOrder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SortSelect({ sortOrder, onChange }: SortSelectProps) {
  return (
    <div className={styles.sortSelect}>
      <select
        id="sortSelect"
        value={sortOrder}
        onChange={onChange}
        className={styles.sortSelectBtn}
      >
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
        <option value="downloads_desc">다운로드 많은순</option>
        <option value="downloads_asc">다운로드 적은순</option>
      </select>
    </div>
  );
}
