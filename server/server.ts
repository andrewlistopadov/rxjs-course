import * as express from 'express';
import { Application } from 'express';
import { getAllCourses, getCourseById } from './get-courses.route';
import { searchLessons } from './search-lessons.route';
import { saveCourse } from './save-course.route';
import { AddressInfo } from 'net';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9000, () => {
  const { port } = httpServer.address() as AddressInfo;
  console.log(`HTTP REST API Server running at http://localhost: ${port}`);
});
