interface User {
  birthYear: number
}

function calculateAge(user: User) {
  return new Date().getFullYear() - user.birthYear
}

calculateAge({
  birthYear: 2001
})