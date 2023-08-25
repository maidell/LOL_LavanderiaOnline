import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cancelarPedidoComponent } from './cancelarPedidoComponent';

describe('CancelarPedidoComponent', () => {
  let component: cancelarPedidoComponent;
  let fixture: ComponentFixture<cancelarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [cancelarPedidoComponent]
    });
    fixture = TestBed.createComponent(cancelarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
