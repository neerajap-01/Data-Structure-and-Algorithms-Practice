//This is the node class which will be used when we want to add a new element in the list
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//This is the main driver code that has different functions like - pop,push,shift,unshift, etc.....
class DoublyLinkedList{
  constructor(){
     //by default when their is no data head and tail would be null and length is 0
    this.head = null
    this.tail = null
    this.length = 0
  }

/*
///!Pushing pseudocode

- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node 
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List
*/
  push(val){
    //create a node using the val 
    let newNode =  new Node(val);

    //if we are adding first element in the list the head would be null so in if statement we are just setting the head and tail to the same node 
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }else{
      //If their are already some data inside list then we'll get the last element using tail and using tail.next we'll add new node(new Value) to the list and update the tail to this new node
      this.tail.next = newNode;

      //we'll also add the newNode's prev attribute to pervious tail
      newNode.prev = this.tail;
      this.tail = newNode 
    }
    //after adding a new node we'll increment the length
    this.length++
    return this
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
///!Popping pseudocode

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.
- Set the newTail's next to null
- Decrement the length
- Return the value removed
*/
  pop(){
    //if the list is already empty the length would be 0 and we cannot remove any element so it would be undefined
    if(!this.head) return undefined
    //To remove a element from behind we'll store the tail node to currentTail variable.

    //So we are setting the tail element to this variable 
    let currentTail = this.tail

    //if we are removing a element from last from a single element list then we'll simple make head & tail empty
    if(this.length == 1){
        this.head = null
        this.tail = null
    }else {
        //first we are setting the new tail to be the previous of current tail
        this.tail = currentTail.prev 

        //then as a tail has it's next attribute as null so we are setting new Tail's next attribute to null
        this.tail.next = null

        //similarly as we don't want that removed element has any linked with the list we are making removed elements prev attribute to be null
        currentTail.prev = null
    }
    //remove a element means decrementing it's length by 1
    this.length--
    //Then we'll return the removed element
    return currentTail
  }

/*
///!Shifting pseudocode

- If length is 0, return undefined
- Store the current head property in a variable (we'll call it old head)
- If the length is one
  - set the head to be null
  - set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set the old head's next to null
- Decrement the length
- Return old head
*/
  shift(){
      //if the list is already empty the length would be 0 and we cannot remove any element so it would be undefined
      if(!this.head) return undefined;
      //To remove a element from front we've to set the head position to the current head.next's node to be the new head

      //So we are setting the first element to this variable 
      let oldHead = this.head

      //if we are removing a element from head, from a single element list then we'll simple make head & tail empty
      if(this.length == 1){
        this.head = null;
        this.tail = null;
      }else{
        //Then we are setting the old head's next attribute to be the new head
        this.head = oldHead.next;
        //And as head's prev attribute has to be null we are setting new head's prev attribute to null
        this.head.prev = null;

        //similarly as we don't want that removed element has any linked with the list we are making removed elements next attribute to be null
        oldHead.next = null;
      }

      //remove a element means decrementing it's length by 1
      this.length--;

      //Then we'll return the removed element
      return oldHead;
    }

/*
///!Unshifting pseudocode

- Create a new node with the value passed to the function
- If the length is 0
  - Set the head to be the new node
  - Set the tail to be the new node
- Otherwise
  - Set the prev property on the head of the list to be the new node
  - Set the next property on the new node to be the head property 
  - Update the head to be the new node
- Increment the length
- Return the list
*/
  unshift(val){
    //create a node using the val 
    let newNode = new Node(val)

    //if we are adding first element in the list the head would be null so in if statement we are just setting the head and tail to the same node 
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }else {
      //If we're adding a element from start of the list so first we'll points it's next attribute to current head and then update the current head to be this new create node (i.e newNode variable)
      newNode.next = this.head

      //we'll also add the newNode's prev attribute to be the new created node
      this.head.prev = newNode
      this.head = newNode
    }
    //after adding a new node we'll increment the length
    this.length++
    return this
  }

/*
///!Get Pseudocode

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - ​Loop through the list starting from the tail and loop towards the middle
  - Return the node once it is found
- Return the element  
*/  
  get(index){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return null
    if(index < 0 || index >= this.length) return null;

    //to minimize the loop running we get the middle val of the list so that is we have to add node to a position which is closer to the head we'll start looping from head and vice versa.
    let checkIdx = Math.floor(this.length-1/2)

    //declaring a variable to get that node
    let current;

    //if the index is close to head below if statement we'll get executed
    if(index <= checkIdx){

      //setting the head to the current variable to loop on it
      current = this.head

      //loop till the index provided
      for (let i = 0; i <= index; i++) {
        //when i is equal to index that means we found the node so we return the node
        if(i == index) return current

        //unit we hit the i to index we'll keep adding next to the current variable
        current = current.next
      }
    }

    //if the index is close to tail below if statement we'll get executed
    if(index > checkIdx){

      //setting the tail to the current variable to loop on it
      current = this.tail

      //loop from last element to the indexed element
      for (let i = this.length-1; i >= index ; i--) {

        //when i is equal to index that means we found the node so we return the node
        if(i == index) return current

        //unit we hit the i to index we'll keep adding prev to the current variable
        current = current.prev
      }
    }
  }
 
/*
///!Set pseudocode

- Create a variable which is the result of the get method at the index passed to the function
  - If the get method returns a valid node, set the value of that node to be the value passed to the function
  - Return true
- Otherwise, return false
*/
  set(index,val){
    //to set/update the value of a element first we need to fetch that element by it's indexed so we used out get() and pass the argument the index 
    //if the index exceeds the length then we'll get undefined or else we'll get the element from get() function
    let indexEle = this.get(index)

    //if we get undefined if statement would not execute and we'll return false 
    if(indexEle){
      //or if we get the element from the get() function then we'll update it's val (i.e value) and return true
      indexEle.val = val
      return true;
    }
    return false
  }

/*
///!Insert pseudocode

- If the index is less than zero or greater than or equal to the length return false
- If the index is 0, unshift
- If the index is the same as the length, push
- Use the get method to access the index -1
- Set the next and prev properties on the correct nodes to link everything together
- Increment the length 
- Return true
*/
  insert(index,val){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return false
    if(index < 0 || index > this.length) return false;

    //If the user is trying to insert a val at the first of list then we'll use our unshift() function and "!!"" converts it to Boolean value
    if(index == 0) return !!this.unshift(val);

    //If the user is trying to insert a val at the last of list then we'll use our push() function and "!!"" converts it to Boolean value
    if(index == this.length) return !!this.push(val);

    //if the user is trying to insert a va;ue in the middle of the list then first we'll create the new node
    let newNode = new Node(val)

    //we'll get the pervious position of the index were we want to insert the element so we are using our get() to get element previous to the index provided
    let getIndex = this.get(index-1);

    /*
    we are setting the new element's next attribute to point to the element's next attribute and new element's prev attribute to the getIndex/current node
    for example:- 
    add "9" to index position 3 and we count index from zero so we need to add "9" between 3-4

                      get(3-1) 
      1  <==>   2  <==>   3  <==>   4  <==>   5  <==>   6  <==>   7  

    so we'll get "3" element and it's next attribute is point to the "4" 

    now we'll set the new element i.e "9" next attribute to be the "3"s next attribute i.e "4"

      3  ==>  4
              |
      9  ==>  4 

    So now "9" next attribute is point to "4", so we'll point "3" next attribute to new element i.e "9"  

      3  ==>  9

    After which we need to set new element's prev attribute to "3" (i.e previous element)
    
      3 <==> 9

    Then we need to point the "9" next element that is "4's" prev attribute to "9" (i.e to new element).

      9 <==> 4  

    And and by summing  all that we'll get

      1  <==>   2  <==>   3  <==>  9  <==>  4  <==>   5  <==>   6  <==>   7  

    //!Yeah, we did it🥳🥳  
    */
    newNode.next = getIndex.next
    getIndex.next = newNode;
    newNode.prev = getIndex
    newNode.next.prev = newNode

    //then we increment the length and return true
    this.length++  
    return true
  }

