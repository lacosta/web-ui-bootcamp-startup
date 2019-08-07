import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '../../services/data-dragon/data-dragon.service';
import { ItemData } from '../../services/data-dragon/itemData';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private dataDragonSrv: DataDragonService) { }

  public items: ItemData[];
  public itemVersion: string;

  ngOnInit(): void {
    this.dataDragonSrv.getVersions().subscribe(versions => {
      this.itemVersion = versions.n.item;
      this.dataDragonSrv.setLastVersions(versions);
      this.dataDragonSrv.getItems().subscribe(items => {
        this.items = [];
        Object.keys(items.data).forEach(itemKey => {
          const item: ItemData = items.data[itemKey];
          item.fullImage = environment.ddragonLocation + '/cdn/' + this.itemVersion + '/img/item/' + item.image.full;
          this.items.push(item);
        });
        console.log('Items:', this.items);
      }, err => {
        alert('Ocurrió un error obteniendo los items');
      });
    }, err => {
      alert('Ocurrió un error');
    });
  }
}
