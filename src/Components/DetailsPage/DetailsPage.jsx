import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {
  const location = useLocation();
  const { title, description, image, details } = location.state || {};

  // Farming details for specific crops
  const cropDetails = {
    RUBBER: (
        <div>
          <h2>Rubber Farming Guide</h2>
          <p>Rubber (<em>Hevea brasiliensis</em>) is an essential plantation crop known for its latex, which is processed into natural rubber. With the right climate, soil conditions, and cultivation techniques, farmers can achieve high yields and sustainable production.</p>
  
          <h3>Recommended Rubber Varieties</h3>
          <ul>
            <li>Tjir 1, PB 86, BD 5, BD 10, PR 17, GT 1</li>
            <li>RRII 105, RRIM 600, PB 28/59, PB 217, PB 235, RRIM 703, RRII 5</li>
            <li>PCK-1, PCK-2, PB 260</li>
          </ul>
  
          <h3>Ideal Growing Conditions</h3>
          <ul>
            <li><strong>Soil & Climate:</strong> Deep, fertile lateritic soils with a pH between 4.5 and 6.0</li>
            <li>Annual rainfall of 2,000 – 4,500 mm</li>
            <li>Grows well in temperatures between 25°C – 34°C with 80% humidity</li>
            <li>Avoids areas prone to heavy winds</li>
          </ul>
  
          <h3>Propagation Methods</h3>
          <ul>
            <li>Green Budding</li>
            <li>Brown Budding</li>
            <li>Crown Budding</li>
          </ul>
  
          <h3>Nursery Preparation</h3>
          <ul>
            <li>Beds are 60-120 cm wide with appropriate spacing</li>
            <li>Budded stumps are planted at 30 x 30 cm spacing</li>
            <li>Manuring: 2.5 tonnes/ha farmyard manure + 350 kg/ha rock phosphate</li>
          </ul>
  
          <h3>Planting Guidelines</h3>
          <ul>
            <li>Dig 1m x 1m x 1m pits and fill with topsoil & compost</li>
            <li><strong>Spacing:</strong></li>
            <ul>
              <li>Budded Plants - Hilly areas: 6.7 x 3.4 meters (~445 plants/ha), Plains: 4.9 x 4.9 meters (~420 plants/ha)</li>
              <li>Seedlings - Hilly areas: 6.1 x 3.0 meters (~539 plants/ha), Plains: 4.6 x 4.6 meters (~479 plants/ha)</li>
            </ul>
          </ul>
  
          <h3>Fertilization & Manuring</h3>
          <h4>For Young Trees (Pre-Tapping Stage):</h4>
          <ul>
            <li>Before planting: Apply 12 kg compost + 120 g rock phosphate per pit</li>
            <li>Post-planting: Use 10:10:4:1.5 (NPKMg) mixture, applied every six months</li>
          </ul>
          <h4>For Mature Trees (Under Tapping):</h4>
          <ul>
            <li>900 g per tree/year (300 kg/ha) of 10:10:10 (NPK) mixture, split into two doses</li>
            <li>Magnesium deficiency: Apply 10 kg of magnesium sulfate per 100 kg of fertilizer</li>
          </ul>
  
          <h3>Aftercare & Weed Management</h3>
          <ul>
            <li>Regular soil conservation practices</li>
            <li>Use cover crops such as Pueraria phaseoloides, Calopogonium mucunoides, Centrosema pubescens, and Desmodium ovalifolium</li>
          </ul>
  
          <h3>Tapping & Latex Collection</h3>
          <ul>
            <li>S/2 d/2 – Half spiral cut, tapped every alternate day</li>
            <li>S/2 d/3 – Half spiral cut, tapped every third day</li>
            <li>S/1 d/4 – Full spiral cut, tapped every fourth day</li>
          </ul>
          <p>To enhance latex yield, Ethrel (a plant growth regulator) is applied at 5% concentration below the tapping cut after light scraping. Usage should not exceed three years to prevent bark damage.</p>
  
          <h3>Pest & Disease Management</h3>
          <h4>Common Pests:</h4>
          <ul>
            <li>Scale Insects: Controlled using Malathion 50 EC (2 ml per liter of water)</li>
            <li>Mealy Bugs: Managed with fish oil rosin soap (25 g per liter of water) or using Australian ladybird beetles (<em>Cryptolaemus montrouzieri</em>)</li>
          </ul>
          <h4>Diseases & Control Measures:</h4>
          <ul>
            <li>Abnormal Leaf Fall: Caused by fungal pathogens; managed with fungicide sprays</li>
            <li>Powdery Mildew: Treated using fungicides and proper plantation hygiene</li>
          </ul>
  
          <h3>Conclusion</h3>
          <p>Rubber cultivation requires proper soil management, effective propagation techniques, and integrated pest control strategies to ensure high yields and long-term sustainability.</p>
        </div>
      ),
    NUTMEG: (
      <div>
        <h2>Nutmeg Farming Guide</h2>
        <p>Nutmeg (<i>Myristica fragrans</i>) is a valuable spice crop known for producing both nutmeg and mace. It is primarily cultivated in the southern states of India, including Kerala, Tamil Nadu, and Karnataka.</p>

        <h3>Climate and Soil Requirements</h3>
        <ul>
          <li><strong>Climate:</strong> Requires humid tropical climate with **150-250 cm** annual rainfall. Grows at elevations up to **1000 meters**.</li>
          <li><strong>Soil:</strong> Prefers **friable, well-drained clay to red soils**.</li>
        </ul>

        <h3>Popular Nutmeg Varieties</h3>
        <ul>
          <li><strong>Vishwashree</strong></li>
          <li><strong>Konkan Sugandha</strong></li>
          <li><strong>Konkan Swad</strong></li>
          <li><strong>Elite Accessions:</strong> A 9-20, A 22, A 25, A 69, A 150, A 4-12, A 22, A 52, A11-23, A 70.</li>
        </ul>

        <h3>Propagation Methods</h3>
        <ul>
          <li><strong>Seed Propagation:</strong>
            <ul>
              <li>Seeds from high-yield trees (10,000+ fruits per year).</li>
              <li>Harvested during June-July and sown immediately.</li>
              <li>Germination: 40 to 90 days.</li>
            </ul>
          </li>
          <li><strong>Vegetative Propagation:</strong>
            <ul>
              <li>Approach grafting and patch budding (best from October to January).</li>
            </ul>
          </li>
        </ul>

        <h3>Planting Guidelines</h3>
        <ul>
          <li>Seedling Age: 12-18 months.</li>
          <li>Pit Size: 60 cm x 60 cm x 60 cm.</li>
          <li>Spacing: 8 m x 8 m.</li>
          <li>Planting Season: June to December.</li>
        </ul>

        <h3>Manuring and Fertilization</h3>
        <ul>
          <li><strong>Young Trees:</strong> 
            <ul>
              <li>15 kg Farmyard Manure (FYM)</li>
              <li>20 g Nitrogen (N), 20 g Phosphorus (P), 60 g Potassium (K)</li>
            </ul>
          </li>
          <li><strong>Mature Trees:</strong>
            <ul>
              <li>50 kg FYM</li>
              <li>300 g N, 300 g P, 960 g K</li>
              <li>Apply in June-July and September-October.</li>
              <li>Use 50 g Azospirillum and Phosphobacterium.</li>
            </ul>
          </li>
        </ul>

        <h3>Irrigation Requirements</h3>
        <ul>
          <li>Water every 5-7 days in dry summer months.</li>
        </ul>

        <h3>Aftercare and Maintenance</h3>
        <ul>
          <li>Weed Control: Keep plantation weed-free.</li>
          <li>Shade Regulation: Medium shade required (banana or fast-growing trees as intercrops).</li>
          <li>Intercropping: Suitable with arecanut and coconut.</li>
        </ul>

        <h3>Harvesting Nutmeg</h3>
        <ul>
          <li><strong>Maturity:</strong> Starts bearing fruit in 6-7 years.</li>
          <li><strong>Harvest Timing:</strong> Fruits are picked when they split naturally.</li>
          <li><strong>Post-Harvest Process:</strong>
            <ul>
              <li>Separate aril (mace) and seed.</li>
              <li>Dry both components thoroughly.</li>
            </ul>
          </li>
        </ul>

        <h3>Yield Expectations</h3>
        <ul>
          <li>Fruits:1,000 - 2,000 per tree annually.</li>
          <li>Dried Nuts:5 - 7 kg per tree.</li>
          <li>Dried Mace:0.5 - 0.7 kg per tree.</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Nutmeg farming requires careful management but can be highly profitable. Following proper techniques ensures healthy crops and good yields.</p>
      </div>
    ),
    AVOCADO: (
        <div>
          <h2>Avocado Farming Guide</h2>
  
          <p>Avocado farming in India is emerging as a profitable venture due to the increasing demand for this nutritious fruit. If you're considering starting an avocado farm, this comprehensive guide will walk you through the essential steps to achieve success.</p>
  
          <h3> Understanding Avocados</h3>
          <p>Avocados, originally from Mexico and Guatemala, are packed with healthy fats, vitamins, and minerals. Their health benefits and culinary versatility have led to a growing demand across India, making avocado farming a lucrative opportunity.</p>
  
          <h3> Selecting the Right Avocado Variety</h3>
          <p>Choosing the correct avocado variety is crucial for successful cultivation. Consider factors like climate, soil type, and market demand when selecting your variety. Here are some popular avocado varieties grown in India:</p>
          <h4>Hass Avocado</h4>
          <ul>
            <li><strong>Characteristics:</strong> Buttery texture, high oil content.</li>
            <li><strong>Suitability:</strong> Thrives in India's hot and humid climate and is resistant to diseases.</li>
          </ul>
          <h4>Fuerte Avocado</h4>
          <ul>
            <li><strong>Characteristics:</strong> Medium-sized fruit with smooth skin and a creamy, mild taste.</li>
            <li><strong>Suitability:</strong> Adapts well to India's diverse climate conditions.</li>
          </ul>
          <h4>Indian Local Variety</h4>
          <ul>
            <li><strong>Characteristics:</strong> Flavorful fruits with slightly lower oil content.</li>
            <li><strong>Suitability:</strong> Specifically adapted to Indian growing conditions, cultivated since 1941.</li>
          </ul>
  
          <h3> Climate and Soil Requirements</h3>
          <p>Avocado trees flourish in warm, humid climates with temperatures ranging between <strong>15°C and 30°C</strong>. They are sensitive to frost and require well-drained, sandy loam soils with a <strong>pH level between 6.0 and 7.0</strong>. Regions like <strong>Maharashtra, Karnataka, and Tamil Nadu</strong> provide optimal conditions for avocado cultivation.</p>
  
          <h3> Land Preparation and Planting</h3>
          <ul>
            <li><strong>Soil Testing:</strong> Conduct thorough soil tests to evaluate pH levels and nutrient content.</li>
            <li><strong>Land Preparation:</strong> In areas prone to waterlogging, use raised beds to improve drainage and prevent root diseases.</li>
            <li><strong>Planting Distance:</strong> Maintain a spacing of <strong>3.5 meters between plants</strong> and <strong>7 meters between rows</strong> to facilitate healthy canopy growth and accommodate machinery.</li>
          </ul>
  
          <h3> Irrigation and Water Management</h3>
          <ul>
            <li>Use <strong>drip irrigation</strong> for optimal water delivery.</li>
            <li>Establish <strong>rainwater harvesting</strong> systems to conserve water during dry seasons.</li>
          </ul>
  
          <h3> Nutrient Management</h3>
          <ul>
            <li>Apply organic fertilizers such as <strong>cow dung manure</strong> to improve soil fertility.</li>
            <li>Use <strong>mulching</strong> to retain moisture and prevent weed growth.</li>
          </ul>
  
          <h3> Pest and Disease Control</h3>
          <p>Avocado trees are susceptible to pests and diseases. Adopt <strong>Integrated Pest Management (IPM)</strong> strategies to protect your crops:</p>
          <ul>
            <li>Regularly monitor for pests like mites and fruit flies.</li>
            <li>Use organic sprays like <strong>neem oil</strong> to control infestations.</li>
            <li>Prevent fungal infections by ensuring proper drainage and air circulation.</li>
          </ul>
  
          <h3> Harvesting and Post-Harvest Handling</h3>
          <ul>
            <li><strong>Harvest Time:</strong> Avocados mature on the tree but ripen after harvest. Pick them once they reach the desired size and firmness.</li>
            <li><strong>Handling:</strong> Handle fruits gently to avoid bruising.</li>
            <li><strong>Storage:</strong> Store avocados in cool, dry places to maintain freshness during transportation.</li>
          </ul>
  
          <h3> Marketing Your Avocado Produce</h3>
          <p>With the rising demand for avocados in India, adopting a strategic marketing approach will enhance your profits. Consider these channels:</p>
          <ul>
            <li><strong>Local Markets:</strong> Sell directly to consumers through local markets to reduce transportation costs.</li>
            <li><strong>Retail Partnerships:</strong> Collaborate with supermarkets and health food stores for a consistent sales channel.</li>
            <li><strong>Online Platforms:</strong> Utilize online marketplaces to reach a broader audience and cater to health-conscious consumers.</li>
          </ul>
  
          <h3>Conclusion</h3>
          <p>By following these best practices and staying updated on the latest agricultural techniques, you can build a successful avocado farming business in India. With the right approach, avocado cultivation can provide substantial returns while contributing to the growing demand for this superfood.</p>
        </div>
      ),
    CARDAMOM: (
        <div>
          <h2>Cardamom Farming Guide</h2>
  
          <p>Cardamom (<em>Elettaria cardamomum</em>), known as the "Queen of Spices," is a highly valued spice native to the evergreen rainforests of the Western Ghats in South India. It is widely cultivated in Kerala, Karnataka, and Tamil Nadu, contributing significantly to India's spice exports.</p>
  
          <h3>Varieties of Cardamom</h3>
          <p>Cardamom varieties are classified based on their origin:</p>
          
          <h4> Malabar Variety</h4>
          <ul>
            <li>Mudigere 1, Mudigere 2, PV 1, PV 3, ICRI 1, ICRI 3, TKD 4</li>
            <li>IISR Suvarna, IISR Vijetha, IISR Avinash, TDK-11, CCS-1</li>
            <li>Suvasini, Avinash, Vijetha-1, Appangala 2, Njallani (Green Gold), ICRI 8</li>
          </ul>
  
          <h4> Mysore Variety</h4>
          <ul>
            <li>ICRI 2</li>
          </ul>
  
          <h4> Vazhukka Variety</h4>
          <ul>
            <li>MCC-12, MCC-16, MCC-40, PV 2, PV 5</li>
          </ul>
  
          <h3>Ideal Growing Conditions</h3>
          
          <h4>Soil & Climate</h4>
          <p>Cardamom thrives in well-drained, loamy soils with a pH between 5.0 and 6.5. It requires humid, shady environments at elevations between 600 to 1,500 meters and avoids exposure to heavy winds.</p>
  
          <h4>Propagation Methods</h4>
          <h5> Seed Propagation</h5>
          <ul>
            <li>Seeds are collected from high-yielding plants.</li>
            <li>Pre-treated with sulfuric or hydrochloric acid for 20 minutes, then thoroughly washed.</li>
            <li>Sown in prepared nursery beds enriched with organic matter.</li>
            <li>Germination starts within a month and continues for up to three months.</li>
            <li>Seedlings are transplanted after reaching the 3-4 leaf stage.</li>
          </ul>
  
          <h5> Vegetative Propagation (Suckers)</h5>
          <ul>
            <li>Suckers with one mature tiller and a growing shoot are used.</li>
            <li>Rapid clonal multiplication techniques enhance propagation efficiency.</li>
            <li>Trenches are filled with topsoil, organic matter, and compost.</li>
            <li>Each plant produces 32-42 suckers annually, with 16-21 viable planting units per hectare.</li>
          </ul>
  
          <h3>Field Preparation & Planting</h3>
          <ul>
            <li>Pits of 60 cm x 60 cm x 60 cm are prepared and filled with compost.</li>
            <li>Contour planting is recommended in sloped areas.</li>
            <li>18-22 month-old seedlings are ideal for transplanting.</li>
            <li>Spacing: 2.5 x 2.0 meters for larger varieties, 2.0 x 1.5 meters for smaller varieties.</li>
          </ul>
  
          <h3>Irrigation & Fertilization</h3>
          <ul>
            <li>Sprinkler irrigation during dry periods improves yields.</li>
            <li>Recommended fertilization per hectare:
              <ul>
                <li>Compost: 25 tonnes</li>
                <li>NPK Fertilizer: 75 kg nitrogen, 75 kg phosphorus, 150 kg potassium</li>
              </ul>
            </li>
            <li>Fertilizer applied in two doses (June-July & October-November).</li>
          </ul>
  
          <h3>Pest & Disease Management</h3>
          
          <h4>Common Pests</h4>
          <ul>
            <li>Leaf Thrips</li>
            <li>Shoot & Fruit Borers</li>
            <li>Root Grubs</li>
          </ul>
          <p>These pests are managed using integrated pest control methods, including pheromone traps.</p>
  
          <h4>Diseases</h4>
          <ul>
            <li><strong>Mosaic (Katte) Viral Disease</strong> – Spread by aphids.</li>
            <li><strong>Rhizome Rot</strong> – Prevented through proper drainage and cultural practices.</li>
          </ul>
  
          <h3>Conclusion</h3>
          <p>Cardamom cultivation requires careful soil management, proper propagation techniques, and pest control strategies. By following these guidelines, farmers can achieve high yields and superior quality spice production.</p>
        </div>
      ),





  };

  return (
    <div className="details-page">
      <h1>{title || "No Title Available"}</h1>
      {image && <img src={image} alt={title} className="details-image" />}
      <p><strong>Description:</strong> {description || "No description provided."}</p>

      <div className="details-content">
        {details || cropDetails[title] || <p>No detailed information available.</p>}
      </div>

      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
};

export default DetailsPage;
