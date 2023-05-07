<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



## About The Project

The aim of this project is to provide users who care about environment with air quality/pollution data for their lovely cities, to keep their eyes on pollution rates and be helpful to decrease those rates.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

I've build this project using:

[![Node][Node.js]][Node-url]
[![Typescript][Typescript]][Typescript-url]
[![Mongo][Mongo]][Mongo-url]
[![Jest][Jest]][Jest-url]
[![Express][Express]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

You need to have Node.js, typescipt and MongoDB on your machine. <br/>
Also, you'll need to install npm or yarn to run the project

* npm
  ```sh
  npm install -g npm@latest
  ```
* yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/MuAladdinIbrahim/air-quality.git
    ```
2. Install NPM packages
    ```sh
    yarn install
    ```
3. Make sure your MongoDB server is up
4. Update .env files with your values
    - You'll need to generate your key from iqair [here][IQAIR-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

The application contains endpoints and a cron job, <br/>
_To check all available endpoints, please refer to the [OpenApi Documentation](./openapi.yaml). You may use [Swagger Editor](https://editor.swagger.io/) to render the file._ <br/> 
The cron job is respoinsible for getting air quality data for Paris city every minute and store it into database. This data is used later to get most polluted data and time for Paris.

1. Run tests to make sure all is good
    ```sh
    yarn test
    ```
2. Run the application
    - in dev mode
        ```sh
        yarn dev
        ```
    - in production mode
        ```sh
        yarn start
        ```
3. Finally, to run cron-job for Paris area, run in a separate terminal
    ```sh
        yarn cron:paris
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
[Mongo]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
[Express]:https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]:https://expressjs.com/
[IQAIR-url]: https://www.iqair.com/fr/dashboard/api
