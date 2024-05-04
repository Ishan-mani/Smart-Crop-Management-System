# Farmify Project

## Overview
Farmify is a Python-based project designed to help farmers with crop disease prediction, crop recommendation, and fertilizer suggestions. It utilizes machine learning models and Flask for web application development.

## Installation
1. Clone the repository:
   ```python
   git clone https://github.com/yourusername/farmify.git
   cd farmify

2. Install the required packages using Conda:
    ```python
        conda create --name farmify_env python=3.9
        conda activate farmify_env
        conda install --file requirements.txt
3. Set up configuration:
    - Add your API keys and other configurations to config.py.

## Usage

### 1. Disease Prediction
- Navigate to the "Disease Prediction" page.
- Upload an image of the affected crop.
- The system predicts the disease and provides information about it.

### 2. Crop Recommendation
- Visit the "Crop Recommendation" page.
- Enter soil nutrient levels, pH, rainfall, and location.
- Receive recommendations for suitable crops based on environmental factors.

### 3. Fertilizer Suggestion
- Access the "Fertilizer Suggestion" page.
- Enter the crop name and current soil nutrient levels.
- Get recommendations for appropriate fertilizers to use.

## Parts of the project
### Part 1: Project Structure
The project follows a structured format: <pre>
farmify/
│
├── app.py
├── utils/
│   ├── disease.py
│   ├── fertilizer.py
│   ├── model.py
│   └── ...
├── templates/
│   ├── index.html
│   ├── crop.html
│   ├── fertilizer.html
│   ├── contact.html
│   ├── faq.html
│   ├── disease.html
│   ├── crop-result.html
│   ├── fertilizer-result.html
│   ├── disease-result.html
│   └── ...
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   ├── rice.jpeg
│   │   ├── maize.jpeg
│   │   ├── chickpea.jpeg
│   │   └── ...
│   └── ...
├── models/
│   ├── plant_disease_model.pth
│   └── RandomForest.pkl
├── Data/
│   ├── fertilizer.csv
│   ├── cpdata.csv
│   ├── FertilizerData.csv
│   ├── FinalData.csv
│   ├── MergeFileCrop.csv
│   ├── Crop_recommendation.csv
│   └── ...
├── README.md
├── requirements.txt
└── config.py</pre>

### Part 2: Python Environment

- Create and activate a Conda environment for the project:
    ``` python
        conda create --name farmify_env python=3.9
        conda activate farmify_env
        conda install --file requirements.txt

### Part 3: Installing Dependencies
- Install the required packages:
    ```python
    conda install --file requirements.txt


### Part 4: Configuring API Keys
- Add your API keys and other configurations to config.py.

### Part 5: Flask App (app.py)
- The Flask app handles the web interface and routes for disease prediction, crop recommendation, and fertilizer suggestions.

### Part 6: Disease Prediction (utils/disease.py)
- Contains a dictionary (disease_dic) with information about various crop diseases.

### Part 7: Fertilizer Suggestions (utils/fertilizer.py)
- Includes a dictionary (fertilizer_dic) with recommendations based on soil nutrient levels.

### Part 8: Machine Learning Model (utils/model.py)
- Defines the ResNet9 model architecture for disease prediction using PyTorch.

### Part 9: Weather API Integration
- Utilizes the OpenWeatherMap API to fetch temperature and humidity data for crop recommendations.

### Part 10: Crop Recommendation Model
- Uses a Random Forest model (RandomForest.pkl) to recommend crops based on soil and weather conditions.

### Part 11: HTML Templates (templates/)
- Contains HTML files for the web interface, including home, crop recommendation, fertilizer suggestion, contact, FAQ, and disease prediction pages.

### Part 12: CSS, JavaScript, and Images (static/)
- Includes CSS styles (style.css), JavaScript (script.js), and images for crop recommendations.

### Part 13: Running the Application
- To run the application:
    ```python
        python app.py

Open your browser and go to http://localhost:5000/ to access the Farmify web application.

## Acknowledgements
- Data sourced from various repositories and kaggle.
- Weather data obtained from the OpenWeatherMap API.

## Contributors

- [Arpitya Kumar Singh](https://www.github.com/arpitya)
- [Ashish Kumar Sahay](https://www.github.com/xznoz123)
- [Asutosh Sandal](https://www.github.com/Asutoshsandal)
- [Prakhar Singh](https://www.github.com/prakharsingh-08)
- [Sthanu Pradhan](https://github.com/sthanu24)
- [Ishan Mani Tripathi](https://www.github.com/Ishan-mani)