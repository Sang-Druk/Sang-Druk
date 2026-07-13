import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


import SHCTmain from "@/assets/SHCTmain.png";
import SHCT1 from "@/assets/SHCT1.png";
import SHCT2 from "@/assets/SHCT2.png";
import SHCT3 from "@/assets/SHCT3.png";
import SHCT4 from "@/assets/SHCT4.png";
import SHCT5 from "@/assets/SHCT5.png";
import SHCT6 from "@/assets/SHCT6.png";
import SHCT7 from "@/assets/SHCT7.png";
import SHCT8 from "@/assets/SHCT8.png";
import SHCT9 from "@/assets/SHCT9.png";
import SHCT10 from "@/assets/SHCT10.png";
import SHCT11 from "@/assets/SHCT11.png";
import SHCT12 from "@/assets/SHCT12.png";
import SHCT13 from "@/assets/SHCT13.png";
import SHCT14 from "@/assets/SHCT14.png";
import SHCT15 from "@/assets/SHCT15.png";
import SHCT16 from "@/assets/SHCT16.png";
import SHCT17 from "@/assets/SHCT17.png";
import SHCT18 from "@/assets/SHCT18.png";


const sections = [
  {
    title: "1.Lung Soothing Tea",
    img: SHCT1,
    content: `Lung Soothing Tea is formulated in accordance with the Tibetan Science of Healing. It helps to promote respiratory functions, thereby relieving breathing difficulties and upper back pain. It is especially recommended for cough amp fever due to lung infection. 
DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g
`
  },
  {
    title: "2. Nyigug Sumthang",
    img: SHCT2,
    content: `Nyigug Sumthang is prepared in accordance to Tibetan Science of Wellbeing. Its helps to control insomnia, blood pressure and mental distress related with Loong Disorder.
DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g
`
  },
  {
    title: "3. Gonae-Selwae Menja",
    img: SHCT3,
    content: `Gonae-Selwae Menja has been formulated in accordance with the Tibetan Medical Text. It relieves headache, dizziness, migraine and refreshes both body and mind.

INGREDIENTS: Terminalia chebula, Rosa bronunii, Adhatoda vasica, Illicium verum and Myristica fragrans.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g
`
  },
  {
    title: "4. MIGGI-NUEPA SOWAE MENJA",
    img: SHCT4,
    content: `MIGGI-NUEPA SOWAE MENJA has been formulated in accordance with the Traditional Tibetan Medical Text. It is effective in improving eyesight, relieve regular eye problem and eye pain. If taken regularly it act as a nectar for eyes.

INGREDIENTS Carthamus tinctorius, Carum carvi, Daucus carota, Zea may and Terminalia chebula.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g
`
  },
  {
    title: "5.SORIG Bae kan Tea",
    img: SHCT5,
    content: `SORIG Bae kan Tea This tea is formulated from fresh amp pure natural herbs in accordance with the Tibetan medical text. It helps against various signs amp symptoms of an aggravated baekan disorders. like weak digestive heat, low body temperature, indigestion, mental amp physical heaviness, lethargy etc.which are generally caused by improper diet and behaviour such as intake of excess sweet stuffs, vegetables amp fruits which are heavy amp cool in potency, cold and raw refrigerated foods amp beverages,over exposure to humid places amp cold water.

Direction It is recommended to be used in the morning. However, it can be taken at any time when the above sign and symptoms appear. Pour hot boiled water onto the teabag. Infuse for few minutes till you get desired rich colour and aroma. Relish it purely or with little honey or salt.

INGREDIENTS Punica granatumPomegranate, Trachyspermum ammi, Nigella sativaBlack cumin, Zingiber officinalisGinger, Camellia theiferatea leaves, Elettaria cardomomumCardamom, Cinnamomum zeylinacumCinnamon.

Net Contents 20 sachets of 2gms.
`
  },
  {
    title: "6. Tripa Tea",
    img: SHCT6,
    content: `Tripa Tea This is formulated in accordance with the Tibetan Science of Healing. Its refreshing and cooling properties help relieve headache, nausea, bitterness in mouth and loss of appetite. This blend helps quench excessive thirst, overcome lethargy as well ass reduces increased body heat and sweating.

Direction Prepare the tea by boiling it or infust one herbal tea bag in hot boiled water for around two minutes. Drink it in the afternoon or late at night for best result. Whenever the aforementioned signs and symptoms appear, relish it with a teaspoon of rock sugar.

INGREDIENTS Rubus biflorus, Symplocos paniculata, Cuminum cyminum Caraway, Camellia sinensis Tea leaves, Rosa bronuniiWild rose, Carthamus tinctoriusSafflower, Mentha piperitaMint, Glyrrhiza glabraLiquorice.
Net Contents 20 sachets of 2gms.
`
  },
  {
    title: "7. This Garden tea",
    img: SHCT7,
    content: `This Garden tea contains carefully selected pure natural herbs which Tibetans have long respected for their beneficial qualities It helps to relieve stress and improve digestion. It also helps to clarify the sensory organs like eyes, prevent cold amp flu and sore throat. Enjoy it also as a delicious thirst quenching drink.

Ingredients Camellia thea, Syzygium aromaticum, zingiber officinale, cinnamomum zeylanicum and Ellettaria cardamomum
`
  },
  {
    title: "8. SORIG Za-Khu-Chee-Nyii ",
    img: SHCT8,
    content: `SORIG Za-Khu-Chee-Nyii tea is pure herbal product made according to Tibetan Science of Healing. This tea helps to balances the blood glucose level and promotes digestion and food appetite. It induces sound sleep and reduces uncomfortable breathing and frequent urination. It also helps to subsides the symptoms like cough up excessive sputum, pain in the genitals and urinary bladder, dryness of mouth, rise in the body temperature, burning feeling on the soles and palms and murkey urine.

Direction This tea is generally recommended to take in morning. In case, above signs and symptoms appear, it can be taken at any time. Place one tea bag in a cup and pour the hot water onto it. Enjoy the tea until all the flavour are used up. If one prefers, little amount of honey can also be added.

INGREDIENTS Camelia theatea leaves, Xanthium indicum, Acacia catechuIndian acacia, Berberis aristataBerberry, Emblica officinalisGooseberry/Amla, Curcuma longumTurmeric.

Net Contents 20 sachets of 2gms.

`
  },
  {
    title: "9.Sorig Loong tea",
    img: SHCT9,
    content: `Sorig Loong tea is formulated from fresh and pure natural herbs in accordance with the Tibetan medical text.It helps to pacify the various problems aggravated by loong disorder like degeneration of physical complexion and vitality, upper and lower back pain, mental instability, anger, insomnia and anorexia, which are generally cause due to excessive thinking, fasting, Irregular sleep,heavy blood loss, strenuous physical activities in an empty stomach, acute diarrhea and vomiting.

INGREDIENTS Rosa bronunii,Carum carvi,Myristica fragrans,Illicium verum,Zingiber officinalis and Piper longum.
DIRECTION FOR USE Generally recommended to be used in the evening after a hectic day. However,it can be take at any time when the above signs and symptoms appear. Pour hot water on to the teabag. Infuse for few minutes till you get desired rich colour and aroma. Relish it purely or with molasses or salt.

STORAGE Keep in cool amp dry place.

`
  },
  {
    title: "10.SORIG Every day Tea",
    img: SHCT10,
    content: `SORIG Every day Tea This herbal tea contains carefully selected pure natural herbs which Tibetans have long respected for their beneficial qualities red currant balances the body energies and promotes inner harmony, wild rose promotes relaxation, wild saffron promotes the health of the skin, relaxation and appetite and, together with ginger, helps to prevent cold and flu, aids digestion. It can be taken as a delicious thirst-quenching drink.

Direction This can be used by everyone at any time irrespective of age. Pour hot water onto the teabag. Infuse for few minutes till you get desired rich colour amp aroma. Relish it purely or with sugar or salt.

INGREDIENTS Rubus hoffmeiteriannus, Symplocos paniculata, Carthamus tinctoriusWild saffron, Elettaria cardamomumCardamom, Zingiber officinalisGinger, Rosa bronuniiWild rose.

Net Contents 20 sachets of 2gms.

`
  },
  {
    title: "11. Trak-shey tea ",
    img: SHCT11,
    content: `Trak-shey tea is a pure herbal product made according to the Tibetan Science of Healing. This herbal tea enhances a healthy circulation and induces sound sleep. It minimizes upper back pain, headache in combination with blurred vision and painful nape causing movement difficulty. It also helps the symptoms like sweating accompanied with appearance of goosebumps in response to coldness, uncomfortable breathing associated with dyspnea and stiffened upper back, dryness of mouth and thirstiness and numbness of the limbs.

Direction This tea is generally recommended to take in afternoon. Incase, above signs and symptoms appear, it can be taken at any time. Place one tea bag in a cup and pour the hot boiled water onto it. Enjoy the tea until all the flavour are used up. If one prefers, little amount of sugar can also be added.

INGREDIENTS Rubus hoffmeiteriannus, Rosa bronuniiWild rose, Adhatoda vasicaMalabar nut, Corydalis hendersoni, Acacia catechuIndian acacia, Emblica officinalisGooseberry/Amla, Dracocephyllum tanguiticum
Glycyrrhiza glabraLiquorices.

Net Contents 20 sachets of 2gms.

`
  },
  {
    title: "12. Loong-Tsab Menja ",
    img: SHCT12,
    content: `Loong-Tsab Menja is formulated from natural herbs in accordance with Tibetan Science of healing. It helps to subside mental stress, poor memory, fainting, weak kidney and uterus, irregular menstruration, anaemic, numbness of limbs, pain in urethra and lower abdomen, leukorhea, loss of lower body heat, and pain around hip and waist.
DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g

Ingredients: Rheum palmatum, Wthania somifera, Polygonatum cirrhifolium, Tribulus terresrtis, Abrus precatorius amp Myristica fragrance.

`
  },
  {
    title: "13. Nyiing-Nad-Menja",
    img: SHCT13,
    content: `Nyiing-Nad-Menja is formulated from natural herbs in accordance with Tibetan Science of healing. It helps to combat poor blood circulation, obstruction of loong and blood due to high cholesterol, hardening of blood vessel and cardiac muscle, angina pectoris, restlessness due to palpitation, fear and mental unrest without apparent.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g

Ingredients: Carum carvi, Polygonatum cirrhifolium, Allium sativum, Drosera peltate, Myristica fragrance.

`
  },
  {
    title: "14. Tobkay Menja",
    img: SHCT14,
    content: `Tobkay Menja is prepared according to Tibetan Science of healing. It contains natural herbs that helps prolong life, avoid illness and increase the bodily strength. It controls premature wrinkle, grey hair, and enhance complexion.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g



INGREDIENTS: Withania somnifera, Tribulus terrestris, Syzygium aromaticum, Eletteria cardamomum, Areca catechu, Polygonatum cirrhifolium, Asparagus racemosus, Rheum palmatum

`
  },
  {
    title: "15. This Arthritis Relief Tea",
    img: SHCT15,
    content: `This Arthritis Relief Tea is formulated with the Tibetan Science of healing to restore kidney function, thereby balancing the flow of blood and Loong energy in the body. It also alleviates pain, swelling and inflammation of the joints and eases stiffness amp restricted movements of the limbs.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g



INGREDIENTS: Tribulus terrestris, Zanthoxylum piperitum, Tinospora cordifolia and Acacia catechu.

`
  },
  {
    title: "16. Shang-Druum Menja",
    img: SHCT16,
    content: `Shang-Druum Menja is formulated from natural herbs in accordance with Tibetan Science of healing. It helps to subside abdominal bloating and inflammation caused by gastro-intestinal disorder, degeneration of intestinal mucus, disorder of the blood vessels, intestinal parasitic disorders and haemorrhoid/piles.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g

INGREDIENTS: Pinus sp, Tribulus terrestris, Withania somnifera, Holarrhena antidysenterica, Clematis sp, Emblia ribes, Selaginella pulvinate, Capsicum annuum

`
  },
  {
    title: "17. Oogmi-Daewae Menja",
    img: SHCT17,
    content: `Oogmi-Daewae Menja is prepared according to Tibetan Science of healing. It contains natural herbs that helps to control cold, chest congestion, cough, breathlessness, profuse sweating, difficulty in breathing and weak body.

DIRECTION TO USE: This tea can be taken at any time. pour a hot water on to the tea bag and let it diffuse for a while till all the colour and taste ooze out from the tea bag. Take as a plain normal herbal tea or add pinch of honey as per your taste.
10 Tea Bags Net Wt. 0.53oz 15g

INGREDIENTS: Gentiana sp, Rhodiola sp, Selinium wallichianum, Cinnamomum zeylinicum, Syzygium aromaticum, Artemisia sp, Phlomis younghusbandii, Glycyrrhiza glabra, Amomum subulatum, Vitis vinifera

`
  },
  {
    title: "18. SORIG KAEM-MEEN-SHONNU",
    img: SHCT18,
    content: ` SORIG KAEM-MEEN-SHONNU has been formulated in accordance with the Traditional Tibetan Medical Text. It is effective for healthy weight loss and slims a body, alleviates swelling of body due to accumulation of impure blood amp excessive bodily fluid and overcome tiredness and fatigue. It also assists digestion, and the smooth flow of body wastes.

RECOMMENDED INTAKE It can be taken either in morning in an empty stomach or at evening. Take one sachet a day with lukewarm boiled water, if possible add a teaspoon of honey for better result.

INGREDIENTS Rheum palmatum,Calcite, Terminalia chebula, Emblica officinalis, Embelia ribes,Clematis sp., and Honey.

CAUTION Avoid over consumption of fatty and raw foods, sweets, and heavy meals. Refrain from taking nap after meals and sedentary lifestyle. This product is not recommended for anemic, children and pregnant women. Use with balance diet and exercise.
`
  },

];

const Drinks = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />

        <div className="pt-32 pb-10 px-6 max-w-7xl mt-10 h-[200px] mx-auto">
          <Link to="/" className="flex inline-flex items-center text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="inline-flex text-4xl text-center ml-[350px]   text-white">
            Sorig Health Care Tea
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <img src={SHCTmain} className="mx-auto mb-6" />

        <p className="text-xl font-bold">Instruction</p>
        <p className="text-sm text-gray-600 mb-10">
          Herbal Health Care Tea : Inspired by Sowa Rigpa Wisdom (Tibetan Healing Science)
Our health drinks are carefully crafted from authentic traditional Tibetan herbal formulations rooted in the ancient science of Sowa Rigpa. Each blend is thoughtfully prepared to support individual constitutional needs, restore internal harmony, and promote the natural balance of body, mind, and vitality. Infused with time-honored medicinal herbs, our teas offer gentle daily nourishment for digestion, circulation, immunity, and overall wellbeing.

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
              <div className="p-6 flex flex-col gap-6 items-center bg-gray-100">
                <img src={item.img} className="mx-auto mb-4 w-full h-[350px] object-contain" />
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

export default Drinks;