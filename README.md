# Proj3_client_server_DB <br>
**Communication + OOP + JavaScript** <br>
**Technologise:** <br>
•HTML, CSS, JS <br>
•Simulating requests in AJAX style <br>
•SPA arcitecture <br>
•DB-API <br>
•Rest API <br>
•VS code <br>

<br><br>
**In Detail:**
**Client** - a client-side application for accessing and changing information stored on the server
• Login screen - existing user, checking form, verifying details (against the registration database)<br>
• Registration screen - new user, checking form, verifying details (against the registration database)<br>
• Application screens – displaying items / displaying an item / searching for an item / adding an item / changing an item / deleting an item<br><br>

**SPA** – all client-side application components are fully loaded in the browser and displayed accordingly<br>
• Pages - HTML code includes sections for displaying different pages / JS code for switching between the pages<br>
• Routing 
<br><br>

**REST API** – the communication interface of actions and information between client and server will use meaningful urls and actions:<br>
• **GET** - retrieving all records<br>
• **GET** – retrieving a particular record<br>
• **POST** – adding a new record<br>
• **PUT** – updating an existing record<br>
• **DELETE** – deleting an existing record
<br><br>

**FAJAX** - the mechanism for simulating the communication between the client and the server and handling the responses returned from the server<br>
• FXMLHttpRequest class with several fields and methods similar to the XMLHttpRequest class<br>
• Each communication operation from client to server will create and use a new object of type <br>FXMLHttpRequest<br>
• At the end of defining the communication object - the client "sends" the request to the server through the communication network<br>
• When the server finishes handling the request - the server "returns" the response to the client through the communication network<br>
JSON - format for packaging and opening the communication of information between the client and the server<br>
• Packing and unpacking information records for transfer between the client and the server<br>
• It may also be used to implement the transfer of instructions and information from the client to the server through the FAJAX mechanism<br>
<br><br>

**Network** - a component used to send messages from the client to the server and return responses from the server to the client<br>
• The network "receives" messages to be forwarded from the client to the server, and similarly also responses from the server to the client<br>
• The network "delivers" the messages to the appropriate recipient (server or client)
<br><br>

**Server** - software that receives from appropriate client applications access requests and information changes in its database<br>
• The server code - functions that are performed when a request "comes" from the client to handle the information in the DB<br>
• The server code receives the reference information (JSON with appropriate fields) and operates based on the instructions in the fields<br>
• The server code addresses the DB to perform operations through the API DB interface. <br>(The operations will, obviously, include a search
record, retrieving all records, retrieving a record, adding a record, changing a record, deleting a record, etc
<br><br>

**DB** - the database - information handling software - saving / searching / retrieving / adding / changing / deleting
• Implementation - a database of records under a suitable name in local memory / local storage<br>
• Each record will be a JSON object with the relevant fields<br>
• Option to add a separate database for user registration and approval<br>

