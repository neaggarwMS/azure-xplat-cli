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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test?api-version=2017-03-30')
  .reply(200, "{\r\n  \"name\": \"test\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test\",\r\n  \"etag\": \"W/\\\"76782fb5-90af-4630-80a2-c0dfcce8a5cb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5ece9dc9-ba10-4ffb-944d-44deb400491e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"test\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\",\r\n        \"etag\": \"W/\\\"76782fb5-90af-4630-80a2-c0dfcce8a5cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [\r\n        \"10.11.12.13\"\r\n      ],\r\n      \"appliedDnsServers\": [\r\n        \"10.11.12.13\"\r\n      ],\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-21-29\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76782fb5-90af-4630-80a2-c0dfcce8a5cb"',
  'x-ms-request-id': 'd450682a-07fe-4b0c-9149-4c7e322b34d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'a51d503f-be35-49dd-bdc0-9dad170357b1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T114925Z:a51d503f-be35-49dd-bdc0-9dad170357b1',
  date: 'Fri, 07 Jul 2017 11:49:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test?api-version=2017-03-30')
  .reply(200, "{\r\n  \"name\": \"test\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test\",\r\n  \"etag\": \"W/\\\"76782fb5-90af-4630-80a2-c0dfcce8a5cb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"5ece9dc9-ba10-4ffb-944d-44deb400491e\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"test\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\",\r\n        \"etag\": \"W/\\\"76782fb5-90af-4630-80a2-c0dfcce8a5cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [\r\n        \"10.11.12.13\"\r\n      ],\r\n      \"appliedDnsServers\": [\r\n        \"10.11.12.13\"\r\n      ],\r\n      \"internalDomainNameSuffix\": \"55sgx04fktwe5oheyb1hehl3lh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"macAddress\": \"00-0D-3A-A1-21-29\",\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"primary\": true,\r\n    \"virtualMachine\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic-custom/providers/Microsoft.Compute/virtualMachineScaleSets/nicVmssName/virtualMachines/0\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"76782fb5-90af-4630-80a2-c0dfcce8a5cb"',
  'x-ms-request-id': 'd450682a-07fe-4b0c-9149-4c7e322b34d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'a51d503f-be35-49dd-bdc0-9dad170357b1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T114925Z:a51d503f-be35-49dd-bdc0-9dad170357b1',
  date: 'Fri, 07 Jul 2017 11:49:24 GMT',
  connection: 'close' });
 return result; }]];