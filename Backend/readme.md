# Backend API Documentation

## `/users/register` Endpoint

### Description

Register a new user by creating a user account with the provided informaton.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).


### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (string): JWT Token 





## `/user/login` Endpoint

### Description

Authenticate a user using their email and password, returning a JWT token upon success

### HTTP Method

`POST`


### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (string): JWT Token 









## `/user/profile` Endpoint

### Description

Retrives the profile information of the currently authenticated user.

### HTTP Method

`Get`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`


### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).


## `/user/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers.

### HTTP Method

`Get`

### Authentication

Requires a valid JWT token in the Authorization header or cookie.



## `/captains/register` Endpoint


### Description
This endpoint allows the registration of a new captain by creating captain account with the provided information.

### HTTP Method

`POST`


#### Request Body

- `fullname` (object)
  - `firstname` (string): The first name of the captain.
  - `lastname` (string): The last name of the captain.
- `email` (string): The email address of the captain.
- `password` (string): The password for the captain's account.
- `vehicle` (object)
  - `color` (string): The color of the captain's vehicle.
  - `plate` (string): The license plate of the captain's vehicle.
  - `capacity` (number): The seating capacity of the vehicle.
  - `vehicleType` (string): The type of the vehicle.
        


### Example Response

Upon successful registration, the response is in JSON format and includes the following fields:

- `token` (string): JWT Token  The authentication token for the captain's session.
- `captain` (object)
  - `fullname` (object)
    - `firstname` (string): The first name of the captain.
    - `lastname` (string): The last name of the captain.

  - `email` (string): The email address of the captain.
  - `password` (string): The password for the captain's account.
  - `status` (string): The status of the captain's account, active or inactive.
  
  - `vehicle` (object)
    - `color` (string): The color of the captain's vehicle.
    - `plate` (string): The license plate of the captain's vehicle.
    - `capacity` (number): The seating capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
    
  - `_id` (string): The unique identifier for the captain.
  - `__v` (number): The version of the captain's data.
