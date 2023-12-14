export default {
    install: (app1:any, options:any) => {
        //TODO
        app1.config.globalProperties.$count = () => 0
        app1.config.globalProperties.$sayHello = () => alert("Hola Amigo!!!")
        app1.config.globalProperties.$sayHelloWith = () =>  alert(options.message)
    }
}