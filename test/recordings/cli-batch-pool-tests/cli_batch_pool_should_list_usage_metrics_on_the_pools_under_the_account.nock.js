// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"xingwu-pool1test\",\"startTime\":\"2016-05-17T22:30:00Z\",\"endTime\":\"2016-05-17T23:00:00Z\",\"vmSize\":\"standard_d1\",\"totalCoreHours\":0.075731165555555549,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"xplattestpool\",\"startTime\":\"2016-05-17T22:30:00Z\",\"endTime\":\"2016-05-17T23:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.017914414944444443,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e8f757bb-f82e-43a1-8143-53bdb14fcefe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6188c998-fbf8-44ca-a19b-40e2bc0b48ef',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/poolusagemetrics?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#poolusagemetrics\",\"value\":[\r\n    {\r\n      \"poolId\":\"xingwu-pool1test\",\"startTime\":\"2016-05-17T22:30:00Z\",\"endTime\":\"2016-05-17T23:00:00Z\",\"vmSize\":\"standard_d1\",\"totalCoreHours\":0.075731165555555549,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    },{\r\n      \"poolId\":\"xplattestpool\",\"startTime\":\"2016-05-17T22:30:00Z\",\"endTime\":\"2016-05-17T23:00:00Z\",\"vmSize\":\"small\",\"totalCoreHours\":0.017914414944444443,\"dataIngressGiB\":0.0,\"dataEgressGiB\":0.0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'e8f757bb-f82e-43a1-8143-53bdb14fcefe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6188c998-fbf8-44ca-a19b-40e2bc0b48ef',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:36 GMT',
  connection: 'close' });
 return result; }]];