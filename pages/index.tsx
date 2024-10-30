import DefaultLayout from "@/layouts/default";
import { ObjectDto } from "@/packages/core/dtos/object.dto";
import ButtonComponent from "@/packages/design-system/components/button.component";
import CardComponent from "@/packages/design-system/components/card";
import { httpClient } from "@/utils/http";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    placeId: "ChIJd1Gu7PgX6zkR2Km95gqN3Tk",
    address: "",
    category: "Restaurant",
    googleUrl:
      "https://www.google.com/maps/place/Jheer+Sekuwa,+Imadol/data=!4m7!3m6!1s0x39eb17f8ecae5177:0x39dd8d0ae6bda9d8!8m2!3d27.6538593!4d85.3513432!16s%2Fg%2F11sb08q8ff!19sChIJd1Gu7PgX6zkR2Km95gqN3Tk?authuser=0&hl=en&rclk=1",
    storeName: "Jheer Sekuwa, Imadol",
    ratingText: "3.7 stars 210 Reviews",
    stars: 3.7,
    numberOfReviews: 210,
    reviews: [],
  },
  {
    placeId: "ChIJr3ofVf0Z6zkRPmRrci4iwUU",
    address: "F072",
    category: "Asian",
    googleUrl:
      "https://www.google.com/maps/place/Solmari+Restro+%26+Meetings/data=!4m7!3m6!1s0x39eb19fd551f7aaf:0x45c1222e726b643e!8m2!3d27.6640233!4d85.3377316!16s%2Fg%2F11r8mv3nmd!19sChIJr3ofVf0Z6zkRPmRrci4iwUU?authuser=0&hl=en&rclk=1",
    storeName: "Solmari Restro & Meetings",
    ratingText: "4.3 stars 49 Reviews",
    stars: 4.3,
    numberOfReviews: 49,
    reviews: [
      {
        reviewText:
          "Seems like a veg fried rice rather than full veg briyani....no gravy at the bottom",
      },
      {
        reviewText:
          "Great place in Imadol with tasty food and serene ambiance. Solmari organised a birthday event for us and their hospitality was amazing. Place is kid friendly.",
      },
      {
        reviewText:
          "Good place to enjoy your food and spend some quality time. The live music makes the atmosphere lively and enjoyable.",
      },
      {
        reviewText:
          "This place is very good for hangout 🙂 and food is very delicious 🤤 everyone should must visit. …",
      },
      {
        reviewText:
          "Very good place but they need to review their prices.. you cannot charge same rate as thamel.\nCleanliness 9/10 …",
      },
      {
        reviewText:
          "Service was great, the waiters were really polite and the food was delicious",
      },
      {
        reviewText:
          "Solmari is best place. Solmari restro is best for food and seeting.It's a family type restorent.",
      },
      {
        reviewText:
          "Price is reasonable, food is fantastic, momos are one of the best in gwarko, sushi is a must try over there, great hospitality and good ambience, must visit if you are in gwarko",
      },
      {
        reviewText:
          "The restaurant in Imadol with the best test and the reasonable price. No wheel chair access and space for kids but is good for get together and meeting. Live music on every Friday. Bar available, Hospitality 4/5. Service 4/5.",
      },
      {
        reviewText:
          "Had one of the best experiences here. Momo is a must tryyyy. The sushi here is veryy authenthic. Energy you get here is veryy positivee.",
      },
      { reviewText: "Best place to spend time with my friends ❤️" },
      { reviewText: "good food excellent hospitality" },
      {
        reviewText:
          "End up with food poison. The food is not tasty at all. And expensive.",
      },
      {
        reviewText:
          "Good ambience with delicious food. Place good for gatherings, events and occasions.",
      },
      { reviewText: "Just loved it" },
      { reviewText: "Good place for hangout at Imadole area" },
      {
        reviewText:
          "Worst service ever\nThey made us wait for 2hrs for grilled basa fish & later told us grill fish is unavailable",
      },
      { reviewText: "Nice food with good ambience." },
      { reviewText: "Great place to hang out.." },
      { reviewText: "Very good" },
      { reviewText: "Great experience with love" },
      { reviewText: "Great taste" },
      { reviewText: "Nice restaurant" },
    ],
  },
  {
    placeId: "ChIJDwmRAnEZ6zkRZphlfAQhfBM",
    address: "F072",
    category: "Restaurant",
    googleUrl:
      "https://www.google.com/maps/place/Paleti+Sekuwa+Hub+and+Restro/data=!4m7!3m6!1s0x39eb19710291090f:0x137c21047c659866!8m2!3d27.6639948!4d85.3383304!16s%2Fg%2F11nlgdwycf!19sChIJDwmRAnEZ6zkRZphlfAQhfBM?authuser=0&hl=en&rclk=1",
    storeName: "Paleti Sekuwa Hub and Restro",
    ratingText: "3.8 stars 59 Reviews",
    stars: 3.8,
    numberOfReviews: 59,
    reviews: [
      {
        reviewText:
          "Very bad experience with pork sekuwa specially. Meat quality was not good, all with bone mixed and even not properly cooked. Too much Salty momos as well",
      },
      {
        reviewText:
          "Its speciality is sekwa it is good place for family lunch and dinner   and its also have its on parking it is famous for tasty 🍲food …",
      },
      { reviewText: "Worst place... worse service..high price.." },
      { reviewText: "Owner is friendly, trying to create  new environment" },
      {
        reviewText:
          "It was very delicious food specially momo and the price is also very cheap. I really like this restorant.",
      },
      {
        reviewText:
          "We orderd black tea af first  which was worst we didnt even finished all then we we orderd thukpa cause its cold it was amazing ..  cause\nwe  loved thukpa we  decided order fried rice 😘😘 it tasted so good to us fell …",
      },
      {
        reviewText:
          "The food was delicious. Parking is enough for bikes. Overall a good experience.",
      },
      {
        reviewText:
          "SMALL PARKING FOR  A MEDIUM RESTAURANT .... NEXT TO  IMADOL MAIN ROAD... LOVE ..YUMMY ...FOOD... WHENEVER I VISIT HERE ....",
      },
      {
        reviewText:
          "If you around kathmandu and want some best pork sekuwa then this place is ready to serve you best sekuwa",
      },
      {
        reviewText:
          "Nice place to hang out!!!\nThough seems to be a bit expensive ( sekuwa) than reet of others!!",
      },
      {
        reviewText: "Amazing place, friendly environment and fabulous food.",
      },
      {
        reviewText:
          "I ordered coffee but they gave me milk with lots of sugar syrup and a pinch of coffee.",
      },
      { reviewText: "wow wow wow best paleti blessed #wowdevqa" },
      { reviewText: "Quick service and good food." },
      { reviewText: "Best sekuwa in town. Must try." },
      { reviewText: "Reasonable priced and tasty food" },
      { reviewText: "Nice place and Nice food" },
      { reviewText: "Don't waste yr money here worthless" },
      { reviewText: "Great food and service" },
      { reviewText: "Not satisfied with the food" },
      { reviewText: "Really a best place" },
      { reviewText: "Good" },
      { reviewText: "Good service" },
      { reviewText: "Friendly staffs" },
      { reviewText: "Borne appetite" },
      { reviewText: "From me achar is amazing.. sekuwa is good." },
      { reviewText: "I wanted my friends but my mother was tired." },
      { reviewText: "Seku waaaaah" },
    ],
  },
  {
    placeId: "ChIJWRD5x44X6zkRh8HuiKGIqJA",
    address: "Imadol-04",
    category: "Restaurant",
    googleUrl:
      "https://www.google.com/maps/place/Suiko+kitchen/data=!4m7!3m6!1s0x39eb178ec7f91059:0x90a888a188eec187!8m2!3d27.6560155!4d85.3461175!16s%2Fg%2F11pdrsstws!19sChIJWRD5x44X6zkRh8HuiKGIqJA?authuser=0&hl=en&rclk=1",
    storeName: "Suiko kitchen",
    ratingText: "4.6 stars 30 Reviews",
    stars: 4.6,
    numberOfReviews: 30,
    reviews: [
      {
        reviewText:
          "Very bad quality of food  || is it chilly momo??\nNeed to maintain food  quality",
      },
      { reviewText: "I got here all in one taste of foods😋😋🥰🥰 …" },
      {
        reviewText:
          "Best place to enjoy sekuwa. Must come and try here once. I insure u all u won't regret it. Loved it 😍 …",
      },
      {
        reviewText:
          "I found this cafe very nice you can come to chill with friends and families . The best of it is pork sekuwa . Please do visit . 😊 …",
      },
      {
        reviewText:
          "I love this cafe. The best part of this cafe is pork sekuwa . Please do visit once. 🙏 …",
      },
      {
        reviewText:
          "tremendous place ....just loved to have fun ...thanks guys. . im ur regular customer now onwards ..u guys are yummy 🙂 …",
      },
      {
        reviewText:
          "I found it very nice . The best part of it is tongbaa and pork sekuwa .😊 …",
      },
      {
        reviewText:
          "I like this cafe . The dishes here is so delicious and outstanding 😘😘🥰 …",
      },
      {
        reviewText:
          "Best place positive vibes with best sekuwa with excellent hospitality loved it ❤️🙏 …",
      },
      { reviewText: "Tasty food at reasonable price" },
      {
        reviewText:
          "Wonderful experience with one of the best hospitality in k-town.",
      },
      {
        reviewText: "Wow 😊😊😊 reasonable price & good food 😊😊good mood …",
      },
      {
        reviewText:
          "THE BEST PART OF THIS CAFE IS PORK SEKUWA .\nPORK IS 💗💜\nPLEASE DO VISIT 🤗💕 …",
      },
      { reviewText: "Such a peaceful and delicious food" },
      { reviewText: "Sekuwa one of Best & delicious" },
      { reviewText: "Favourite pork Sekuwa❤️" },
      { reviewText: "Favorite chicken sekuwa❤❤" },
      { reviewText: "Food was fine." },
      { reviewText: "Great sekuwa" },
    ],
  },
  {
    placeId: "ChIJXVW1cUMZ6zkRXWBwQm8wy7c",
    address: "Ratamakai chowk (inside ratamakai gate",
    category: "Restaurant",
    googleUrl:
      "https://www.google.com/maps/place/Michael+Grills+Imadol/data=!4m7!3m6!1s0x39eb194371b5555d:0xb7cb306f4270605d!8m2!3d27.663308!4d85.3401841!16s%2Fg%2F11td0z3v3_!19sChIJXVW1cUMZ6zkRXWBwQm8wy7c?authuser=0&hl=en&rclk=1",
    storeName: "Michael Grills Imadol",
    ratingText: "4.2 stars 172 Reviews",
    stars: 4.2,
    numberOfReviews: 172,
    reviews: [
      {
        reviewText:
          "This restaurant is near Gwarko Chowk, towards Imadol.\nThey offer variety of food, most of them are pretty delicious.\nThey had live music when I visited on Saturday evening. …",
      },
      {
        reviewText:
          "I went to Micheal Grills for a birthday celebration. We ordered both veg and non veg items which were equally good. The best was the strawberry frappe drink, titaura cocktail could have been better and as for the menu, I think they should  update both the food and drink  section.",
      },
      {
        reviewText:
          "This restaurant is located inside ratamakai chowk .. most try pork and chicken sekuwa .. service was fantastic and you will never get this type of environment inside the imadole area.. visit once ..babal cha hai ..",
      },
      {
        reviewText:
          "The security guard was amazing.\nAmbience - top notch\nService ; forgot our order , late served food , have to request multiple times …",
      },
      {
        reviewText:
          "A warm welcome by security guard was really amazing. The amazing interior, best atmosphere, and wonderful sitting area. …",
      },
      {
        reviewText:
          "What can I say about MG! Amazing atmosphere, staff are fantastic and the food is just beautiful. Highly reccomend.",
      },
      {
        reviewText: "Service is wonderful and Food is good atmosphere is fine",
      },
      {
        reviewText:
          "Recently visited with my family. Such a wonderful vibe. Would recommend this place.",
      },
      {
        reviewText:
          "Best food , nice ambience with friendly service environment .",
      },
      {
        reviewText:
          "The place/ambience is good. They offer both indoor and outdoor seating. The hygiene is also well maintained. The food tastes good but you'll have to wait a while to get it served. There's a free parking for 2wheelers and 4 Wheelers. The staff are helpful too.",
      },
      {
        reviewText:
          "It was a really chill place with naice ambiance, and the sekwa set was really good to",
      },
      {
        reviewText:
          "Great place to eat around imadole are\n\nAlso best sekwa in nepal 🤩🤩 …",
      },
      {
        reviewText: "Best place to taste delicious food in a calm environment.",
      },
      {
        reviewText:
          "I really like the ambience of this place. It's more spacious and better looking than other branches. Food is good with new keema Noodles on the menu, which is unexpectedly good. Sekuwa is delicious as these are their main dishes. Most of the Saturdays, there is live music going on. I would surely recommend this place.",
      },
      { reviewText: "Awesome food  and service must try sekuwa" },
      {
        reviewText:
          "Michel Grills  Where Ambiance Flavor  and Service Meet Perfection\n\nTheir Sekuwa is a taste sensation, perfectly grilled and bursting with flavor. …",
      },
      {
        reviewText:
          "Best food with familiar environment with perfect ambience…. 👌👌 …",
      },
      {
        reviewText:
          "Yeah the food’s good but one of the male servers has an absolutely baffling attitude. Been there a few times, and two things that I’ve found consistent were the food (good stuff) and the garbage service due from one of the male attendants. …",
      },
      {
        reviewText:
          "Ambience, no. Doubt the best.... One suggestion straight away, i would like to point out, we as customers order the food and we want it to be served to the earliest time possible and we do. Understand if sometimes it takes time but …",
      },
      { reviewText: "Best hospitality service with wonderful food😘😘😘 …" },
      {
        reviewText:
          "My visit last week was very disappointing. U guys need to up ur game coz I have visited several other sekuwa establishments like jheer sekuwa and they are way up there. And the momo I had the dough was thick although jhol was okay. Need to work on it guys",
      },
      {
        reviewText:
          "I visited here for short time on my friend’s birthday. I like the ambience and food very much. Will visit again for more experience.",
      },
      {
        reviewText:
          "Yaha ko khana haru best xa specially sekuwa one of the best I recommended to all people please visit there.\nambns environment was good service was too good special Rajesh magar thanks to him for Serving Authentic taste food.",
      },
      {
        reviewText:
          "Inside Ratamakai gate , a newly opened restaurant with good indoor and outdoor seating for families and grouping with delicious cousins in affordable price.\nMotton sekuwa is really mouth watering",
      },
      { reviewText: "The best place to have pork sekuwa in Imadole" },
      { reviewText: "Tasty food with a peaceful environment 😋 …" },
      {
        reviewText: "Awesome sekuwa\nWill not disappoint you it is must try …",
      },
      {
        reviewText:
          "Went with my family had a great time, employees were very polite, the food was great specially the seweka it was amazing, they did have more customers than expected on the opening day so some ingredients did run out, over all great will most likely go there again, you should try it too.",
      },
      { reviewText: "Nice interior but food 👎️ …" },
      {
        reviewText:
          "Everything thing was great but that one waiter was rude and had an attitude.",
      },
      {
        reviewText:
          "Taste was not as expected but the quantity of food is appropriate for the price offered. Simple but good atmosphere and good service.",
      },
      {
        reviewText:
          "The quantity of the food is very good to that price but the quality is just ok. Had to wait for an hour for my take out order.",
      },
      { reviewText: "Best food and good service" },
      { reviewText: "Very good place with better environment" },
      { reviewText: "Tasty food and good ambience" },
      {
        reviewText:
          "Located in Imadole,Micheal grills has been recently Started.With enough space and good ambience,it can be a nice choice to go and have meal with friends and family 👍👍 …",
      },
      { reviewText: "Good food and good music" },
      { reviewText: "Awesome food and service" },
      {
        reviewText:
          "I had a good time there along with the best service from server. And thank for my watch 🙏😊 …",
      },
      { reviewText: "Best Sekuwa in town 😊 …" },
      { reviewText: "Best place to chill out ." },
      { reviewText: "Good food" },
      { reviewText: "Good food good service definatily recommend" },
      { reviewText: "Good sekuwa, great ambience, good service." },
      {
        reviewText:
          "Mass gathering lai best thau.. everything is delicious asthetic cha",
      },
      {
        reviewText: "Roshan ranamagar\nService place and food was too good…",
      },
      { reviewText: "Best momo in town , nice food overall" },
      {
        reviewText: "Best restaurant in town and best restaurant in imadol.",
      },
      {
        reviewText:
          "Roshan ranamagar\nGood place to chillout and service is A-one…",
      },
      { reviewText: "All good❤️" },
      { reviewText: "best food Sadeko MOMO" },
      { reviewText: "Wonderful experience" },
      { reviewText: "Peace full and amazing weather view point." },
      { reviewText: "Good place with lively environment" },
      { reviewText: "bad food ever i taste" },
      { reviewText: "Food here is amazing" },
      { reviewText: "Good vibes" },
      { reviewText: "Tasty but too expensive!!!" },
      { reviewText: "Lovely place for food" },
      { reviewText: "Good 👍🏿!!!! …" },
      { reviewText: "0 star" },
      { reviewText: "Mytho mytho 🥗 …" },
      { reviewText: "Pork Sekuwa 😋😋 …" },
    ],
  },
];

