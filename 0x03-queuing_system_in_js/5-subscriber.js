#!/usr/bin/env node

import { createClient } from 'redis';

const client = createClient();

client.on('error', (error) => console.log(`Redis client not connected to the server: ${error}`));
client.on('connect', () => console.log('Redis client connected to the server'));
client.subscribe('holberton school channel');
client.on('message', (error, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});
