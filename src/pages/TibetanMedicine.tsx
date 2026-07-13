import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/* 🔹 IMPORT IMAGES */
import tppmain from "@/assets/TPPmain.png";
import tpp1 from "@/assets/TPP1.png";
import tpp2 from "@/assets/TPP2.png";
import tpp3 from "@/assets/TPP3.png";
import tpp4 from "@/assets/TPP4.png";
import tpp5 from "@/assets/TPP5.png";
import tpp6 from "@/assets/TPP6.png";
import tpp7 from "@/assets/TPP7.png";
import tpp8 from "@/assets/TPP8.png";


const sections = [
  {
    title: "1. Rinchen Drangjor Rilnag Chenmo",
    img: tpp1,
    content: `Rinchen Drangjor the precious black pill of cold compound contains 140 ingredients primarily of the great “Tsothel”, king of the essence, which was competently prepared through a series of detoxifying processes. It also contains calcinated powder of precious stones and metals like gold, silver, copper, iron, sapphire, diamond, emerald, turquoise etc, as well as herbal and non-herbal ingredients like saffron, nutmeg, Indian pokeberry, chebulic myrobalan etc. This is a highly standard compound which is based on practical instructions of the past eminent masters of Tibetan medicine and is enriched by spiritual blessing. Thus making it the king of all precious pills.


Indications:
This precious pill is generally administered against all disorders arising out of an imbalanced state of three Nyepa(principal energies-rlung(loong), Tripa and Badkan). It is particularly used against stomach problems, excess formation of blood in the liver, abdominal cramp due to Muk-po (chronic gastro-intestinal disorder), burning sensation.
in chest and stomach, bloody diarrhea or vomiting of rancid blood like sooty water, bloody stool, weak circulation due to heart disorder, water retention, arthritis, skin disorders, chronic wound, food poisoning, compounded poisoning and disorders associated with other poisoning, leprosy, malignant tumor, diphtheria, inflammation of muscle and acute contagious disorder etc. When taken by a healthy person, it enhances complexion, clears sense organs, is a rejuvenator, acts as an aphrodisiac, strengthens nerves and bones and is a prophylactic.`
  },
  {
    title: "2. Rinchen Ratna Samphel",
    img: tpp2,
    content: `Rinchen Ratna Samphel or Mutik 70, the precious wish flourishing pill contains precious “Tsothel” , king of the essence, which was competently prepared through a series of standard detoxifying processes, calcinated powder of precious stones like pearl, turquoise, coral, Zi (precious eye stone) and metals like gold, silver, copper, iron etc, as well as other herbal and non-herbal medicinal ingredients like six superlative medicines, three myrobalan fruits, bonnet bellflower and saffron etc. This is a compound of high standard containing 70 different ingredients which is based on practical instructions of the past eminent masters of Tibetan medicine and is enriched by spiritual blessing.

Indications:
This precious pill is used against high blood pressure due to confrontation of blood and rlung(loong) disorder, headache, nausea, fainting due to stroke, hemiplegia, inability to stretch and bend limbs, facial palsy, impaired speech, incontinence, loss of memory, insanity, brain concussion, irregular circulation in the brain, heart disorder due to high blood pressure, disorder of the white blood cells, nerve disorders, rlung(loong) disorder of the heart and life channel, epileptic fit, poisoning, leprosy, water retention due to occlusion of blood and heart disorder. When taken by a healthy person, it helps to develop complexion, clears sensory organs, rejuvenates, increases virility and can prevent all disorders mentioned above.

`
  },
  {
    title: "3. Rinchen Mangjor Chenmo",
    img: tpp3,
    content: `Rinchen Mangjor Chenmo, the great precious multiple compound contains 50 different medicinal ingredients like the precious “Tsothel”, king of the essence, which was competently prepared through a series of standard detoxifying processes, moon light iron compound, saffron, three myrobalan fruits, Khungder Karmuk, turquoise, coral, pearl, clove, nutmeg, cardamom etc. This is a compound of high standard which is based on practical instructions of the past eminent masters of Tibetan medicine and enriched by spiritual blessing.


Indications:
This precious pill is used against stomach and intestinal pain due to food poisoning from incompatible and unaccustomed foods, abdominal cramps, regurgitation of Muk-po (chronic gastro-intestinal disorder) and bloody diarrhea due to breaking down of Muk-po, contagious fever, chronic fever, hidden fever, blockage of channels due to excess intake of spicy and putrid foods, emaciation due to impure blood, dark complexion, vagueness of the sense organs, heart burn and acidic reflux, loss of appetite, frequent coughing with production of rancid blood sputum like sooty water and water retention. It is exceptionally beneficial against all kinds of poisoning like compounded poisoning and natural poisoning. Owing to its balanced state of warm and cool quality, it is extremely effective against all kinds of digestive disorders. When taken by a healthy person, it develops body radiance, clears sense organs, helps in rejuvenation and aphrodisiac, strengthens nerves and bones and acts as prophylactic.
`
  },
  {
    title: "4.  Rinchen Tsotru Dashel Chenmo",
    img: tpp4,
    content: `Rinchen Tsotru Dashel Chenmo, the great precious processed moon crystal compound contains 50 herbal and non-herbal medicinal ingredients including the precious “Tsothel”, the king of the essence, which was competently prepared through a series of standard detoxifying processes, calcite treated with milk of Zomo, six superlative medicines, mineral pitch, moon light iron compound, purified nux vomica, conessi tree, clove etc. This is a compound of high standard which is based on practical instructions of past eminent masters of Tibetan medicine and is enriched with spiritual blessing.

Indications:
This precious pill is exceptionally beneficial against pain in the abdomen and corresponding part on the back due to indigestion and Muk-po (chronic gastro-intestinal disorder), acidic reflux, diarrhea and vomiting of rancid blood like sooty water, abdominal cramps, remnant of contagious fever, disorder of stomach and liver, physical weakness due to chronic fever, profuse perspiration, mental heaviness, numbness of limbs and lower part of the body, dryness of mouth and tongue, facial acne, hoarseness of voice and upper back pain due to fever associated with blood, shortness of breath due to disturbed and dispersed fever, pain at the front and back of the heart region, excessive sputum, weak digestion, loss of hair and body hair, paleness of gums and nails, itching, chronic lesion and pimple, and leprosy. This precious pill is particularly used against blockage of channels, physical weakness, dark complexion, unclear vision due to excess intake of putrid foods, fried and roasted foods, vinegar, soya sauce and alcohol. It equally relieves pain in the chest and upper back caused by minor accidents, heartburn, swelling of knee pit and legs, abdominal tumor, compounded poisoning, food poisoning, metal poisoning from utensils and other forms of poisoning. When taken by a healthy person, it acts as a rejuvenator.
`
  },
  {
    title: "5. Rinchen Yunying Nyernga",
    img: tpp5,
    content: `Rinchen Yunying Nyernga, the precious old turquoise 25 compound contains 25 medicinal ingredients like old turquoise, coral, pearl, iron powder (prepared through a series of detoxifying processes), mineral pitch, saffron, three myrobalan fruits, clove, vasaka etc. This is a compound of high standard which is based on practical instructions of the past eminent masters of Tibetan medicine and is enriched with spiritual blessing.
Indications:
This precious pill is used against pain at the site of liver due to fever in the liver, gradual loss of body weight , pressure on the upper part of the body and stiffness of neck, headache due to increased impure blood, nose bleeding, heavy sleep, dry mouth, stomach ache and loss of appetite, red eyes, lethargy, bitter taste in mouth, emesis of rancid blood like sooty water due to excess intake of alcohol and undertaking rigorous exercises, constipation with dark and dry stool resembling the dropping of deer, liver cirrhosis, ascites, food poisoning due to incompatible food intake and compounded poisoning . It is exceptionally beneficial against chronic liver disorder if taken regularly over a period of time. It can prevent all disorders mentioned above when taken by a healthy person.
`
  },
  {
    title: "6. Rinchen Jumar Nyernga",
    img: tpp6,
    content: `Rinchen Jumar Nyernga, the precious red coral compound contains 25 different herbal and non-herbal ingredients including competently detoxified coral, laguritum, pearl, calamine, saffron, nutmeg, chebulic myrobylan etc. It is a standard compound based on practical instructions of the past eminent masters of Tibetan medicine and is enriched with spiritual blessing.
Indications:
This precious pill is used against headache due to high blood pressure, acute headache, stiff neck, facial palsy, rigidity and contraction of limbs, numbness and trembling of limbs, hemiplegia, obstruction in the blood vessel or irregular blood circulation, epileptic fits, inflammation of nerves and blood vessels, sprained sciatic nerve, acute pain in the brain, disorder of the nerves and paralysis. In addition, it relieves pain associated with gout and arthritis. It helps to prevent all the disorders mentioned above when taken by a healthy person.
`
  },
  {
    title: "7. Rinchen Seljed Chakril Chenmo",
    img: tpp7,
    content: `Rinchen Seljed Chakril Chenmo, the great precious iron compound of clear sight contains 40 ingredients including iron powder (prepared through a series of standard detoxifying processes), three myrobalan fruits, saffron, magnet, vasaka, mineral pitch etc. This is a compound of high standard based on practical instructions of the past eminent masters of Tibetan medicine and is enriched with spiritual blessing.
Indications:
This precious pill is beneficial against cataract, tears accompanied with pain, intolerance to light, blood shoot eyes, partial or complete blindness due to dilation of the pupil, blurred vision, weakening of the vision due to partial cataract of cornea, blindness due to inner cataract, burning sensation in eyes, intolerance to wind, swelling of an eyelid, dry and watery eyes, growth of wart or pimples on the sclera, excessive eye crud, outer cataract and aqueous humor disorder, infection of the lacrimal gland, disorder of optic nerve, difficulty in opening and closing of eyes and for all kinds of eye disorders. It is exceptionally beneficial against cataract due to chronic compounded poisoning, anemia, rashes and pimples, blood emesis due to muk-po(chronic gastro-intestinal disorder), descend of impure blood in liver and spleen and is helpful against chronic jaundice. When taken by a healthy person, it can prevent all disorders mentioned above and protects one’s eyes.
`
  },
  {
    title: "8. Rinchen Tsajor Chenmo",
    img: tpp8,
    content: `Rinchen Tsajor Chenmo, the great precious pill of hot compound contains 14 herbal and non-herbal medicinal ingredients including the precious “Tsothel”, king of the essence, which was competently prepared through a series of standard detoxifying processes, as well as ginger, black pepper, cutch tree etc. This is a compound of high standard which is based on practical instructions of the past eminent masters of Tibetan medicine and empowered with spiritual blessing.
Indications:
This precious pill is used against gout, arthritis, malignant tumor, ringworm, leprosy, tumor, ascites and localized edema etc. It is also used against blocked channels due to impure blood and it dries up pus caused by cold disorders. When taken by a healthy person, it can prevent all disorders mentioned above. However, it is recommended to use this pill only after consulting the physician.
`
  },
//   {
//     title: "9. Safety",
//     img: SHS8,
//     content: `• Must be prescribed by qualified practitioner  
// • Not for self-medication  
// • Strict dosage required  
// • Proper detoxification is essential`
//   },
//   {
//     title: "10. Conclusion",
//     img: SHS8,
//     content: `Precious Pills represent the pinnacle of Tibetan pharmaceutics combining:

// • Herbal synergy  
// • Mineral science  
// • Alchemical processing  
// • Spiritual medicine  

// They serve as:
// • Curative medicines  
// • Preventive tonics  
// • Rejuvenation therapies`
//   }
];

