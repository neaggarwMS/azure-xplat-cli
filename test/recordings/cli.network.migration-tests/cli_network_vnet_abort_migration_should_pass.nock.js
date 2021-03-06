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
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/virtualnetwork/CliTestVnet2980/migration?comp=abort')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e23a7d3947a20d069b79595b474b0e62',
  date: 'Wed, 14 Sep 2016 09:27:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/e23a7d3947a20d069b79595b474b0e62')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e23a7d39-47a2-0d06-9b79-595b474b0e62</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd0f58dedf36202b69cd56caae8c2b903',
  date: 'Wed, 14 Sep 2016 09:27:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/e23a7d3947a20d069b79595b474b0e62')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e23a7d39-47a2-0d06-9b79-595b474b0e62</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b72b4ac7f1aa07d488d935019d4be762',
  date: 'Wed, 14 Sep 2016 09:28:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/e23a7d3947a20d069b79595b474b0e62')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e23a7d39-47a2-0d06-9b79-595b474b0e62</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '046994327e4606fdb6e8b767a465f89c',
  date: 'Wed, 14 Sep 2016 09:29:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/operations/e23a7d3947a20d069b79595b474b0e62')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>e23a7d39-47a2-0d06-9b79-595b474b0e62</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.421 (rd_rdfe_stable.160905-1051) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e7cf377f23ae00eab8e8b278bd328b7a',
  date: 'Wed, 14 Sep 2016 09:29:33 GMT' });
 return result; }]];