import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Stethoscope,
  Heart,
  Leaf,
  Eye,
  Pill,
  Compass,
  Activity,
  Shield,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import pluse from "@/assets/Pulsediagonse.png";
import Aconditionsthattreateffectively from "@/assets/Aconditionsthat treateffectively.png";
import lifestyle from "@/assets/lifestyle&diet.png";
import Urine from "@/assets/2Urine.png";
import tounge from "@/assets/tounge&eye.png";
import toungeTibetanHerbalMedicine from "@/assets/TibetanHerbalMedicine.png";
import Theraphy from "@/assets/Theraphy.png";
import Pre from "@/assets/Preventive.jpeg";

const services = [
  {
    icon: Stethoscope,
    title: "Online & Offline Consultation",
    desc: "Authentic Sowa Rigpa consultation through secure video call for patients across India, offering diagnosis, treatment guidance, and Tibetan herbal remedies delivered nationwide.",
    image: "/images/service1.jpg",
  },
  {
    icon: Activity,
    title: "Pulse Reading Diagnosis",
    desc: "A fundamental diagnostic method in Tibetan medicine that evaluates the body's three constitutional energies through precise pulse reading to identify the root cause of imbalance.",
    popdesc: `A Classical Diagnostic Method in Tibetan Medicine
Pulse Reading Diagnosis is one of the most refined and essential diagnostic methods in Sowa Rigpa, used to assess the body’s internal condition through careful examination of the pulse. In Tibetan medicine, the pulse is regarded as a subtle messenger of the body’s health, reflecting the condition of the organs, circulation, vitality, and the balance of the three constitutional energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm).
A skilled Tibetan physician reads the pulse by observing its strength, rhythm, depth, speed, quality, and movement, allowing insight into energetic imbalances and the underlying causes of physical or mental discomfort. This classical method helps identify imbalances early, often before clear symptoms arise, supporting preventive and personalized healing.
Three Constitutional Energies & Pulse Characteristics
Lung (Wind)
Associated with movement, breathing, circulation, the nervous system, and mental activity. A Lung pulse is traditionally described as light, floating, irregular, and quick-moving, often compared in Tibetan texts to the movement of a leaf in the wind—subtle, restless, and variable in rhythm. Disturbed Lung may relate to restlessness, anxiety, insomnia, dryness, or nervous imbalance.
Tripa (Bile)
Associated with digestion, body heat, metabolism, liver function, clarity, and sharpness of mind. A Tripa pulse is described as strong, sharp, forceful, and warm, often compared to the leap of a frog—active, tense, and vigorous. Excess Tripa may indicate heat-related conditions, inflammation, irritability, acidity, or heightened internal fire.
Beken (Phlegm)
Associated with structure, lubrication, stability, immunity, strength, and calmness. A Beken pulse is traditionally described as deep, slow, heavy, smooth, and steady, often likened to the glide of a swan on water—calm, broad, and grounded. Imbalanced Beken may manifest as sluggish digestion, heaviness, congestion, lethargy, or fluid accumulation.
By understanding these subtle pulse qualities, Tibetan medicine seeks to identify the root cause of imbalance, guiding treatment toward restoring harmony of body, energy, and mind for long-term well-being.
`,
    image: pluse,
  },
  {
    icon: Eye,
    title: "Urine Analysis Diagnosis",
    desc: "A traditional diagnostic method where urine characteristics such as color, vapor, bubbles, and sediment are examined to understand internal health conditions.",
    popdesc: `A Classical Diagnostic Method in Tibetan Medicine
In Sowa Rigpa, urine analysis is one of the important classical diagnostic methods used to understand the body’s internal condition. A trained Tibetan physician carefully examines the color, smell, vapor (steam), bubbles, sediment, and overall quality of freshly passed urine, as these characteristics are believed to reflect digestive strength, metabolic heat, organ function, fluid balance, and the condition of the three constitutional energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm).
This traditional method provides valuable insight into whether an imbalance is related to heat, cold, dryness, dampness, stagnation, or accumulation, helping identify the root cause of illness and guiding a personalized treatment approach.
Three Constitutional Energies & Urine Characteristics
Lung (Wind)
When Lung is disturbed, urine is often described as clear, thin, light, and more frothy, with fine bubbles that rise quickly and disappear easily. The smell is generally mild, vapor is light, and sediment is minimal. This may indicate dryness, irregular digestion, nervous imbalance, restlessness, or fluctuating vitality.
Tripa (Bile)
When Tripa is aggravated, urine may appear deep yellow, golden, or reddish-yellow, often with a stronger odor, visible steam, active bubbles, and denser sediment. The warmth and intensity of the urine reflect excess internal heat, inflammation, sharp digestion, or heat-related disorders.
Beken (Phlegm)
When Beken predominates, urine is typically pale, cloudy, heavier, and cooler in quality, with fewer bubbles, mild odor, little vapor, and thicker sediment that settles slowly. This pattern is traditionally associated with sluggish digestion, fluid retention, heaviness, coldness, congestion, and accumulation-type imbalances.
By combining urine analysis with pulse reading, clinical observation, and patient history, Tibetan medicine offers a holistic understanding of health—supporting the restoration of harmony between body, energy, and mind.
`,
    image: Urine,
  },
  {
    icon: Compass,
    title: "Tongue, Eyes & Clinical Observation",
    desc: "The practitioner carefully observes the tongue, eyes, skin tone, and overall appearance to identify imbalances in Lung (wind), Tripa (bile), and Beken (phlegm).",
    popdesc:`A Visual Diagnostic Method in Tibetan Medicine
In Sowa Rigpa, careful observation of the tongue, eyes, skin tone, facial complexion, posture, voice, and overall appearance forms an important part of clinical diagnosis. This classical method allows the practitioner to assess the body’s internal condition by observing outward signs that reflect the balance or disturbance of the three constitutional energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm).
A trained Tibetan physician evaluates the color, moisture, coating, texture, and movement of the tongue, as well as the clarity, brightness, moisture, redness, and expression of the eyes. These observations, together with complexion and general physical appearance, provide valuable insight into digestion, circulation, vitality, internal heat or cold, and energetic imbalance.
Three Constitutional Energies & Clinical Characteristics
Lung (Wind)
When Lung (Wind) is disturbed, the tongue may appear dry, rough, thin, slightly reddish, or cracked, often lacking moisture. The eyes may appear dry, restless, dull, or slightly sunken, sometimes with an unsteady gaze or signs of fatigue. The overall appearance may reflect nervous tension, dryness, lightness, and irregularity.
Tripa (Bile)
When Tripa (Bile) is aggravated, the tongue is often reddish or deep pink, warm in appearance, and may have a yellowish coating, reflecting internal heat. The eyes may appear bright, sharp, reddish, yellowish, or sensitive to light, often showing intensity or heat. The complexion may appear flushed or warm, indicating strong metabolic fire or inflammatory imbalance.
Beken (Phlegm)
When Beken (Phlegm) predominates, the tongue may appear pale, broad, smooth, moist, and often coated with a thick white layer, indicating heaviness, dampness, or sluggish digestion. The eyes may appear large, calm, heavy-lidded, pale, or watery, sometimes with a dull or cloudy appearance. The overall presentation may reflect heaviness, coolness, stability, and fluid accumulation.
By combining these visual observations with pulse reading, urine analysis, and patient history, Tibetan medicine seeks to identify the root cause of imbalance, guiding treatment toward restoring harmony of body, energy, and mind for lasting health and well-being.
`,
    image: tounge,
  },
  {
    icon: Pill,
    title: "Authentic Tibetan Herbal Medicine",
    desc: "Treatment using natural high-altitude Tibetan herbal formulations prepared according to classical Sowa Rigpa medical texts to restore internal balance.",
    popdesc:`Classical Himalayan Herbal Healing in the Tradition of Tibetan Medicine
In Sowa Rigpa, herbal medicine is one of the principal pillars of healing, prepared according to classical medical texts that preserve centuries of Himalayan therapeutic wisdom. Authentic Tibetan herbal formulations are carefully crafted from natural medicinal plants, minerals, and precious botanicals selected for their energetic qualities, therapeutic actions, and ability to restore harmony among the three constitutional energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm).
Tibetan medicine recognizes that each medicinal substance possesses distinct qualities such as warming, cooling, moistening, drying, light, heavy, sharp, or gentle, and these properties are skillfully combined to address specific patterns of imbalance. Treatment is therefore personalized, aiming not only to relieve symptoms but to correct the underlying energetic disturbance and restore the body’s natural balance.
Medicinal Parts of Plants in Tibetan Herbal Medicine
Classical Tibetan materia medica values different parts of a plant for their unique medicinal strengths:
Roots – Deeply nourishing and grounding, roots are often used to strengthen vitality, support digestion, restore depleted energy, and treat chronic conditions.
Stems & Branches – Traditionally valued for supporting circulation, movement, flexibility, and the flow of nutrients and energy through the body.
Leaves – Light, cleansing, and often cooling in nature, leaves are commonly used to support detoxification, digestion, respiratory health, and purification.
Bark – Rich and concentrated, bark is traditionally used for warming therapies, strengthening tissues, supporting circulation, and addressing stubborn or deep-seated imbalances.
Flowers – Fragrant, subtle, and often balancing, flowers are valued for calming the mind, supporting the heart, improving complexion, and harmonizing delicate energetic disturbances.
Seeds & Fruits – Potent and concentrated, seeds are often used to stimulate digestion, nourish tissues, support vitality, and enhance the therapeutic strength of formulations.
Altitude & Energetic Nature of Medicinal Plants
Tibetan medicine also recognizes that altitude, climate, and habitat influence medicinal potency:
High-Altitude Alpine Herbs – Plants growing in the pure, harsh Himalayan highlands are often considered highly potent, penetrating, and energetically powerful, valued for vitality, resilience, circulation, and deep therapeutic action.
Cooling Herbs – Herbs with cooling properties are traditionally used to calm Tripa (Bile) conditions such as excess heat, inflammation, irritability, and burning sensations.
Warming Herbs – Warming herbs help pacify Lung (Wind) and Beken (Phlegm) disorders by supporting digestion, circulation, warmth, and energetic movement.
Moderate / Balancing Herbs – Neutral or harmonizing herbs are used to gently support overall wellness, maintain constitutional balance, and complement stronger medicinal ingredients.
Prepared with reverence for nature and guided by precise classical formulation principles, Authentic Tibetan Herbal Medicine represents a holistic system of healing—where the wisdom of mountains, plants, and ancient medical science comes together to restore balance, vitality, and long-term well-being.
`,
    image: Aconditionsthattreateffectively,
  },
  {
    icon: Leaf,
    title: "Sowa Rigpa Lifestyle Guidance",
    desc: "Personalized dietary advice, daily routines, and lifestyle corrections based on individual body constitution to maintain health and prevent disease.",
    popdesc:`Personalized Living for Balance, Prevention & Long-Term Well-being
In Sowa Rigpa, health is maintained not only through medicine, but through right diet, proper conduct, seasonal adaptation, and balanced daily habits. As explained in the Explanatory Tantra (Chapter 16), lifestyle guidance is an essential pillar of preventive medicine, teaching that many illnesses arise when one’s habits, food, and behavior become contrary to their natural constitution.
Sowa Rigpa provides personalized guidance according to an individual’s constitutional makeup—Lung (Wind), Tripa (Bile), and Beken (Phlegm)—helping maintain harmony in body, energy, and mind. This includes recommendations on food choices, sleep patterns, work-rest balance, exercise, emotional discipline, and seasonal routines, all adapted to one’s age, strength, environment, and present condition.
Core Principles of Lifestyle Guidance
Balanced Diet
Food is considered the first medicine. Choosing foods according to one’s constitution, digestive strength, season, and current imbalance helps maintain vitality and prevent disease.
Daily Routine
Regular sleeping, waking, eating, working, and resting at appropriate times supports digestion, mental clarity, circulation, and natural biological rhythm.
Seasonal Adaptation
As climate changes, the body’s energies also shift. Sowa Rigpa advises adjusting diet, clothing, activity, and therapies according to seasonal influences to prevent imbalance.
Moderation in Conduct
Excessive strain, irregular sleep, emotional extremes, overwork, improper sexual conduct, and unhealthy habits are viewed as causes of energetic disturbance. Moderation preserves strength and longevity.
Mental & Emotional Balance
Calmness, compassion, patience, and mindful living are considered powerful medicine for maintaining internal harmony, while anger, fear, attachment, and chronic stress disturb the constitutional energies.
By aligning daily life with natural law, Sowa Rigpa Lifestyle Guidance helps cultivate prevention before disease, balance before imbalance, and health before treatment becomes necessary—supporting a life of vitality, clarity, and lasting well-being.
Top of Form
`,
    image: lifestyle,
  },
  {
    icon: Heart,
    title: "External Tibetan Therapies",
    desc: "Traditional treatments including acupuncture, moxibustion, cupping, and venesection designed to improve circulation and release energy blockages.",
    popdesc:`Traditional Healing Methods for Restoring Balance, Circulation & Vital Energy
In Sowa Rigpa, external therapies are an important branch of treatment used to restore balance, improve circulation, relieve pain, and support the body’s natural healing process. These therapies are selected according to the patient’s constitution, disease pattern, and the imbalance of Lung (Wind), Tripa (Bile), and Beken (Phlegm). Each therapy has its own unique characteristic, therapeutic action, and healing benefit.

1. Ku Nye Massage Therapy
Traditional Tibetan Therapeutic Massage for Relaxation & Rejuvenation
Characteristic:
Ku Nye is one of the most well-known Tibetan external therapies, using warm herbal oils, gentle pressure, kneading, rubbing, and acupressure techniques to relax the body and calm the mind. “Ku” means applying oil, and “Nye” refers to massage and manipulation of the body.
Benefits & Uses:
• Relieves muscle stiffness, body aches, and joint discomfort
• Improves blood circulation and lymphatic flow
• Calms disturbed Lung (Wind) energy, helping with stress, insomnia, anxiety, and nervous tension
• Supports flexibility, mobility, and physical relaxation
• Nourishes the skin, muscles, and subtle energy channels
• Promotes deep rejuvenation and overall vitality

2. Moxibustion Therapy
Therapeutic Heat Stimulation for Deep Healing & Energy Activation
Characteristic:
Moxibustion involves applying controlled therapeutic heat—traditionally from burning medicinal herbs—on specific energy points to stimulate warmth, circulation, and healing deep within the tissues.
Benefits & Uses:
• Warms cold conditions in the body
• Improves circulation and energy flow
• Relieves chronic pain, stiffness, and weakness
• Supports digestive strength and metabolic warmth
• Helps with arthritis, joint pain, cold disorders, and fatigue
• Strengthens vitality and immune resilience

3. Copper Cupping Therapy
Traditional Tibetan Suction Therapy for Circulation & Detoxification
Characteristic:
Copper cups are applied to specific areas of the body to create gentle suction, drawing stagnant blood, toxins, and blocked energy toward the surface while stimulating circulation.
Benefits & Uses:
• Improves blood flow and energy circulation
• Relieves muscular tightness and chronic pain
• Helps remove stagnation and metabolic waste
• Supports respiratory health and chest congestion relief
• Useful for stiffness, fatigue, inflammation, and toxin accumulation
• Promotes lightness and physical recovery

4. Acupuncture Therapy
Precision Energy Point Therapy for Internal Balance
Characteristic:
Fine sterile needles are carefully inserted into specific Tibetan therapeutic points to regulate the flow of energy, stimulate healing pathways, and restore constitutional balance.
Benefits & Uses:
• Relieves pain and nerve-related discomfort
• Supports circulation and energy flow
• Helps balance disturbed Lung, Tripa, and Beken energies
• Used for headaches, insomnia, digestive issues, hormonal imbalance, and stress disorders
• Supports neurological and musculoskeletal healing
• Encourages holistic mind-body balance

5. Golden Needle Therapy
Traditional Heat Needle Therapy for Deep Chronic Conditions
Characteristic:
Golden Needle Therapy is a specialized Tibetan therapy using heated metallic needles applied to selected points to deliver deep penetrating warmth and stimulate healing in chronic conditions.
Benefits & Uses:
• Effective for chronic joint and nerve pain
• Helps reduce stiffness, numbness, and cold disorders
• Stimulates deep tissue circulation
• Supports musculoskeletal strength and mobility
• Helps with paralysis, chronic weakness, and energy blockages
• Restores warmth and vitality to affected areas

6. Venesection & Hijam Therapy
Traditional Bloodletting & Therapeutic Extraction for Purification
Characteristic:
This cleansing therapy removes stagnant or impure blood through controlled venesection or therapeutic extraction methods, helping reduce toxic accumulation and excess heat.
Benefits & Uses:
• Helps clear stagnant blood and internal heat
• Supports detoxification and purification
• Useful in inflammatory and congestion-related conditions
• May help relieve gout, swelling, skin conditions, and vascular stagnation
• Improves circulation and tissue oxygenation
• Helps restore energetic clarity and balance

7. Zathi Zukpa / Hor Mey Therapy
Traditional Tibetan Herbal Heat Compression for Nervous System Balance
Characteristic:
Hor Mey uses warm herbal oil or medicinal seed compresses applied to specific energy points, especially for calming disturbed Lung (Wind) energy and nourishing subtle channels.
Benefits & Uses:
• Deeply calms the nervous system
• Helps with anxiety, insomnia, panic, and emotional imbalance
• Relieves tension, dizziness, and nervous weakness
• Supports mental clarity and restful sleep
• Restores warmth and comfort to the body
• Particularly beneficial for stress-related disorders and disturbed Wind energy
`,
    image: Theraphy,
  },
  {
    icon: Shield,
    title: "Chronic Disease & Pain Management",
    desc: "Holistic treatment approach for conditions such as joint pain, digestive disorders, fatigue, stress, and hormonal imbalance.",
    popdesc:`Holistic Tibetan Care for Long-Term Health, Balance & Natural Recovery
In Sowa Rigpa, illness is understood as an imbalance of the three constitutional energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm)—influenced by diet, lifestyle, emotions, environment, and weakened digestion or vitality. Treatment focuses on correcting the root cause, restoring internal harmony, and strengthening the body’s natural healing intelligence through authentic herbal medicine, dietary correction, lifestyle guidance, detoxification, and external Tibetan therapies.

1) Digestive Disorders
(Acidity, Gastritis, Indigestion, Bloating, IBS, Poor Appetite)
Common Causes:
Irregular eating habits, overeating, spicy/oily food, excessive tea/coffee, stress, weak digestion, and disturbed Tripa (Bile) or Beken (Phlegm).
Tibetan Treatment Approach:
• Herbal digestive formulations
• Metabolic balancing medicine
• Dietary correction based on constitution
• Gentle detoxification and digestive strengthening
• Stress calming therapies if digestion is stress-related
Lifestyle & Precautions:
• Eat warm freshly cooked meals
• Avoid overeating and late-night meals
• Reduce processed, oily, and very spicy foods
• Maintain regular meal timing
• Avoid eating when emotionally stressed

2) Joint Pain, Arthritis & Back Pain
Common Causes:
Cold exposure, aging, inflammation, poor circulation, calcium depletion, chronic stress, and aggravated Lung (Wind) with Beken accumulation.
Tibetan Treatment Approach:
• Anti-inflammatory herbal medicines
• Ku Nye Massage Therapy
• Moxibustion for cold stiffness
• Golden Needle / Acupuncture for pain relief
• Copper Cupping for circulation support
Lifestyle & Precautions:
• Keep body warm
• Avoid cold food and cold environments
• Gentle stretching and walking
• Avoid overexertion
• Regular oil massage for joints

3) Stress, Anxiety, Insomnia & Heart-Related Stress Conditions
Common Causes:
Mental overwork, emotional burden, fear, grief, irregular sleep, overthinking, and disturbed Lung (Wind) energy.
Tibetan Treatment Approach:
• Mind-calming herbal medicines
• Hor Mey Therapy (Zathi Zukpa)
• Relaxation incense and meditation support
• Sleep-supportive herbal formulations
• Nervous system nourishing therapies
Lifestyle & Precautions:
• Maintain sleep routine
• Reduce screen exposure at night
• Meditation, breathing practice, prayer
• Warm nourishing meals
• Avoid overstimulation, excessive worry, and exhaustion

4) Skin Disorders
(Psoriasis, Eczema, Chronic Itching, Allergic Skin Conditions)
Common Causes:
Blood heat, liver imbalance, poor digestion, toxin accumulation, food allergies, and aggravated Tripa (Bile).
Tibetan Treatment Approach:
• Blood purifying herbal medicine
• Cooling herbal formulations
• Skin healing ointments and creams
• Dietary cleansing support
• External purification therapies
Lifestyle & Precautions:
• Avoid excessive spicy, fried, and acidic foods
• Drink sufficient water
• Avoid harsh chemicals on skin
• Manage stress
• Maintain clean digestion and bowel regularity

5) Respiratory Disorders
(Asthma, Allergy, Sinusitis, Chronic Cough, Breathing Difficulty)
Common Causes:
Cold exposure, mucus accumulation, weak lungs, allergies, pollution, and aggravated Beken (Phlegm).
Tibetan Treatment Approach:
• Lung strengthening herbs
• Herbal fumigation / incense purification
• Circulation improving therapies
• Diet to reduce mucus
• Constitutional balancing medicine
Lifestyle & Precautions:
• Avoid cold drinks and iced foods
• Protect from dust and smoke
• Breathing exercises
• Warm soups and herbal teas
• Keep chest and throat warm

6) Kidney & Liver Support
Common Causes:
Poor diet, alcohol, stress, toxin accumulation, weak circulation, chronic inflammation, and constitutional imbalance.
Tibetan Treatment Approach:
• Organ-supportive herbal medicine
• Detoxifying formulations
• Circulation support
• Digestive strengthening
• Lifestyle correction
Lifestyle & Precautions:
• Hydrate well
• Reduce processed foods
• Avoid alcohol and toxins
• Proper sleep
• Gentle physical activity

7) Migraine & Neurological Conditions
Common Causes:
Stress, hormonal shifts, nervous exhaustion, disturbed circulation, sleep deprivation, and aggravated Lung or Tripa.
Tibetan Treatment Approach:
• Nervous system calming medicine
• Acupuncture / Golden Needle therapy
• Hor Mey therapy
• Herbal oils and head therapies
• Lifestyle regulation
Lifestyle & Precautions:
• Regular sleep
• Reduce stress triggers
• Avoid skipping meals
• Limit bright screens
• Calm and balanced routine

8) Hormonal & Women’s Health Support
Common Causes:
Stress, nutritional depletion, poor digestion, constitutional weakness, and energetic imbalance.
Tibetan Treatment Approach:
• Hormonal balancing herbs
• Reproductive vitality support
• Digestive correction
• Circulatory support therapies
• Personalized constitution-based care
Lifestyle & Precautions:
• Balanced diet
• Proper rest
• Stress reduction
• Gentle exercise
• Seasonal self-care

9) Cancer Supportive Care
Holistic Supportive Care Only
Tibetan medicine may be used as supportive complementary care to help improve quality of life, digestion, strength, sleep, emotional stability, and overall vitality during difficult illness or recovery.
Support Focus:
• Appetite and digestion support
• Stress relief and emotional calm
• Energy and sleep support
• Gentle detoxification support
• Improved comfort and resilience
Important:
Tibetan medicine should be used alongside guidance from qualified medical specialists, not as a replacement for essential medical treatment.

10) Autoimmune & Chronic Conditions
Examples:
Chronic inflammation, unexplained fatigue, recurring skin disorders, long-standing systemic imbalance, pain syndromes.
Tibetan Treatment Approach:
• Root-cause constitutional balancing
• Anti-inflammatory herbal formulations
• Digestive strengthening
• Detoxification support
• Lifestyle correction and long-term healing care
Lifestyle & Precautions:
• Anti-inflammatory diet
• Stress management
• Consistent sleep
• Moderate exercise
• Avoid exhaustion and irregular habits

Body • Energy • Mind • Restored Balance • Lasting Wellness
`,
    image: toungeTibetanHerbalMedicine,
  },
  {
    icon: Sparkles,
    title: "Preventive Health & Wellness Care",
    desc: "Focus on maintaining long-term health through early diagnosis, herbal medicine, and lifestyle balance.",
    popdesc:`Preserving Health Through Balance, Early Diagnosis & Holistic Living
In Sowa Rigpa, the highest form of medicine is prevention before illness arises. Tibetan medicine teaches that true health is not merely the absence of disease, but a balanced state of body, energy, mind, digestion, and lifestyle in harmony with nature. By recognizing subtle early signs of imbalance, Sowa Rigpa focuses on maintaining wellness, strengthening vitality, and preventing disease before it develops into a serious condition.
Preventive care begins with understanding each person’s unique constitution and the balance of the three energies—Lung (Wind), Tripa (Bile), and Beken (Phlegm). Through classical diagnostic methods such as pulse reading, urine analysis, tongue and eye observation, and clinical assessment, Tibetan physicians can identify early disturbances in the body and guide timely correction.
Core Principles of Preventive Care in Tibetan Medicine
Early Diagnosis & Constitutional Assessment
Careful examination helps detect subtle imbalances before symptoms become chronic, allowing early intervention and personalized care.
Authentic Herbal Medicine
Traditional herbal formulations are used to support digestion, circulation, immunity, detoxification, organ health, and constitutional balance, helping maintain long-term vitality.
Personalized Diet & Nutrition
Food is regarded as daily medicine. Eating according to one’s body constitution, digestive strength, season, and current energetic state helps prevent imbalance and supports natural healing.
Balanced Lifestyle Guidance
Proper sleep, regular routine, emotional balance, moderate exercise, mindful living, and seasonal adaptation are essential pillars of maintaining health in Sowa Rigpa.
External Therapies for Wellness
Treatments such as Ku Nye massage, Hor Mey therapy, moxibustion, cupping, and acupuncture may be used to improve circulation, reduce stress, strengthen vitality, and maintain energetic balance.
Mental & Spiritual Well-being
Tibetan medicine recognizes that peace of mind, emotional discipline, compassion, meditation, and spiritual harmony play a profound role in preserving health and longevity.
Through a holistic combination of early diagnosis, natural herbal medicine, proper diet, balanced lifestyle, and mind-body harmony, Preventive Health & Wellness Care in Sowa Rigpa offers a natural path toward lasting vitality, disease prevention, and lifelong well-being.
Prevention • Balance • Vitality • Long-Term Wellness
`,
    image: Pre,
  },
];

