import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprovarPedidoComponent } from './aprovar-pedido.component';



describe('AprovarpedidosComponent', () => {
  let component: AprovarPedidoComponent;
  let fixture: ComponentFixture<AprovarPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovarPedidoComponent]
    });
    fixture = TestBed.createComponent(AprovarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
