// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"placementGroupId\": \"8beb460e-42b7-4e6d-9161-0d8ecf9596d9\",\r\n  \"platformUpdateDomain\": 0,\r\n  \"platformFaultDomain\": 0,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.788\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2017-02-16T11:04:22+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.3\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T11:04:02.727868+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '9d14d6b5-2712-498c-893d-0aaa7df81485',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '54c65294-786c-41d1-94c8-bf6f205095e4',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110424Z:54c65294-786c-41d1-94c8-bf6f205095e4',
  date: 'Thu, 16 Feb 2017 11:04:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplatTstVmssGCreate8927/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5/virtualmachines/0/instanceView?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"placementGroupId\": \"8beb460e-42b7-4e6d-9161-0d8ecf9596d9\",\r\n  \"platformUpdateDomain\": 0,\r\n  \"platformFaultDomain\": 0,\r\n  \"vmAgent\": {\r\n    \"vmAgentVersion\": \"2.7.1198.788\",\r\n    \"statuses\": [\r\n      {\r\n        \"code\": \"ProvisioningState/succeeded\",\r\n        \"level\": \"Info\",\r\n        \"displayStatus\": \"Ready\",\r\n        \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n        \"time\": \"2017-02-16T11:04:22+00:00\"\r\n      }\r\n    ],\r\n    \"extensionHandlers\": [\r\n      {\r\n        \"type\": \"Microsoft.Compute.BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      },\r\n      {\r\n        \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"status\": {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Ready\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"extensions\": [\r\n    {\r\n      \"name\": \"test\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.3\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Succesfully updated build-in Admin account and enabled Remote Desktop connection to the machine\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"name\": \"test1\",\r\n      \"type\": \"Microsoft.Compute.BGInfo\",\r\n      \"typeHandlerVersion\": \"2.1\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (handler name: Microsoft.Compute.BGInfo, extension name: , version: 2.1).\"\r\n        }\r\n      ]\r\n    }\r\n  ],\r\n  \"statuses\": [\r\n    {\r\n      \"code\": \"ProvisioningState/succeeded\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"Provisioning succeeded\",\r\n      \"time\": \"2017-02-16T11:04:02.727868+00:00\"\r\n    },\r\n    {\r\n      \"code\": \"PowerState/running\",\r\n      \"level\": \"Info\",\r\n      \"displayStatus\": \"VM running\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2302',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '7d05390c-5dc5-4a14-8588-dcae1a33dd6b_131292456099219588',
  'x-ms-request-id': '9d14d6b5-2712-498c-893d-0aaa7df81485',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-correlation-request-id': '54c65294-786c-41d1-94c8-bf6f205095e4',
  'x-ms-routing-request-id': 'EASTASIA:20170216T110424Z:54c65294-786c-41d1-94c8-bf6f205095e4',
  date: 'Thu, 16 Feb 2017 11:04:24 GMT',
  connection: 'close' });
 return result; }]];