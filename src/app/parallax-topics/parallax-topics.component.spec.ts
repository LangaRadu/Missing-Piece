import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxTopicsComponent } from './parallax-topics.component';

describe('ParallaxTopicsComponent', () => {
  let component: ParallaxTopicsComponent;
  let fixture: ComponentFixture<ParallaxTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxTopicsComponent]
    });
    fixture = TestBed.createComponent(ParallaxTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
