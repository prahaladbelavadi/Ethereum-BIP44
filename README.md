# Ethereum-BIP44
Generating BIP 44 compliant wallets for ethereum; Trial

Message Digest: `m / purpose' / coin_type' / account' / change / address_index`

Status:
Not working; Project suspended;
Generated address is not a compatible ethereum address

Better off using `web3.eth.accounts.create([entropy]);` and feeding in the message digest as entropy

or rather research more on bip39, BIP44 and BIP32



Installation:
`npm i bip39 ethjs-util ethereumjs-tx web3 hdkey --save`

Error:
Node Gyp needs a python 2.7 environment and doesn't support 3 yet

Switch environment using
- `conda env list`
- `source activate python-2_7-old`

Req:
- https://github.com/ethjs/ethjs-util
- https://github.com/ethereumjs/ethereumjs-tx
- https://github.com/ethereum/web3.js/tree/master/packages/web3
- https://github.com/cryptocoinjs/hdkey
- https://github.com/bitcoinjs/bip39


Reference:
- [Ethereum HD wallets^*^](https://medium.com/bitcraft/so-you-want-to-build-an-ethereum-hd-wallet-cb2b7d7e4998)
- [Trapp BIP44](https://github.com/trapp/ethereum-bip44)
- [Ganache Cli](https://github.com/trufflesuite/ganache-cli/pull/44/files#diff-f3d2a8282458e5cf231eee263cd57075R32)
- [Ethereum JS wallet](https://github.com/ethereumjs/ethereumjs-wallet)

[Discussion](https://github.com/ethereum/EIPs/issues/84#issue-143651804)

- [Docs w3](https://web3js.readthedocs.io/en/1.0/web3-eth-accounts.html#parameters)
