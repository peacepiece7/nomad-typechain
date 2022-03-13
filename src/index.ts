import * as CryptoJS from "crypto-js";

class Block {
    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timeStamp : number

    // Static method
    // 인스턴스생성해야 instance._prototype_.method가 생기는데 static은 기냥 스크립트 읽을 때 Block.calculateBlockHahs()가능
    static calculateBlockHash = (index:number, previousHash:string, timeStamp:number, data:string):string => {
        return CryptoJS.SHA256(index + previousHash + timeStamp + data).toString()
    }
    static validateStructure = (aBlock : Block) : boolean => {
        console.log(typeof aBlock.index, typeof aBlock.hash, typeof aBlock.previousHash, typeof aBlock.timeStamp,typeof aBlock.data)
        if(typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.timeStamp === "number" && typeof aBlock.data === "string"){
            return true
        }
        return false
    }
    constructor(
        index : number,
        hash : string,
        previousHash : string,
        data : string,
        timeStamp : number
    ){
        this.index = index
        this.hash = hash
        this.previousHash = previousHash
        this.data = data
        this.timeStamp =  timeStamp
    }
}

const genesisBlock = new Block(0, "123123123123", "","first", 1647155954473)

let blockchain : Block[] = [genesisBlock]

const getLastestBlock = () : Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = () : number => Math.round(Date.now())
const createNewBlock = (data : string) : Block => {
    const previousBlock : Block = getLastestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimeStamp : number = getNewTimeStamp()
    const newHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp,data)
    const newBlock : Block = new Block(newIndex, newHash,previousBlock.hash, data, newTimeStamp)
    // console.log("@@@@")
    // console.log("previous block")
    // console.log(previousBlock )
    // console.log("@@@@")
    // console.log("\n\r newTimeStamp", newTimeStamp)
    // console.log(newHash, "\n\r")
    // console.log("\n\r newBlock", newBlock, "\n\r")
    addBlock(newBlock)
    return newBlock
}

const getHashforBlock = (aBlock : Block):string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timeStamp, aBlock.data)

const isBlockValid = (candidateBlock : Block, previousBlock : Block) : boolean => {
    if(Block.validateStructure(candidateBlock)){
        return false
    }else if (previousBlock.index + 1 !== candidateBlock.index){
        return false
    }else if (previousBlock.hash !== candidateBlock.previousHash){
        return false
    }else if (getHashforBlock(candidateBlock) !== candidateBlock.hash){
     return false   
    }
    return true
}

const addBlock = (candidateBlock : Block) : void => {

    if(!isBlockValid(candidateBlock, getLastestBlock())){
        blockchain.push(candidateBlock)
    }
}

createNewBlock("second")
createNewBlock("third")
createNewBlock("fourth")
createNewBlock("fifth")

console.log("\n\r result : \n\r \n\r", blockchain)

export {}