const path = require('path')
const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const networkIds = {
	mainnet: 1,
	ropsten: 3,
	rinkeby: 4,
	goerli: 5,
	kovan: 42,
}

const MNEMONIC= "educate meadow edge art album truly evoke include arrest try fruit receive"
const getInfuraNetworkConfig = networkName => {
	return {
		provider: () =>
			new HDWalletProvider({
				mnemonic: MNEMONIC,
				providerOrUrl: `https://${networkName}.infura.io/v3/49f3e4fc7e164ee3a35db5a64a1c5cb4`,
			}),
		network_id: networkIds[networkName],
	}
}

module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// to customize your Truffle configuration!
	compilers: {
		solc: {
			version: '0.8.0',
		},
	},
	// Contracts
	contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
	// Networks
	networks: {
		// Local
		develop: {
			host: '127.0.0.1',
			port: 7545,
			network_id: 5777,
		},
		// Mainnet
		mainnet: getInfuraNetworkConfig('mainnet'),
		// Testnets
		ropsten: getInfuraNetworkConfig('ropsten'),
		rinkeby: getInfuraNetworkConfig('rinkeby'),
		goerli: getInfuraNetworkConfig('goerli'),
		kovan: getInfuraNetworkConfig('kovan'),
	},
}
