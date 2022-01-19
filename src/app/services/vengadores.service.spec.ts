import { TestBed } from '@angular/core/testing';

import {VengadoresService} from "./avengers.service";

describe('VengadoresService', () => {
  let service: VengadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VengadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
