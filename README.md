# TestUserApp
Test Interview Node JS test


Technical Sample Application

Using Node.js, create a set of REST services that can be used to manage a
User class. The user object shall contain the following properties: 
```JSON
{
       "userObj": {
              "type": "object",
                "properties": {
                    "id": {
                                "type": "guid",
                             "required": true
                        },
                       "userName": {
                             "type": "string",
                               "required": true
                  },
                 "givenName": {
                              "type": "string",
                                "required": false
                  },
                 "surName": {
                                "type": "string",
                          "required": false
                    },
                   "DOB": {
                              "type": "string",
                                "required": false
                  }
          }
    }
}
```

The most important success factor is to produce the best solution you can to
solve the problem. There are many aspects to consider within that context -
efficiency, performance, documentation,etc. Code to perform the algorithm is
the minimum requirement. 



Your deliverable should contain enough to give us a
glimpse into your analysis, your approach, your skills, or anything else
that will demonstrate your ability as a software developer. We will be
looking for a good approach, a glimpse into your thought process, things you
can do to impress us, and clean and efficient code.

Your deliverable will be something that we can execute (to test the
results) along with whatever explanation of the code/program that you feel
is necessary.  



Attached is a node.js/Express application skeleton. You will need to install the node
package manager (npm) and run: npm install in the sample application
directory to install dependencies. 



You can run the application with:
npm start The application will run on port 3000.