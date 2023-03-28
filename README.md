# Portfolio Site With Node.js
A JavaScript-based portfolio site built by me.
## Getting Started
### Prerequisites
Before getting started, ensure that you have the following applications installed:
- Node.js version 14.17.3 or higher,
- NPM version 6.14.13 or higher and
- Git (only necessary for cloning).
### Installation
Open your terminal and follow the instructions below:  
1. Clone or [download the project](https://github.com/Umit-Ulusoy/Portfolio-site-with-Node.js/archive/refs/heads/main.zip):  
`git clone https://github.com/Umit-Ulusoy/Portfolio-site-with-Node.js.git`,
2. Navigate to the directory:  
`cd Portfolio-site-with-Node.js`,
3. Install required dependencies:  
`npm install`,
3. Copy `config.example.js` file to the same directory with the name `config.js`, then open `config.js` and enter your MongoDB connection URL on the  appropriate line:  
module.exports = {
    DATABASE_URL: 'Your MongoDB connection string'
}
4. Run the project:  
`node app.js`
### License:
This project is licensed under the MIT License. [Learn more about this license](https://docs.github.com/articles/licensing-a-repository).