import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileSummary } from './mobile-summary';

describe('MobileSummary', () => {
  let component: MobileSummary;
  let fixture: ComponentFixture<MobileSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
