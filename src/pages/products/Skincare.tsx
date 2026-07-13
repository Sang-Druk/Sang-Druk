import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

/* IMAGES */
import SSHC from "@/assets/SSHCmain.png";
import SSHC1 from "@/assets/SSHC1.png";
import SSHC2 from "@/assets/SSHC2.png";
import SSHC3 from "@/assets/SSHC3.png";
import SSHC4 from "@/assets/SSHC4.png";
import SSHC5 from "@/assets/SSHC5.png";
import SSHC6 from "@/assets/SSHC6.png";
import SSHC7 from "@/assets/SSHC7.png";
import SSHC8 from "@/assets/SSHC8.png";
import SSHC9 from "@/assets/SSHC9.png";
import SSHC10 from "@/assets/SSHC10.png";
import SSHC11 from "@/assets/SSHC11.png";
import SSHC12 from "@/assets/SSHC12.png";
import SSHC13 from "@/assets/SSHC13.png";
import SSHC14 from "@/assets/SSHC14.png";
import SSHC15 from "@/assets/SSHC15.png";
import SSHC16 from "@/assets/SSHC16.png";
import SSHC17 from "@/assets/SSHC17.png";
import SSHC18 from "@/assets/SSHC18.png";
import SSHC19 from "@/assets/SSHC19.png";
import SSHC20 from "@/assets/SSHC20.png";
import SSHC21 from "@/assets/SSHC21.png";


