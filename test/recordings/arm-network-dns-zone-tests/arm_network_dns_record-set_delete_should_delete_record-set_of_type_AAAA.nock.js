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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '26b8e6d6-14c2-4bec-a1a2-05943b30102a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cff2821d-0896-4ecf-9b4a-b5341e068c1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121515Z:cff2821d-0896-4ecf-9b4a-b5341e068c1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '26b8e6d6-14c2-4bec-a1a2-05943b30102a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'cff2821d-0896-4ecf-9b4a-b5341e068c1c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121515Z:cff2821d-0896-4ecf-9b4a-b5341e068c1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5233331c-bd1c-4360-ba77-603315f4b49f',
  'x-ms-correlation-request-id': '5233331c-bd1c-4360-ba77-603315f4b49f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121516Z:5233331c-bd1c-4360-ba77-603315f4b49f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:16 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set/providers/Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa?api-version=2015-05-04-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/example1.com/AAAA/set-aaaa' under resource group 'xplat-test-dns-zone-record-set' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '5233331c-bd1c-4360-ba77-603315f4b49f',
  'x-ms-correlation-request-id': '5233331c-bd1c-4360-ba77-603315f4b49f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160225T121516Z:5233331c-bd1c-4360-ba77-603315f4b49f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 25 Feb 2016 12:15:16 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; }]];