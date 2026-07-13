import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ValueProposalComponent } from '../../components/value-proposal/value-proposal.component';
import { BenefitsComponent } from '../../components/benefits/benefits.component';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { DashboardShowcaseComponent } from '../../components/dashboard-showcase/dashboard-showcase.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { ComparisonComponent } from '../../components/comparison/comparison.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ValueProposalComponent,
    BenefitsComponent,
    TimelineComponent,
    DashboardShowcaseComponent,
    FeaturesComponent,
    PricingComponent,
    ComparisonComponent,
    TestimonialsComponent,
    FaqComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
