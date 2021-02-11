#!/usr/bin/env bash

# Deploy contracts
truffle migrate --reset --network ropsten

# Verify Contracts on Etherscan
truffle run verify SushiToken --network ropsten --license SPDX-License-Identifier
truffle run verify MasterChef --network ropsten --license SPDX-License-Identifier

# Flatten Contracts
./node_modules/.bin/truffle-flattener contracts/SushiToken.sol > flats/SushiToken_flat.sol
./node_modules/.bin/truffle-flattener contracts/MasterChef.sol > flats/MasterChef_flat.sol
