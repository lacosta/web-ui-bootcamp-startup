import { TestBed } from '@angular/core/testing';

import { DataDragonService } from './data-dragon.service';

describe('DataDragonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    expect(service).toBeTruthy();
  });
});
