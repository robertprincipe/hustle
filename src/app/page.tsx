/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  PiCircleFill,
  PiPaperPlaneTiltDuotone,
  PiPlayDuotone,
  PiRobotDuotone,
  PiUsersThreeDuotone,
} from "react-icons/pi";

import { TbArrowWaveRightDown } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <section className="bg-teal-500 text-white px-4 md:px-8 2xl:p-0">
        <div className="max-w-4xl mx-auto text-center py-24">
          <div className={""}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 tracking-tight font-rethink">
              Esto solo es el comienzo de algo grandioso registrate y empieza a
              ganar.
            </h1>
            <p className="text-lg">
              Vende tu productos por internet de forma facíl y sin comiciones
              directo a tu bolsillo.
            </p>
          </div>
          <div className="flex gap-2 justify-center my-6">
            <a
              className="px-4 py-3 rounded-2xl bg-white border border-neutral-300 text-neutral-800 font-bold"
              href="/demo"
            >
              Ver una demostración
            </a>
            <a
              className="px-4 py-3 gap-1 flex items-center rounded-2xl bg-teal-500 font-bold border border-white"
              href="/sign-up"
            >
              <PiPlayDuotone className="text-xl" />
              <span>Empezar ahora</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* stars with html */}
            <div className="flex items-center gap-1">
              <PiUsersThreeDuotone className="text-4xl text-teal-500" />
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span>Muchos ya están confiando en nosotros solo faltas tú.</span>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-16 px-4 md:px-8 2xl:p-0">
        <h4 className="text-center text-lg font-medium">
          Ya somos 500 personas recibiendo su dinero directo a su cuenta, que
          estas esperando sin comisiones ocultas y gratis 😉.
        </h4>
        <div className="relative flex overflow-x-hidden gap-x-16">
          <div className="py-12 animate-marquee whitespace-nowrap flex gap-x-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="alt"
              className="w-16 object-contain"
            />
            <img
              src="https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="alt"
              className="w-16 object-contain"
            />
            <img
              src="https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
              alt=""
              className="w-16 object-contain"
            />
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex gap-x-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="alt"
              className="w-16 object-contain"
            />
            <img
              src="https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="alt"
              className="w-16 object-contain"
            />
            <img
              src="https://seeklogo.com/images/Y/yape-app-logo-1FD46D1120-seeklogo.com.png"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
              alt=""
              className="w-16 object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg"
              alt=""
              className="w-16 object-contain"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-8 2xl:p-0">
        <h2 className="text-6xl font-extrabold text-center my-6">
          Que ofrecemos
        </h2>
        <Tabs
          defaultValue="shop"
          className="bg-neutral-100 p-2 md:p-6 rounded-3xl"
        >
          <TabsList className="flex w-fit rounded-full h-fit bg-teal-500 text-teal-900 max-w-3xl mx-auto">
            <TabsTrigger
              className="text-lg md:text-2xl py-3 font-bold rounded-full"
              value="shop"
            >
              Tienda
            </TabsTrigger>
            <TabsTrigger
              className="text-lg md:text-2xl py-3 font-bold rounded-full"
              value="payment"
            >
              Pagos
            </TabsTrigger>
            <TabsTrigger
              className="text-lg md:text-2xl py-3 font-bold rounded-full"
              value="links"
            >
              Enlaces de pagos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="shop">
            <div className="grid md:grid-cols-2 gap-3 p-4 md:p-7">
              <div>
                <h4 className="text-5xl font-bold">
                  Never miss a deadline again
                </h4>
                <p className="text-xl my-6">
                  Centralize all your contracts on a secure platform and improve
                  your follow-up with our automatic reminders.
                </p>
                <ul className="text-lg space-y-2 mb-3">
                  <li className="flex items-center gap-1 font-semibold">
                    <PiCircleFill className="text-xl text-teal-500" />
                    Automated renewal tracking and reminders
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <PiCircleFill className="text-xl text-teal-500" />
                    Powerful filters and search to access information quickly
                  </li>
                  <li className="flex items-center gap-1 font-semibold">
                    <PiCircleFill className="text-xl text-teal-500" />
                    Folder structure to stay organized
                  </li>
                </ul>
                <button
                  className="text-lg px-4 py-2 bg-teal-500 rounded-full font-semibold"
                  type="button"
                >
                  Find out more on the repository
                </button>
              </div>
              <div>
                <img
                  src="https://assets-global.website-files.com/5e9dabb9b99e41d097926a30/656dbec30f6eba5989e8d46a_Visual-Tracking-EN-Hero.png"
                  alt=""
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, youll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="links">as</TabsContent>
        </Tabs>
      </section>
      <section className="max-w-7xl mx-auto my-16 px-4 md:px-8 2xl:p-0">
        <div className="text-center py-12">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Aprende con nosotros
          </h2>
          <p className="text-xl font-semibold text-neutral-700">
            En nuestro blog y tiktok podrás aprender a sacarle el potencial a
            nuestra plataforma.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <article className="relative w-fit object-cover rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white bg-neutral-700/60">
              <h3 className="text-3xl font-bold">Como vender más con Hustle</h3>
              <div className="space-y-3">
                <p className="text-xl">Los secetros que no quieren que sepas</p>
                <a
                  className="px-4 py-2 gap-1 flex items-center rounded-2xl bg-teal-500 font-bold w-fit"
                  href="/blog"
                >
                  Ver más
                </a>
              </div>
            </div>
          </article>
          <article className="relative w-fit object-cover rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white bg-neutral-700/60">
              <h3 className="text-3xl font-bold">Como vender más con Hustle</h3>
              <div className="space-y-3">
                <p className="text-xl">Los secetros que no quieren que sepas</p>
                <a
                  className="px-4 py-2 gap-1 flex items-center rounded-2xl bg-teal-500 font-bold w-fit"
                  href="/blog"
                >
                  Ver más
                </a>
              </div>
            </div>
          </article>
          <article className="relative w-fit object-cover rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white bg-neutral-700/60">
              <h3 className="text-3xl font-bold">Como vender más con Hustle</h3>
              <div className="space-y-3">
                <p className="text-xl">Los secetros que no quieren que sepas</p>
                <a
                  className="px-4 py-2 gap-1 flex items-center rounded-2xl bg-teal-500 font-bold w-fit"
                  href="/blog"
                >
                  Ver más
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto my-32 px-4 md:px-8 2xl:p-0">
        <div className="text-center">
          <p className="text-xl font-bold">No es sufiente para ti ?</p>
          <h2 className="text-3xl md:text-5xl font-extrabold max-w-3xl mx-auto">
            Registrate y solicita una prueba de nuestro plan{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500  bg-clip-text text-transparent">
              {" "}
              PRO
            </span>
          </h2>
        </div>
        <div>
          <p className="text-xl md:text-3xl font-semibold text-neutral-700 text-center my-5">
            Accede a un chatbot para que te ayude a vender más.
          </p>
          <div className="max-w-3xl mx-auto space-y-3 flex flex-col font-rethink">
            <div className="flex items-center gap-1 text-white bg-teal-500 w-fit px-3 py-2 rounded-2xl">
              <PiRobotDuotone className="text-5xl" />
              <span className="text-lg md:text-2xl font-semibold">
                Hola aqui tienes tus pedidos.
              </span>
            </div>
            <div className="clear-left">
              <div className="inline-flex items-center gap-1 bg-white border border-gray-300 w-fit px-3 py-2 rounded-2xl float-end">
                <span className="text-lg md:text-2xl font-semibold">
                  Quiero un Ventifan
                </span>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 text-white bg-teal-500 w-fit px-3 py-2 rounded-2xl">
              <PiRobotDuotone className="text-5xl" />
              <span className="text-lg md:text-2xl font-semibold">
                Compra confirmada gracias.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <p className="text-3xl font-semibold text-neutral-700 text-center my-5">
            Confirmación automatica de pedidos con pasarela de pago.
          </p>
          <div className="flex flex-col md:flex-row gap-5 mx-auto w-fit items-center">
            {/* <div className="bg-[#5F0B72] text-white px-4 py-2 font-bold">
              Ricibir yape.
            </div> */}
            <div className="inline-flex flex-col w-full md:w-[400px] space-y-3 p-3 border border-neutral-300 rounded-2xl">
              <h3 className="text-xl font-bold">Ingresa tu datos</h3>
              <div>
                <span className="font-semibold">
                  Nombre completo<span className="text-red-500">*</span>
                </span>
                <div className="border border-neutral-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                  John Doe
                </div>
              </div>
              <div>
                <span className="font-semibold">
                  Dirección<span className="text-red-500">*</span>
                </span>
                <div className="border border-neutral-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                  Lima - Las Lomas
                </div>
              </div>
              <div>
                <span className="font-semibold">Referencia</span>
                <div className="border border-neutral-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                  Frente a la Iglesia.
                </div>
              </div>
              <div className="bg-black text-center font-bold text-lg text-white rounded-2xl py-2">
                Continuar
              </div>
            </div>
            <div>
              <div>
                <TbArrowWaveRightDown className="text-7xl" />
              </div>
            </div>
            <div className="w-fit space-y-3 p-3 border border-neutral-300 rounded-2xl">
              <div className="flex justify-between">
                <h4 className="text-xl font-bold">Paga con Yape</h4>
                <PiPaperPlaneTiltDuotone className="text-3xl rotate-180" />
              </div>
              <div>
                <span className="font-semibold">Número de yape</span>
                <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                  910 675 721
                </div>
              </div>
              <div>
                <span className="font-semibold">Codigo de aprobación</span>
                <div className="flex gap-2">
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    3
                  </div>
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    6
                  </div>
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    5
                  </div>
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    4
                  </div>
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    9
                  </div>
                  <div className="border border-green-300 rounded-2xl px-4 py-2 text-lg font-semibold">
                    0
                  </div>
                </div>
              </div>
              {/* button pay */}
              <div className="bg-[#5F0B72] text-center font-bold text-lg text-white rounded-2xl py-2">
                Pagar
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl text-center my-16 px-4 md:px-8 2xl:p-0">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-10">
          READY TO TAKE CONTROL OF YOUR CONTRACT MANAGEMENT?
        </h2>

        <a
          href="/"
          className="font-bold px-4 py-2 bg-teal-500 text-white rounded-2xl text-2xl"
        >
          Talk with an expert
        </a>
      </section>
    </>
  );
}
