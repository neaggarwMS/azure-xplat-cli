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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"1bfda738-4f29-4a05-89f6-1fc68ce11584\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1bfda738-4f29-4a05-89f6-1fc68ce11584"',
  'x-ms-request-id': '79a738f2-c93a-4bb1-8cc3-077d968824f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '97154cd2-8ac7-43f0-9bd3-da750484f528',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082207Z:97154cd2-8ac7-43f0-9bd3-da750484f528',
  date: 'Mon, 02 Oct 2017 08:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkWatcherName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName\",\r\n  \"etag\": \"W/\\\"1bfda738-4f29-4a05-89f6-1fc68ce11584\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '429',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"1bfda738-4f29-4a05-89f6-1fc68ce11584"',
  'x-ms-request-id': '79a738f2-c93a-4bb1-8cc3-077d968824f8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '97154cd2-8ac7-43f0-9bd3-da750484f528',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082207Z:97154cd2-8ac7-43f0-9bd3-da750484f528',
  date: 'Mon, 02 Oct 2017 08:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"id\": \"dbbe4342-4cee-4f3c-959a-c9968a4f5834\",\r\n  \"createdDateTime\": \"2017-10-02T08:22:06.8714851Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/fd57b83a-6116-477d-a396-5eb3523e538f?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'fd57b83a-6116-477d-a396-5eb3523e538f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/fd57b83a-6116-477d-a396-5eb3523e538f?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd3ce72ce-718c-4839-afb5-c23be39dc0d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082207Z:d3ce72ce-718c-4839-afb5-c23be39dc0d1',
  date: 'Mon, 02 Oct 2017 08:22:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatcherName/topology?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"id\": \"dbbe4342-4cee-4f3c-959a-c9968a4f5834\",\r\n  \"createdDateTime\": \"2017-10-02T08:22:06.8714851Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operationResults/fd57b83a-6116-477d-a396-5eb3523e538f?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'fd57b83a-6116-477d-a396-5eb3523e538f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westcentralus/operations/fd57b83a-6116-477d-a396-5eb3523e538f?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd3ce72ce-718c-4839-afb5-c23be39dc0d1',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T082207Z:d3ce72ce-718c-4839-afb5-c23be39dc0d1',
  date: 'Mon, 02 Oct 2017 08:22:07 GMT',
  connection: 'close' });
 return result; }]];