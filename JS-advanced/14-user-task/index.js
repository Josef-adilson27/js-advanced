import { Task } from "./task";
import { User } from "./user";

const task = new Task()
task.msg = 'Write code'

const user = new User(task.run())

console.log(user.doTihs());