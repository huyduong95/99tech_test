import * as path from 'path';
import * as fs from 'fs';
import { TestData } from '../models/testData';

export class DataLoader {
  private static data: TestData | null = null;

  static loadTestData(): TestData {
    if (!this.data) {
      const filePath = path.resolve(__dirname, '../resources/test_data.json');
      const rawData = fs.readFileSync(filePath, 'utf-8');
      this.data = JSON.parse(rawData) as TestData;
    }
    return this.data;
  }

  static abbreviate = (str: string, length: number = 2): string => {
    return str.substring(0, length).toLowerCase();
};
}
