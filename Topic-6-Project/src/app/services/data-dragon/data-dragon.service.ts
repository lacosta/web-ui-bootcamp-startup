import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VersionsRealm } from './versionsRealm';
import { Champions } from './champions';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class DataDragonService {

  constructor(private http: HttpClient) { }

  private lastVersions: VersionsRealm;

  public getVersions(): Observable<VersionsRealm> {
    return this.http.get<VersionsRealm>(environment.ddragonLocation + '/realms/na.json');
  }

  public setLastVersions(lastVersions: VersionsRealm) {
    this.lastVersions = lastVersions;
  }

  // depende de la de arriba
  public getChamps(): Observable<Champions> {
    return this.http.get<Champions>(environment.ddragonLocation + '/cdn/' + this.lastVersions.n.champion + '/data/en_US/champion.json');
  }

  public getItems(): Observable<Items> {
    return this.http.get<Items>(environment.ddragonLocation + '/cdn/' + this.lastVersions.n.item + '/data/en_US/item.json');
  }
}
