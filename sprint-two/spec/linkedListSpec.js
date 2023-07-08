describe('linkedList', function() {
  var linkedList;
  var dlinkedList;

  beforeEach(function() {
    linkedList = LinkedList();
    dlinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(8);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(8);
    linkedList.removeHead(8);
    expect(linkedList.head.value).to.equal(5);
  });

  it('should have a pointer point to a new node and the pointer point to the previous node', function() {
    dlinkedList.addToTail(8);
    dlinkedList.addToTail(5);
    expect(dlinkedList.tail.previous.value).to.equal(8);
    expect(dlinkedList.head.next.value).to.equal(5);
    expect(dlinkedList.tail.value).to.equal(5);
    expect(dlinkedList.head.value).to.equal(8);
  });


  it('should have a pointer point to a new node and the pointer point to the previous node', function() {
    dlinkedList.addToTail(1);
    dlinkedList.addToTail(2);
    expect(dlinkedList.removeHead()).to.equal(1);
    expect(dlinkedList.head.value).to.equal(2);
    expect(dlinkedList.head.previous).to.equal(null);
  });

  it('should contain a value that was added', function() {
    dlinkedList.addToTail(4);
    dlinkedList.addToTail(5);
    expect(dlinkedList.contains(4)).to.equal(true);
    expect(dlinkedList.contains(5)).to.equal(true);
    expect(dlinkedList.contains(6)).to.equal(false);
  });

  it('should add new nodes to the head', function() {
    dlinkedList.addToHead(2);
    dlinkedList.addToHead(3);
    expect(dlinkedList.head.value).to.equal(3);
    dlinkedList.addToHead(1);
    expect(dlinkedList.head.value).to.equal(1);
    expect(dlinkedList.tail.value).to.equal(2);
  });

  it('should remove tail, and return the removed tail value', function() {
    dlinkedList.addToTail(1);
    dlinkedList.addToTail(2);
    dlinkedList.removeTail();
    expect(dlinkedList.tail.value).to.equal(1);
    expect(dlinkedList.tail.next).to.equal(null);
    expect(dlinkedList.tail.previous).to.equal(null);

  });

});
