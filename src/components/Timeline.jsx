import React from "react";

const Timeline = () => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="flex flex-col space-y-4 items-center justify-center py-14">
      <button
        className="self-center w-1/6 btn btn-accent mb-8"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "View Less" : "View More"}
      </button>

      {showMore ? (
        <div class="pl-10">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <ul>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/2018
                </time>
                <h3 class="text-lg font-semibold">
                  BRT-King Abd Elaziz Road, KSA
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Shop drawings for Landscape
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  12/2018
                </time>
                <h3 class="text-lg font-semibold">Riyadh Metro – ANM phase</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Storm Drain system (section 5 & 6)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2/2019
                </time>
                <h3 class="text-lg font-semibold">Jubail Marin</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Design & shop drawings of mechanical and structure activity
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  6/2019
                </time>
                <h3 class="text-lg font-semibold">Sunset Restaurant</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Design & shop drawing of Architect, structure, MEP, HVAC,
                  DRAIN of main building
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/2019
                </time>
                <h3 class="text-lg font-semibold">
                  KAS - GROWN PRINCE PALACE (M.B.S)
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing of swimming pool, woodendeck, Landscape,
                  Irrigation, Tiles (Marble and Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  4/2019
                </time>
                <h3 class="text-lg font-semibold">Yamama Palace</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing AND Roof Bricks
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  5/2019
                </time>
                <h3 class="text-lg font-semibold">Salam Palace</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Landscape, Irrigation
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  17/11/2019
                </time>
                <h3 class="text-lg font-semibold">
                  Villa Madinty, Madinty, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing of swimming pool, woodendeck, Landscape,
                  Irrigation, Tiles (Marble and Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  11/12/2019
                </time>
                <h3 class="text-lg font-semibold">
                  Villa El Rehab, El Rehab City, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing of pergola, woodendeck, Landscape,
                  Irrigation, Tiles (Marble and Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  25/12/2019
                </time>
                <h3 class="text-lg font-semibold">
                  Kythara Academy, كلية التربية الموسيقية, جامعة حلوان, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Interior Design
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  15/6/2020
                </time>
                <h3 class="text-lg font-semibold">
                  Villa El Riyadh, Riyadh, KSA
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing of swimming pool, Landscape, Irrigation,
                  Tiles (Marble and Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  11/3/2020
                </time>
                <h3 class="text-lg font-semibold">Headquarter, Riyadh, KSA</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Landscape Design
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  14/7/2020
                </time>
                <h3 class="text-lg font-semibold">
                  Villa El Riyadh, Riyadh, KSA
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  21/7/2020
                </time>
                <h3 class="text-lg font-semibold">Drain system network BOQ</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Drain system network BOQ
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  28/7/2020
                </time>
                <h3 class="text-lg font-semibold">MIS PROJECT, Riyadh, KSA</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  4/8/2020
                </time>
                <h3 class="text-lg font-semibold">
                  شركة البدوى للدواجن, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  FIRE SYSTEM
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  5/8/2020
                </time>
                <h3 class="text-lg font-semibold">
                  NEW CAIRO VILLA, New Cairo, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Interior Design
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  5/8/2020
                </time>
                <h3 class="text-lg font-semibold">
                  مبنى نموذج (ج) لوزارة التجارة والصناعة, الموقع العام لفرع
                  تبوك, TAPOUK
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Drain system network
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  12/8/2020
                </time>
                <h3 class="text-lg font-semibold">BANK EL MAINYA</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  BOQ
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  27/8/2020
                </time>
                <h3 class="text-lg font-semibold">
                  NEW CAIRO VILLA, New Cairo, Cairo
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing of pergola, woodendeck, Landscape,
                  Irrigation, Tiles (Marble and Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  29/8/2020
                </time>
                <h3 class="text-lg font-semibold">AL HOSHAN VILLA -RIYADH0</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  24/9/2020
                </time>
                <h3 class="text-lg font-semibold">El Riyadh Palace</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  28/10/2020
                </time>
                <h3 class="text-lg font-semibold">METHOD STATMENT</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  METHOD STATEMENT for crazy stone
                </p>
              </li>
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  16/11/2020
                </time>
                <h3 class="text-lg font-semibold">
                  مشروع انشاء مبنى الهيئة العامة للطيران المدنى
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  22/11/2020
                </time>
                <h3 class="text-lg font-semibold">Plant Nursery</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Design
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  26/11/2020
                </time>
                <h3 class="text-lg font-semibold">جامعة الملك سعود</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  29/11/2020
                </time>
                <h3 class="text-lg font-semibold">
                  DIAR NAJD- ANDALUSIAN PROTOTYPE
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  4/12/2020
                </time>
                <h3 class="text-lg font-semibold">استراحة العامرية</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  External Finishing Landscape, Irrigation, Tiles (Marble and
                  Stone)
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/12/2020
                </time>
                <h3 class="text-lg font-semibold">قصر اكتوبر</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  13/12/2020
                </time>
                <h3 class="text-lg font-semibold">Shopdrawing</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  14/12/2020
                </time>
                <h3 class="text-lg font-semibold">Roof mr yasser</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  3/2/2021
                </time>
                <h3 class="text-lg font-semibold">
                  اصاله البنيان م/ محمد الحاج
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  5/2/2021
                </time>
                <h3 class="text-lg font-semibold">
                  Accommodation for Neom project
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  31/5/2021
                </time>
                <h3 class="text-lg font-semibold">Neom project Term Oasis</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  31/5/2021
                </time>
                <h3 class="text-lg font-semibold">Neom project Sora Oasis</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  31/5/2021
                </time>
                <h3 class="text-lg font-semibold">
                  Neom project Sharam Bay Oasis
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  31/5/2021
                </time>
                <h3 class="text-lg font-semibold">
                  Neom project Usailah Oasis
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  9/2/2021
                </time>
                <h3 class="text-lg font-semibold">Red Sea Project</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  11/2/2021
                </time>
                <h3 class="text-lg font-semibold">شمس الرياض</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  14/2/2021
                </time>
                <h3 class="text-lg font-semibold">Restaurant</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  18/2/2021
                </time>
                <h3 class="text-lg font-semibold">استراحه الرياض</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  23/2/2021
                </time>
                <h3 class="text-lg font-semibold">RH project</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  14/3/2021
                </time>
                <h3 class="text-lg font-semibold">Black Garden MALL</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  Design & PMO
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  15/3/2021
                </time>
                <h3 class="text-lg font-semibold">مستشفي الملك فيصل التخصصي</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  17/3/2021
                </time>
                <h3 class="text-lg font-semibold">Villa</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  23/3/2021
                </time>
                <h3 class="text-lg font-semibold">
                  Info fort warehouse Firefighting system
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500">
                  م/عماد يوسف
                </p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  1/4/2021
                </time>
                <h3 class="text-lg font-semibold">Ain Alabid Amaria</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  2/4/2021
                </time>
                <h3 class="text-lg font-semibold">
                  مبني وزاره الزراعه و المياه
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/4/2021
                </time>
                <h3 class="text-lg font-semibold">
                  PRIVATE VILLA العقيد محمد العمري
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  12/4/2021
                </time>
                <h3 class="text-lg font-semibold">مشروع الربيعه</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  13/4/2021
                </time>
                <h3 class="text-lg font-semibold">GAS STATION</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  15/4/2021
                </time>
                <h3 class="text-lg font-semibold">الجوده</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  18/4/2021
                </time>
                <h3 class="text-lg font-semibold">الديوان</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  27/4/2021
                </time>
                <h3 class="text-lg font-semibold">
                  Modern Villa KSA Interior BOQ
                </h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/5/2021
                </time>
                <h3 class="text-lg font-semibold">Oasis م/ احمد عبدالعظيم</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  1/12/2022
                </time>
                <h3 class="text-lg font-semibold">NEOM Identity</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  21/5/2021
                </time>
                <h3 class="text-lg font-semibold">NEOM Main Gates</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2022
                </time>
                <h3 class="text-lg font-semibold">Wady term</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>

              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  10/2/2023
                </time>
                <h3 class="text-lg font-semibold">KAP 5</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-500"></p>
              </li>
            </ul>
          </ol>
        </div>
      ) : null}
    </div>
  );
};

export default Timeline;
