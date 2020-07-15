/*
create a class LazyManGenerator. so that 

LazyMan('Hank')
//Hi, This is Hank!

LazyMan('Hank').sleep(10).eat('dinner')
//Hi, This is Hank!
//After 10 seconds...
//Wake Up after 10
//Eat dinner

LazyMan('Hank').eat(dinner).eat('supper')
//Hi, This is Hank!
//Eat dinner
//Eat supper

LazyMan('Hank').sleepFirst(5).eat('supper')
//After 5 seconds...
//Wake Up after 5
//Hi, This is Hank!
//Eat supper

*/

//task queue

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.queue = [];
    this.greeting();
    // setTimeout(()=>{
    //   this.queue.shift()();
    // },0)
  }

  greeting() {
    this.queue.push(() => {
      setTimeout(() => {
        console.log(`Hi, This is ${this.name}`);
      });
    }, 0);


    // this.queue.push(() => console.log(`Hi, This is ${this.name}`));
  }

  //binding
  eat(food) {
    this.queue.push(() => console.log(`Eat ${food}`));
    //call the task, return 'this'
    // this.queue.shift()()
    return this;
  }

  sleep(time) {
    this.queue.push(() =>
      setTimeout(
        //window function, pass callback to it using es5
        () => {
          console.log(`Wake up after ${time}`);
          //call the next function
         
          this.queue.shift()(); 
        },
        time * 1000
      )
    );

    return this;
  }
  sleepFirst(time) {
    this.queue.unshift(() =>
      setTimeout(() => {
        console.log(`After ${time} seconds`);
        console.log(this.queue);
        this.queue.shift()();
      }, time * 1000)
    );
    return this;
  }
}

//stack    eat                //async goes microstack, executed last
//queue [ eat ]

function LazyMan(name) {
  let hank = new LazyManClass(name);
  return hank;
}

LazyMan("Hank")
  .sleepFirst(5)
  .eat("supper");
