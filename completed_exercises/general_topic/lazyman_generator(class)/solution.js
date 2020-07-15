class LazyManGenerator {
  constructor(name) {
    this.taskArray = [];

    //initialize the task
    const task = () => {
      console.log(`Hi, This is ${name}`);
      this.next();
    };

    //push the first task into task queue
    this.taskArray.push(task);

    //start off the first task (sort of) immediately
    //use the constructor function, so when the obj is instantialized, something can be done, like fetch data
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.taskArray.shift();
    task && task();
  }

  sleep(time) {
    this.sleepTask(time, false);
    return this;
  }

  sleepFirst(time) {
    this.sleepTask(time, true);
    //use to call the chained function, without this, it lost context and won't recognize the chained function
    return this;
  }

  sleepTask(time, priority) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake Up after ${time}`);
        this.next();
      }, time * 1000);
    };

    //if sleepFirst, then push to the beginning of queue
    if (priority) {
      this.taskArray.unshift(task);
    } else {
      this.taskArray.push(task);
    }
  }

  eat(name) {
    const task = () => {
      console.log(`eat ${name}`);
      this.next();
    };

    this.taskArray.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManGenerator(name);
}