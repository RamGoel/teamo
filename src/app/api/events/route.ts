import { dta } from "../_data/data";

export async function GET() {
    return Response.json(dta.map(item=>item.aboutEvent))
}