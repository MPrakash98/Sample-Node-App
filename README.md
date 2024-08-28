
# Introduction

This Sample Node.js module provides filtering and pagination functionalities for JSON data. It allows you to filter JSON data based on specified criteria and paginate the results. The module is designed to be simple, efficient, and easy to integrate into your existing Web applications.


## Features

- Easily filter JSON data by key-value pairs.
- Paginate filtered JSON data with customizable page size.
- Options to adjust the pagination settings.
- Expose the functionalities through RESTful API endpoints.


## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MPrakash98/Sample-Node-App.git
   cd Sample-Node-App
   ```
    
2. **Install Dependencies**:
Make sure you have Node.js installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run start
   ```
    
## API Endpoints


#### Get list

```http
  GET /data?filterkeyword={key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `key`      | `string` | **Required**. keyword to search  |



## File Structure

- **server.js**: Responsible for handling server creation.
- **controller.js**: Responsible for routes and their functions and handles responses.
- **sampledata.js**: Responsible for generating data set required.

## Customization

- Change the `PORT` in .env file for listening to a different port.
- Change `DATA_SET_LENGTH` in .env file to generate a different no. of data.
