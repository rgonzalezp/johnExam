## Project Information:
This project is a minimalistic version of the original Vega-Editor. You can see your data visualizations here, just like in the vega editor (but it is less cluttered). The input of data works two ways, manually or by a csv.

Deployed in heroku, watch the demo: https://vegalite-min-editor.herokuapp.com/

## Author:
Ricardo Gonzalez

## Exam's "Secret Sauce":
The design is very simple and makes the user feel at home. It also permits the user to take advantage of the specs that are kept in the database by providing them at the footer. Besides this, the feedback the user receive about everything he does lets him use the tool really effectively.

## Implementation Bonus:
Latest 20 visualizations stay in the cache so the app doesn't need to fetch new visualizations until the user uploads a new one

## Building locally:
You must execute npm install in both /client and /root folders.  
run npm start in the /root folder  
run npm start in the /client folder  
optionally, you can use the special script npm run dev to run both client and server in a single command! (For dev)
 
