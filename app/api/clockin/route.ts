import  { NextResponse } from "next/server";
import {
    clusterApiUrl,
    Connection,
    Keypair,
    SystemProgram,
    Transaction
  } from "@solana/web3.js";
  import bs58 from "bs58";

export async function GET(){
    const KEYPAIR1 = Keypair.fromSecretKey(bs58.decode(process.env.WALLET1!))
    const KEYPAIR2 = Keypair.fromSecretKey(bs58.decode(process.env.WALLET2!))

    const CONNECTION = new Connection(clusterApiUrl("devnet"));
    const { lastValidBlockHeight, blockhash } =
        await CONNECTION.getLatestBlockhash();
    
    const min = await CONNECTION.getBalance(KEYPAIR1.publicKey) - 5000;
    if(min<0)
    {
        return NextResponse.json({
            result: 1,
        });
    }

    const clockin = new Transaction();

    clockin.instructions = [
        SystemProgram.transfer({
            fromPubkey: KEYPAIR1.publicKey,
            toPubkey: KEYPAIR2.publicKey,
            lamports: min,
            programId: SystemProgram.programId
        })
    ]

    const hash = await CONNECTION.sendTransaction(clockin, [KEYPAIR1])
    return NextResponse.json({
        result: 0,
        hash: hash,
    });
}