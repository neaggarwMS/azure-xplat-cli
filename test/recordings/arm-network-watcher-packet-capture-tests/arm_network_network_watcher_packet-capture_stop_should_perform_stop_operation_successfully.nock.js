// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"99544cd2-779f-46a6-ba38-a675a2fa6c8e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 100,\r\n    \"totalBytesPerSession\": 536870912,\r\n    \"timeLimitInSeconds\": 15000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"d:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"99544cd2-779f-46a6-ba38-a675a2fa6c8e"',
  'x-ms-request-id': '431d909a-ea0a-4c59-8c17-ee8664146383',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '64f592ed-dbb8-4262-91b4-5f9db22c100f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110829Z:64f592ed-dbb8-4262-91b4-5f9db22c100f',
  date: 'Wed, 15 Feb 2017 11:08:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"99544cd2-779f-46a6-ba38-a675a2fa6c8e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 100,\r\n    \"totalBytesPerSession\": 536870912,\r\n    \"timeLimitInSeconds\": 15000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"d:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"99544cd2-779f-46a6-ba38-a675a2fa6c8e"',
  'x-ms-request-id': '431d909a-ea0a-4c59-8c17-ee8664146383',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '64f592ed-dbb8-4262-91b4-5f9db22c100f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110829Z:64f592ed-dbb8-4262-91b4-5f9db22c100f',
  date: 'Wed, 15 Feb 2017 11:08:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName/stop?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'ef7850cf-72bf-4aa1-bbb4-031723c78606',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'aae6a4df-ad0e-4bf0-b683-7d3237f16fa7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110830Z:aae6a4df-ad0e-4bf0-b683-7d3237f16fa7',
  date: 'Wed, 15 Feb 2017 11:08:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatchersName/packetCaptures/packetCaptureName/stop?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'ef7850cf-72bf-4aa1-bbb4-031723c78606',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'aae6a4df-ad0e-4bf0-b683-7d3237f16fa7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110830Z:aae6a4df-ad0e-4bf0-b683-7d3237f16fa7',
  date: 'Wed, 15 Feb 2017 11:08:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '713da442-68f5-44cb-b258-3200a941d133',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7ccaa673-bb6d-4174-9495-9f9f9427f3be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110901Z:7ccaa673-bb6d-4174-9495-9f9f9427f3be',
  date: 'Wed, 15 Feb 2017 11:09:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/ef7850cf-72bf-4aa1-bbb4-031723c78606?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '713da442-68f5-44cb-b258-3200a941d133',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7ccaa673-bb6d-4174-9495-9f9f9427f3be',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T110901Z:7ccaa673-bb6d-4174-9495-9f9f9427f3be',
  date: 'Wed, 15 Feb 2017 11:09:00 GMT',
  connection: 'close' });
 return result; }]];