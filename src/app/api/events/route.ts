import type { NextApiRequest } from "next";
import { dta } from "../_data/data";
import connection from "../_db/connection";


export async function GET() {
    let res = await connection.query(`SELECT * FROM events`)
    console.log(res.rows)
    return Response.json(res.rows)
}

export async function POST(req:NextApiRequest) {
    let body = req.body;
    console.log(body)
    // let res = await connection.query(`SELECT * FROM events`)
    // console.log(res.rows)
    // return Response.json(res.rows)
}