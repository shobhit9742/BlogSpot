# BlogSpot
This repository serves as a central location for collaborative efforts to develop a visually appealing and functionally adept website compatible with the BlogSpot platform. Our team is committed to realizing the inherent elegance and refinement of BlogSpot within the digital sphere, prioritizing user-centric design principles and intuitive navigation for an optimal user experience.

## Objective
This project originated as a platform to apply the coding and problem-solving skillsets acquired during Masai School's curriculum. It fostered collaboration in the development of a fully functional website. Conceived and completed within a five-day timeframe during Masai's Construct Week, the project served as a collaborative instrument facilitating exploration, knowledge acquisition, and professional growth.

## Project Type
This project prioritizes front-end development, incorporating dynamic functionalities achieved through a simulated API created using JSON-server. The primary development tools leveraged include HTML, CSS, JavaScript, and Bootstrap version 5.3 as a UI framework.

## Deployed App
The front-end application and the simulated back-end server have been independently deployed to Netlify and Render, respectively. Access to the deployed versions is provided below.

#### Frontend:- https://celadon-maamoul-95cda6.netlify.app
#### Admin:- https://mellow-vacherin-f43369.netlify.app
#### Mock Server:- https://tech-tatva-2345-1.onrender.com

## Directory Structure
my-app/
├─ Backend/
  | ├─ Mock Server
  | ├─ Pages
  | ├─ index.html
├─ Frontend/
  │ ├─ JS files
  | ├─ Pages
  | ├─ CSS
  | ├─ index.html

## Video Walkthrough of the Project
A comprehensive video presentation detailing the project and demonstrating its functionalities is available for viewing on the link below.
#### Drive:- 

## Video Walkthrough of the CodeBase
+ A video walkthrough of the project's codebase and folder structure is available for viewing on YouTube.
#### Youtube:- https://youtu.be/nGyQvg-GjWo

## Features
+ Dynamic Content with Simulated Backend: The project leverages a mock server to achieve dynamic elements, enhancing user experience without requiring a full-fledged backend at this stage.
+ Dynamic UI Elements via Bootstrap 5.3: The project utilizes Bootstrap 5.3 as a UI framework to facilitate the creation and manipulation of dynamic user interface elements.
+ Responsive Design for Optimal Viewing: The website prioritizes responsiveness, ensuring an optimal user experience across various devices, from desktops to mobile phones.
+ Integrated Product Management Dashboard: An administrative dashboard is included for managing product information within the application.

## Setting Up the Development Environment
### Prerequisites:
Node.js and npm (or yarn) installed on your system.
Steps:

### Download and Install Dependencies:

+ Clone or download the project repository.
+ Navigate to the project's root directory using your terminal.
+ Run the command npm install to install all the project dependencies, including Bootstrap 5.3.
+ Start the Mock Backend Server (Optional):

### A pre-configured mock backend server has been deployed for your convenience [https://tech-tatva-2345-1.onrender.com].
+ Alternatively, to run the mock server locally, navigate to the backend directory within the project and execute one of the following commands:
+ npx json-server db.json -m ./node_modules/json-server-auth/
+ npm run start (if a start script is defined in the package.json file)
+ Admin Dashboard Access: [https://mellow-vacherin-f43369.netlify.app]

+ Please note that the admin dashboard and its functionalities require authentication credentials. Currently, there is no guest access available for these features.

## Usage
### User Side
+ The user journey commences on the landing page, which features a prominent navigation bar. This navigation bar incorporates the project logo alongside designated buttons for accessing various sections of the website. Additionally, login and signup functionalities are readily available for user account management.
![main landing](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/e0281a32-6f25-473f-817a-c3f03b5893d1)
+ This is a dynamic user interface element that displays a user's published posts in a card format.
![Main lnding Cards](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/345b81ba-fe5a-481c-aaef-889c6defd3ca)
+ Clicking on a card initiates an authentication flow, prompting users to sign in or create a Blogspot account for full post access.
![SignupsignIN](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/561a8929-a4ef-4d54-bb8b-a029234ee353)
+ Following user credential entry and login button selection, a modal window displays a "logic successful" message, indicating a successful authentication process.
![Logged IN](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/dfa06b13-010f-49d0-9365-8076cc92b3a5)
+ A successful login grants users access to a designated content portal, offering the ability to explore and engage with a collection of articles and blog posts.
![2nd Loggedin page](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/77f8b003-857a-4f79-b053-9e6df55b251a)
+ Selecting a post will trigger a modal window to display, presenting the article's detailed information or description.
![Opening model](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/de5c810e-453a-4faa-9ffe-e11ca40e89e7)
+ The website incorporates a search function that allows users to locate articles by title. Upon entering a search term, only matching article cards will be displayed.
![Search Functionality](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/17f6e0c6-e2d0-46bb-8c69-208c11cf8639)
+ Selecting the bookmark icon adds the chosen article to the user's favorites list, allowing for easy access from a dedicated "Favorites" page.
![Favourite](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/7b1dbc40-157b-4043-847d-79981a05e63b)
+ The website provides a designated "Write" page, empowering users to create and submit articles that will subsequently be displayed on the homepage.
![Write blog](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/9b863c81-c8d1-46af-99f9-a763d0fef13e)

### Admin Side
+
![Admin login page](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/b68cf2c0-332f-48db-a195-a9e7071bd0f9)
+
![Admin success login pae](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/d4dc1311-bb92-468a-8e49-edf551d24771)
+
![Admin dashboard](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/2fd26e34-30ff-4a1b-b371-d8666f2a29e1)
+
![Admin posts](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/1eeeeb48-52d8-4308-8167-396566e69f01)
+
![Admin edit fucntionality](https://github.com/shobhit9742/Tech-Tatva-2345/assets/116214825/b92fde6c-474e-4327-8488-be05a14a72dc)



## Credentials
    BlogSpot Login:- 
    ID - sagar@1234.com
    Password - 123456

    Admin Login:- 
    ID - shobhit@gmail.com
    Password - 1122334455


 ## Technology Stack
- HTML
- CSS
- JavaScript
- Bootstrap Library (Bootstrap 5.3)
