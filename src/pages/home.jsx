import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import MapSection from "@/widgets/cards/mapa";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { MdHotel } from "react-icons/md";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

export function Home() {

  useEffect(() => {
    AOS.init({ duration: 5000, once: true, }); // Inicializa AOS con una duración de 800ms
  }, []);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-hotel-hero filter blur-md bg-cover bg-center" /> {/* bg-hotel-hero */}
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div data-aos="fade-up" data-aos-duration="1500" className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black font-raleway"
              >
                Bienvenido al Hotel Zeus
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 font-raleway">
                Ubicado en el corazón de Merida,
                nuestro hotel combina comodidad moderna con la calidez de una experiencia única.
                Ya sea que estés buscando una escapada romántica o unas vacaciones en familia,
                estamos aquí para hacer de tu estancia algo inolvidable.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32  bg-amarilloveige px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>

          {/* segunda seccion */}

          <div className="mt-36 flex flex-wrap items-center">
            {/* tarjeta de servicios */}
            <div data-aos="fade-right" data-aos-duration="1500" className="mx-auto mt-24 flex gap-10 w-full justify-center px-4 md:w-4/12 lg:mt-0">


              <Card className="shadow-lg border ">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/hotel-zeus-restaurante.png"
                    className="h-full w-full border-[1px] border-solid border-gray-400 rounded"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Restaurant</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Restaurant - Café
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Una acogedora cafetería que combina un ambiente cálido y moderno,
                    ideal para disfrutar de café de especialidad, postres y momentos únicos.
                  </Typography>
                </CardBody>
              </Card>
            </div>
            <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500" className="mx-auto -mt-8 w-full px-4 md:w-5/12 text-center mt-10 md:mt-0">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[10px] bg-white p-2 text-center shadow-lg">
                <HomeModernIcon className="h-8 w-8 text-naranja " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold font-raleway"
                color="white"
              >
                Hotel Living el placer
              </Typography>
              <Typography className="mb-8 font-raleway font-normal text-white">
                Descubre la experiencia única que ofrece el Hotel Zeus,
                donde la elegancia se encuentra con la comodidad. Situado en el centro de la ciudad de Mérida,
                nuestro hotel es el destino perfecto para viajeros de negocios y turistas
                que buscan disfrutar de lo mejor que la ciudad tiene para ofrecer.

              </Typography>
              <Button variant="" className="bg-naranja">Saber mas</Button>
            </div>

          </div>
        </div>
      </section>
      <div className="h-auto py-10 px-7 w-full bg-negroclaro grid xl:grid-cols-3 xl:gap-2 md:grid-cols-2 gap-8">

        <div data-aos="zoom" data-aos-delay="300" data-aos-duration="1500" className="h-auto m-auto ">

          <PageTitle

            section="Rooms"
            heading="Habitaciones"
            className="font-raleway"
            icono={<MdHotel className="text-amarilloveige text-4xl" />}
          >
            
          </PageTitle>
        </div>


        <div data-aos="zoom" data-aos-delay="600" data-aos-duration="1500" className="h-auto m-auto ">

          <PageTitle
            section="Pool"
            heading="Piscina"
            className="font-raleway"
            icono={<MdOutlinePool className="text-amarilloveige text-4xl" />}
          >

          </PageTitle>
        </div>

        <div data-aos="zoom" data-aos-delay="900" data-aos-duration="1500" className="h-auto m-auto ">


          <PageTitle
            section="Restaurant"
            heading="Restaurante"
            className="font-raleway"
            icono={<FaRankingStar className="text-amarilloveige text-4xl" />}
          >

          </PageTitle>
        </div>



      </div>
      <section className="px-4 pt-20 pb-48 bg-[#f2c89b]">
        <div className="container mx-auto">


          {/* tarjeta de habitaciones */}
          <div data-aos="fade-left" data-aos-duration="1500" className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2">
            {teamData.map(({ img, name, position, socials, texto }) => (
              <TeamCard
                key={name}
                img={img}
                name={name.toUpperCase()}
                position={position}
                className=" "

              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-negroclaro">
        <div className="">
          {/* <PageTitle
            section=""
            heading="Living hotel ubicado en"
            className="bg-black"
            background={'bg-amarilloveige'}>

          </PageTitle> */}
          <div className="">
            <MapSection />
          </div>


        </div>
      </section>
      <div className="w-full h-[50px] bg-[#f2c89b]"></div>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