const ServicesTreatments = () => {
  const [selectedService, setSelectedService] = useState(null);

  const isDisabled = (title: string) =>
    title === "Online & Offline Consultation" ;
  // ||
    // title === "Preventive Health & Wellness Care";

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="bg-spa-green ">
        <Navbar />

        <div className="pt-40 pb-10 px-6 max-w-7xl mx-auto mt-50">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="inline-flex text-4xl ml-[330px] text-white mb-4">
            Services & Treatments
          </h1>

          <p className="text-white/70 text-center text-sm max-w-2xl mx-auto">
            True healing arises when compassion meets wisdom.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => {
                if (!isDisabled(s.title)) {
                  setSelectedService(s);
                }
              }}
              className={`bg-section-bg rounded-lg p-6 transition-shadow 
                ${
                  isDisabled(s.title)
                    ? "cursor-default"
                    : "hover:shadow-md cursor-pointer"
                }`}
            >
              <s.icon className="w-8 h-8 text-spa-green mb-4" />
              <h3 className="text-lg font-serif mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white  w-full rounded-lg overflow-hidden shadow-lg flex"
            onClick={(e) => e.stopPropagation()}
          >
            <button
  onClick={() => setSelectedService(null)}
  className="absolute top-3 right-3 h-9 w-9 text-lg flex items-center justify-center border border-gray-300 rounded-full bg-blue-950 text-white hover:text-white/70"
>
  ✕
</button>

            {/* IMAGE */}
            <img
              src={selectedService.image}
              className="w-[60%] object-cover"
            />

            {/* TEXT */}
            <div className="w-[40%] p-6 overflow-y-auto max-h-[80vh]">
              <h2 className="text-2xl mb-4">
                {selectedService.title}
              </h2>

              <p className="text-sm whitespace-pre-line">
                {selectedService.popdesc || selectedService.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServicesTreatments;