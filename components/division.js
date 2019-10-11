const division = (x, y) => { return x / y }

const divide = new Vue({
  el: '#divide',
  data: {
    guest: 'jyothsna',
    number1: 25,
    number2: 5
  },
  computed: {
    ans: function () {
      const i = parseInt(this.number1)
      const j = parseInt(this.number2)
      return `${this.guest}, your result is ${division(i, j)}.`
    }
  }
})