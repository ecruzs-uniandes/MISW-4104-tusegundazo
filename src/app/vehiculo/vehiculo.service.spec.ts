/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VehiculoService } from './vehiculo.service';
import { VehiculoComponent } from './vehiculo.component';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { Vehiculo } from './vehiculo';

describe('Service: Vehiculo', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let debug: DebugElement;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculoComponent],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++){
      const vehiculo = new Vehiculo(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.vehiculos.push(vehiculo);
    }
    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    console.log(JSON.stringify(component));
    expect(component).toBeTruthy();
  });

  it('should have 1 <thead> elements', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

  it('should have 1 <tbody> elements', () => {
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

  it('should have 1 <table> elements', () => {
    expect(debug.queryAll(By.css('#vehiculosTable tbody'))).toHaveSize(1)
  });

  it('should create three <tr> elements in the vehiculosTable', () => {
    const vehiculosTable = fixture.debugElement.query(By.css('#vehiculosTable tbody'));
    const rows = vehiculosTable.queryAll(By.css('tr'));
    expect(rows.length).toBe(3);
  });



});
