# SIP FORM ASSIGNMENT

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Following Packages are being used in the project.\
- [Tailwind](https://tailwindcss.com/docs/installation) (For compact CSS and responsiveness)
- [React-Datepicker](https://www.npmjs.com/package/react-datepicker) to resolve the date problem mentioned in the assignment
- [Prop types](https://www.npmjs.com/package/prop-types) to implement type check on the props

## To Run on Local

In the project directory, run:

### `npm install`

It will install the required packages to in the project directory

### `npm run start`

Launches the application on localhost:3000 you can see the required form being displayed on your browser.\
![Alt text](https://imgtr.ee/images/2023/04/26/8s94r.png)\
You can now input the date and duration in the input fields and End date will fill automatically.\
![Alt text](https://imgtr.ee/images/2023/04/26/8sUgn.png)\
Then click next, there you can see the Switch Date of 15 days after your SIP got over.\
![Alt text](https://imgtr.ee/images/2023/04/26/8snvc.png)\
When you click next on SWP form the form will expand now you can choose the option of SWP to start after.
Again the SWP start date can be filled automatically based on your preference.\
![Alt text](https://imgtr.ee/images/2023/04/26/8s0jq.png)

---

## Thinking Behind Implementation

- I have broken down the problems into components. Main page consists of two components Folio and FormLayout
- Folio contains the top part of the design where user chooses the folio or create new Folio 
- Most of the components of folio are static 
- Second component the FormLayout is further divided in three parts top header containing step:1 and step:2 
- Other two parts of FormLayout are SIPForm and SWPForm 
- The assignment majorly consists of how props are being used and passed around in between the components
- Also, how child components gets to mutate the parent component's attributes 

![Alt text](https://imgtr.ee/images/2023/04/26/8sEwn.png)

## Future 
- We can create test cases in cypress to prevent any bug being generated due to regression
- We can add validation to the complete form to prevent any security issue in the database
- We can create a backend application in node or any preferred tech stack to write business logic and input data in database 
- Create more framework like structure in the project to reuse code, data and design for better maintenance and development process