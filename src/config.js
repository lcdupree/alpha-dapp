 //kovan
export const agentUrl = "http://localhost:8000/api"

export const tokenAbi = [{ "constant": true, "inputs": [], "name": "PRIVATE_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "DECIMALS", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INITIAL_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PUBLIC_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "NAME", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "setOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "beneficiary", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferTokens", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ADVISORS_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "SYMBOL", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "burner", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }]
export const tokenAddress = "0x9de7efeb49a9dbc948a4dd4d4a6bcad624a797fe"

export const simpleMarketJobAbi = [ { "constant": false, "inputs": [ { "name": "_jobResult", "type": "bytes" } ], "name": "setJobCompleted", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "payer", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "jobResult", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "jobCompleted", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "deposit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "jobDescriptor", "outputs": [ { "name": "", "type": "bytes" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "jobAccepted", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "agent", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "_agent", "type": "address" }, { "name": "_token", "type": "address" }, { "name": "_jobDescriptor", "type": "bytes" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Deposited", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "payee", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "Withdrew", "type": "event" }, { "anonymous": false, "inputs": [], "name": "JobCompleted", "type": "event" } ]
export const simpleMarketJobBytecode = "0x6060604052341561000f57600080fd5b604051610e95380380610e958339810160405280805190602001909190805190602001909190805182019190505060008273ffffffffffffffffffffffffffffffffffffffff161415151561006357600080fd5b60008373ffffffffffffffffffffffffffffffffffffffff161415151561008957600080fd5b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600360006101000a81548160ff021916908315150217905550806001908051906020019061017c929190610185565b5050505061022a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101c657805160ff19168380011785556101f4565b828001600101855582156101f4579182015b828111156101f35782518255916020019190600101906101d8565b5b5090506102019190610205565b5090565b61022791905b8082111561022357600081600090555060010161020b565b5090565b90565b610c5c806102396000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063078c0452146100a9578063123119cd146101065780633ccfd60b1461015b5780638b58cc4c14610170578063a552386b146101fe578063b6b55f251461022b578063e8992acc1461024e578063eea137fd146102dc578063f5ff5c7614610309578063fc0c546a1461035e575b600080fd5b34156100b457600080fd5b610104600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103b3565b005b341561011157600080fd5b610119610492565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016657600080fd5b61016e6104b8565b005b341561017b57600080fd5b6101836107cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c35780820151818401526020810190506101a8565b50505050905090810190601f1680156101f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020957600080fd5b61021161086a565b604051808215151515815260200191505060405180910390f35b341561023657600080fd5b61024c600480803590602001909190505061087d565b005b341561025957600080fd5b610261610a8f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a1578082015181840152602081019050610286565b50505050905090810190601f1680156102ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102e757600080fd5b6102ef610b2d565b604051808215151515815260200191505060405180910390f35b341561031457600080fd5b61031c610b40565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036957600080fd5b610371610b66565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561040f57600080fd5b60001515600360009054906101000a900460ff16151514151561043157600080fd5b6001600360006101000a81548160ff0219169083151502179055508060029080519060200190610462929190610b8b565b507fc3feda8a94e1e6d26005ad24f78b1e773162175a4cfe587ffa6513036f1b17f560405160405180910390a150565b600360029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060011515600360009054906101000a900460ff1615151415156104dc57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15156105a057600080fd5b6102c65a03f115156105b157600080fd5b5050506040518051905090506000811115156105cc57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561062857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561071657600080fd5b6102c65a03f1151561072757600080fd5b50505060405180519050151561073c57600080fd5b7fb244b9a17ad633c6e83b7983ee04320484956a68ddbe96a0b70dfca1cf19d723600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108625780601f1061083757610100808354040283529160200191610862565b820191906000526020600020905b81548152906001019060200180831161084557829003601f168201915b505050505081565b600360009054906101000a900460ff1681565b600360029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108d957600080fd5b60001515600360009054906101000a900460ff1615151415156108fb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156109fb57600080fd5b6102c65a03f11515610a0c57600080fd5b505050604051805190501515610a2157600080fd5b7f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c43382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b255780601f10610afa57610100808354040283529160200191610b25565b820191906000526020600020905b815481529060010190602001808311610b0857829003601f168201915b505050505081565b600360019054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bcc57805160ff1916838001178555610bfa565b82800160010185558215610bfa579182015b82811115610bf9578251825591602001919060010190610bde565b5b509050610c079190610c0b565b5090565b610c2d91905b80821115610c29576000816000905550600101610c11565b5090565b905600a165627a7a72305820f9474249544918c9302fda8af42a60f728cbffd8752118a5ba27110dd757a7c00029"

export const marketJobAbi = [{ "constant": false, "inputs": [{ "name": "_jobResult", "type": "bytes" }], "name": "setJobCompleted", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "payer", "outputs": [{ "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "amounts", "outputs": [{ "name": "amount", "type": "uint256", "value": "0" }, { "name": "idService", "type": "uint256", "value": "0" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "jobResult", "outputs": [{ "name": "", "type": "bytes", "value": "0x" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "masterAgent", "outputs": [{ "name": "", "type": "address", "value": "0xabdd6525bc4012b07a3a3758070c676fad70869b" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "jobCompleted", "outputs": [{ "name": "", "type": "bool", "value": false }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "deposit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "setJobAccepted", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "jobDescriptor", "outputs": [{ "name": "", "type": "bytes", "value": "0x" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "jobAccepted", "outputs": [{ "name": "", "type": "bool", "value": false }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "token", "outputs": [{ "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_agents", "type": "address[]" }, { "name": "_amounts", "type": "uint256[]" }, { "name": "_services", "type": "uint256[]" }, { "name": "_token", "type": "address" }, { "name": "_payer", "type": "address" }, { "name": "_jobDescriptor", "type": "bytes" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "payer", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Deposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "payee", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdrew", "type": "event" }, { "anonymous": false, "inputs": [], "name": "JobCompleted", "type": "event" }, { "anonymous": false, "inputs": [], "name": "JobAccepted", "type": "event" }]
export const marketJobBytecode = "0x606060405234156200001057600080fd5b6040516200100a3803806200100a833981016040528080518201919060200180518201919060200180518201919060200180519060200190919080519060200190919080518201919050506000855187511415156200006e57600080fd5b845186511415156200007f57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600290805190602001906200011992919062000252565b506000600360006101000a81548160ff021916908315150217905550836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b85518110156200024557604080519081016040528087838151811015156200019e57fe5b9060200190602002015181526020018683815181101515620001bc57fe5b90602001906020020151815250600660008984815181101515620001dc57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001556020820151816001015590505080806001019150506200017a565b5050505050505062000301565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200029557805160ff1916838001178555620002c6565b82800160010185558215620002c6579182015b82811115620002c5578251825591602001919060010190620002a8565b5b509050620002d59190620002d9565b5090565b620002fe91905b80821115620002fa576000816000905550600101620002e0565b5090565b90565b610cf980620003116000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063078c0452146100bf578063123119cd1461011c5780633ccfd60b1461017157806355a3b2c1146101865780638b58cc4c146101da5780639d23f09014610268578063a552386b146102bd578063b6b55f25146102ea578063c2ba857e1461030d578063e8992acc14610322578063eea137fd146103b0578063fc0c546a146103dd575b600080fd5b34156100ca57600080fd5b61011a600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610432565b005b341561012757600080fd5b61012f610511565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561017c57600080fd5b610184610537565b005b341561019157600080fd5b6101bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061077e565b604051808381526020018281526020019250505060405180910390f35b34156101e557600080fd5b6101ed6107a2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022d578082015181840152602081019050610212565b50505050905090810190601f16801561025a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561027357600080fd5b61027b610840565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102c857600080fd5b6102d0610866565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b61030b6004808035906020019091905050610879565b005b341561031857600080fd5b610320610a8b565b005b341561032d57600080fd5b610335610b52565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561037557808201518184015260208101905061035a565b50505050905090810190601f1680156103a25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103bb57600080fd5b6103c3610bf0565b604051808215151515815260200191505060405180910390f35b34156103e857600080fd5b6103f0610c03565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561048e57600080fd5b60001515600360009054906101000a900460ff1615151415156104b057600080fd5b6001600360006101000a81548160ff02191690831515021790555080600490805190602001906104e1929190610c28565b507fc3feda8a94e1e6d26005ad24f78b1e773162175a4cfe587ffa6513036f1b17f560405160405180910390a150565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060011515600360009054906101000a900460ff16151514151561055c57600080fd5b60011515600360019054906101000a900460ff16151514151561057e57600080fd5b339150600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015490506000811115156105d557600080fd5b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001819055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156106e957600080fd5b6102c65a03f115156106fa57600080fd5b50505060405180519050151561070f57600080fd5b7fb244b9a17ad633c6e83b7983ee04320484956a68ddbe96a0b70dfca1cf19d7238282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15050565b60066020528060005260406000206000915090508060000154908060010154905082565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108385780601f1061080d57610100808354040283529160200191610838565b820191906000526020600020905b81548152906001019060200180831161081b57829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108d557600080fd5b60001515600360009054906101000a900460ff1615151415156108f757600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15156109f757600080fd5b6102c65a03f11515610a0857600080fd5b505050604051805190501515610a1d57600080fd5b7f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c43382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a150565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ae757600080fd5b60011515600360009054906101000a900460ff161515141515610b0957600080fd5b6001600360016101000a81548160ff0219169083151502179055507fbb4dc7231e372d3045e445d0edfcdbfd6fbabb267fd42c35dbda9e01bd8bc95560405160405180910390a1565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610be85780601f10610bbd57610100808354040283529160200191610be8565b820191906000526020600020905b815481529060010190602001808311610bcb57829003601f168201915b505050505081565b600360019054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c6957805160ff1916838001178555610c97565b82800160010185558215610c97579182015b82811115610c96578251825591602001919060010190610c7b565b5b509050610ca49190610ca8565b5090565b610cca91905b80821115610cc6576000816000905550600101610cae565b5090565b905600a165627a7a7230582002e635f8ce215152e863b4c0946b6ad3f182ce41f8693efbd551ed2e2f1772940029"

