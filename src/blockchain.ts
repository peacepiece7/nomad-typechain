import { sha256 } from "crypto-js/sha256";

interface History {
  owner: string;
  previousOwners: string[];
}

class Block {
  public idx: number;
  public hash: string;
  public previousHash: number;
  public history: History;
  public timestamp: number;

  static generateNewHash = (idx: number, hash: string, owner: string, timestamp: number) => {
    return sha256(idx + owner + hash + timestamp).toString("utf-8");
  };

  constructor(idx: number, hash: string, history: History, previousHash, timestamp: number) {
    this.idx = idx;
    this.hash = hash;
    this.history = history;
    this.timestamp = timestamp;
  }
}

const block = new Block(1, "imm", { owner: "taetae", previousOwners: [] }, Date.now());
const blockchain: Block[] = [block];
const lastBlock: Block = blockchain[blockchain.length - 1];

const isBlockVaild = (candidateBlock: Block, curBlock: Block) => {
  // short cut
  const can = candidateBlock;
  const cur = curBlock;
  if (can.idx === cur.idx) {
    return false;
  }
  if (can.hash === cur.hash) {
    return false;
  }
  if (can.history.owner === cur.history.owner) {
    return false;
  }
  return true;
};

const addBlock = (candidateBlock: Block, lastBlock: Block) => {
  if (isBlockVaild(candidateBlock, lastBlock)) {
    blockchain.push(candidateBlock);
  }
};

const createNewBlock = (owner: string, prevHistory: History) => {
  const newHistory: History = {
    owner,
    previousOwners: prevHistory.previousOwners,
  };
  const newIdx: number = lastBlock.idx++;
  const newTimestamp: number = Math.round(Date.now());
  const prevHash: string = lastBlock.hash;
  const newHash: string = Block.generateNewHash(newIdx, prevHash, owner, newTimestamp);
  const newBlock: Block = {
    idx: newIdx,
    hash: newHash,
    history: newHistory,
    prevHash: lastBlock.prevHash,
    timestamp: newTimestamp,
  };

  addBlock(newBlock, lastBlock.history);
};
