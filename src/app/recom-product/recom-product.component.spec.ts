import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomProductComponent } from './recom-product.component';

describe('RecomProductComponent', () => {
  let component: RecomProductComponent;
  let fixture: ComponentFixture<RecomProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
