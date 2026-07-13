
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import SIPRmain from "@/assets/SIPRmain.png";
import SIPR1 from "@/assets/SIPR1.png";
import SIPR2 from "@/assets/SIPR2.png";
import SIPR3 from "@/assets/SIPR3.png";
import SIPR4 from "@/assets/SIPR4.png";
import SIPR5 from "@/assets/SIPR5.png";
import SIPR6 from "@/assets/SIPR6.png";

const sections = [
  {
    title: "1. Sang Druk",
    img: SIPR1,
    content: `Rooted in the timeless wisdom of Sowa Rigpa, Sang Druk represents a holistic path of healing that unites traditional Tibetan medicine with sacred spiritual practice. “Sang” signifies purification, cleansing, and healing, while “Druk” refers to the six essential healing substances that symbolize harmony, vitality, and inner balance.
At the heart of Sang Druk are six revered ingredients—Bamboo Silica, Saffron, Clove, Green Cardamom, Nutmeg, and Black Cardamom—traditionally valued in Tibetan medicine for supporting the body’s natural balance and well-being. These ingredients also hold deep spiritual significance and are used in sacred rituals, offerings, and empowerment practices to cultivate purification, blessings, and positive energy.
Inspired by the healing essence of Chebula, the king of Tibetan medicine and a symbol of complete balance and longevity, Sang Druk reflects an integrated vision of wellness—nurturing body, energy, mind, and spirit through authentic Tibetan wisdom.
Healing Wisdom • Sacred Tradition • Holistic Well-being
`
  },
  {
    title: "2.Luzae Chema (Lu Men) Powder",
    img: SIPR2,
    content: `Traditional Tibetan Sacred Offering Powder for Purification, Blessings & Spiritual Harmony
Prepared according to the sacred traditions of Tibetan Medicine and classical Tibetan spiritual practice, Luzae Chema (Lu Men) Powder is a carefully crafted sacred offering used in purification rituals and Naga Puja ceremonies to honor and appease Naga spirits—guardians traditionally associated with protection, prosperity, and well-being.
Handmade from a fragrant blend of sacred herbs, leaves, twigs, and natural resins, this traditional offering powder is used to create purifying aromatic smoke known as Lusang, valued for cleansing negative influences, enhancing spiritual offerings, and cultivating auspicious conditions for good fortune, health, harmony, and abundance.
In Tibetan healing and ritual practice, Lu Men is also traditionally used in purification and appeasement ceremonies to pacify harmful influences, protect against obstacles, and support balance between the natural and spiritual environment. Its soothing herbal aroma creates a serene, sacred atmosphere ideal for rituals, meditation, and devotional practice.
How to Use:
Sprinkle a small amount over burning charcoal, incense, or in a suitable incense burner during offerings and purification rituals.
Storage:
Store in a cool, dry place away from moisture and direct sunlight.
For Ritual & Spiritual Use Only
Sacred Offering • Purification • Blessings & Harmony
Top of Form
`
  },
  {
    title: "3. Sorig Mensang / Incense Powder",
    img: SIPR3,
    content: `Traditional Tibetan Sacred Incense for Purification, Meditation & Spiritual Well-being
Prepared according to the sacred traditions of Tibetan spiritual practice, Sorig Mensang / Incense Powder is a handcrafted aromatic blend traditionally used in morning rituals, meditation, and devotional offerings. Made from carefully selected natural herbs, this sacred incense helps purify the surrounding atmosphere, refresh the senses, and create a calm, uplifting space for prayer and spiritual practice.
Traditionally valued for cleansing environmental impurities and promoting harmony, Mensang is especially recommended during morning meditation, prayers, ritual offerings, and space purification, helping cultivate a serene and spiritually balanced environment.
Directions for Use:
Sprinkle a small amount over warm ashes in a container, or place between two partially burned incense sticks to release its fragrant smoke.
Net Contents:
60 g
For Ritual & Aromatic Use Only
Purification • Peace • Sacred Atmosphere
`
  },
  {
    title: "4. Sorig Tibetan Incense – gZimpoe",
    img: SIPR4,
    content: `Traditional Tibetan Herbal Incense for Purification, Meditation & Sacred Offering
Rooted in a sacred tradition dating back to the 7th century, Sorig Tibetan Incense – gZimpoe is prepared according to ancient Tibetan aromatic formulas preserved through generations of spiritual practice and healing wisdom. Handcrafted from carefully selected Himalayan herbs and precious botanicals, this traditional incense is valued for creating a calm, pure, and uplifting atmosphere for meditation, prayer, ritual offerings, and daily well-being.
Its rich herbal aroma helps refresh the senses, purify living spaces, and support a peaceful environment conducive to spiritual practice and inner balance. Traditionally, it is especially recommended for morning prayers, meditation, and sacred offerings, helping begin the day with clarity, harmony, and positive energy.
Key Ingredients:
Safflower (Carthamus tinctorius), Rhododendron, Juniper, Picrorhiza (Picrorhiza kurroa), Saffron (Crocus sativus), Selinum (Selinum wallichianum), Dracocephalum tanguticum, Artemisia, and Sandalwood (Santalum album).
Net Contents:
40 Sticks
Sacred Aroma • Purification • Spiritual Harmony

`
  },
  {
    title: "5. Sorig Stress Relief Incense",
    img: SIPR5,
    content: `Traditional Tibetan Herbal Incense for Relaxation, Calmness & Mental Well-being
Inspired by the healing wisdom of Yuthok Yonten Gonpo and prepared according to the classical principles of Sowa Rigpa, Sorig Stress Relief Incense is a carefully crafted aromatic blend designed to promote calmness, relaxation, and emotional balance. Rooted in centuries of Tibetan healing tradition, this special formulation is traditionally valued for helping ease tension, settle restlessness, and create a peaceful atmosphere for body and mind.
Handmade from selected medicinal herbs and botanical extracts, its soothing natural aroma helps refresh the senses, encourage mental clarity, and support a feeling of comfort during times of stress, fatigue, and daily strain. It is especially appreciated during meditation, relaxation practices, and quiet moments of reflection, helping cultivate inner calm and overall well-being.
Key Ingredients:
Bombax ceiba, Pegaeophyton scapiflorum, Rhodiola Extract, and traditional aromatic herbal ingredients.
Directions for Use:
Use like ordinary incense sticks, or gently inhale the aroma in a calm setting as part of relaxation or meditation practice.
Net Contents:
24 Sticks
Natural Aroma • Calm Mind • Traditional Wellness

`
  },
  {
    title: "6. Sorig Purifying Ritual Powder Menchey ",
    img: SIPR6,
    content: `Traditional Tibetan Sacred Offering Powder for Purification & Ritual Practice
Prepared according to the sacred traditions of Tibetan spiritual practice, Sorig Purifying Ritual Powder is a carefully crafted offering blend used in puja ceremonies, ritual practices, and quiet moments of reflection. Traditionally valued for its purifying qualities, this sacred powder is used to cleanse ritual offerings, enhance their spiritual significance, and support the accumulation of positive merit through devotional practice.
Made from a precious blend of aromatic herbs, sacred botanicals, and traditional ritual ingredients, it helps create a pure, harmonious, and spiritually uplifting atmosphere for offerings, meditation, and ceremonial use.
Key Ingredients:
Agate, Nutmeg (Myristica fragrans), Cardamom (Elettaria cardamomum), Clove (Eugenia aromatica), Bamboo (Bambusa textilis), Safflower (Carthamus tinctorius), Black Cardamom (Amomum subulatum), Gentiana, and Saxifraga egregia.
Directions for Use:
Mix a small amount with ritual objects or sacred offerings during puja and ceremonial practices.
Net Contents:
50 g
Purification • Sacred Offering • Spiritual Merit
Bottom of Form


`
  },
];

