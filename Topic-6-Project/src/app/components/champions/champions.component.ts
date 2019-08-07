import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '../../services/data-dragon/data-dragon.service';
import { ChampionData } from '../../services/data-dragon/championData';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  constructor(private dataDragonSrv: DataDragonService) { }

  public champions: ChampionData[];
  public championVersion: string;
  actualPage: number = 1;

  ngOnInit(): void {
    this.dataDragonSrv.getVersions().subscribe(versions => {
      this.championVersion = versions.n.champion;
      this.dataDragonSrv.setLastVersions(versions);
      this.dataDragonSrv.getChamps().subscribe(champs => {
        // champs.data
        this.champions = [];
        Object.keys(champs.data).forEach(champKey => {
          const champ: ChampionData = champs.data[champKey];
          champ.fullImage = environment.ddragonLocation + '/cdn/' + this.championVersion + '/img/champion/' + champ.image.full;
          this.champions.push(champ);
        });
        console.log('Champs:', this.champions);
      }, err => {
        alert('An error occurred obtaining the champions');
      });
    }, err => {
      alert('An error occurred');
    }); 
  }
}
