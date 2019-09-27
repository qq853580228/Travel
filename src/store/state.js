let defaultCity = '漳州'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {

}
export default {
  city: defaultCity
}
