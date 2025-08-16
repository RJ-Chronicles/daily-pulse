import fs from 'fs';

import { AdviserResponse } from '../types/type.td';

export const WriteToFile = async (res: AdviserResponse, filePath: string) => {
  let data: Record<string, AdviserResponse> = {};
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '{}');
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(content || '{}');
  } catch (err) {
    console.error('❌ Failed to read or parse existing JSON file:', err);
    return;
  }

  const id = Math.ceil(Math.random() * 100000);
  data[id] = res;

  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ Data saved under ID: ${id}`);
  } catch (err) {
    console.error('❌ Failed to write to JSON file:', err);
  }
};
