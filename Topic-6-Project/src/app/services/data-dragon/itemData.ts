export class ItemData {
  public version: string;
  public name: string;
  public description: string;
  public colloq: string;
  public plaintext: string;
  public into: string[];
  public image: ItemImage;
  public fullImage?: string; // This is not standard from the API
  public gold: ItemPrice;
  public tag: string[];
}

export class ItemImage {
  public full: string;
  public sprite: string;
  public group: string;
  public x: number;
  public y: number;
  public w: number;
  public h: number;
}

export class ItemPrice {
  public base: number;
  public purchase: boolean;
  public total: number;
  public sell: number;
}