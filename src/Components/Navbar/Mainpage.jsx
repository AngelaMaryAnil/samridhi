import React from "react";
import Slider from "../Slider/Slider";
import Card from "../Card/Card"; // Import the Card component
import './Navbar.css';

const cardsData = [
  {
    image: "/IMAGESS/rubber1.png.jpg",
    title: "RUBBER",
    description: "The Crop that gives Back.",
    details: `
### Rubber Farming

#### Ideal Climate and Soil Conditions
- **Climate:** Rubber (*Hevea brasiliensis*) thrives in tropical climates with:
  - Annual rainfall: 2000-4500 mm
  - Temperature: 25°C to 34°C
  - Relative humidity: ~80%
- **Soil:** Deep, well-drained, fertile lateritic soil with:
  - pH: 4.5 to 6.0 (slightly acidic)
  - Low phosphorus content
- **Wind Conditions:** Avoid areas with heavy winds for better tree stability.

#### Planting Season
- **South India:** Ideal planting period is **June to July**, aligning with the monsoon.
- **Preparation:** Complete all pre-planting tasks before the rainy season.

#### Propagation Methods
Rubber is propagated through the following techniques:
- Green Budding
- Brown Budding
- Crown Budding

#### Nursery Practices
1. **Bed Preparation:**
   - Width: 60-120 cm
   - Length: Convenient for maintenance
2. **Spacing:**
   - Seedling stumps: 23 x 23 cm, 30 x 30 cm, or 34 x 20 cm
   - Budded stumps: 30 x 30 cm
   - Stump budding: 60 x 60 cm
   - Bud wood nursery: 60 x 90 cm or 60 x 120 cm

#### Manuring in Seedling Nursery
- **Basal Application:**
  - 2.5 tons/ha of farmyard manure (FYM)
  - 350 kg/ha of rock phosphate
- **Post-Planting Fertilization:**
  - At 1.5-2 months: 2500 kg/ha of 10:10:4:1.5 NPKMg
  - At 3-3.5 months: 550 kg/ha of urea

#### Field Planting Guidelines
1. **Pit Preparation:**
   - Dig 1 cubic meter pits
   - Fill with topsoil and compost
2. **Spacing and Plant Population:**
   - **Budded Plants:**
     - Hilly areas: 6.7 x 3.4 m (445 plants/ha)
     - Plains: 4.9 x 4.9 m (420 plants/ha)
   - **Seedlings:**
     - Hilly areas: 6.1 x 3.0 m (539 plants/ha)
     - Plains: 4.6 x 4.6 m (479 plants/ha)

#### Manuring Schedule
1. **Immature Trees (Pre-Tapping Stage):**
   - Before Planting: 12 kg of compost/FYM and 120 g of rock phosphate per pit
   - Post-Planting: Use 10:10:4:1.5 NPKMg mixture per growth phase
2. **Mature Trees (Under Tapping):**
   - Apply 900 g/tree (300 kg/ha) of 10:10:10 NPK annually in two split doses
   - For magnesium deficiency: Add 10 kg of magnesium sulfate per 100 kg of NPK

#### Aftercare Practices
- Regular weeding and mulching
- Grow and incorporate cover crops such as:
  - *Pueraria phaseoloides*
  - *Calopogonium mucunoides*
  - *Centrosema pubescens*
  - *Desmodium ovalifolium*

#### Tapping Methods
- **Procedure:** Make precise incisions on the bark to extract latex.
- **Systems:** Use half-spiral cuts on alternate days.
- **Yield Enhancement:** Apply Ethrel (5% concentration) below the tapping cut after light scraping, but avoid continuous application for more than three years.

#### Pest Management
1. **Scale Insects:**
   - Treat severe infestations with malathion 50 EC (2 ml/liter).
2. **Mealybugs:**
   - Use fish oil rosin soap (25 g/liter) and biological agents like Australian ladybird beetles (*Cryptolaemus montrouzieri*).

For comprehensive rubber farming practices, follow these guidelines to ensure healthy growth and optimal latex yield.
    `
  },
  // Add other crops like Nutmeg, Avocado, etc.


  {
    image: "/IMAGESS/nutmeg3.png.jpg",
    title: "NUTMEG",
    description: "The Spice of Warmth."
  },
  {
    image: "/IMAGESS/avacado2.png.jpg",
    title: "AVOCADO",
    description: "Go Green with Avocados."
  },
  {
    image: "/IMAGESS/cardamom1.png.jpg",
    title: "CARDAMOM",
    description: "The Flavor Enhancer."
  }
];


const SliderWithCards = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Render the Slider component */}
      <Slider />
      
      {/* Card Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderWithCards;
