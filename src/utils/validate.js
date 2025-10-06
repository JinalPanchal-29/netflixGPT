export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPassValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    if(!isEmailValid && !isPassValid) return "Invalid credentials!"
    if(!isEmailValid) return "Email is not valid"
    if(!isPassValid) return "Password is not valid";
    return null;
}
