//This is the node class which will be used when we want to add a new element in the list
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

//This is the main driver code that has different functions like - pop,push,shift,unshift, etc.....
class SinglyLinkedList{
  constructor(){
    //by default when their is no data head and tail would be null and length is 0
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

/*
///! Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
*/
  push(val){
    //create a node using the val 
    let newNode = new Node(val);

    //if we are adding first element in the list the head would be null so in if statement we are just setting the head and tail to the same node 
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else{
      //If their are already some data inside list then we'll get the last element using tail and Using tail.next we'll add new node(new Value) to the list and update the tail to this new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //after adding a new node we'll increment the length
    this.length++
    return this;
  }

///!Traverse
//Traverse or loop on a Singly Linked list
  traverse(){
    //First we'll get the first element from the head and assign it to a variable
    let current = this.head;
    //we'll loop on that variable until we hit a null at the end because tail has a null value in the this.next
    while(current){
      console.log(current.val)
      //we'll keep adding current.next to the current to get to the next element
      current = current.next
    }
  }

/*
///! Popping pseudocode

- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed
*/
  pop(){
    //if the list is already empty the length would be 0 and we cannot remove any element so it would be undefined
    if(this.length == 0) return undefined;
    //To remove a element from behind we've to traverse the list and get to second last element and update its this.next attribute to null

    //So we are setting the first element to this variable 
    let current = this.head;
    //Initially the newTail we'll be the same value (i.e starting element of the list)
    let newTail = current;

    //we'll traverse the list until we hit a null in this.next
    while(current.next){
      //we'll delay the updating of the newTail by 1
      newTail = current
      //we'll keep traversing by adding .next to the current 
      current = current.next;
    }
    //after reaching to last element of the list we'll first set the newTail as the tail and it's next attribute to null
    this.tail = newTail;
    this.tail.next = null;

    //remove a element means decrementing it's length by 1
    this.length--;

    //if we removed the last element remaining in the list and it's length is now 0 so we'll update the head and tail to be null
    if(this.length == 0){
      this.head = null;
      this.tail = null;
    }
    //Then we'll return the removed element
    return current
  }

/*
///! Shifting pseudocode

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed
*/
  shift(){
    //if the list is already empty the length would be 0 and we cannot remove any element so it would be undefined
    if(this.length == 0) return undefined;
    //To remove a element from front we've to set the head position to the current head.next's node to be the new head

    //So we are setting the first element to this variable 
    let current = this.head;
    
    //Then we are setting the old head's next attribute to be the new head
    this.head = current.next;

    //remove a element means decrementing it's length by 1
    this.length--;

    //if we removed the last element remaining in the list and it's length is now 0 so we'll update the tail to be null because we are removing from the starting of the list so the last element removed we'll already has the next attribute set to null
    if(this.length == 0){
      this.tail = null;
    }

     //Then we'll return the removed element
    return current;
  }

/*
///! Unshifting pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list
*/
  unshift(val){
   //create a node using the val 
    let newNode = new Node(val);

    //if we are adding first element in the list the head would be null so in if statement we are just setting the head and tail to the same node 
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else{
      //If we're adding a element from start of the list so first we'll points it's next attribute to current head and then update the current head to be this new create node (i.e newNode variable)
      newNode.next = this.head
      this.head = newNode
    }
    //after adding a new node we'll increment the length
    this.length++;
    return this
  }

/*
///!Get pseudocode

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index
*/
  get(index){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return null
    if(index < 0 || index >= this.length) return null;

    //We need to find the indexed element so we need to traverse so we are setting the first element/head to a variable
    let element = this.head;
    //we'll keep traversing until the index provided to us does get decremented to 0
    while(index > 0){
      //until index becomes zero we'll keep traversing by adding next to the current element
      element = element.next
      //to terminate the loop and after we had loop until the provided index we'll keep decrementing the index value
      index--
    }
    //after break out of the loop the element variable we be point at the correct index value and we'll return that element
    return element
  }

/*
///!Set pseudocode

- This function should accept a value and an index
- Use your get function to find the specific node.
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true
*/
  set(index,val){
    //to set/update the value of a element first we need to fetch that element by it's indexed so we used out get() and pass the argument the index 
    //if the index exceeds the length then we'll get undefined or else we'll get the element from get() function
    let checkIndex = this.get(index)

    //if we get undefined if statement would not execute and we'll return false 
    if(checkIndex){
      //or if we get the element from the get() function then we'll update it's val (i.e value) and return true
      checkIndex.val = val
      return true
    }
    return false
  }

/*
///!Insert pseudocode

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true
*/
  insert(index,val){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return false
    if(index < 0 || index > this.length) return false
    
    //If the user is trying to insert a val at the first of list then we'll use our unshift() function and "!!"" converts it to Boolean value
    if(index == 0) return !!this.unshift(val)

    //If the user is trying to insert a val at the last of list then we'll use our push() function and "!!"" converts it to Boolean value
    if(index == this.length) return !!this.push(val)

    //if the user is trying to insert a va;ue in the middle of the list then first we'll create the new node
    let newNode = new Node(val)

    //we'll get the pervious position of the index were we want to insert the element so we are using our get() to get element previous to the index provided
    let getNode = this.get(index-1)

    /*
    we are setting the new element's next attribute to point to the element's next attribute 
    for example:- 
    add "9" to index position 3 and we count index from zero so we need to add "9" between 3-4

                    get(3-1) 
      1  ==>   2  ==>   3  ==>   4  ==>   5  ==>   6  ==>   7  

    so we'll get "3" element and it's next attribute is point to the "4" 

    now we'll set the new element i.e "9" next attribute to be the "3"s next attribute i.e "4"

      3  ==>  4
              |
      9  ==>  4 

    So now "9" next attribute is point to "4", so we'll point "3" next attribute to new element i.e "9"  

      3  ==>  9

    And and by summing  all that we'll get

      1  ==>   2  ==>   3  ==>  9  ==>  4  ==>   5  ==>   6  ==>   7  

    //!Yeah, we did it🥳🥳  
    */
    newNode.next = getNode.next
    getNode.next = newNode

    //then we increment the length and return true
    this.length++;
    return true
  }

/*
///!Remove pseudocode

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed
*/
  remove(index){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return undefined
    if(index < 0 || index >= this.length) return undefined

    //if the user is trying to remove the element from the last of the list then we'll use our pop() function and we return the remove element
    if(index == this.length-1) return this.pop()

    //if the user is trying to remove the element from the last of the list then we'll use our pop() function and we return the remove element
    if(index == 0) return this.shift()

    //we'll get the pervious position of the index were we want to remove the element so we are using our get() to get element previous to the index provided
    let getNode = this.get(index-1)

    /*
    we are setting the element's next attribute to point to the element's next's next attribute 
    for example:- 
    remove index position 3rd's element and we count index from zero so we need to remove "9" from the list

                    get(3-1) 
      1  ==>   2  ==>   3  ==>  9  ==>  4  ==>   5  ==>   6  ==>   7 

    so we'll get "3" element and it's next attribute is point to the "9" 

    now we'll set this element i.e "3" next attribute to be the "9"s next attribute i.e "4"

      9  ==>  4
              |
      3  ==>  4 

    So now "3" next attribute is point to "4"

      3  ==>  4

    And and by summing  all that we'll get

      1  ==>   2  ==>   3  ==>  4  ==>   5  ==>   6  ==>   7  

    //!Yeah, we did it again🥳🥳  
    */
    let removedElement = getNode.next
    getNode.next = removedElement.next

    //then we increment the length and return removed element
    this.length--
    return removedElement
  }

/*
///!Reverse pseudocode

- Swap the head and tail
- Create a variable called next
- Create a variable called prev
- Create a variable called node and initialize it to the head property
- Loop through the list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable
- Once you have finished looping, return the list
*/
  reverse(){
    //we'll starting by setting the head to current node that we are reversing.
    let node = this.head

    //we are swapping head and tail
    this.head = this.tail
    this.tail = node
    let next;
    //We want our tail's next attribute to be null
    let prev = null

    //looping over the list to reverse it
    for (let i = 0; i < this.length; i++) {
    /*
      next variable will have the value of current reversing node's next element 

        (i.e if 2 ==> 3 ==> 4) 

      so if 2 is point to 3 and We are currently reversing 2 so the 2's next attribute i.e 3, so we are storing 3 element in next

      next = currents next attribute i.e 3 (i.e next = 3)
    */
      next = node.next

    /*
      So now we set current node's next property to it's previous node but as this is first iteration we'll set it to null we make our current node' next property to null as our current node is the last element in the list
    */  
      node.next = prev

    //And so our prev variable will have the pervious node that we were working before we update our node = next
      prev = node

    /* 
      so now we move a step ahead in the list
      so now we change our current node to be "next" variable node
    */  
      node = next
    }
    //Then we return the reversed list
    return this
  }
}

let list = new SinglyLinkedList();