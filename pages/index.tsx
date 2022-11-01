import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Footer from "./home/Footer"
import Instruction from "./home/Instruction"
import TextHelper from "./home/TextHelper"

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className=''>

      <Navbar collapseOnSelect expand='lg'>
        <Container>
        <Navbar.Brand href='/'>
            <h1 className={styles.h1} style={{marginLeft:"100px",paddingTop:"15px"}}>Created by DragoGrim</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* Top Section */}
      <div className='main container'>
        <div className='row justify-content-md-center main-text'>
          <h1 className="react-typewriter-text">Service Nft stack</h1>
          <TextHelper />
        </div>
      </div>
      <div className={styles.nftBoxGrid}>
      <Instruction/>
      </div>
      <Footer/>

    </div>
  );
};

export default Home;
