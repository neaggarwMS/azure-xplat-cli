// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3c09eefa-d840-46e6-9f07-8b99d7646b82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '8bee2cfb-ff12-4241-888f-b492e8c3c6a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085723Z:8bee2cfb-ff12-4241-888f-b492e8c3c6a3',
  date: 'Tue, 17 Oct 2017 08:57:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '638',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3c09eefa-d840-46e6-9f07-8b99d7646b82',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10798',
  'x-ms-correlation-request-id': '8bee2cfb-ff12-4241-888f-b492e8c3c6a3',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085723Z:8bee2cfb-ff12-4241-888f-b492e8c3c6a3',
  date: 'Tue, 17 Oct 2017 08:57:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9bdc6d31-cb95-42d1-8f67-a27c3f15c9c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '525f2d7f-7296-47a3-b8cc-42124bbbde0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085725Z:525f2d7f-7296-47a3-b8cc-42124bbbde0d',
  date: 'Tue, 17 Oct 2017 08:57:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9bdc6d31-cb95-42d1-8f67-a27c3f15c9c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '525f2d7f-7296-47a3-b8cc-42124bbbde0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085725Z:525f2d7f-7296-47a3-b8cc-42124bbbde0d',
  date: 'Tue, 17 Oct 2017 08:57:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profileName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'x-ms-correlation-request-id': '07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085726Z:07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 Oct 2017 08:57:26 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/profileName' under resource group 'xplat-test-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'x-ms-correlation-request-id': '07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085726Z:07dfc276-8d8c-4c0d-ac20-3c354f9a42b9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 Oct 2017 08:57:26 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2017-05-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8f5cdd6b-4137-42dc-b366-eaedff65251d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'd6831712-a4da-44a4-a1bc-29c4bf7d1ed9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085727Z:d6831712-a4da-44a4-a1bc-29c4bf7d1ed9',
  date: 'Tue, 17 Oct 2017 08:57:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles?api-version=2017-05-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'private',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8f5cdd6b-4137-42dc-b366-eaedff65251d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': 'd6831712-a4da-44a4-a1bc-29c4bf7d1ed9',
  'x-ms-routing-request-id': 'WESTEUROPE:20171017T085727Z:d6831712-a4da-44a4-a1bc-29c4bf7d1ed9',
  date: 'Tue, 17 Oct 2017 08:57:26 GMT',
  connection: 'close' });
 return result; }]];