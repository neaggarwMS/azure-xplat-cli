/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var probes = loadBalancers.category('probe')
    .description($('Commands to manage probes'));

  var defaultPort = '80';
  var defaultProtocol = 'TCP';

  var protocolTCP = 'TCP';

  probes.command('create [resource-group] [lb-name] [name]')
    .description($('Create a probe'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-o, --port [port]', $('the port for communicating the probe.' +
      '\n     Possible values range from 1 to 65535, inclusive'))
    .option('-i, --interval [interval]', $('the interval, in seconds, for how' +
      '\n     frequently to probe the endpoint for health status. Typically, the interval is' +
      '\n     slightly less than half the allocated timeout period (in seconds) which allows' +
      '\n     two full probes before taking the instance out of rotation. The default value' +
      '\n     is 15, the minimum value is 5'))
    .option('-c, --count [count]', $('the number of probes where if no' +
      '\n     response, will result in stopping further traffic from being delivered to the' +
      '\n     endpoint. This values allows endpoints to be taken out of rotation faster or' +
      '\n     slower than the typical times used in Azure'))
    .option('-f, --path [path]', $('the URI used for requesting health' +
      '\n     status from the VM. Path is required if a protocol is set to http. Otherwise,' +
      '\n     it is not allowed. There is no default value'))
    .option('-p, --protocol [protocol]', $('the protocol of the end point. Possible' +
      '\n     values are: \'Http\' or \'Tcp\'. If \'Tcp\' is specified, a received ACK is' +
      '\n     required for the probe to be successful. If \'Http\' is specified, a 200 OK' +
      '\n     response from the specifies URI is required for the probe to be successful'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var probe = utils.findFirstCaseIgnore(parentItem.probes, { name: name });
      if (probe) {
        throw new Error(util.format($('probe with name "%s" already exists in load balancer "%s"'), name, lbName));
      }

      var parameters = {};

      if(options.port) {
        parameters.port = parseInt(options.port, 10);
      } else if(useDefaults) {
        parameters.port = parseInt(defaultPort, 10);
      }

      if(options.interval) {
        parameters.intervalInSeconds = parseInt(options.interval, 10);
      }

      if(options.count) {
        parameters.numberOfProbes = parseInt(options.count, 10);
      }

      if(options.path) {
        parameters.requestPath = options.path;
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Http', 'Tcp'], '--protocol');
        if(options.protocol.toLowerCase() == protocolTCP.toLowerCase()) {
          delete parameters.requestPath;
        }
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      parameters.name = name;
      parentItem.probes.push(parameters);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating probe in load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.probes, { name: name }), generatorUtils.traverse);
    });

  probes.command('set [resource-group] [lb-name] [name]')
    .description($('Update a probe'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-o, --port [port]', $('the port for communicating the probe.' +
      '\n     Possible values range from 1 to 65535, inclusive'))
    .option('-i, --interval [interval]', $('the interval, in seconds, for how' +
      '\n     frequently to probe the endpoint for health status. Typically, the interval is' +
      '\n     slightly less than half the allocated timeout period (in seconds) which allows' +
      '\n     two full probes before taking the instance out of rotation. The default value' +
      '\n     is 15, the minimum value is 5'))
    .option('-c, --count [count]', $('the number of probes where if no' +
      '\n     response, will result in stopping further traffic from being delivered to the' +
      '\n     endpoint. This values allows endpoints to be taken out of rotation faster or' +
      '\n     slower than the typical times used in Azure'))
    .option('-f, --path [path]', $('the URI used for requesting health' +
      '\n     status from the VM. Path is required if a protocol is set to http. Otherwise,' +
      '\n     it is not allowed. There is no default value'))
    .option('-p, --protocol [protocol]', $('the protocol of the end point. Possible' +
      '\n     values are: \'Http\' or \'Tcp\'. If \'Tcp\' is specified, a received ACK is' +
      '\n     required for the probe to be successful. If \'Http\' is specified, a 200 OK' +
      '\n     response from the specifies URI is required for the probe to be successful'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var probe = utils.findFirstCaseIgnore(parentItem.probes, { name: name });
      if (!probe) {
        throw new Error(util.format($('probe with name "%s" not found in load balancer "%s"'), name, lbName));
      }

      var parameters = probe;

      if(options.port) {
        parameters.port = parseInt(options.port, 10);
      } else if(useDefaults) {
        parameters.port = parseInt(defaultPort, 10);
      }

      if(options.interval) {
        parameters.intervalInSeconds = parseInt(options.interval, 10);
      }

      if(options.count) {
        parameters.numberOfProbes = parseInt(options.count, 10);
      }

      if(options.path) {
        parameters.requestPath = options.path;
      }

      if(options.protocol) {
        parameters.protocol = validation.isIn(options.protocol, ['Http', 'Tcp'], '--protocol');
        if(options.protocol.toLowerCase() == protocolTCP.toLowerCase()) {
          delete parameters.requestPath;
        }
      } else if(useDefaults) {
        parameters.protocol = defaultProtocol;
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating probe in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      parentItem = loadBalancer;
      cli.interaction.formatOutput(utils.findFirstCaseIgnore(parentItem.probes, { name: name }), generatorUtils.traverse);
    });

  probes.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete a probe'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(parentItem.probes, { name: name });
      if (index === -1) {
        throw new Error(util.format($('probe "%s" not found in load balancer "%s"'), name, lbName));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete probe with name "%s" from load balancer "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      parentItem.probes.splice(index, 1);

      progress = cli.interaction.progress('Deleting probe');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  probes.command('show [resource-group] [lb-name] [name]')
    .description($('Show a probe'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the probe'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var probe = utils.findFirstCaseIgnore(parentItem.probes, { name: name });
      if (!probe) {
        cli.output.warn(util.format($('probe with name "%s" not found in the load balancer "%s"'), name, lbName));
      }

      cli.interaction.formatOutput(probe, generatorUtils.traverse);
    });

  probes.command('list [resource-group] [lb-name]')
    .description($('List probes'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      var parentItem = loadBalancer;
      if (!parentItem) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      cli.interaction.formatOutput(parentItem.probes, function (items) {
        if (!items || items.length === 0) {
          cli.output.warn($('No probes found'));
        } else {
          cli.output.table(items, function (row, item) {
            generatorUtils.showTableRow(row, item);
          });
        }
      });
    });
};
