# ApexHauz

## About the project

ApexHauz is a platform where people can create and/or search properties for sale or rent

## Required features

- User can sign up
- User can sign in
- User can post a property advert
- User can update the details of a property advert
- User can mark his/her posted advert as sold
- User can delete his/her property advert
- User can view all property adverts
- User can view all properties of a specific type - 2 bedrooms, 3 bedrooms, mini flat etc
- User can view a specific property advert

## Optional features

- User can reset password
- User can report a posted advert as fraudulent
- User can add multiple pictures to a posted advert

## How to run the project

- Clone or download this repository.
- Create a database called **"ApexHauz_API"** on your local machine.
- Run _"npm install"_ and _"npm start"_...
- Reconfigure the _".env"_ file if neccessary...

## Testing the API's

**Note: ** For the post request the list of data below are the required data and needs to be passed in json format.

- POST /api/v1/auth/signup: Create user account
  - email\*
  - first_name\*
  - last_name\*
  - password\*
  - phone\*
  - address\*
- POST /api/v1/auth/signin: Login a user
  - email\*
  - password\*
- POST /api/v1/auth/resetpassword: Reset user password
  - email\*
- POST /api/v1/auth/updatepassword: Update password
  - token\*
  - password\*
- POST /api/v1/properties: Create a property advert
  - owner(owner's id)\*
  - status
  - price\*
  - state\*
  - city\*
  - address\*
  - type\*
  - image_url\*
- PATCH /api/v1/properties/<:property-id>: Update property data
- PATCH /api/v1/properties/<:property-id>/sold: Mark a property as sold
- DELETE /api/v1/properties/<:property-id>: Delete a property advert
- GET /api/v1/properties/<:property-id>: Get a specific property by ID
- GET /api/v1/properties: Get all properties
- GET /api/v1/properties/search?type=propertyType: Get all properties with a specific type
- GET /api/v1/reports: Get all reports
- POST /api/v1/reports: Report property
  - property_id\*
  - reason\*
  - description\*

## Contributors

Thanks to these people for contributing to the maintenance of this tutorial.

<a href="https://github.com/Samueljr-web" target="_blank" title="Samuel">
  <img src="https://github.com/Samueljr-web.png?size=40" height="40" width="40" alt="Samuel" />
</a>

<a href="https://github.com/Ernest2026" target="_blank" title="Ernesto">
  <img src="https://github.com/ernest2026.png?size=40" height="40" width="40" alt="Ernesto" />
</a>

<a href="https://github.com/davidessien925" target="_blank" title="David Essien">
  <img src="https://github.com/davidessien925.png?size=40" height="40" width="40" alt="David Essien" />
</a>

<a href="https://github.com/Rahdeg" target="_blank" title="Rahdeg">
  <img src="https://github.com/Rahdeg.png?size=40" height="40" width="40" alt="Rahdeg" />
</a>

This list is maintained manually—for now—and includes (a) each person who submitted a pull request that was eventually merged into `main`, and (b) each person who contributed in a different way (e.g. providing constructive feedback) and who approved of me including them in this list.
