const ROT_TOKEN_CONTRACT = '0x5d5c119cec1777a022cdbaf817909484627244e2'; // ROToken contract address
const TOKEN_SALE_CONTRACT = '0x2BB1733e49d8e77bdb3EBfA7C4d013064e040A70'; // TokenSale contract address

async function tvl(api) {
  // Get ROToken balance in TokenSale contract
  const roBalance = await api.call({
    abi: 'erc20:balanceOf',
    target: ROT_TOKEN_CONTRACT,
    params: [TOKEN_SALE_CONTRACT],
  });
  
  api.add(ROT_TOKEN_CONTRACT, roBalance);
}

module.exports = {
  methodology: 'Counts the ROT tokens locked in the Token Sale contract available for purchase.',
  start: 307801827, // Replace with your contract deployment timestamp
  arbitrum: {
    tvl,
  }
};
