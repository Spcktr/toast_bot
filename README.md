# Work In Progress!

## Toast Discord Bot

Simple discord bot written for a gaming discord.

## Prerequisites

You'll need nodejs and npm installed as it uses the latest disord.js for api connections.

## Configuration

Initial configuration:
Copy the `example_config.json` and rename it to `config.json`
Then set it up with your secret key off the discord site.

To set your server list:
Copy the `example_server_list.json` file and rename it to `server_list.json`.
Change the examples to suit your own game server information, you can add or remove the number of the servers listed by adding more "name": and "value": fields.

## Running

Within the base folder, run `node mybot.js` and wait for it to join your server.



## Todo/Bugsplat

- [ ] Move Server list to a sperate file for easy editing
- [ ] Set up more in-depth presence with users requesting information
- [ ] Specific server information commands (such as !minecraft giving more details about mods or server population)
- [ ] Code clean up
- [ ] Command issue delay (delay on commands being issued by a single user to stop spam)
- [x] Detailed console logging for server join and part from discord.
- [ ] Console log for command request

## License

GNU GPL v3


Copyright © 2018 spcktr
