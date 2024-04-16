import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CocktailListComponentComponent } from './cocktail-list-component/cocktail-list-component.component';

import { cocktailService } from './cocktail.service';

import { HttpClientModule } from '@angular/common/http';
import { CocktailCardComponent } from './cocktail-card/cocktail-card.component';



describe('CocktailListComponent', () => {

  let component: CocktailListComponentComponent;

  let fixture: ComponentFixture<CocktailListComponentComponent>;
  let fixture2: ComponentFixture<CocktailCardComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [HttpClientModule],
      declarations: [CocktailListComponentComponent, CocktailCardComponent],
      providers: [cocktailService]
    })

    .compileComponents();

    

    fixture = TestBed.createComponent(CocktailListComponentComponent);
    fixture2 = TestBed.createComponent(CocktailCardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });


  it('should create', () => {

    expect(component).toBeTruthy();

  });


  it('service should be created', () => {

    const service: cocktailService = TestBed.inject(cocktailService);

    expect(service).toBeTruthy();

  });


  it('service should have a "getCocktails" method which returns at least one object', () => {

    const service: cocktailService = TestBed.inject(cocktailService);

    const cocktails = service.getCocktails()

    expect(cocktails.length).toBeGreaterThan(0);

  });


  it('should create a CocktailListComponent instance', waitForAsync(() => {

    const fixture = TestBed.createComponent(CocktailListComponentComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();

  }));


  it(

    'component should have a public property named "cocktails"',

    waitForAsync(

      () => {

        const fixture = TestBed.createComponent(CocktailListComponentComponent);

        fixture.detectChanges();

        expect(fixture.componentInstance.cocktailList).toBeTruthy();

      }

    )

  );

});