const Incense = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />

        <div className="pt-32 pb-10 px-6 max-w-7xl mt-10 h-[200px] mx-auto">
          <Link to="/" className="flex inline-flex items-center text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="inline-flex text-4xl text-center ml-[300px]   text-white">
            SORIG INCENSE AND RITUAL PRODUCT
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <img src={SIPRmain} className="mx-auto mb-6" />

        <p className="text-xl font-bold">Instruction</p>
        <p className="text-sm text-gray-600 mb-10">
          Traditional Tibetan Aromatic Blends for Purification, Meditation & Sacred Practice
Crafted according to the timeless traditions of Tibetan spiritual practice, Sorig Incense & Ritual Products are hand-prepared from natural aromatic herbs and sacred botanicals gathered from the Himalayan region. Traditionally used for centuries in meditation, healing rituals, and devotional practices, each blend is carefully formulated to support purification, spiritual harmony, and a serene sacred atmosphere.
Pure Herbs • Sacred Tradition • Spiritual Well-being

        </p>

        {sections.map((item, i) => (
          <div key={i} className="border rounded-lg mb-5">
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full p-4 flex justify-between bg-gray-100"
            >
              {item.title}
              <span>{activeIndex === i ? "−" : "+"}</span>
            </button>

            {activeIndex === i && (
              <div className="p-6 flex flex-row gap-6">
                <img src={item.img} className="mx-auto mb-4 h-[350px] max-w-[300px]" />
                <p className="text-sm whitespace-pre-line">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Incense;