const TibetanMedicine = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <div className="bg-spa-green">
        <Navbar />

        <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto mt-10">
          <Link to="/" className="flex inline-flex items-center gap-2 text-sm mb-6 text-white">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="inline-flex text-4xl ml-[475px] text-white">
            Tibetan Precious Pills
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* ✅ ADDED TOP INTRO IMAGE (ONLY CHANGE) */}
        <img
          src={tppmain}
          alt="Precious Pills"
          className="w-full max-w-md mx-auto mb-6"
        />

        <p className="text-gray-600  font-extrabold text-xl leading-relaxed">
          Instruction
        </p>
        <p className="text-gray-600 mb-10 text-sm leading-relaxed">
          A night before taking the precious pill, take light decoction prepared from seven grains of yer-ma (prickly ash) to open up body channels. Soak the pill in a small amount of hot boiled water using an clean unbroken cup covering it with a lid and leave it to stand overnight.The pill should not be expose to bright light. Early the next morning before day breaks, crush and stir the content either with spoon or with the ring finger and drink the whole mixture after adding little amount of hot water. Retire to bed with warm covering and sleep for about one hour in order to induce little perspiration. Following that take little amount of hot water infused with saffron to close body channels. This will help to retain the effect of medicine in the body. If one needs to take the medicine urgently, it can also be taken like any other Tibetan pills with boiled hot water. When taken for rejuvenation by a healthy person, it should be taken on an auspicious dates like eight, full moon and new moon days of Tibetan lunar calendar to gain optimum result.
Cautions:
For a period of three to seven days after taking the medicine, avoid fish, pork, egg, sour alcohols, onion, garlic, wild garlic, putrid food, hot spices, strenuous physical activities, accidents, daytime sleep, cold bath and sex.

        </p>

        {/* ACCORDION */}
        <div className="space-y-5">
          {sections.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">

              <button
                onClick={() => toggleItem(i)}
                className={`w-full px-6 py-4 flex justify-between items-center text-left transition ${
                  activeIndex === i
                    ? "bg-spa-green text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">{item.title}</span>
                <span className="text-xl">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              {activeIndex === i && (
                <div className="p-6 bg-white">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-md mx-auto mb-5 rounded-lg shadow"
                  />

                  <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default TibetanMedicine;