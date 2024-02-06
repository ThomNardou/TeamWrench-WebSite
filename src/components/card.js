import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

export default function Card({title, description, imageLink}) {
    return (
        <>
            <div className="card">
                <div className="text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <Image
                    src={imageLink}
                    width={0}
                    height={0}
                    sizes="100vm"
                    style={{ width: '50%', height: 'auto' }}
                    priority
                />
            </div>
        </>
    )
}  