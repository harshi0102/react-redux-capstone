<a name="readme-top"></a>

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->

  <h3><b>World Weather App</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[World Weather App\] ](#-world-weather-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ (OPTIONAL) ](#-faq-optional-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [World Weather App] <a name="about-project"></a>



I have created a single-page application (SPA) called "World Weather App " that allows users to view the current weather and detailed temperature data of countries around the world. The application is built with React and Redux, following the specified requirements.

The Home page of the application displays a list of categories, which can be filtered based on parameters such as the category name. Each category item also shows numeric values obtained from the Open-Meteo API. When a user clicks on a category item, they are navigated to the Details page.

On the Details page, the application retrieves data from the API to display detailed information about the selected category. Users can navigate back to the Home page by clicking the "Back" button (<).

To ensure the quality of the application, I have created unit tests for the pure functions in the Redux code. Additionally, integration tests have been implemented using React Testing Library. API access has been mocked in the tests to prevent actual requests, and the connection to the Redux Store has also been mocked for isolated testing.

The data retrieved from the API is stored in the Redux store, allowing for efficient management and access. A Filter stateless component is used to filter the data obtained from the API based on the specified parameters.

Each page within the application, including the main page and individual item pages, has a unique route to enable proper navigation within the SPA.

Finally, the project has been deployed and is accessible online, allowing users to access and interact with the WeatherAroundTheWorld application.

Overall, this project satisfies the stated requirements, and the deployed application provides a user-friendly interface to explore and view weather information from different countries.


Desktop Version & Mobile Version: 
![image](https://github.com/harshi0102/react-redux-capstone/assets/108334376/51b785cc-be1d-42f8-afe3-052b044be49d)

![image](https://github.com/harshi0102/react-redux-capstone/assets/108334376/24e28016-6042-4e84-ac16-6ec9b6c83c04)


[Live Demo Link](https://react-redux-weather-app.onrender.com)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li>Redux</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- View all countries weather
- Search by country
- Detail by country

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Please click the link below to check the demo

- [Live Demo Link](https://react-redux-weather-app.onrender.com)
- [Presentation Video Link]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Web browser
- Code editor
- Good internet connection

### Setup

Clone this repository to your desired folder:



```sh
  cd my-folder
  git clone git@github.com/harshi0102/react-redux-capstone.git
```


### Install

Install this project with:


```sh
  cd react-redux-capstone
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm start
```


### Run tests

To run tests, run the following command:


```sh
  npm test
  Press a to run all test
```


### Deployment

Check here for live online version: https://react-redux-weather-app.onrender.com

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Harshika Govind**

- GitHub: [@harshi0102](https://github.com/harshi0102)
- Twitter: [@harshika0102me](https://twitter.com/harshika0102me)
- LinkedIn: [harshikagovind](https://linkedin.com/in/harshikagovind)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[Add hourly Temperature Graphs]**
- [ ] **[new_feature_2]**
- [ ] **[new_feature_3]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/react-redux-capstone/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>



If you like this project...Give ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank all who inspired us during the project:

Original design idea by Nelson Sakwa on [Behance](https://www.behance.net/sakwadesignstudio).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/harshi0102/react-redux-capstone/blob/development/LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
