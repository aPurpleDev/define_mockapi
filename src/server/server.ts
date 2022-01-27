export const startServer = (app) => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`Base API listening at http://localhost:${process.env.APP_PORT}`)
    })
}