const sections = [
  {
    title: "1. Sorig Therapeutic Massage Oil",
    img: SSHC1,
    content: `Traditional Tibetan Herbal Oil for Relaxation, Circulation & Rejuvenation
Prepared according to the classical principles of Sowa Rigpa, Sorig Therapeutic Massage Oil is a carefully crafted herbal formulation designed to promote deep relaxation, restore vitality, and support overall physical wellbeing. Traditionally valued in Tibetan healing practice, this nourishing oil is used to help ease physical and mental fatigue, relax muscles, ligaments, and nerves, and encourage a sense of calm and balance throughout the body.
Infused with a rich blend of natural herbs and botanical oils, it is also traditionally appreciated for supporting healthy blood circulation, promoting muscle flexibility, rejuvenating tired tissues, and enhancing overall body wellness. Regular massage with this therapeutic oil helps restore comfort, vitality, and holistic balance to body and mind.
Key Ingredients:
Soybean Oil, Nutmeg, Clove, Caraway, Blackberry, Turmeric, Safflower, Ginger, Chirata, Amla, Black Cardamom, Rose Oil, and other traditional herbal ingredients.
Directions for Use:
Apply gently to the desired area and massage until absorbed, or use as directed by a qualified practitioner.
Net Contents:
150 ml
`
  },
  {
    title: "2. Sorig Arthritis Relief Oil",
    img: SSHC2,
    content: `Traditional Tibetan Herbal Oil for Joint Comfort & Mobility
Prepared according to the classical principles of Sowa Rigpa, Sorig Arthritis Relief Oil is a carefully formulated herbal massage oil designed to support joint comfort, flexibility, and overall musculoskeletal wellbeing. Traditionally valued in Tibetan healing practice, this nourishing oil is used to help ease discomfort in the knees, joints, and lower back while promoting relaxation and restoring ease of movement.
Infused with a potent blend of natural herbal oils and botanical ingredients, it is also traditionally appreciated for supporting muscle strength, nourishing tendons and ligaments, enhancing circulation, and promoting healthy joint function and flexibility. Regular massage helps rejuvenate tired tissues, improve mobility, and restore physical balance and comfort.
Key Ingredients:
Walnut Oil, Soybean Oil, Shatavari, Sichuan Pepper, Juniper, Catechu Tree, and other traditional herbal ingredients.
Directions for Use:
Apply gently to the affected area and massage twice daily, or as directed by a qualified practitioner.
Net Contents:
75 ml (2.54 fl. oz.)
`
  },
  {
    title: "3. Sorig Zathi-Dukpa",
    img: SSHC3,
    content: `Traditional Tibetan Herbal Compress for Calming & Restorative Balance
Prepared according to the classical principles of Sowa Rigpa, Sorig Zathi-Dukpa is a traditional herbal formulation designed for therapeutic hot compress application on specific Loong points, as guided in Tibetan healing practice. Traditionally valued for its warming and soothing properties, this formula is used to help restore internal balance, calm the nervous system, and promote overall physical and mental relaxation.
In Sowa Rigpa, Loong imbalance is associated with disturbances in the body’s subtle energy and nervous system. Zathi-Dukpa is traditionally appreciated for helping ease tension, support circulation, and promote calmness, clarity, and restorative wellbeing. It is also valued for supporting comfort during episodes of dizziness, restlessness, stiffness, sleep disturbance, and sensory imbalance.
Traditional Uses:
• Supports relaxation and nervous system balance
• Helps ease stiffness and physical tension
• Promotes calmness, clarity, and restful sleep
• Traditionally used to support comfort during dizziness, palpitations, and ringing in the ears
• Encourages overall balance and restorative wellbeing
Directions for Use:
Apply as a hot compress on designated Loong points as directed in the product leaflet or by a qualified practitioner.
`
  },
  {
    title: "4. Sorig (Zathi-Dukp) Heat Compress Oil",
    img: SSHC4,
    content: `Traditional Tibetan Herbal Oil for Calming, Warmth & Restorative Balance
Prepared according to the classical principles of Sowa Rigpa, Sorig Heat Compress Oil is a carefully crafted herbal oil designed to provide warming, soothing support for Loong imbalances in Tibetan healing practice. Traditionally valued for its calming and restorative properties, this therapeutic oil is used to promote relaxation, ease nervous tension, and support overall mental and physical balance.
Infused with warming botanical oils, it is traditionally appreciated for helping relieve stiffness, discomfort in the upper back and chest, and promoting comfort during restlessness, sleep disturbances, palpitations, dizziness, and sensory imbalance such as ringing in the ears. Regular use helps encourage circulation, relaxation, and a renewed sense of calm and wellbeing.
Key Ingredients:
Nutmeg Oil, Caraway Oil, Clove Oil, and Sesame Oil.
Directions for Use:
Warm gently before use by heating lightly or rubbing between the hands, then apply to the affected area and massage gently. For enhanced therapeutic benefit, use together with the Sorig Heat Compress Ball, or as directed by a qualified practitioner.
Net Volume:
100 ml

`
  },
  {
    title: "5. Sorig Baby Massage Oil",
    img: SSHC5,
    content: `Traditional Tibetan Herbal Oil for Gentle Nourishment & Healthy Development
Prepared according to the classical principles of Sowa Rigpa, Sorig Baby Massage Oil is a gentle herbal formulation specially crafted to nourish, protect, and support the healthy growth and development of infants. Traditionally valued in Tibetan healing practice, this soothing oil is used to help balance Loong energy while promoting relaxation, comfort, and overall wellbeing.
Enriched with carefully selected natural oils, it is traditionally appreciated for supporting healthy circulation, nourishing the skin, and promoting balanced muscle, nerve, and sensory development. Regular gentle massage helps soften and smooth the skin, encourage relaxation, and support a baby’s natural growth, vitality, and healthy development.
Key Ingredients:
Aqua, Apricot Kernel Oil, Sesame Seed Oil, Caraway Oil, Nutmeg Oil, Walnut Oil, and Sweet Orange Oil.
Directions for Use:
Apply gently to the baby’s body and massage softly until absorbed, or as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
`
  },
  {
    title: "6. Sorig Hot Medicinal Bath",
    img: SSHC6,
    content: `Traditional Tibetan Herbal Bath for Relaxation, Rejuvenation & Holistic Wellness
Prepared according to the classical principles of Sowa Rigpa, Sorig Hot Medicinal Bath is a carefully formulated herbal bath therapy designed to promote deep relaxation, restore vitality, and support overall physical and mental wellbeing. Inspired by traditional Tibetan healing practices and enriched with a blend of medicinal herbs together with the therapeutic qualities of water and warmth, this natural hot spring–like therapy offers a soothing and rejuvenating wellness experience.
Traditionally valued for helping ease body stiffness, relax tired muscles, stimulate healthy circulation, and support nerve function, this restorative bath is also appreciated for promoting internal balance, calming mental unrest, and revitalizing the body’s natural energy. Regular use helps nourish the skin, enhance complexion, encourage physical resilience, and support overall wellness and rejuvenation.
Key Ingredients:
Ephedra species, Rhododendron species, Artemisia species, Myricaria squamosa, Juniper, Processed Calcite, Trona, Sulphur, Tribulus terrestris, Shorea robusta, and a variety of traditional medicinal flowers and herbal ingredients.
Directions for Use:
Please refer to the leaflet inside the pouch for detailed application instructions, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
250 g
Top of Form
`
  },
  {
    title: "7. Sorig Herbal Talcum Powder",
    img: SSHC7,
    content: `Traditional Tibetan Herbal Care for Freshness, Comfort & Skin Wellness
Prepared according to the classical principles of Sowa Rigpa, Sorig Herbal Talcum Powder is a gentle herbal formulation designed to provide lasting freshness, comfort, and natural skin care. Traditionally inspired by Tibetan healing wisdom, this soothing powder helps absorb excess moisture, maintain skin freshness, and support comfort throughout the day.
Infused with carefully selected botanical oils and natural minerals, it is traditionally appreciated for helping control excess perspiration, reduce unpleasant body odor, soothe minor skin irritation, and calm heat-related discomfort such as rashes. Its fine, refreshing texture also helps soften, smoothen, and brighten the skin, leaving it feeling cool, comfortable, and naturally refreshed.
Key Ingredients:
Calcium Carbonate, Geranium Oil, Menthol Oil, Jasmine Oil, Rose Oil, and Talc.
Directions for Use:
Apply lightly to clean, dry skin as needed for freshness and comfort.
Storage:
Store in a cool, dry place away from direct sunlight.
`
  },
  {
    title: "8. Ta-Nuum Hair Oil",
    img: SSHC8,
    content: `Traditional Tibetan Herbal Oil for Healthy Hair & Scalp Nourishment
Prepared according to the classical principles of Sowa Rigpa, Sorig Ta-Nuum Hair Oil is a carefully crafted herbal formulation designed to nourish the scalp, strengthen hair from the roots, and promote healthy, naturally lustrous hair. Traditionally valued in Tibetan healing practice, this revitalizing oil is used to support scalp health, maintain hair vitality, and encourage the growth of strong, smooth, and shiny hair.

Enriched with a blend of nourishing botanical oils and medicinal herbs, it is traditionally appreciated for helping reduce dandruff, support healthy scalp balance, and maintain natural hair pigmentation, helping to minimize premature greying. In Tibetan healing practice, it is also valued for helping calm Loong imbalance, promoting relaxation and supporting overall sensory wellbeing.
Key Ingredients:
Apricot Oil (Prunus armeniaca), Sesame Oil, Neem (Azadirachta indica), Arura (Terminalia chebula), Amla (Emblica officinalis), Zanthoxylum piperitum, Onosma hookeri, and other traditional herbal ingredients.
Directions for Use:
Apply gently to the scalp and hair, massage thoroughly, and leave for adequate absorption before washing, or use as directed by a qualified practitioner.
Net Contents:
100 ml (3.38 fl. oz.)
`
  },
  {
    title: "9. Ta-Trued Daegu Herbal Shampoo",
    img: SSHC9,
    content: `Traditional Tibetan Herbal Care for Strong, Healthy & Nourished Hair
Prepared according to the classical principles of Sowa Rigpa, Sorig Ta-Trued Daegu Herbal Shampoo is a carefully formulated cleansing and nourishing hair care blend designed to support scalp health and promote strong, vibrant hair. Inspired by Tibetan healing wisdom, this gentle herbal shampoo helps cleanse the scalp effectively while nourishing the hair roots and maintaining natural balance.
Enriched with botanical extracts and nourishing oils, it is traditionally appreciated for helping strengthen hair follicles, control dandruff, reduce scalp irritation and itchiness, and support a healthy scalp environment. Regular use helps improve hair texture, enhance natural shine, and add softness, fullness, and vitality for healthy-looking hair.
Key Ingredients:
Amla (Emblica officinalis), Fenugreek (Trigonella foenum-graecum), Soapnut (Sapindus trifoliatus), Neem (Azadirachta indica), Glycerin, Orange Oil, Jasmine Oil, and other carefully selected ingredients.
Directions for Use:
Apply to wet hair, gently massage into the scalp and hair, lather well, and rinse thoroughly. Suitable for regular use.
Net Contents:
300 ml (10.14 fl. oz.)

`
  },
  {
    title: "10. Sorig Tsa-Juk",
    img: SSHC10,
    content: `Traditional Tibetan Herbal Support for Nerve & Muscular Comfort
Prepared according to the classical principles of Sowa Rigpa, Sorig Tsa-Juk is a carefully crafted herbal formulation designed to support nerve comfort, muscular relaxation, and overall physical mobility. Traditionally valued in Tibetan healing practice, this soothing preparation is used to help ease stiffness, support healthy nerve function, and promote comfort in the arms and legs during periods of physical tension or imbalance.
Enriched with pure natural herbs and warming botanical ingredients, it is traditionally appreciated for helping relieve muscular tightness, support flexibility, ease numbness and stiffness, and promote recovery from strain and sprain. Regular application helps restore comfort, improve mobility, and support overall musculoskeletal wellbeing.
Key Ingredients:
Sunflower Oil (Helianthus annuus), Beeswax (Cera alba), Mineral Wax (Ceresin), Nutmeg (Myristica fragrans), Caraway, Turmeric (Curcuma longa), and Zanthoxylum species.
Directions for Use:
Apply gently to the affected area and massage until absorbed, or use as directed by a qualified practitioner.
Net Contents:
50 g

`
  },
  {
    title: "11. Sorig Loong Lotion",
    img: SSHC11,
    content: `Traditional Tibetan Herbal Lotion for Skin Nourishment & Relaxation
Prepared according to the classical principles of Sowa Rigpa, Sorig Loong Lotion is a carefully formulated herbal moisturizer designed to nourish dry, rough, and sensitive skin while promoting overall skin health, comfort, and vitality. Inspired by Tibetan healing wisdom, this soothing lotion helps restore moisture balance, soften the skin, and support natural skin resilience.
Enriched with nourishing botanical oils and calming herbal ingredients, it is traditionally appreciated for its moisturizing and soothing properties that help ease skin irritation, promote relaxation, and enhance overall skin comfort. It is also valued for supporting healthy circulation and helping relieve heaviness, discomfort, and swelling in the extremities, contributing to a renewed sense of ease and wellbeing.
Key Ingredients:
Glyceryl Monostearate, Stearic Acid, Cetyl Alcohol, Petroleum Jelly, Apricot Oil, Sesame Oil, Caraway Oil, Cinnamon Oil, Nutmeg Oil, Aqua, and Preservatives.
Directions for Use:
Apply gently to clean skin and massage until absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
100 ml

`
  },
  {
    title: "12. Sorig Tripa Lotion",
    img: SSHC12,
    content: `Traditional Tibetan Herbal Lotion for Cooling, Soothing & Skin Vitality
Prepared according to the classical principles of Sowa Rigpa, Sorig Tripa Lotion is a carefully formulated herbal moisturizer designed to cool, soothe, and nourish the skin while supporting overall skin comfort and vitality. Inspired by Tibetan healing wisdom, this gentle lotion is traditionally valued for helping calm heat-related skin discomfort, ease irritation and itching, and restore moisture balance to dry or rough skin.
Enriched with nourishing botanical oils and soothing herbal ingredients, it is appreciated for helping maintain soft, smooth, and hydrated skin while promoting healthy circulation and natural skin resilience. Regular use helps refresh the skin, reduce discomfort associated with dryness and heat imbalance, and support a healthy, radiant complexion.
Key Ingredients:
Glyceryl Monostearate, Stearic Acid, Cetyl Alcohol, Beeswax (Cera Alba), Petroleum, Apricot Oil, Bitter Gourd Oil, Orange Oil, Cucumber Oil, Aqua, and Preservatives.
Directions for Use:
Apply gently to clean skin and massage until absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
100 ml

`
  },
  {
    title: "13 . Sorig Baekan Lotion",
    img: SSHC13,
    content: `Traditional Tibetan Herbal Lotion for Warmth, Comfort & Skin Vitality
Prepared according to the classical principles of Sowa Rigpa, Sorig Baekan Lotion is a carefully formulated herbal moisturizer designed to nourish the skin while promoting warmth, comfort, and overall physical wellbeing. Inspired by Tibetan healing wisdom, this soothing lotion is traditionally valued for helping support body warmth, ease muscular stiffness, and promote comfort in areas affected by heaviness or joint discomfort.
Enriched with nourishing botanical oils and calming herbal ingredients, its moisturizing and soothing properties help relieve dryness and skin irritation, support healthy circulation, and maintain soft, balanced, and healthy skin. Regular use helps refresh the body, improve skin comfort, and promote overall vitality and wellbeing.
Key Ingredients:
Glyceryl Monostearate, Stearic Acid, Cetyl Alcohol, Beeswax (Cera Alba), Petroleum Jelly, Soybean Oil, Pomegranate Oil, Ginger Oil, Aqua, and Preservatives.
Directions for Use:
Apply gently to clean skin and massage until absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
100 ml
Top of Form

Bottom of Form

`
  },
  {
    title: "14. Sorig Healing Ointment",
    img: SSHC14,
    content: `Traditional Tibetan Herbal Ointment for Skin Repair, Protection & Soothing Relief
Prepared according to the classical principles of Sowa Rigpa, Sorig Healing Ointment is a carefully crafted herbal formulation designed to support the healing of minor cuts, wounds, and common skin discomforts while helping protect and nourish the skin. Rooted in Tibetan healing wisdom, this traditional ointment is valued for its gentle antiseptic, calming, and restorative qualities that help maintain skin comfort and promote natural recovery.
Enriched with nourishing oils and traditional herbal ingredients, it helps soothe irritation, reduce inflammation, and support healthy skin balance. Regular use helps relieve dryness, itching, eczema, and minor fungal skin concerns while encouraging soft, healthy, and resilient skin.
Key Ingredients:
Sunflower Oil, Beeswax, Ceresin, Turmeric, Shatavari, Safflower, Small-Leaved Locoweed, Dandelion, Chebulic Myrobalan, Beleric Myrobalan, and Amla.
Directions for Use:
Apply gently to the affected area twice daily, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
20 g
For External Use Only

`
  },
  {
    title: "15.Sorig Saab-Gaay Ointment",
    img: SSHC15,
    content: `Traditional Tibetan Herbal Ointment for Skin Purification, Soothing Care & Natural Recovery
Prepared according to the classical principles of Sowa Rigpa, Sorig Saab-Gaay Ointment is a carefully crafted herbal formulation designed to support skin comfort, purification, and natural recovery. Rooted in Tibetan healing wisdom, this traditional remedy is valued for its soothing, cleansing, and protective properties that help maintain healthy, balanced skin.
Enriched with nourishing oils and traditional medicinal herbs, it is appreciated for helping calm skin irritation, ease allergic skin discomfort, and support clearer skin affected by acne and minor inflammatory skin concerns. It is also traditionally used to help soothe ringworm, abscesses, and long-standing skin discomforts while promoting healthy skin resilience and overall skin wellness.
Key Ingredients:
Sunflower Oil (Helianthus annuus), Beeswax (Cera alba), Ceresin (Mineral Wax), Oxytropis sp., Indian Acacia (Acacia catechu), and Neem (Azadirachta indica).
Directions for Use:
Apply gently to clean skin on the affected area, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
50 g
For External Use Only

`
  },
  {
    title: "16.Sorig Beauty Cream",
    img: SSHC16,
    content: `Traditional Tibetan Herbal Moisturizing Cream for Softness, Protection & Natural Radiance
Prepared according to the classical principles of Sowa Rigpa, Sorig Beauty Cream is a carefully crafted herbal moisturizer designed to nourish, soften, and protect the skin while enhancing its natural glow. Rooted in Tibetan healing wisdom, this gentle cream is valued for its moisturizing and skin-conditioning properties that help maintain healthy, balanced, and radiant skin.
Enriched with nourishing botanical oils and traditional ingredients, it helps improve skin texture, restore softness, and support long-lasting hydration, leaving the skin feeling smooth, supple, and refreshed. It is also appreciated for helping protect the skin from environmental stressors, dryness caused by harsh winter conditions, and everyday external exposure, while supporting overall skin comfort and vitality.
Especially suitable for dry and normal skin, regular use helps maintain moisture balance and promotes a naturally healthy, luminous complexion.
Key Ingredients:
Sunflower Oil (Helianthus annuus), Beeswax (Cera alba), Ceresin (Mineral Wax), and Borax.
Directions for Use:
Apply gently to clean skin and massage until fully absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
40 g (1.41 oz)

Top of Form
Bottom of Form

`
  },
  {
    title: "17.Sorig Anti-Wrinkle Cream",
    img: SSHC17,
    content: `Traditional Tibetan Herbal Cream for Firmness, Skin Renewal & Youthful Radiance
Prepared according to the classical principles of Sowa Rigpa, Sorig Anti-Wrinkle Cream is a carefully crafted herbal formulation designed to support skin firmness, improve elasticity, and help reduce the visible signs of premature aging. Rooted in Tibetan healing wisdom, this nourishing cream is traditionally valued for promoting smoother, healthier-looking skin while enhancing its natural vitality and youthful glow.
Enriched with botanical extracts, nourishing oils, and traditional herbal ingredients, it helps deeply moisturize the skin, improve texture, and support natural skin renewal. Regular use helps soften the appearance of fine lines, restore suppleness, and maintain skin resilience, while also helping protect the skin from blemishes, minor breakouts, and everyday environmental stressors.
Its rich herbal composition leaves the skin feeling soft, balanced, revitalized, and naturally radiant, making it an ideal addition to a daily skincare routine for maintaining youthful-looking skin.
Key Ingredients:
Pomegranate (Punica granatum), Berberry (Berberis aristata), Turmeric (Curcuma longa), Kurchi (Holarrhena floribunda), Tellicherry Bark, Beeswax (Cera alba), Ceresin (Mineral Wax), Apricot Oil (Prunus armeniaca), Borax, Sunflower Oil (Helianthus annuus), Aloe Vera Gel, and traditional herbal extracts.
Directions for Use:
Apply gently to clean skin and massage in upward circular motions until fully absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
50 g (1.76 oz)

`
  },
  {
    title: "18.Sorig Anti-Vitiligo Cream",
    img: SSHC18,
    content: `Traditional Tibetan Herbal Cream for Skin Balance, Comfort & Healthy Skin Support
Prepared according to the classical principles of Sowa Rigpa, Sorig Anti-Vitiligo Cream is a carefully crafted herbal formulation designed to support skin comfort, nourishment, and overall skin balance. Rooted in Tibetan healing wisdom, this traditional cream is valued for its soothing, restorative, and protective properties that help maintain healthy skin and promote natural skin resilience.
Enriched with nourishing oils and traditional medicinal herbs, it is appreciated for helping care for areas of patchy skin discoloration while supporting overall skin health and comfort. It also helps soothe dry, itchy, and cracked skin, while supporting relief from skin discomfort associated with psoriasis and minor fungal skin concerns. Regular use helps moisturize, calm irritation, and promote smoother, healthier-looking skin with improved comfort and balance.
Its gentle herbal composition helps keep the skin soft, nourished, and protected, making it suitable for daily skin care and long-term skin wellness support.
Key Ingredients:
Sunflower Oil (Helianthus annuus), Beeswax (Cera alba), Ceresin (Mineral Wax), Turmeric (Curcuma longa), Emblica Ribes, Iris species, Butea monosperma, Shatavari (Asparagus racemosus), and Abelmoschus moschatus.
Directions for Use:
Apply gently to clean skin on the affected area and massage until absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
40 g (1.41 oz)

`
  },
  {
    title: "19. Sorig Piles Relief Cream",
    img: SSHC19,
    content: `Traditional Tibetan Herbal Cream for Soothing Comfort & Gentle Care
Prepared according to the classical principles of Sowa Rigpa, Sorig Piles Relief Cream is a carefully crafted herbal formulation designed to provide soothing care and support comfort in areas affected by piles and related discomforts. Rooted in Tibetan healing wisdom, this traditional cream is valued for its calming, protective, and skin-soothing properties that help maintain comfort and support natural healing.
Enriched with nourishing oils and traditional medicinal herbs, it is appreciated for helping soothe irritation, ease discomfort, and support skin comfort in sensitive areas. Its gentle herbal composition helps calm itchiness, reduce swelling-related discomfort, and support healthy skin recovery while maintaining moisture balance and overall skin well-being.
Regular use helps provide a cooling, soothing sensation and promotes lasting comfort, making it a supportive herbal care formulation for maintaining daily comfort and skin health.
Key Ingredients:
Aqua, Beeswax (Cera alba), Ceresin, Sunflower Oil (Helianthus annuus), Borax, Apricot Oil (Prunus armeniaca), Holarrhena floribunda, Oxytropis microphylla, Shatavari (Asparagus racemosus), Chebulic Myrobalan (Terminalia chebula), Delphinium brunonianum, Adhatoda vasica, Embelia ribes, and approved preservatives.
Directions for Use:
Apply gently to clean skin on the affected area, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
50 g (1.76 oz)
For External Use Only

`
  },
  {
    title: "20. Sorig Daily Glow Cream",
    img: SSHC20,
    content: `Traditional Tibetan Herbal Cream for Radiance, Nourishment & Everyday Skin Protection
Prepared according to the classical principles of Sowa Rigpa, Sorig Daily Glow Cream is a carefully crafted herbal formulation designed to nourish, brighten, and revitalize the skin while supporting its natural softness and healthy glow. Rooted in Tibetan healing wisdom, this gentle daily cream is valued for its moisturizing, skin-conditioning, and protective properties that help maintain smooth, supple, and radiant-looking skin.
Enriched with nourishing botanical oils and traditional herbal ingredients, it helps improve skin texture, support moisture balance, and promote a naturally fresh, luminous complexion. Its herbal composition is also appreciated for helping protect the skin from environmental stressors such as sun exposure, dust, and daily pollutants while supporting overall skin comfort and vitality.
Regular use helps keep the skin soft, hydrated, and refreshed, while supporting skin elasticity and helping soften the appearance of fine lines for a smoother, healthier-looking complexion.
Key Ingredients:
Safflower, Ginger, Olive Oil, Bindii, Shatavari (Asparagus racemosus), Sweet Flag, Cetyl Alcohol, Beeswax, Aloe Vera Gel, Lemon Oil, Aqua, Ylang Ylang Oil, and Glyceryl Monostearate.
Directions for Use:
Apply gently to clean skin and massage until fully absorbed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
Net Contents:
40 g (1.41 oz)


`
  },
  {
    title: "21. Sorig All in Balm Cream",
    img: SSHC21,
    content: `Traditional Tibetan Herbal Balm for Comfort, Relief & Everyday Wellness Support
Prepared according to the classical principles of Sowa Rigpa, Sorig All in Balm Cream is a carefully crafted herbal formulation designed to provide soothing comfort and versatile wellness support for a variety of everyday discomforts. Rooted in Tibetan healing wisdom, this traditional balm is valued for its warming, calming, and restorative properties that help promote comfort, ease tension, and support natural well-being.
Enriched with aromatic botanicals, herbal oils, and traditional medicinal ingredients, it is appreciated for helping provide relief from discomfort associated with the common cold, seasonal congestion, headaches, and sinus-related heaviness. Its soothing herbal composition is also traditionally used to comfort tired muscles and joints, support relief from sprains and strains, calm minor skin irritation and insect bites, and promote natural recovery from everyday aches and discomforts.
Its refreshing herbal aroma helps create a soothing sensation that supports easy breathing, relaxation, and overall comfort, making it a versatile addition to daily wellness care.
Key Ingredients:
Chebulic Myrobalan (Terminalia chebula), Cinnamon (Cinnamomum verum), Cardamom (Elettaria cardamomum), Peppermint (Mentha piperita), Clove (Syzygium aromaticum), Eucalyptus Oil, Peppermint Oil, Carnauba Wax, Soybean Oil (Glycine soja), Carom Oil, and Mint Oil.
Directions for Use:
Rub gently onto the affected area, nostrils, or temporal regions as needed, or use as directed by a qualified practitioner.
Storage:
Store in a cool, dry place away from direct sunlight.
For External Use Only
Top of Form
Bottom of Form

Top of Form
Bottom of Form

Top of Form
Bottom of Form
Bottom of Form


`
  },
];

