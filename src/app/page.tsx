import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Letter } from "@/components/Letter/Letter";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Letter />
    </div>
  );
}
