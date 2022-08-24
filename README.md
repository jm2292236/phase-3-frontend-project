# This is the frontend part of the Phase 3 project.

This is a simple app that uses a Sinatra API backend to access and persist data in a database.

This app is about creating a Vehicle log when the user can create records for 3 different kind of car events:
- Fill-ups
- Services (any service like regular maintenance or replacing a motor part)
- Expenses (anything other than fill-ups and services, like a car wash or buying an accessory).

After recording this logs/events the user can keep track of 
- spending on gas
- spending on services
- spending on other expenses
- average MPG of the vehicle
- total amount of money they have spent in the vehicle

To be able to record this events, the user has the ability to insert certain data in several catalogs the app needs to work properly:
- Vehicles, the core information for the application, the user needs to add data for each vehicle they want to keep logs.
- Locations, the name of gas stations, vehicle parts stores, or any other kind of car related vendors.
- Services, the name of the different services performed on the vehicle, like oil changes, tire rotation, preventive maintenance, etc.
