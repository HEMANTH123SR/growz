import { Badge } from "@/components/ui/badge";
import { StartExploring } from "@/components/startexploring"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Home() {

  return (
    <main className="flex flex-col w-full h-full bg-green-600">
      <div className="bg-bottom bg-cover  bg-no-repeat bg-[url('/bg.jpg')] h-[100vh] md:h-[100vh] w-full flex flex-col items-center justify-center  bg-fixed ">
        <h1 className="sm:max-w-5xl font-semibold  text-4xl sm:text-5xl md:text-7xl text-white   my-4 text-center px-2">
          Discover Fresh and Local Produce with Growz
        </h1>
        <StartExploring />
      </div>
      <div className={` w-full bg-white flex flex-col items-center `}>
        {/* landind page text content */}
        <div className="flex flex-col items-center justify-center  my-16 md:my-28 space-y-2 ">
          <h1 className="text-3xl md:text-5xl" id="overview">
            Grow Your Local Business
          </h1>
          <span className="text-center sm:text-lg text-slate-600 px-6">
            Growz offers a comprehensive platform to promote your local business
            at bustling farmers markets. <br className="hidden md:block" />{" "}
            Showcase your fresh produce, baked goods, and artisan crafts to a
            wider audience, <br className="hidden md:block" /> emphasizing the
            importance of supporting local farmers and artisans.
          </span>
          <div className="flex w-full justify-center items-center space-x-5">
            <Badge variant={"outline"}>Local Business</Badge>
            <Badge variant={"outline"}>Farmers Markets</Badge>
            <Badge variant={"outline"}>Artisan Goods</Badge>
          </div>
        </div>
        {/* farmer market events */}
        <div className="w-full flex flex-col items-center  bg-[#F0F0EA] pb-28 ">
          <div className="flex flex-col items-center justify-center mt-16 mb-20 space-y-2">
            <h1 className="text-3xl md:text-5xl" id="market">
              Discover Local Events
            </h1>
            <span className="text-center sm:text-lg text-slate-600 px-6">
              Discover how professionals across various industries have
              leveraged their LinkedIn profiles{" "}
              <br className="hidden md:block" /> to create captivating web
              portfolios with Webpolio. Explore some examples below.
            </span>
            <Badge variant="outline">Upcoming Events</Badge>
          </div>
          <ScrollArea className="flex  justify-center items-center  w-11/12 h-auto ">
            <div className="flex w-full space-x-20">
              {[
                {
                  title: "Diwali Bazaar",
                  description:
                    "Experience the festive spirit of Diwali at our market bazaar! Shop for traditional sweets, diyas, and decorations while enjoying cultural performances.",
                  img: "f-1.jpeg",
                  date: "2024-10-25",
                },
                {
                  title: "Holi Food Festival",
                  description:
                    "Join us for a colorful celebration of Holi! Indulge in a variety of street food delights, thandai, and sweet treats from across India.",
                  img: "f-2.jpeg",
                  date: "2025-03-10",
                },
                {
                  title: "Pongal Harvest Market",
                  description:
                    "Celebrate the harvest season with traditional Pongal dishes, fresh produce, and cultural performances showcasing Tamil Nadu's rich heritage.",
                  img: "f-3.jpeg",
                  date: "2025-01-14",
                },
                {
                  title: "Navratri Garba Night",
                  description:
                    "Get ready to dance the night away at our Navratri Garba event! Dress in your finest attire and join the festive celebrations with music, dance, and dandiya raas.",
                  img: "f-4.jpeg",
                  date: "2025-09-29",
                },
                {
                  title: "Ganesh Chaturthi Market",
                  description:
                    "Welcome Lord Ganesha with our market's special offerings! Explore a variety of eco-friendly idols, modaks, and decorations to celebrate this auspicious festival.",
                  img: "f-5.jpeg",
                  date: "2025-09-02",
                },
                {
                  title: "Onam Sadhya Feast",
                  description:
                    "Experience the flavors of Kerala with our Onam Sadhya feast! Enjoy a sumptuous vegetarian meal served on banana leaves, featuring traditional dishes like avial and payasam.",
                  img: "f-6.jpeg",
                  date: "2025-08-21",
                },
                {
                  title: "Baisakhi Mela",
                  description:
                    "Celebrate the harvest festival of Baisakhi with our market mela! Enjoy live music, folk dances, and delicious Punjabi cuisine, including langar seva.",
                  img: "f-1.jpeg",
                  date: "2025-04-13",
                },
                {
                  title: "Durga Puja Craft Fair",
                  description:
                    "Discover exquisite handicrafts and artworks at our Durga Puja craft fair! Shop for terracotta idols, dokra jewelry, and other traditional Bengali crafts.",
                  img: "f-2.jpeg",
                  date: "2025-10-03",
                },
                {
                  title: "Eid Bazaar",
                  description:
                    "Experience the joy of Eid at our market bazaar! Shop for festive attire, accessories, and delicious sweets to celebrate the end of Ramadan.",
                  img: "f-3.jpeg",
                  date: "2025-04-30",
                },
                {
                  title: "Christmas Market",
                  description:
                    "Get into the holiday spirit at our Christmas market! Explore stalls selling handmade gifts, Christmas decorations, and seasonal treats.",
                  img: "f-4.jpeg",
                  date: "2025-12-20",
                },
              ].map((data) => {
                return (
                  <div
                    key={data.title}
                    className="flex flex-col justify-center items-center space-y-3 w-[300px] h-[450px] cursor-pointer"
                  >
                    <img
                      src={data.img}
                      className="w-full h-[200px] object-cover"
                    />
                    <span className="text-sm font-semibold text-left">
                      {data.title}
                    </span>
                    <span className="text-sm">{data.description}</span>
                    <span className="text-xs">{data.date}</span>
                  </div>
                );
              })}{" "}
            </div>

            <ScrollBar orientation="horizontal" className="bg-white" />
          </ScrollArea>
        </div>
        {/* FAQ */}
        <div className="w-full flex flex-col py-28 px-5 sm:px-16 space-y-14 bg-green-500 text-white">
          <h3 className="text-5xl text-center md:text-start sm:text-6xl md:text-8xl font-semibold ">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full px-5 border">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Growz?</AccordionTrigger>
              <AccordionContent>
                Growz is a platform dedicated to promoting local farmers markets
                and supporting small businesses. We connect communities with
                fresh produce, artisanal goods, and vibrant events, fostering
                sustainable living and community engagement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I find farmers markets near me?
              </AccordionTrigger>
              <AccordionContent>
                Growz provides a comprehensive directory of farmers markets
                across India. Simply enter your location or browse through our
                listings to discover markets in your area, along with details on
                vendors, events, and offerings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Why should I support local farmers markets?
              </AccordionTrigger>
              <AccordionContent>
                By supporting local farmers markets, youre not only gaining
                access to fresh, nutritious produce and unique artisanal
                products but also contributing to the local economy, promoting
                sustainable farming practices, and fostering a sense of
                community.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I become a vendor at a farmers market?
              </AccordionTrigger>
              <AccordionContent>
                If youre a local farmer, artisan, or small business owner
                interested in selling your products at a farmers market, reach
                out to the market organizers or visit their website for
                information on vendor applications, requirements, and available
                opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Are there any upcoming events at local farmers markets?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Growz keeps you updated on upcoming events at farmers
                markets, including seasonal festivals, cooking workshops, live
                music performances, and community outreach programs. Check our
                event calendar for the latest information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I get involved in supporting local farmers markets?
              </AccordionTrigger>
              <AccordionContent>
                There are many ways to get involved, from volunteering at events
                and spreading the word on social media to participating in
                community initiatives and advocating for policies that support
                local agriculture. Join us in making a positive impact on our
                local food systems!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Can I donate to support local farmers markets?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Growz welcomes donations to support our mission of
                promoting local farmers markets and sustaining small businesses.
                Your contributions help us organize events, maintain our
                platform, and advocate for policies that benefit our
                communities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                How do I report an issue or provide feedback?
              </AccordionTrigger>
              <AccordionContent>
                We value your feedback! If you encounter any issues or have
                suggestions for improving Growz, please contact our support team
                or submit feedback through our website. Your input helps us
                continually enhance our platform and better serve our users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Is Growz available on mobile devices?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Growz is fully optimized for mobile devices, allowing you
                to access our platform anytime, anywhere. Whether youre browsing
                for farmers markets on your smartphone or checking event updates
                on your tablet, Growz offers a seamless user experience across
                all devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                How can I stay updated on the latest news and features?
              </AccordionTrigger>
              <AccordionContent>
                Stay connected with Growz by following us on social media and
                subscribing to our newsletter. We regularly share updates, tips,
                and stories about local farmers markets, community events, and
                sustainable living practices, keeping you informed and inspired.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
