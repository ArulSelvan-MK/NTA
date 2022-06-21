import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketAnalyzerComponent } from './packet-analyzer.component';

describe('PacketAnalyzerComponent', () => {
  let component: PacketAnalyzerComponent;
  let fixture: ComponentFixture<PacketAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
