import {Config,browser} from 'protractor';
let reporter = require('cucumber-html-reporter');
export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,    
    framework: 'custom',   
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
        
   capabilities: {
     browserName: 'firefox'
   },

     
    specs: [
       '../Feature/addOwner.feature',
       '../Feature/addVeterinarian.feature',
       '../Feature/petTypeAddDelete.feature',
    ],
    
  
    cucumberOpts: {
      format:'json:./cucumberReports.json',
     

      require: [
          '../JSFile/StepDefinition/*.js',
         // '../StepDefinition/stepaddVenterianrian.ts'                 
        ]
    },

    onPrepare: async() => {
      browser.ignoreSynchronization = false;
      browser.driver.manage().window().maximize();
      await browser.waitForAngularEnabled(false);
    },

    onComplete: () =>
    {
       var options = {
       theme: 'bootstrap',
       jsonFile: './cucumberReports.json',
       output: './cucumber_report.html',
       reportSuiteAsScenarios: true,
       scenarioTimestamp: true,
       launchReport: true,
       metadata: {
           "App Version":"0.3.2",
           "Test Environment": "STAGING",
           "Browser": "Chrome  54.0.2840.98",
           "Platform": "Windows 10",
           "Parallel": "Scenarios",
           "Executed": "Remote"
                  }
    }; 
   reporter.generate(options);
 },
 

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "Petclinic Report",
            pageFooter: "<div><p>Protractor with cucumber</p></div>",
            customData: {
                title: 'Protractor Cucucmber Report',
                data: [
                    { label: 'Project', value: 'Petclinic' },
                    { label: 'Created By', value: 'Payal Naik' }
                ]
            }
        },

    }]
    
};