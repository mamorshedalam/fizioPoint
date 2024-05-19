import logoImg from "./assets/img/logo.png";
import logoWhite from "./assets/img/logo-white.png";
import heroImg from "./assets/img/item-1.jpg";
import hero2Img from "./assets/img/people-4.jpeg";
import hero3Img from "./assets/img/profile.png";
import item1Img from "./assets/img/item-1.jpg";
import item2Img from "./assets/img/item-2.jpg";
import item3Img from "./assets/img/item-3.jpg";
import item4Img from "./assets/img/item-4.jpg";
import icon1Img from "./assets/img/icon-1.png";
import icon2Img from "./assets/img/icon-2.png";
import icon3Img from "./assets/img/icon-3.png";
import icon4Img from "./assets/img/icon-4.png";
import icon5Img from "./assets/img/icon-5.png";
import icon6Img from "./assets/img/icon-6.png";
import icon7Img from "./assets/img/icon-7.png";
import icon8Img from "./assets/img/icon-8.png";
import mapImg from "./assets/img/map.jpg";
import Faq from "./components/Faq/faq";
import { useEffect, useState } from "react";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, EffectCards } from 'swiper/modules';
import WOW from "wow.js";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import './components/Pagination/pagination.css';

function App() {
  const [slider, setSlider] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    new WOW().init();
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white-20/50 z-[9999]">
        <div className="sl-container">
          <div className="flex flex-wrap items-center justify-between">
            <a href="" className="xs:w-60 w-40 md:py-8 py-3"><img src={logoImg} alt="Logo" /></a>
            <nav className="lg:flex hidden flex-wrap items-center">
              <a href="" className="py-2 px-4">Módszereink</a>
              <a href="" className="py-2 px-4">Árak</a>
              <a href="" className="py-2 px-4">Blog</a>
              <a href="" className="py-2 px-4">Kapcsolat</a>
              <a href="" className="ml-4 bg-orange-100 py-2 px-5 rounded-full text-white">Időpontfoglalás</a>
            </nav>
            <button onClick={() => setSlider(!slider)} className="lg:hidden block w-8 h-8 text-black-100">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path>
              </svg>
            </button>
            <nav className={`lg:hidden absolute top-full left-0 w-full px-6 bg-gradient-to-b from-white-orange from-30% to-white-orange/25 sl-animation ${slider ? 'h-dvh py-4' : 'h-0 overflow-hidden'}`}>
              <a href="" className="block py-3 text-lg">Módszereink</a>
              <a href="" className="block py-3 text-lg">Árak</a>
              <a href="" className="block py-3 text-lg">Kapcsolat</a>
              <a href="" className="block bg-orange-100 py-2 text-center rounded-full text-white mt-6">Időpontfoglalás</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-black/0 to-orange-20 lg:pt-32 py-16 overflow-hidden">
        <div className="sl-container">
          <div className="relative flex flex-wrap items-center lg:py-20 md:py-12 xs:py-16 py-4">
            <div className="wow fadeIn relative lg:w-1/2 w-full pt-5 lg:mb-0 md:mb-12 mb-6 z-20">
              <h1 className="md:text-5xl xs:text-4xl text-3xl font-bold leading-tight">Gyógytorna és manuálterápia rendelő<br />a Corvin sétánynál</h1>
              <p className="md:text-lg text-base mt-2.5">Mozogj könnyedén és fájdalommentesen!</p>
              <div className="lg:mt-10 mt-6">
                <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Jelentkezz állapotfelmérésre</a>
                <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-black-100 rounded-full py-3 px-6 xs:ml-4 opacity-80">Itt találsz minket</a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="wow fadeInRight relative h-[30rem] z-20"><img src={heroImg} alt="Hero" className="sl-shadow-lg rounded-tl-3xl h-full object-cover rounded-br-3xl" /></div>
              <div className="absolute -right-[11%] top-0 w-2/5 rounded-tl-3xl h-full bg-green-100 z-0 xs:opacity-100 opacity-15 before:absolute before:top-0 before:left-0 lg:before:bg-black-100/50 before:bg-black-100/25 before:w-full before:h-full before:rounded-tl-3xl before:z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-20 to-orange-20 lg:py-20 md:py-12 xs:py-16 py-4 overflow-hidden">
        <div className="sl-container">
          <h2 className="wow fadeIn lg:mb-20 md:mb-16 pb-10 text-center md:text-5xl xs:text-4xl text-3xl font-bold">Miben segíthetünk?</h2>
          <div className="wow fadeInUp flex flex-wrap">
            <div className="xl:w-1/4 sm:w-1/2 md:px-5 px-3 md:mb-9 xs:mb-12 mb-6">
              <div className="sl-shadow-sm flex flex-col h-full bg-white-50 rounded-2xl hover:bg-white-100 hover:scale-105 sl-animation">
                <img src={item1Img} alt="" className="w-full h-32 rounded-t-2xl object-cover" />
                <div className="w-full p-4 md:pt-4 pt-1">
                  <h3 className="xs:text-xl text-lg font-semibold xs:pb-5 pb-3">Fájdalom</h3>
                  <p>A fájdalom a tested jelzése, hogy valami nincs rendben. Ne törődj bele, segítünk megoldani a problémát!</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 sm:w-1/2 md:px-5 px-3 md:mb-9 xs:mb-12 mb-6">
              <div className="sl-shadow-sm flex flex-col h-full bg-white-50 rounded-2xl hover:bg-white-100 hover:scale-105 sl-animation">
                <img src={item2Img} alt="" className="w-full h-32 rounded-t-2xl object-cover" />
                <div className="w-full p-4 md:pt-4 pt-1">
                  <h3 className="xs:text-xl text-lg font-semibold xs:pb-5 pb-3">Rehabilitáció</h3>
                  <p>Támogatjuk a felépülésed műtét, sportsérülés, betegség, vagy stroke után.</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 sm:w-1/2 md:px-5 px-3 md:mb-9 xs:mb-12 mb-6">
              <div className="sl-shadow-sm flex flex-col h-full bg-white-50 rounded-2xl hover:bg-white-100 hover:scale-105 sl-animation">
                <img src={item3Img} alt="" className="w-full h-32 rounded-t-2xl object-cover" />
                <div className="w-full p-4 md:pt-4 pt-1">
                  <h3 className="xs:text-xl text-lg font-semibold xs:pb-5 pb-3">Megelőzés</h3>
                  <p>Idősebb korodban is szeretnél könnyedén és fájdalommentesen mozogni? Kezdd el most megalapozni, segítünk benne!</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 sm:w-1/2 md:px-5 px-3 md:mb-9 xs:mb-12 mb-6">
              <div className="sl-shadow-sm flex flex-col h-full bg-white-50 rounded-2xl hover:bg-white-100 hover:scale-105 sl-animation">
                <img src={item4Img} alt="" className="w-full h-32 rounded-t-2xl object-cover" />
                <div className="w-full p-4 md:pt-4 pt-1">
                  <h3 className="xs:text-xl text-lg font-semibold xs:pb-5 pb-3">Másban?</h3>
                  <p>Tartásjavítás szédülés, fejfájás, fülzúgás, műtét előtti gyógytorna, keringési zavarok…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-20 to-black/0 from-25% md:pt-10 md:pb-20 py-16">
        <div className="sl-container">
          <div className="flex flex-wrap items-center">
            <div className="wow fadeInLeft lg:w-1/2 w-full pr-10 lg:mb-0 mb-9">
              <span className="block lg:text-left md:text-center pb-2.5 font-semibold text-sm">Út az Egészséghez</span>
              <h2 className="font-bold lg:text-left md:text-center lg:text-5xl md:text-4xl text-3xl xs:mb-5 mb-3">Lépésről lépésre</h2>
              <p className="md:text-lg">Szakértőnkkel és hatékony módszereinkkel minden egyes lépésnél támogatjuk céljai elérését. Tervezzük meg együtt az Önhöz leginkább illő utat. Jelentkezz állapotfelmérésónkre most és találd meg az utad az egészséghez!</p>
              <div className="mt-10">
                <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Időpontfoglalás</a>
                <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-orange-50 text-orange-50 rounded-full py-3 px-6 xs:ml-4 opacity-80">Áraink</a>
              </div>
            </div>
            <div className="wow fadeInRight lg:w-1/2 w-full">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                mousewheel={true}
                modules={[Mousewheel, EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="relative text-white bg-green-100 rounded-2xl xs:h-80 h-[25rem] pt-4 p-8 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black-100/50 before:z-0">
                    <div className="relative flex flex-col justify-center h-full z-10">
                      <span className="absolute right-0 xs:top-1/2 xs:-translate-y-1/2 top-0 xs:text-9xl text-8xl font-extrabold opacity-20">1.</span>
                      <h3 className="text-3xl font-bold my-4">Vedd fel velünk a kapcsolatot!</h3>
                      <p className="">Foglalj időpontot online, írj nekünk e-mailt vagy keress minket telefonon, hogy segítenitudjunk!</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative bg-green-20 rounded-2xl xs:h-80 h-[25rem] pt-4 p-8 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black-100/15 before:z-0">
                    <div className="relative flex flex-col justify-center h-full z-10">
                      <span className="absolute right-0 xs:top-1/2 xs:-translate-y-1/2 top-0 xs:text-9xl text-8xl font-extrabold opacity-50">2.</span>
                      <h3 className="text-3xl font-bold my-4">Állapotfelmérés,<br />első kezeléssel</h3>
                      <p className="">Minden eset egyedi, ezért első alkalommal egy állapotfelméréssel kezdünk. Erre alapozvatudjuk felépíteni a számodra szükséges kezelési tervet és megkezdeni a terápiát rögtön, máraz első alkalommal.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative text-white bg-green-100 rounded-2xl xs:h-80 h-[25rem] pt-4 p-8 overflow-hidden before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black-100/50 before:z-0">
                    <div className="relative flex flex-col justify-center h-full z-10">
                      <span className="absolute right-0 xs:top-1/2 xs:-translate-y-1/2 top-0 xs:text-9xl text-8xl font-extrabold opacity-20">3.</span>
                      <h3 className="text-3xl font-bold my-4">További kezelések</h3>
                      <p className="">A felállított/személyre szabott kezelési terv alapján haladunk célod elérése felé, a terápiátfolyamatosan egyéni fejlődésedhez igazítva.</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section >

      <section className="relative bg-cover bg-fixed bg-no-repeat lg:py-20 md:py-24 py-16 text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-20/70 before:z-0" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="wow fadeIn relative sl-container z-10">
          <h2 className="my-5 font-bold lg:text-5xl xs:text-4xl text-3xl xs:text-left text-center">Kezelés már az első alkalommal</h2>
          <p className="md:max-w-[60svw] xs:text-2xl xs:text-left text-center">A panaszok csökkenése gyakran már az első kezelés után tapasztalható</p>
          <div className="mt-10">
            <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Időpontfoglalás</a>
            <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-white rounded-full py-3 px-6 xs:ml-4 opacity-80">Itt találsz minket</a>
          </div>
        </div>
      </section>

      <section className="xs:py-28 py-12 text-center">
        <div className="sl-container">
          <div className="max-w-screen-lg mx-auto">
            <span className="wow fadeInDown font-semibold text-orange-80">Egyedi Technikák a Legjobb Eredményekért</span>
            <h2 className="wow fadeIn lg:text-5xl md:text-4xl text-3xl font-bold pt-2.5 md:mb-10 mb-4">Személyre Szabott Terápiás Módszerek</h2>
            <p className="wow fadeInUp text-black-80 max-w-[80svw] mx-auto">Az állapotfelmérés után, személyre szabott kezelési tervet állítunk össze, felhasználva a felsorolt bevált technikákat a lehető legjobb eredmények elérése érdekében.</p>
            <div className="wow fadeInUp my-10">
              <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Időpontfoglalás</a>
              <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-black-100 rounded-full py-3 px-6 xs:ml-4 opacity-80">Itt találsz minket</a>
            </div>
            <div className="wow fadeInLeft flex flex-wrap items-center justify-center">
              <div className="max-w-80 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon2Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Gyógytorna</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Gyógytorna</h3>
                </div>
              </div>
              <div className="max-w-80 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon3Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Manuálterápia</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Manuálterápia</h3>
                </div>
              </div>
              <div className="max-w-[40rem] lg:w-60 w-full lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon8Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Elektroterápia</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Elektroterápia</h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInRight flex flex-wrap items-center justify-center">
              <div className="max-w-96 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon6Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Köpölyözés</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Köpölyözés</h3>
                </div>
              </div>
              <div className="max-w-96 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon4Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Triggerpont terápia</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Triggerpont terápia</h3>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp flex flex-wrap items-center justify-center">
              <div className="max-w-80 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon1Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Fascia kezelések</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Fascia kezelések</h3>
                </div>
              </div>
              <div className="max-w-80 lg:w-60 w-1/2 lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon7Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Kinesio taping</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Kinesio taping</h3>
                </div>
              </div>
              <div className="max-w-[40rem] lg:w-60 w-full lg:mt-10 xs:mt-6 mt-4 lg:px-5 xs:px-4 px-2">
                <div className="relative flex flex-col justify-center h-44 cursor-pointer rounded-2xl bg-green-20 shadow-sm py-2.5 px-5 sl-animation hover:bg-green-40 hover:shadow-md">
                  <img src={icon5Img} alt="icon" className="w-20 h-20 xs:opacity-25 opacity-15 mx-auto" />
                  <h3 className="xs:hidden block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm font-bold">Rehabilitáció</h3>
                  <h3 className="xs:block hidden xs:text-xl font-bold mt-1.5">Rehabilitáció</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="relative bg-cover bg-fixed bg-no-repeat lg:py-20 md:py-24 py-16 text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black-20/70 before:z-0" style={{ backgroundImage: `url(${hero2Img})` }}>
        <div className="wow fadeIn relative sl-container z-10">
          <h2 className="my-5 font-bold lg:text-5xl xs:text-4xl text-3xl xs:text-left text-center">Meghallgatunk, mert fontos a történeted</h2>
          <p className="md:max-w-[60svw] xs:text-2xl xs:text-left text-center">Nálunk 80 perc az első alkalom, mert hisszük,hogy a sikeres terápia alapos vizsgálattal kezdődik.</p>
          <div className="mt-10">
            <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Időpontfoglalás</a>
            <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-white rounded-full py-3 px-6 xs:ml-4 opacity-80">Itt találsz minket</a>
          </div>
        </div>
      </section>

      <section className="lg:py-28 md:py-24 pt-16 overflow-hidden">
        <div className="sl-container">
          <div className="flex flex-wrap items-center">
            <div className="relative md:w-1/3 w-full">
              <h2 className="wow fadeIn relative md:text-4xl text-3xl font-bold md:text-left text-center md:mb-10 mb-12 z-10">Klienseink mondták</h2>
              <span className="absolute md:-top-[161%] -top-[136%] md:-left-[20%] -left-[10%] text-orange-20/80 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z" fill="currentColor"></path></svg>
              </span>
            </div>
            <div className="relative md:w-2/3 w-full">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  }
                }}
                autoplay={{
                  delay: 9000,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:pb-24 pb-20"
              >
                <SwiperSlide>
                  <div className="wow fadeInRight w-full h-full flex flex-col items-end border border-orange-20 bg-orange-20/25 rounded-2xl p-8">
                    <div className="flex flex-wrap items-center w-full gap-2 text-orange-40">
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                    </div>
                    <p className="w-full my-4">Gerincsérv  műtét után fontos volt számomra, hogy amint lehet visszanyerjem az erőm és  ebben egy profi szakember segítsen! Profi, lelkiismeretes szakember kezei közt voltam nálad azokban a hónapokban! Külön gratula azért, hogy az egyéb eltéréseket is észrevetted  és dolgoztál azon, hogy    helyre rakd. A házi feladatok reálisak voltak, nem volt lehetetlen  elvégezni 4 gyerek mellett sem! Azóta is (1éve) az általad ajánlott edzésekre járok. Visszanyertem az  erőm, sőt még az alakom is az előnyömre változott.</p>
                    <div className="text-sm">
                      <p className="font-semibold">N. Sz.  Anita</p>
                      <p>35 éves</p>
                      <h3 className="font-bold text-orange-80 text-base">Gyógytorna</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wow fadeInRight w-full h-full flex flex-col items-end border border-orange-20 bg-orange-20/25 rounded-2xl p-8">
                    <div className="flex flex-wrap items-center w-full gap-2 text-orange-40">
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                    </div>
                    <p className="w-full my-4">Anita  rendkívül pontos és precíz. Ténylegesen személyre szabott kezelést végez.  Számos fontos tanácsával a napi rutinra, tornára és mozgásra vonatkozóan nagyban  hozzájárult gyors felépülésemhez. Engem megmentett, rendkívül gyorsan felépültem, ehhez természetesen minden utasítását be kell tartani, végre kell hajtani.</p>
                    <div className="text-sm">
                      <p className="font-semibold">S. Péter</p>
                      <p>41 éves</p>
                      <h3 className="font-bold text-orange-80 text-base">Gyógytorna</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wow fadeInRight w-full h-full flex flex-col items-end border border-orange-20 bg-orange-20/25 rounded-2xl p-8">
                    <div className="flex flex-wrap items-center w-full gap-2 text-orange-40">
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                    </div>
                    <p className="w-full my-4">Szia Anita! Ahogy már mondtam is:Pozitívan álltál, kezdted a tornát, ami nekem jól esett, és lelket öntöttél belém. Figyelmesen,türelmesen, higgadtan magyaráztad, mutattad a gyakorlatokat, mely könnyebben segített át a kezdetkezdetén a nehézségeken. Köszönöm a munkádat! További szép napot, szép hétvégét és sok sikertkívánok!</p>
                    <div className="text-sm">
                      <p className="font-semibold">B.  Istvánné Erzsébet</p>
                      <p>64 éves</p>
                      <h3 className="font-bold text-orange-80 text-base">Gyógytorna</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wow fadeInRight w-full h-full flex flex-col items-end border border-orange-20 bg-orange-20/25 rounded-2xl p-8">
                    <div className="flex flex-wrap items-center w-full gap-2 text-orange-40">
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                    </div>
                    <p className="w-full my-4">Anita  olyan mint a Robitussin, 5 perc után érzed a hatását.</p>
                    <div className="text-sm">
                      <p className="font-semibold">Sz. Ádám</p>
                      <p>32 éves</p>
                      <h3 className="font-bold text-orange-80 text-base">Gyógytorna</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="wow fadeInRight w-full h-full flex flex-col items-end border border-orange-20 bg-orange-20/25 rounded-2xl p-8">
                    <div className="flex flex-wrap items-center w-full gap-2 text-orange-40">
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                      <svg className="w-8" width="100%" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z" fill="currentColor" aria-hidden="true"></path>
                      </svg>
                    </div>
                    <p className="w-full my-4">Édesapám stroke utáni felépülését segítő gyógytornában részesült Anitától 2022-ben. Kiemelkedőszakmai tudással rendelkezik, segítőkész, minden kérdésemre türelmesen válaszolt és fontoséletmódbeli tanácsokat is kaptam tőle. Emellett az én gerincproblémámat is kezelte, amelymegszűnt. Köszönöm az empatikus hozzáállást! További jó munkát kívánok!</p>
                    <div className="text-sm">
                      <p className="font-semibold">T. Ágnes</p>
                      <p>39 éves</p>
                      <h3 className="font-bold text-orange-80 text-base">Gyógytorna</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <div className="absolute bottom-1 right-4 w-fit flex items-center justify-end z-50">
                  <button onClick={() => swiper.slideNext()} className="swiper-button-next !relative w-12 h-12 flex items-center justify-center border border-orange-100 rounded-full !text-orange-100 hover:bg-orange-20 after:hidden">
                    <svg className="!w-4 !h-4 !fill-orange-100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
                    </svg>
                  </button>
                  <button onClick={() => swiper.slidePrev()} className="swiper-button-prev !relative w-12 h-12 flex items-center justify-center border border-orange-100 rounded-full !text-orange-100 rotate-180 hover:bg-orange-20 after:hidden">
                    <svg className="!w-4 !h-4 !fill-orange-100" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
                    </svg>
                  </button>
                </div>
              </Swiper>
              <span className="md:block hidden absolute -bottom-[20%] -right-[5%] text-orange-20/25">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z" fill="currentColor"></path></svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 py-16 overflow-hidden">
        <div className="sl-container">
          <div className="wow fadeIn text-center">
            <span className="font-bold md:text-2xl text-xl text-orange-100">Terapeutánk</span>
            <h2 className="md:text-4xl text-3xl font-bold md:pt-4 pt-2 md:mb-5 mb-4">Tagai Anita, gyógytornász</h2>
          </div>
          <div className="relative flex flex-wrap items-center md:py-20 xs:py-16 py-12">
            <div className="lg:w-1/2 w-full pt-5 lg:mb-0 md:mb-9 mb-6">
              <h3 className="wow fadeInUp font-bold md:text-2xl text-lg md:mb-4 mb-2">Hitvallásom</h3>
              <p className="wow fadeInUp max-w-lg md:text-lg mb-8">Munkám során célom az egész testet átfogóan vizsgálni, a probléma okát megtalálni és azt kezelni.</p>
              <h3 className="wow fadeInUp font-bold md:text-2xl text-lg md:mb-4 mb-2">Tapasztalataim</h3>
              <ul className="wow fadeInUp pl-10">
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>műtét utáni rehabilitáció</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>törés, sérülés utáni rehabilitáció</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>stroke utáni rehabilitáció</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>ízületi panaszok</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>sportsérülések</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>tartási rendellenességek</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>reumatológiai eredetű mozgásszervi panaszok</span>
                </li>
                <li className="flex items-center gap-3 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-80"></span>
                  <span>neurológiai eredetű mozgásszervi panaszok</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="wow fadeInRight lg:w-full w-[80vw] xs:h-auto h-[30rem] mx-auto relative z-20"><img src={hero3Img} alt="Hero" className="sl-shadow-lg h-full object-cover rounded-tl-3xl rounded-br-3xl" /></div>
              <div className="absolute -right-[11%] top-0 w-2/5 rounded-tl-3xl h-full bg-green-100 z-0 xs:opacity-100 opacity-15 before:absolute before:top-0 before:left-0 lg:before:bg-black-100/50 before:bg-black-100/25 before:w-full before:h-full before:rounded-tl-3xl before:z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-16 bg-gradient-to-b from-green-40/0 via-green-40 via-50% to-green-40/0">
        <div className="sl-container">
          <h2 className="wow fadeIn font-bold md:text-4xl text-3xl md:mb-5 mb-3">Itt találsz minket</h2>
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/3 w-full flex flex-wrap items-center lg:gap-8 gap-4 lg:mb-0 mb-6">
              <button className="wow fadeInLeft flex items-center md:w-[90%] w-full rounded-2xl sl-shadow-sm gap-5 p-5 pt-2.5 bg-green-20/85 hover:bg-white-50 sl-animation">
                <span className="text-orange-80 w-8 h-8">
                  <svg width="100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z" fill="currentColor"></path>
                    <path d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z" fill="currentColor"></path>
                  </svg>
                </span>
                <div className="basis-0 flex-grow text-left">
                  <h3 className="font-bold mb-2">Cím</h3>
                  <p className="text-xs">1082 Budapest, Corvin sétány 6A, II. emelet, 226.</p>
                </div>
              </button>
              <button className="wow fadeInLeft flex items-center md:w-[90%] w-full rounded-2xl sl-shadow-sm gap-5 p-5 pt-2.5 bg-green-20/85 hover:bg-white-50 sl-animation">
                <span className="text-orange-80 w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"></path></svg>
                </span>
                <div className="basis-0 flex-grow text-left">
                  <h3 className="font-bold mb-2">Nyitvatartás</h3>
                  <p className="text-xs">Hétfő-Péntek: 08:00-20:00</p>
                </div>
              </button>
              <button className="wow fadeInLeft flex items-center md:w-[90%] w-full rounded-2xl sl-shadow-sm gap-5 p-5 pt-2.5 bg-green-20/85 hover:bg-white-50 sl-animation">
                <span className="text-orange-80 w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.85 7h10.29l1.08 3.11H5.77zM19 17H5v-5h14z"></path><circle cx="7.5" cy="14.5" r="1.5" fill="currentColor"></circle><circle cx="16.5" cy="14.5" r="1.5" fill="currentColor"></circle></svg>
                </span>
                <div className="basis-0 flex-grow text-left">
                  <h3 className="font-bold mb-2">Parkolás</h3>
                  <p className="text-xs">A parkolás egyszerű és biztonságos a Corvin pláza parkolójában.</p>
                </div>
              </button>
              <button className="wow fadeInLeft flex items-center md:w-[90%] w-full rounded-2xl sl-shadow-sm gap-5 p-5 pt-2.5 bg-green-20/85 hover:bg-white-50 sl-animation">
                <span className="block text-orange-80 w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.42 0-8 .5-8 4v10c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4m5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99m.34 2V10H6V6.99zm-.34 9.74l-.29.27H6.63l-.29-.27A.968.968 0 0 1 6 16v-4h12v4c0 .37-.21.62-.34.73"></path><circle cx="8.5" cy="14.5" r="1.5" fill="currentColor"></circle><circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"></circle></svg>
                </span>
                <div className="basis-0 flex-grow text-left">
                  <h3 className="font-bold mb-2">Tömegközlekedés</h3>
                  <p className="text-xs">M3-as metróval a Semmelweis Klinikák, vagy 4-6 villamossal a Corvin-negyed megállóból pár perc séta.</p>
                </div>
              </button>
            </div>
            <div className="lg:w-2/3 w-full">
              <a href="" className="wow fadeInRight w-full rounded-3xl md:h-[35rem] h-[25rem] overflow-hidden"><img src={mapImg} alt="map" className="h-full object-cover" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-20 md:py-12 py-16">
        <div className="sl-container">
          <h2 className="wow fadeIn md:text-5xl text-4xl font-bold pb-10 xs:mb-5 text-center">Gyakori kérdések</h2>
          <ul>
            <Faq title="Hogyan készüljek az állapotfelmérésre?" pass="Kérünk érkezz 10 perccel az időpontod előtt és hozd magaddal a korábbi orvosileleteidet! A vizsgálat általában fehérneműben (vagy igény esetén fürdőruhában)történik, hogy ne kerülje el semmi a gyógytornász figyelmét." />
            <Faq title="Fájdalmas a kezelés?" pass="A problémás területek kezelése olykor fájdalmas lehet, de ezekben az esetekbengyógytornászaink figyelembe veszik egyéni tűrőképességed és arra törekszenek, hogya legjobb eredményt a lehető legkevesebb fájdalommal érjék el." />
            <Faq title="Otthon is kell tornáznom?" pass="A kezelések hatására javulást fogsz tapasztalni, de a gyorsabb és tartós sikerhezszükséges a kapott házi feladatok elvégzése. Ezeket mindig az aktuális állapotodhoz,idődhöz és lehetőségeidhez igazítjuk. Általában naponta csupán 10-15 percet vesznekigénybe." />
            <Faq title="Miért tornázzak, ha a gyógyszerek is elmulasztják a fájdalmam?" pass="Gyógyszerek olykor szükségesek lehetnek, de sokszor csak a tüneteket fedik el. Alegtöbb mozgásszervi panasz oka valamilyen statikai probléma, melyet csak tornávaltudunk megszüntetni." />
            <Faq title="Hogyan tudok fizetni?" pass="Rendelőnkben lehetőség van készpénzes és bankkártyás fizetésre is." />
            <Faq title="Hogyan tudom a rendelőt megközelíteni?" pass="Rendelőnk a Corvin sétányon található. A parkolás egyszerű és biztonságos a Corvinpláza parkolójában. Tömegközlekedéssel M3-as metróval a Semmelweis Klinikák,vagy 4-6 villamossal a Corvin-negyed megállóból pár perc séta." />
          </ul>
          <div className="wow fadeIn max-w-[40rem] mx-auto text-center mt-20">
            <h3 className="md:text-2xl text-lg font-bold mb-5 md:pb-5">Vedd kezedbe az egészséged.</h3>
            <p className="md:text-lg">Foglalj időpontot állapotfelmérésünkre, ahol személyre szabottan megválaszoljuk kérdéseidet, vagy vedd fel velünk a kapcsolatot most!</p>
            <div className="md:mt-10 mt-5">
              <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center bg-orange-100 text-white rounded-full py-3 px-6">Időpontfoglalás</a>
              <a href="" className="sl-shadow-sm xs:inline-block block xs:mb-0 mb-4 text-center border border-black-100 rounded-full py-3 px-6 xs:ml-4 opacity-80">Kapcsolat</a></div>
          </div>
        </div>
      </section>

      <footer className="wow fadeInUp bg-black-100 text-orange-20 py-20">
        <div className="sl-container">
          <div className="flex flex-wrap gap-x-24 gap-y-4 lg:pb-20 pb-12">
            <div className="lg:basis-0 w-full lg:flex-grow flex flex-col">
              <a href=""><img src={logoWhite} alt="logo" className="max-w-screen-sm" /></a>
              <span className="">Mozogj könnyedén és fájdalommentesen!</span>
              <button className="w-fit sl-shadow-sm bg-orange-100 text-white rounded-full py-3 px-6 mt-8">Időpontfoglalás</button>
            </div>
            <div className="lg:w-auto w-full flex flex-wrap lg:gap-8 text-sm md:mt-0 mt-6">
              <div className="order-1 lg:w-auto md:w-2/5 w-1/2 flex flex-col">
                <h4 className="text-lg text-orange-40 md:mb-4 pb-5">Menü</h4>
                <a href="" className="py-2">Módszereink</a>
                <a href="" className="py-2">Árak</a>
                <a href="" className="py-2">Kapcsolat</a>
              </div>
              <div className="md:order-2 order-3 lg:w-auto md:w-2/5 w-full flex flex-col xs:text-left text-center">
                <h4 className="text-lg text-orange-40 md:mb-4 pb-5">Elérhetőségek</h4>
                <a href="" className="py-2">+36 30 638 95 90</a>
                <a href="" className="py-2">fiziopont.info@gmail.com</a>
                <a href="" className="py-2">1082 Budapest, Corvin sétány 6A, II. emelet, 226.</a>
                <a href="" className="py-2">Hétfő-Péntek:<br />08:00-20:00</a>
              </div>
              <div className="md:order-3 order-2 lg:w-auto md:w-1/5 w-1/2 flex flex-col">
                <h4 className="lg:text-left text-center text-lg text-orange-40 md:mb-4 pb-5">Kövess Minket</h4>
                <a href="" className="w-8 h-8 my-2 mx-auto">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z" fill="CurrentColor"></path>
                  </svg>
                </a>
                <a href="" className="w-8 h-8 my-2 mx-auto">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
                  </svg>
                </a>
                <a href="" className="w-8 h-8 my-2 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:justify-between md:items-center pt-10 text-sm xs:text-left text-center">
            <p className="md:order-1 order-2 md:mt-0 mt-6">© 2024 FizioPont. All rights reserved.</p>
            <div className="md:order-2 order-1 flex md:flex-row flex-col gap-6">
              <a href="">ÁSZF</a>
              <a href="">Adatvédelmi tájékoztató</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
