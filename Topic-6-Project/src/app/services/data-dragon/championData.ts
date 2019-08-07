export class ChampionData {
  public version: string;
  public id: string;
  public key: string;
  public name: string;
  public title: string;
  public blurb: string;
  public info: ChampionInfo;
  public image: ChampionImage;
  public fullImage?: string; // This is not standard from the API
  public tag: string[];
  public partype: string;
  public stats: ChampionStats;
}

export class ChampionInfo {
  public attack: number;
  public defense: number;
  public magic: number;
  public difficulty: number;
}

export class ChampionImage {
  public full: string;
  public sprite: string;
  public group: string;
  public x: number;
  public y: number;
  public w: number;
  public h: number;
}

export class ChampionStats {
  public hp: number;
  public hpperlevel: number;
  public mp: number;
  public mpperlevel: number;
  public movespeed: number;
  public armor: number;
  public armorperlevel: number;
  public spellblock: number;
  public spellblockperlevel: number;
  public attackrange: number;
  public hpregen: number;
  public hpregenperlevel: number;
  public mpregen: number;
  public mpregenperlevel: number;
  public crit: number;
  public critperleve: number;
  public attackdamage: number;
  public attackdamageperlevel: number;
  public attackspeed: number;
  public attackspeedperlevel: number;
}