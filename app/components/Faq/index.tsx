"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: "1. What Are Social Casino Games?",
    subheading:
      "Social casino games are mostly free-to-play games that imitate the gambling experience without offering a real cash payout. These gamers play exclusively with virtual in-app currency",
  },
  {
    heading: "2. Do Social Casino Games Require Real Money?",
    subheading:
      "No, social casino games do not require real money. They are free-to-play and provide virtual currency for in-game activities. Players cannot win real money, making these games purely for fun and entertainment.",
  },
  {
    heading: "3. Why Do People Play Social Casino Games?",
    subheading:
      "People play social casino games for various reasons including entertainment, social interaction, and the thrill of simulated gambling without the financial risk. These games often feature engaging graphics, themes, and the opportunity to connect with friends.",
  },
  {
    heading: "4. How Safe Are Social Casino Games?",
    subheading:
      'Social casino games are generally safe as they do not involve real money transactions. However, players should be mindful of in-app purchases for virtual currency, which can add up if not monitored. It"s important to play responsibly and within personal spending limits.',
  },
  {
    heading: "5. Can I play social casino games on my mobile device?",
    subheading:
      "Absolutely! Most social casino games are available on mobile devices, including smartphones and tablets. They can be downloaded as apps or accessed through a web browser, providing convenient, on-the-go gaming.",
  },
];

const Faq = () => {
  return (
    <div className="my-20 px-6" id="faq-section">
      <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">
        Frequently Asked Questions
      </h3>
      <p className="text-center lg:text-lg font-normal text-bluish">
        These FAQs provide a helpful overview for anyone interested in exploring
        the world of social casino games.
      </p>

      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center my-8">
          <Image
            src={"/images/Faq/faq.svg"}
            alt="faq-image"
            width={941}
            height={379}
          />
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 pt-16">
          {faqdata.map((item, i) => (
            <div
              className="w-full max-w-5xl rounded-2xl bg-blue py-6 px-4 mb-5"
              key={i}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-xl font-medium">
                      <span>{item.heading}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-md text-bluish font-normal opacity-50">
                      {item.subheading}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