export default function IndexPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [analyzedData, setAnalyzedData] = useState<any>({});
  const analyzeData = async (data: any) => {
    console.log({ data });
    try {
      const analyzedData = await httpClient.POST(
        "/review/analyze-review",
        JSON.parse(data)
      );
      console.log({ analyzedData });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <div className="flex flex-wrap gap-3">
          {data.map((item: ObjectDto, index: number) => {
            console.log({ item });
            return (
              <div
                className="border shadow hover:shadow-lg w-fit  p-2 px-4 rounded-lg"
                key={index}
              >
                <p className="font-bold">{item.storeName}</p>
                <div className="flex text-sm gap-1">
                  <span className="flex gap-1">
                    <Image
                      src={"./star.svg"}
                      height={16}
                      width={16}
                      alt="star-icon"
                    />
                    <p>{item.stars}</p>
                  </span>
                  {"|"}
                  <p>{item.category}</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link
                    className="bg-green-300 font-semibold text-xs rounded-lg p-1 px-2"
                    href={item.googleUrl}
                  >
                    See Location
                  </Link>
                  <button
                    className="bg-blue-300 font-semibold text-xs rounded-lg p-1 px-2"
                    onClick={() => analyzeData(data.reviews)}
                  >
                    Analyze Reviews
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}
