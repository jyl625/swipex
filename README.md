# SwipeX

SwipeX is a real-time trading platform that provides meal swipes exchange services for college students who are unable to use up their meal swipes and those who look to enjoy the delicious food in university cafeterias.

It very important to know what to expect before we take on our first bites in the student cafeteria. Historical prices are presented in line graphs with various meal types, locations, and dates, so you know when to pass or raise the bets! Clicking on a specific posting meal swipe would lead you to a chatroom where you could start a direct conversation with the seller, and that is where the bargain begins! Once you and the seller reach agreement on the price, SwipeX also provides a meetup service that you and the seller could decide when and where to the seller could swipe you in the cafeteria. 

Do you miss the old school days when you enjoyed good quality buffet with your friends from college? Or do you have too many meal swipes left before the semester ends? Let's not waste on the great opportunity and hop on SwipeX!

# Table of Contents

- Technologies Used
  - Stack
  - Notable Dependencies
- Features
  - User Auth
  - Chatroom
  - Meetup
  - Graphs
- Future Features
- Lessons Learned

# Technologies Used

## Stack

- MongoDB
- Express
- React
- Node.js

## Notable Dependencies

- Redux
- D3.js
- mongoose-data-seed
- jwt-token

# Features

## User Auth

## Chatroom

This is where you can have a con-current conversation with the buyer. Also, the price listed is also arguable with our price negotiation system.

## Graph

Every processed transaction would be stored into the database and the price is fetched as a graphic visualization with a certain time scale using D3.js. 

# Future Features

- Websocket in replace of the "comment-like" chating system we have
- Implement not only cafeterias in UCLA but a larger scale of a region of schools

# Lessons Learned

## Database Design

- To avoid miscommunication and unnecessary workload, the frontend would prefer customized state shapes for individual data object, and could only start using data from database after deciding how deeply the object values are nested. The frontend group could have designed how the data is structured to avoid redundant back and forth data remodeling.

## Workflow in a Group

- Learned to work in different branches without having some functionalities to wait on others.
- Learned to assign duties base on members' specialities to maximize the outputs.


