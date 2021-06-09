import { Injectable } from '@angular/core';
import { ApplicationInsights, IExceptionTelemetry, DistributedTracingModes } from '@microsoft/applicationinsights-web';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApplicationInsightsService {
  private appInsights : ApplicationInsights;

  constructor(private router: Router) {

    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: "84c4b849-629e-4b05-8a62-f353e65cc9d2",
        enableAutoRouteTracking: true
      }
    });

    this.appInsights.loadAppInsights();
    this.loadCustomTelemetryProperties();
    this.createRouterSubscription();
  }

  setUserId(userId: string) {
    this.appInsights.setAuthenticatedUserContext(userId);
  }

  clearUserId() {
    this.appInsights.clearAuthenticatedUserContext();
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name}, properties);
  }

  logMetric(name: string, average: number, properties?: { [key: string]: any }) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logPageView(name?: string, uri?: string) {
    this.appInsights.trackPageView({ name, uri});
  }

  logException(error : Error){
    let exception : IExceptionTelemetry = {
      exception : error
    };
    this.appInsights.trackException(exception);
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message}, properties);
  }
  
  private loadCustomTelemetryProperties()
  {
    this.appInsights.addTelemetryInitializer(envelope => 
      {
        var item = envelope.baseData;
        item.properties = item.properties || {};
        item.properties["ApplicationPlatform"] = "WEB";
        item.properties["ApplicationName"] = "TwoHaxx";
      }
    );
  }

  private createRouterSubscription()
  {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.logPageView(null, event.urlAfterRedirects);
    });
  }
}