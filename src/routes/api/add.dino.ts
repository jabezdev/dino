import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

const dataPath = path.resolve('src/data/data.json');

export const POST: RequestHandler = async ({ request }) => {
  const { name } = await request.json();

  // Read current data
  const file = await fs.readFile(dataPath, 'utf-8');
  const data = JSON.parse(file);

  // Add new dino
  data.dinosaurs.push({ name });

  // Write updated data
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};