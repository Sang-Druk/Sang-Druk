import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import SHS from "@/assets/SHS.png";
import SHS1 from "@/assets/SHS1.png";
import SHS2 from "@/assets/SHS2.png";
import SHS3 from "@/assets/SHS3.png";
import SHS4 from "@/assets/SHS4.png";
import SHS5 from "@/assets/SHS5.png";
import SHS6 from "@/assets/SHS6.png";
import SHS7 from "@/assets/SHS7.png";
import SHS8 from "@/assets/SHS8.png";

const productData = {
  supplements: {
    title: "Sorig Herbal Supplements",
    img: SHS,
    intro: `Our herbal supplements are carefully prepared from authentic high-altitude Himalayan herbs, following the time-honored principles and classical formulations of Sowa Rigpa. Each formulation is thoughtfully crafted to support specific health needs while nourishing the body’s natural healing capacity, enhancing vitality, and promoting holistic balance of body, mind, and life. Rooted in ancient wisdom and guided by nature, our supplements offer gentle yet profound support for long-term wellbeing.`,

    items: [
      {
        name: "1. Sorig Sangthel Nyernga",
        img: SHS1,
        desc: `Based on traditional Tibetan medical texts, Sorig Sangthel Nyernga is a precious herbal formula crafted to support clear breathing, balance within the lungs, and overall vitality. This carefully prepared blend has long been valued in Tibetan practice for promoting comfort in the chest, helping maintain harmony of fluids, and supporting healthy respiratory function. Offered as a 30-day supply, Sangthel Nyernga provides gentle daily support for lung strength and well-being.

Direction Take one pill per dose, half an hour before or after meals, with boiled lukewarm water or cow’s milk. Leave at least one hour between taking this pill and any other medicine. If any adverse reactions occur, discontinue use immediately and consult your physician.
Storage: Store in a cool, dry place away from direct sunlight and humidity.
Ingredients: Processed Copper, Liquorice, Raisins, Nutmeg, Clove, Hog Plum, Weaver's Bamboo, Chebulic Myrobalan, Gilloy, Pomegranate, Amla, Sunflower, Cardamon, Coriander.
30 pills`
      },

      {
        name: "2.Dawoe Chinchud Chenmo",
        img: SHS2,
        desc: `Traditional Tibetan Liver Support Formula
Prepared according to the classical principles of Sowa Rigpa, Sorig Dawoe Chinchud Chenmo is a traditional herbal formulation valued for supporting liver health, digestive balance, and overall vitality. Revered in Tibetan healing practice, this formula is traditionally used to help maintain healthy liver function, promote stomach comfort, support blood nourishment, and encourage internal balance.
Carefully formulated with authentic herbal and mineral ingredients, it is also traditionally appreciated for supporting eye health, helping to ease heat-related imbalances, and promoting digestive harmony. When taken regularly under proper guidance, it serves as a restorative tonic that supports natural wellbeing, resilience, and long-term vitality.
Key Ingredients:
Processed Calcite, Saffron, Heracleum species, and traditionally prepared herbo-mineral compounds.
Directions for Use: Take 1 pill half an hour before or after meals with boiled lukewarm water, or as directed by a qualified physician.
Storage: Store in a cool, dry place away from direct sunlight.
Pack Size: 30 Pills`
      },

      {
        name: "3. Goyu Dhunjor",
        img: SHS3,
        desc: `Traditional Tibetan Kidney Support Formula
Prepared according to the classical principles of Sowa Rigpa, Sorig Goyu Dhunjor is a traditional herbal formulation valued for supporting kidney vitality, internal balance, and overall strength. Revered in Tibetan healing practice, this formula is traditionally used to nourish kidney function, promote healthy urinary balance, and help ease discomfort in the lower back and waist associated with constitutional imbalance.
Carefully crafted from authentic herbal ingredients, it is also traditionally appreciated for supporting reproductive vitality, strengthening resilience, and maintaining the body’s natural balance and restorative energy. When taken regularly under proper guidance, it serves as a nourishing daily supplement for vitality, endurance, and holistic wellbeing.
Key Ingredients:
Betel Nut Palm, Pomegranate, Cinnamon, True Cardamom, and Long Pepper.
Directions for Use:
Take 1 pill once daily with warm water, or as directed by a qualified physician.
Storage:
Store in a cool, dry place away from direct sunlight.
Pack Size:
30 Pills`
      },

      {
        name: "4. Laetrae Ngathang",
        img: SHS4,
        desc: `Traditional Tibetan Support for Joint, Muscle & Vascular Health
Prepared according to the classical principles of Sowa Rigpa, Sorig Laetrae Ngathang is a traditional herbal formulation valued for supporting joint comfort, muscular strength, vascular balance, and overall vitality. In Tibetan healing practice, its gentle cooling nature is traditionally used to help balance excess Tripa (heat), support healthy circulation, and maintain digestive warmth and internal harmony.
This carefully prepared formula is traditionally appreciated for promoting flexibility, easing joint and muscle discomfort, and supporting smooth movement, physical resilience, and metabolic balance—making it a valuable daily supplement for overall wellbeing.
Key Ingredients:
Laetrae, Giloy, Arura (Chebulic Myrobalan), Barura (Beleric Myrobalan), Kyurura (Amla), and Gyatig (Chirata).
Directions for Use:
Take one sachet daily in the morning on an empty stomach with hot milk or boiled warm water, followed by mild physical exercise, or as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.`
      },

      {
        name: "5. Sorig Health Tonic",
        img: SHS5,
        desc: `Traditional Tibetan Herbal Tonic for Vitality & Strength
Prepared according to the classical principles of Sowa Rigpa, Sorig Health Tonic is a carefully formulated herbal blend made from pure natural ingredients to support physical vigor, vitality, and overall wellbeing. Traditionally valued in Tibetan healing practice, this nourishing tonic is used to promote strength, support healthy sensory function, enhance resilience against fatigue, and help maintain internal warmth and balance, particularly in supporting kidney vitality.
Crafted from authentic medicinal herbs, it serves as a restorative daily supplement for energy, endurance, and holistic wellness.
Ingredients:
Ashwagandha (Withania somnifera), Licorice (Glycyrrhiza glabra), Cardamom (Elettaria cardamomum), Clove (Syzygium aromaticum), Safflower (Carthamus tinctorius), Amla (Emblica officinalis), Asparagus adscendens, and Long Pepper (Piper longum).
Directions for Use:
Take with boiled warm milk or boiled warm water, or as directed by a qualified practitioner.
Net Contents:
30 sachets × 2 g`
      },

      {
        name: "6. Tsephel Dhutse – Elixir of Life",
        img: SHS6,
        desc: `Traditional Tibetan Herbal Rejuvenation Formula
Prepared according to the classical wisdom of Sowa Rigpa, Sorig Tsephel Dhutse (Elixir of Life) is a carefully crafted traditional herbal formulation valued for supporting vitality, strengthening natural resilience, and promoting overall wellbeing. Revered in Tibetan healing practice as a nourishing rejuvenative tonic, it is traditionally used to help enhance body energy, support immune strength, and maintain internal balance for long-term health and vitality.
Formulated from authentic natural ingredients, this restorative blend serves as a daily supplement to promote strength, endurance, and holistic wellness.
Ingredients:
Rape Seed (Brassica campestris), Japanese Sweetflag (Acorus gramineus), Rock Salt, Long Pepper (Piper longum), Grapes (Vitis vinifera), Dates (Phoenix dactylifera), and Honey.
Directions for Use:
Take as directed by a qualified practitioner.
Caution:
Avoid use during colds, fever, or acute heat-related conditions unless advised by a qualified practitioner.
Net Contents:
30 sachets × 2 g`
      },

      {
        name: "7. Lhophel Dhutse – Wisdom Nectar",
        img: SHS7,
        desc: `Traditional Tibetan Herbal Support for Growth, Memory & Development
Prepared according to the classical principles of Sowa Rigpa, Sorig Lhophel Dhutse (Wisdom Nectar) is a carefully formulated traditional herbal blend designed to nourish healthy growth, support cognitive development, and promote overall wellbeing in children. Revered in Tibetan healing practice, this gentle tonic is traditionally valued for supporting memory, concentration, and mental clarity while helping to nurture balanced development of the body and mind.
This precious formulation is also traditionally appreciated for supporting healthy speech development, clarity of expression, and natural vitality, making it a nourishing supplement for children’s holistic growth and development.
Ingredients:
Arura (Terminalia chebula), Ginger (Zingiber officinale), Long Pepper (Piper longum), Black Pepper (Piper nigrum), Japanese Sweetflag (Acorus gramineus), Alum (White Mineral Salt), Grapes (Vitis vinifera), and Dates (Phoenix dactylifera).
Directions for Use:
• Children below 12 months: Half a sachet once weekly
• Children above 12 months: One sachet every 3 days
Or as directed by a qualified practitioner.
Caution:`
      },

      {
        name: "8. Kaem-Meen-Da-shun",
        img: SHS8,
        desc: `Traditional Tibetan Herbal Support for Healthy Weight Management
Prepared according to the classical principles of Sowa Rigpa, Sorig Kaem-Meen-Da-shun is a carefully formulated traditional herbal blend valued for supporting healthy weight management, metabolic balance, and overall vitality.
Ingredients:
Berberis species, Arura, Amla, Ginger, Honey.
Directions:
Use as directed by practitioner.
Caution:
Not for pregnant women.
Net Contents:
30 sachets × 2 g`
      }
    ]
  }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug as keyof typeof productData];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="bg-spa-green text-white h-[240px]">
        <Navbar />

        <div className="relative top-14 pt-32 pb-10 px-6 max-w-6xl mx-auto flex items-center justify-center">
          <Link to="/" className="absolute left-6 flex items-center gap-2 text-sm">
            <ArrowLeft size={16} /> Back
          </Link>

          <h1 className="text-4xl font-serif text-center">
            {product.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <img src={product.img} className="w-full max-w-md mx-auto mb-6" />

        <p className="text-gray-600 whitespace-pre-line mb-10">
          {product.intro}
        </p>

        <div className="space-y-4">
          {product.items.map((item, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(i)}
                className={`w-full px-5 py-4 text-left flex justify-between ${
                  activeIndex === i ? "bg-spa-green text-white" : "bg-blue-100"
                }`}
              >
                {item.name}
                <span>{activeIndex === i ? "−" : "+"}</span>
              </button>

              {activeIndex === i && (
                <div className="p-6">
                  <img
                    src={item.img}   // ✅ Correct image per item
                    className="w-full max-w-md mx-auto mb-4"
                  />

                  <p className="whitespace-pre-line text-sm text-gray-700">
                    {item.desc}
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

export default ProductDetail;