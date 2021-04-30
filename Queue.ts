class Queue{
   private list :string[];
   private maxSize: number;

   constructor() {
       this.maxSize = 7;
       this.list = new Array<string>(this.maxSize)
       this.list =['jack' , 'mary' , 'paulo' , 'ben'];

   }

   public isEmpty(): boolean {
       return this.list.length === 0;

   }

    public isFull() : boolean {
        return this.list.length === this.maxSize;
    }

    public enqueue(newItem) {
       if(this.isFull()){
           throw new Error('list is full')
       }

       this.list[this.list.length++] = newItem;
       return this.list;
    }

    public dequeue() {
        console.log('remove from front');
       if(this.isEmpty()){
           throw new Error('list is empty')
       }
       const removeItem = this.peek();

       for (let i =0 ; i< this.list.length; i++){
           this.list[i] = this.list[i + 1];
       }

       this.list.length--;
       return this.list + ` and removeItem is: ${removeItem}`;
    }
    public peek() {
        // console.log('Return the front element')
        if (this.isEmpty()) {
            throw new Error('list is empty');
        }
        return this.list[0];
    }

    public queueContents(){
        console.log('Queue content');
        for(let i=0; i < this.list.length; i++){

            console.log(`Queue[${i}]: ${this.list[i]}`)
        }
    }

}

var queue = new Queue();
// console.log(queue.enqueue("maral"))
// console.log(queue.dequeue());