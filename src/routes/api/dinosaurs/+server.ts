import { json } from "@sveltejs/kit";
import data from "../data.json" with { type: "json" };

// experimental

import fs from "fs";
import path from "path";



export function GET() {
  return json(data);
}


// // experimental
// export async function POST({ request }) {
//   const body = await request.json();
//   if (!body.name || !body.description) {
//     return json({ error: "Missing name or description" }, { status: 400 });
//   }

//   // Append new dinosaur to data
//   const newEntry = { name: body.name, description: body.description };
//   const updatedData = [...data, newEntry];

//   // Write to data.json
//   fs.writeFileSync(path, JSON.stringify(updatedData, null, 2));

//   return json(newEntry, { status: 201 });
// }