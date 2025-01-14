import { Header } from "@/components/Header";
import styles from "./page.module.css";
import Image from 'next/image';
import { Letter } from "@/components/Letter/Letter";
import { Plan } from "@/components/Plan";
import { Poll } from "@/components/Poll";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Letter />
      <Plan />
      <Poll />
      <section>
        <div className="content">
          <p className={`${styles.p} ${styles.last}`}>
            <span className={styles.love}>
              <Image
                src='/love.svg'
                width={60}
                height={16}
                alt='love'
              />
            </span>
            С любовью, Наташа и Никита
          </p>
        </div>
      </section>
    </div>
  );
}
