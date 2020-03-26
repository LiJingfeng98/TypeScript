createUser({
  name: '王花花',
  age: 18,
  gender: 'male',
  balance: 100
});

interface User {
  name: string, // 必填
  age: number, // 必填
  gender?: string, // 可选

  [key: string]: any // 其他属性
}

function createUser(data: User) {
  console.log(data);
}
