import  { NextResponse } from "next/server";
import { users } from "./users"
import {
    clusterApiUrl,
    Connection,
    Keypair,
    PublicKey
  } from "@solana/web3.js";
  import bs58 from "bs58";

export async function GET(req:any){
    let arr = []
    const KEYPAIR = Keypair.fromSecretKey(bs58.decode(process.env.WALLET1!))
    const CONNECTION = new Connection(clusterApiUrl("devnet"));
    const { lastValidBlockHeight, blockhash } =
        await CONNECTION.getLatestBlockhash();

    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let stat = ""
        const bal = await CONNECTION.getBalance(new PublicKey(element.hash))
        if (bal == 0){
            stat = "IN ✅"
        } else {
            stat = "OUT ❌"
        }
        arr.push({
            id: element.id,
            name: element.name,
            status: stat,
            hash: element.hash
        })
    }

    return NextResponse.json({
        result: 0,
        arr : arr
    });
}