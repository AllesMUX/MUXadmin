# MUXadmin
MUXadmin is an admin application for controlling the running status of [MUXbalancer](https://github.com/AllesMUX/MUXbalancer).

## Installation
To install MUXadmin, use the following command:

```
$ git clone https://github.com/AllesMUX/MUXadmin
$ cd MUXadmin
$ composer install
```
Add in `.env` file setup like this:
```
MUXAPI_HOST=127.0.0.1
MUXAPI_PORT=YOUR_MUXAPI_PORT
MUXAPI_KEY=YOUR_MUXAPI_KEY
```
`YOUR_MUX_API` and `YOUR_MUXAPI_PORT` should be same as in `condig.yaml` in [MUXbalancer](https://github.com/AllesMUX/MUXbalancer).

Setup in `database/seeders/DatabaseSeeder.php` your login and password and create new user:
```
$ php artisan db:seed
```
Now you can run application and login:
```
$ php artisan serve
```
## Contributing
Contributions to MUXadmin are welcome! If you have an idea for a new feature or have found a bug, please open an issue on the [GitHub issue tracker](https://github.com/AllesMUX/MUXadmin/issues).

If you would like to contribute code, please fork the repository and submit a pull request.

## License
MUXadmin is licensed under the [Apache License 2.0](https://github.com/AllesMUX/MUXadmin/blob/main/LICENSE).