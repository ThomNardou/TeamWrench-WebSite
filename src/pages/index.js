import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Card from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Team Wrench</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="haut">
          <Image
            className={`radhan`}
            src="/radhan.webp"
            alt="Photo de Radhan"
            width={0}
            height={0}
            sizes="100vm"
            style={{ width: '55%', height: 'auto' }}
            priority
          />
          <div>
            <h1><span>T</span>eam wrench</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </header>
      <main className={`${styles.main} ${inter.className}`}>
        <div className="description">
          <h1>Nos domaines</h1>
          <Card title={"Elden Ring"} description={"turpis cursus in hac habitasse platea dictumst quisque sagittis purus"} imageLink={"/Character.png"}/>
        </div>
      </main>
    </>
  );
}
