import { app, port } from './config/app'

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
