const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require("./modules/TaskModule/taskRoutes");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

//for cors implementation insert cross-origin requests from known source
app.use(cors({origin:'*',
  credentials: true
}))

// using app.use for cleaner approach
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
