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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup917/providers/Microsoft.Batch/batchAccounts/armclibatch6075/applications/armclibatchapp601/versions/1.0/activate?api-version=2015-12-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 06:30:02 GMT',
  etag: '0x8D363650B5CC5C7',
  'request-id': 'd8ff7812-fa66-4a98-8d34-0fbe9da5b4ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  'x-ms-correlation-request-id': 'f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  'x-ms-routing-request-id': 'WESTUS:20160413T063003Z:f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  date: 'Wed, 13 Apr 2016 06:30:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/6e0b24a6-2bef-4598-9bd3-f87e9700e24c/resourceGroups/armclibatchgroup917/providers/Microsoft.Batch/batchAccounts/armclibatch6075/applications/armclibatchapp601/versions/1.0/activate?api-version=2015-12-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Wed, 13 Apr 2016 06:30:02 GMT',
  etag: '0x8D363650B5CC5C7',
  'request-id': 'd8ff7812-fa66-4a98-8d34-0fbe9da5b4ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  'x-ms-correlation-request-id': 'f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  'x-ms-routing-request-id': 'WESTUS:20160413T063003Z:f4e98f7b-2827-4767-af0b-60d09f8f5e3a',
  date: 'Wed, 13 Apr 2016 06:30:03 GMT',
  connection: 'close' });
 return result; }]];