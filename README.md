# Intermittent Node.js Server Crash

This repository demonstrates a bug causing intermittent crashes in a Node.js HTTP server.  The server appears to function normally for a period, then unexpectedly crashes without clear error messages.  The solution involves improving memory management and handling potential resource leaks.

## Bug Report

The original `server.js` file contains the faulty code.  The server crashes after handling an unpredictable number of requests.  This is likely due to a memory leak or improper resource handling.

## Solution

The fixed version, `server-fixed.js`, addresses the issue.  While the exact cause of the original crash can vary depending on the specific application, the solution demonstrates general best practices to prevent such issues.

## Setup

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` (if necessary).
4. Run `node server.js` (for the buggy version) or `node server-fixed.js` (for the fixed version).
5. Observe the behavior of the server.  The buggy version may crash, while the fixed version should run stably.

## Contributing

Contributions are welcome!