/*
///!Remove pseudocode

- If the index is less than zero or greater than or equal to the length return undefined
- If the index is 0, shift
- If the index is the same as the length-1, pop
- Use the get method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set next and prev to null on the found node
- Decrement the length
- Return the removed node.
*/
  remove(index){
    //we'll first check if the given index exceeds the length of the list if yes and we'll return undefined
    if(index < 0 || index >= this.length) return undefined

    //if the user is trying to remove the element from the last of the list then we'll use our pop() function and we return the remove element
    if(index == this.length-1) return this.pop()

    //if the user is trying to remove the element from the last of the list then we'll use our pop() function and we return the remove element
    if(index == 0) return this.shift()

    //we'll get the pervious position of the index were we want to remove the element so we are using our get() to get element previous to the index provided
    let getIndex = this.get(index-1)

    /*
    we are setting the new element's next attribute to point to the element's next attribute and new element's prev attribute to the getIndex/current node
    for example:- 
    add "9" to index position 3 and we count index from zero so we need to remove "9" from the list

                      get(3-1) 
      1  <==>   2  <==>   3  <==>   9  <==>   4  <==>   5  <==>   6  <==>   7  

    so we'll get "3" element and it's next attribute is point to the "4" 

    now we'll set this element i.e "3" next attribute to be the "9"s next attribute i.e "4"

      9  ==>  4
              |
      3  ==>  4 

    So now "3" next attribute is point to "4"

      3  ==>  4

    After which we need to set "4" element's prev attribute to "3" (i.e new previous element)
    
      3 <==>  4

    And and by summing  all that we'll get

      1  <==>   2  <==>   3  <==>  4  <==>   5  <==>   6  <==>   7  

    //!Yeah, we did it🥳🥳  

    We also need to remove the link from the "9" element so we set it's next and prev attribute to null
    */
    let element = getIndex.next
    getIndex.next = element.next
    getIndex.next.prev = getIndex
    element.next = null;
    element.prev = null;

    //then we increment the length and return removed element
    this.length--;
    return element
  } 

/*
///!Reverse pseudocode

- Create a variable called current and set it to be the head of the list
- Create a variable called tail and set it to be the head of the list
- Loop through the list and set the next property of the current node to be the prev property of the current node
- If there is no next property, set the tail to be the head and the head to be the current variable
- Return the list
*/
  reverse(){
    //we'll starting by setting the head to current node that we are reversing.
    let current = this.head;

    //We need set a node to a variable
    let temp = null;

    //until the current is not null we'll keep looping
    while(current){
      /*
      prev variable will have the value of current reversing node's next element 

        (i.e if 2 <==> 3 <==> 4)

      so if 2 is point to 3 and We are currently reversing 2 so the 2's prev attribute i.e null, so we are storing null in temp variable  

      temp = currents prev attribute i.e null
      */
      temp = current.prev; 

      /*
      So now we set current node's prev property to it's next node 

      (eg: current i.e 2's prev (i.e null) is changed to current's next element (i.e 3) is swapped between next and prev attribute)
      */  
      current.prev = current.next;

      /*
      how we set current element (i.e 2) next attribute to temp element (i.e current element's previous element)
      */
      current.next = temp

      /* 
      so now we move a step ahead in the list
      so now we change our current node to be "prev" variable node(i.e 3)
      */  
      current = current.prev
    }

    /*
    So after ending the loop the temp variable only has head missing and all other elements would be reversed.
    
      eg: 
        original list = 1 <==> 2 <==> 3 <==> 4 <==> 5
        
        temp = 4 <==> 3 <==> 2 <==> 1

    But temp first element i.e "4" still pointing it's prev to original element's ways 
    
      i.e 4 <===> 5
     
    So we are making the temp first element's prev attribute to point towards head
    */
    if (temp != null) { 
        this.head = temp.prev; 
    }
  }
}

let list = new DoublyLinkedList()
