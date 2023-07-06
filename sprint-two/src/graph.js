
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};

  // nodes: {node1: true, node2: true....}
  // edges: {node1: [node3, node4], node2: [node4, ..., node6]...}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes[node] = true;
    this.edges[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[node];

    for (var i = 0; i < this.edges[node].length; i++) {
      this.removeEdge(node, this.edges[node][i]);
    }

    delete this.edges[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if fromNode is contained in nodes
  // if this.contains(fromNode) {
  //   for (var node in this.edges) {
  //     if (this.edges[fromNode].includes(toNode)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  return this.edges[fromNode].includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //check if the edge exists
  if (this.hasEdge(fromNode, toNode)) {
    var iFromNode = this.edges[fromNode].indexOf(toNode);
    var iToNode = this.edges[toNode].indexOf(fromNode);
    delete this.edges[fromNode][iFromNode];
    delete this.edges[toNode][iToNode];

  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