const Skincare = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="bg-spa-green">
        <Navbar />

        <div className="pt-32 pb-10 px-6 max-w-7xl mt-10 h-[200px] mx-auto">
          <Link to="/" className="flex inline-flex items-center gap-2 text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>

          <h1 className="inline-flex text-4xl text-center ml-[330px] text-white">
            Sorig Skin, Hair & Therapeutic Care
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <img src={SSHC} className="w-full max-w-md mx-auto mb-6" />

        <p className="text-xl font-bold">Instruction</p>
        <p className="text-sm text-gray-600 mb-10">
          Traditional Tibetan Herbal Care for Natural Wellness & Everyday Vitality
Inspired by the ancient wisdom of Sowa Rigpa, Sorig Skin, Hair & Therapeutic Care products are carefully formulated using natural herbs, botanical oils, and traditional healing ingredients to support daily wellness and holistic self-care.
Our herbal formulations are designed to nourish and protect the skin, support healthy hair and scalp, and provide soothing therapeutic care for everyday comfort and well-being. Rooted in Tibetan healing traditions, each product combines time-honored herbal knowledge with gentle, effective care to promote balance, vitality, and natural radiance.
Natural Healing • Traditional Wisdom • Holistic Care

        </p>

        <div className="space-y-5">
          {sections.map((item, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`w-full p-4 flex justify-between ${
                  activeIndex === i ? "bg-spa-green text-white" : "bg-gray-100"
                }`}
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
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Skincare;