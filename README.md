# Simple JSON database
================================
Simple JSON database with the following functionality:
  * when a POST request to /:some_name is received write a file to the hard drive called some_name.json with the json data received
  * when a GET request to /:some_name is received, send back the data read from the hard drive in file some_name.json
