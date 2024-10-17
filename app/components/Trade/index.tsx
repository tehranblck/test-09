import Image from "next/image";

const Trade = () => {
  return (
    <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
      <div className="radial-bgone hidden lg:block"></div>
      <section id="testimonies" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                Play Your Favorite Games Anywhere, Anytime!
              </h1>
              <p className="text-xl text-white md:text-center md:text-2xl">
                Experience the top social casino games wherever you are. Our
                platform makes it easy to find highly-rated games so you can
                dive into your favorites and enjoy endless fun anytime,
                anywhere. Browse our reviews and recommendations to effortlessly
                discover and enjoy the best games.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={"/images/Logo/FruityTreats.svg"}
                        alt="FruityTreats"
                        width={120}
                        height={125}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          FruityTreats
                        </h3>
                        <p className="text-white text-md leading-normal">
                          Familiar juicy favourites are marked with multiplier
                          rewards in Fruity Treats.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={"/images/Logo/Zeus.svg"}
                        alt="Zeus"
                        width={71}
                        height={105}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Zeus
                        </h3>
                        <p className="text-white text-md leading-normal">
                          The look and feel of the game are inspired by the
                          world of Greek mythology, giving it a fresh and
                          unusual style which stands out from the crowd
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={"/images/Logo/JaguarGuest.svg"}
                        alt="JaguarGuest"
                        width={80}
                        height={105}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Jaguar Guest
                        </h3>
                        <p className="text-white text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-white text-md">
                      Jaguar Guest is an exhilarating social casino game that
                      transports players into the heart of the jungle for a
                      thrilling gaming experience. This game stands out with its
                      unique jungle-themed graphics and immersive sound effects,
                      making every spin and card flip feel like an adventure.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>

                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={"/images/Logo/Shark'sGang.svg"}
                        alt="Shark'sGang"
                        width={80}
                        height={105}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Shark&apos;sGang
                        </h3>
                      </div>
                    </div>
                    <p className="leading-normal text-white text-md">
                      Shark&apos;sGang is an exciting social casino game that
                      plunges players into the deep sea for a thrilling
                      underwater adventure. This game is renowned for its
                      captivating ocean-themed graphics and engaging gameplay,
                      making each session an immersive experience.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Trade;
