import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Slider from "../components/Slider"; 
import Footer from "../components/Footer"; 
import dynamic from 'next/dynamic';
const TrendingProduct = dynamic(() => import('../components/TrendingProduct'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.content}>
        <Hero />
        <Banner />
        <Slider />
        <TrendingProduct />
        <Footer />
      </div>
    </div>
  ); 
}
