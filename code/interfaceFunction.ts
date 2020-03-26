/**
 * 函数接口
 */
interface UserFunction {
  /**
   * @param name
   * @param age
   */
  (name: string, age: number): void;
}

let createUser: UserFunction = (name, age) => {
  console.log(name, age);
}

createUser('王花花', 18);
