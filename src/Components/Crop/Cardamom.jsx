import React from "react";
import "./Cardamom.css";

const Cardamom = () => {
  return (
    <div className="cardamom-container">
      <h1 className="cardamom-heading">Cardamom</h1>
      {/*<img src="/IMAGESS/cardamom1.png.jpg" alt="Cardamom" className="cardamom-image" />*/}

      <div className="cardamom-content">
        <h2>Sustainable Farming Methods</h2>
        <ul>
          <li><strong>Crop Rotation & Diversity:</strong> Alternating different crops in the same field prevents soil depletion and reduces pests naturally. <br /> <em>Example: Rotating cardamom with coffee or black pepper improves soil health.</em></li>
          
          <li><strong>Organic Farming:</strong> Avoids synthetic pesticides and fertilizers. Uses compost, manure, and natural pest control (e.g., neem oil). <br /> <em>Benefits: Improves soil fertility and protects biodiversity.</em></li>
          
          <li><strong>Agroforestry:</strong> Growing crops like cardamom under shade trees (e.g., Areca nut, Silver oak). <br /> <em>Benefits: Maintains soil moisture, prevents erosion, and supports biodiversity.</em></li>
          
          <li><strong>Efficient Water Management:</strong> <br />
            - <strong>Drip irrigation:</strong> Delivers water directly to plant roots, reducing waste. <br />
            - <strong>Rainwater harvesting:</strong> Collecting rainwater for irrigation. <br />
            - <strong>Mulching:</strong> Covering soil with organic material to retain moisture.
          </li>
          
          <li><strong>Soil Conservation Techniques:</strong> <br />
            - <strong>Terracing:</strong> Reduces soil erosion on hilly farms. <br />
            - <strong>Cover Cropping:</strong> Growing cover crops (e.g., legumes) to improve soil fertility.
          </li>
          
          <li><strong>Integrated Pest Management (IPM):</strong> Combines biological, mechanical, and organic methods to control pests. <br /> <em>Example: Using natural predators like ladybugs to control harmful insects.</em></li>
        </ul>
      </div>
    </div>
  );
};

export default Cardamom;
